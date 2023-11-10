import {User} from "./user";

export type Message = {
    id: string;
    message: string;
    dateSent: string;
    encryptedMessage: string;
    sender: User;
    receiver: User;
    type: string;
    status: string;
};