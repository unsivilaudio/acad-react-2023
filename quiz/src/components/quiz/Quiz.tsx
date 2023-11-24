import { useCallback, useState } from 'react';

import QUESTIONS from '@/data/questions';
import Question from '@/components/questions/Question';
import QuizSummary from '@/components/quiz/Summary';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer: string | null) => {
        setUserAnswers((ps) => [...ps, selectedAnswer]);
    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <QuizSummary
                userAnswers={userAnswers as string[]}
                questions={QUESTIONS}
            />
        );
    }

    return (
        <div className='mx-auto max-w-[50rem] rounded-lg bg-gradient-to-r from-[#3e2a60] from-[0%] to-[#321061] to-[100%] p-8 text-center drop-shadow-lg'>
            <Question
                key={activeQuestionIndex}
                curQuestion={QUESTIONS[activeQuestionIndex]}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}
