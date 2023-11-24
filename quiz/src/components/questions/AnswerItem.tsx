type AnswerProps = {
    answer: string;
    onSelectAnswer(): void;
    selected: boolean;
    answerState: '' | 'answered' | 'correct' | 'wrong';
};

export default function Answer({
    answer,
    onSelectAnswer,
    selected,
    answerState,
}: AnswerProps) {
    let classes =
        'font-title inline w-full rounded-3xl border-none px-8 py-4 text-sm text-stone-800 duration-200';

    if (selected) {
        classes += ' text-[#2c203d] focus:text-[#2c203d] hover:text-[#2c203d]';
    } else {
        classes += ' disabled:text-[#5e7c8d]';
    }

    if (selected && answerState === 'answered') {
        classes += ' bg-[#f5a76c] hover:bg-[#f5a76c] focus:bg-[#f5a76c]';
    } else if (selected && answerState === 'wrong') {
        classes += ' bg-[#f55a98] hover:bg-[#f55a98] focus:bg-[#f55a98]';
    } else if (selected && answerState === 'correct') {
        classes += ' bg-[#5af59d] hover:bg-[#5af59d]';
    } else {
        classes +=
            ' bg-[#6cb7f5] hover:bg-[#9d5af5] hover:text-white focus:bg-[#9d5af5] focus:text-white';
    }

    return (
        <li key={answer} className='mx-auto w-[90%]'>
            <button
                className={classes}
                onClick={onSelectAnswer}
                disabled={answerState !== ''}
            >
                {answer}
            </button>
        </li>
    );
}
