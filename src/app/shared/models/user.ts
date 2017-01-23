import {Address} from './address';

export class User {
    uid: number;
    name: string;
    email: string;
    token: string;
    password: string;
    mobile: string;
    high_qual: string;
    high_qual_perc: number;
    pursuing_status: boolean;
    dob: string;
    gender: string;
    resume: string;
    picture: string;
    address: Address;
}