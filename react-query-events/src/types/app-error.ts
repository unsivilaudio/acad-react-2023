class AppError extends Error {
    public code?: number;
    public info?: string | { [key: string]: object | string | number };

    constructor(message: string) {
        super(message);
    }
}

export default AppError;
