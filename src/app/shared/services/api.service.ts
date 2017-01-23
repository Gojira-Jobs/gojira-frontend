import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {JwtService} from "./jwt.service";

@Injectable()
export class ApiService {

    constructor(private http: Http,
                private jwtService: JwtService) {
    }

    private setHeaders(): Headers {
        let headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (this.jwtService.getToken()) {
            headersConfig['Authorization'] = `Token ${this.jwtService.getToken()}`;
        }
        return new Headers(headersConfig);
    }

}
