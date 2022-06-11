import { IUser } from "./IUsers";

export interface IUserResponse {
    count: number;
    items: IUser[];
}