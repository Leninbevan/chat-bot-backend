export namespace CustomError {
    export interface Error {
        name: string;
        message: string;
        stack?: string;
        statusCode?:number;
    }
}