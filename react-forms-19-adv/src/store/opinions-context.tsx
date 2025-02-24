import { type ReactNode, createContext, useEffect, useState } from 'react';

export type Opinion = {
  id: number;
  userName: string;
  title: string;
  body: string;
  votes: number;
};

type OpinionsContextValue = {
  opinions: Opinion[] | null;
  addOpinion: (opinion: Omit<Opinion, 'id' | 'votes'>) => Promise<void>;
  upvoteOpinion: (id: number) => Promise<void>;
  downvoteOpinion: (id: number) => Promise<void>;
};

export const OpinionsContext = createContext<OpinionsContextValue>({
  opinions: null,
  addOpinion: async (_opinion) => {},
  upvoteOpinion: async (_id) => {},
  downvoteOpinion: async (_id) => {},
});

export function OpinionsContextProvider({ children }: { children: ReactNode }) {
  const [opinions, setOpinions] = useState<Opinion[] | null>(null);

  useEffect(() => {
    async function loadOpinions() {
      const response = await fetch('http://localhost:3000/opinions');
      const opinions = (await response.json()) as Opinion[];
      setOpinions(opinions);
    }

    loadOpinions();
  }, []);

  async function addOpinion(enteredOpinionData: Omit<Opinion, 'id' | 'votes'>) {
    const response = await fetch('http://localhost:3000/opinions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enteredOpinionData),
    });

    if (!response.ok) {
      return;
    }

    const savedOpinion = await response.json();
    setOpinions((prevOpinions) => {
      if (!prevOpinions) {
        prevOpinions = [];
      }
      return [savedOpinion, ...prevOpinions];
    });
  }

  async function upvoteOpinion(id: number) {
    const response = await fetch(
      `http://localhost:3000/opinions/${id}/upvote`,
      {
        method: 'POST',
      }
    );

    if (!response.ok) return;

    setOpinions((prevOpinions) => {
      if (!prevOpinions) return null;
      return prevOpinions.map((opinion) => {
        if (opinion.id === id) {
          return { ...opinion, votes: opinion.votes + 1 };
        }
        return opinion;
      });
    });
  }

  async function downvoteOpinion(id: number) {
    const response = await fetch(
      `http://localhost:3000/opinions/${id}/downvote`,
      {
        method: 'POST',
      }
    );

    if (!response.ok) return;

    setOpinions((prevOpinions) => {
      if (!prevOpinions) return null;
      return prevOpinions.map((opinion) => {
        if (opinion.id === id) {
          return { ...opinion, votes: opinion.votes - 1 };
        }
        return opinion;
      });
    });
  }

  const contextValue = {
    opinions: opinions,
    addOpinion,
    upvoteOpinion,
    downvoteOpinion,
  };

  return <OpinionsContext value={contextValue}>{children}</OpinionsContext>;
}
