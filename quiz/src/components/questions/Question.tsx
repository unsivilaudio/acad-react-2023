import { type PropsWithChildren, useState, useMemo } from 'react';

import IQuestion from '@/models/Question';
import Answers from '@/components/questions/Answers';
import QuestionTimer from '@/components/questions/QuestionTimer';

type QuestionAnswerState = {
    selectedAnswer: string;
    isCorrect: boolean | null;
};

type QuestionProps = PropsWithChildren & {
    key: number;
    curQuestion: IQuestion;
    onSkipAnswer(): void;
    onSelectAnswer(answer: string): void;
};

export default function Question({
    curQuestion,
    onSkipAnswer,
    onSelectAnswer,
}: QuestionProps) {
    const [answer, setAnswer] = useState<QuestionAnswerState>({
        selectedAnswer: '',
        isCorrect: null,
    });

    let timer = 10 * 1000;
    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    const shuffledAnswers = useMemo(
        () => curQuestion.shuffledAnswers,
        [curQuestion],
    );

    function handleSelectAnswer(selectedAnswer: string) {
        setAnswer({
            selectedAnswer: selectedAnswer,
            isCorrect: null,
        });

        setTimeout(() => {
            setAnswer((ps) => ({
                selectedAnswer: selectedAnswer,
                isCorrect: curQuestion.isCorrect(ps.selectedAnswer),
            }));

            setTimeout(() => {
                onSelectAnswer(selectedAnswer);
            }, 2000);
        }, 1000);
    }

    let answerState: '' | 'answered' | 'correct' | 'wrong' = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div>
            <QuestionTimer
                key={timer}
                mode={answerState}
                timeout={timer}
                onTimeout={
                    answer.selectedAnswer === '' ? onSkipAnswer : undefined
                }
            />
            <h2 className='font-base mb-10 mt-2 text-2xl text-[#c1b2dd]'>
                {curQuestion.text}
            </h2>
            <Answers
                answers={shuffledAnswers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}
