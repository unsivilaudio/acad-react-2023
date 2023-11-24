class Question {
    private answers: string[];

    constructor(
        public id: string,
        public text: string,
        answers: string[],
    ) {
        this.id = id;
        this.text = text;
        this.answers = answers;
    }

    get shuffledAnswers(): string[] {
        return [...this.answers].sort(() => (Math.random() > 0.5 ? 1 : -1));
    }

    isCorrect(answer: string): boolean {
        return answer === this.answers[0];
    }
}

export default Question;
