import {Address} from "./address";

export class User {
    name: string;
    email: string;
    token: string;
    password: string;
    mobile: string;
    isHr:boolean;
    high_qual: string;
    high_qual_perc: number;
    pursuing_status: boolean;
    dob: Date;
    gender: string;
    resume: string;
    picture: string;
    address: Address;
}