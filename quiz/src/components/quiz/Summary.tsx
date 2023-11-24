import trophyLogo from '@/assets/quiz-complete.png';
import Question from '@/models/Question';

type QuizSummaryProps = {
    userAnswers: string[];
    questions: Question[];
};

export default function QuizSummary({
    userAnswers,
    questions,
}: QuizSummaryProps) {
    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter((answer, idx) =>
        questions[idx].isCorrect(answer),
    );

    const skippedAnswersShare = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100,
    );
    const correctAnswersShare = Math.round(
        (correctAnswers.length / userAnswers.length) * 100,
    );
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    return (
        <div className='animate-slide-fb mx-auto my-8 max-w-[40rem] bg-gradient-to-b from-[#a17eda] to-[#895fc4] p-8 text-[#191321] shadow-[1px_1px_8px_1px_rgba(0,0,0,0.6)]'>
            <img
                className='mx-auto mb-4 block h-32 w-32 rounded-full border-2 border-[#3a2353] bg-[#c18cfa] object-contain p-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]'
                src={trophyLogo}
                alt='trophy logo'
            />
            <h2 className='text-center text-5xl font-semibold uppercase text-[#3a2353]'>
                Quiz Completed!
            </h2>
            <div className='mx-auto my-8 flex w-[60%] gap-12 border-b-2 border-[#594276] pb-8'>
                <p className='flex flex-grow flex-col gap-3'>
                    <span className='font-title text-5xl text-[#594276]'>
                        {skippedAnswersShare}%
                    </span>
                    <span className='font-title -mt-3 ml-1 text-sm uppercase tracking-widest text-[#30273a]'>
                        skipped
                    </span>
                </p>
                <p className='flex flex-grow flex-col gap-3'>
                    <span className='font-title text-5xl text-[#594276]'>
                        {correctAnswersShare}%
                    </span>
                    <span className='font-title -mt-3 ml-1 text-sm uppercase tracking-widest text-[#30273a]'>
                        answered correctly
                    </span>
                </p>
                <p className='flex flex-grow flex-col gap-3'>
                    <span className='font-title text-5xl text-[#594276]'>
                        {wrongAnswersShare}%
                    </span>
                    <span className='font-title -mt-3 ml-1 text-sm uppercase tracking-widest text-[#30273a]'>
                        answered incorrectly
                    </span>
                </p>
            </div>
            <ol className='mx-auto my-8 text-center'>
                {userAnswers.map((answer: string, idx: number) => {
                    const isCorrect = questions[idx].isCorrect(answer);
                    let answerClasses = 'font-title my-1';
                    if (answer && isCorrect) {
                        answerClasses += ' text-[#054e37] font-bold';
                    } else if (answer && !isCorrect) {
                        answerClasses += ' text-[#730b4b] font-bold';
                    } else if (!answer) {
                        answerClasses += ' text-[#d1baf2]';
                    } else {
                        answerClasses += ' text-[#251e2f] font-bold';
                    }

                    return (
                        <li className='my-8' key={answer}>
                            <h3 className='font-title mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#2c203d] text-[#d8cde8]'>
                                {idx + 1}
                            </h3>
                            <p className='my-1 text-[#30273a]'>
                                {questions[idx].text}
                            </p>
                            <p className={answerClasses}>
                                {answer ?? 'Skipped'}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
