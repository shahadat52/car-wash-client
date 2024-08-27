type ErrorSource = {
    path: string;
    message: string;
}

type ErrorDetails = {
    index: number;
    code: number;
    keyPattern: {
        [key: string]: number;
    };
    keyValue: {
        [key: string]: string;
    };
}

export type TErrorResponse = {
    success: boolean;
    message: string;
    errorSource: ErrorSource[];
    err: ErrorDetails;
    stack: string | null;
}