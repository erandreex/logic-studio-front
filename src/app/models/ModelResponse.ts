export interface ModelResponse<T> {
    ok: boolean;
    code: number;
    status: string;
    message: string;
    data: T;
}
