import AnswerItem from '@/components/questions/AnswerItem';

type AnswersProps = {
    selectedAnswer?: string | null;
    answers: string[];
    onSelect(answer: string): void;
    answerState: '' | 'answered' | 'correct' | 'wrong';
};

export default function Answers({
    answers,
    onSelect,
    selectedAnswer,
    answerState,
}: AnswersProps) {
    function handleSelectAnswer(selectedAnswer: string) {
        onSelect(selectedAnswer);
    }

    return (
        <ul className='flex flex-col items-center gap-2'>
            {answers.map((answer) => (
                <AnswerItem
                    key={answer}
                    answer={answer}
                    onSelectAnswer={handleSelectAnswer.bind(null, answer)}
                    selected={selectedAnswer === answer}
                    answerState={answerState}
                />
            ))}
        </ul>
    );
}
