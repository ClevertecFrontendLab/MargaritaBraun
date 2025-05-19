export type LoginCredentials = {
    login: string;
    password: string;
};

export type UserRegistrationData = LoginCredentials & {
    email: string;
    firstName: string;
    lastName: string;
};

export type ServerResponseTypes = {
    status: number;
    data: DataResponse;
};

export type DataResponse = {
    statusCode?: number;
    statusText?: string;
    message?: string;
    error?: string;
    status?: number;
};

export interface DataForResetPassword {
    email: string;
    login: string;
    password: string;
    passwordConfirm: string;
}
