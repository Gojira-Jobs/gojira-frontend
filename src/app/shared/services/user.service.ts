import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {JwtService} from "./jwt.service";
import {ApiService} from "./api.service";

@Injectable()
export class UserService {

    constructor(private apiService: ApiService,
                private http: Http,
                private jwtService: JwtService) {
    }


}
