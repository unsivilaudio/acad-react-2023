class AppError extends Error {
    public code?: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public info?: { [K: string]: any };

    constructor(message: string) {
        super(message);
    }
}

export default AppError;
