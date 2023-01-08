import { AxiosError } from "axios";

export type RequestError = AxiosError<{ error?: string }>;
