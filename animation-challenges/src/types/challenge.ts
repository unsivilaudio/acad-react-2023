export type Challenge = {
    id: string;
    title: string;
    description: string;
    deadline: string;
    image: {
        src: string;
        alt: string;
    };
    status: 'active' | 'failed' | 'completed';
};
