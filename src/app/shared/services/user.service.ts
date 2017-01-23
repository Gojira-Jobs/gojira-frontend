import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {JwtService} from "./jwt.service";
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class UserService {

    private currentUserSubject = new BehaviorSubject<User>(new User());

    private isAuthenticatedSubject = new BehaviorSubject<boolean>(!!this.jwtService.getToken());


    constructor(private apiService: ApiService,
                private http: Http,
                private jwtService: JwtService) {
    }

    login() {

        this.isAuthenticatedSubject.next(true);
    }

    logout() {
        this.jwtService.destroyToken();
        this.isAuthenticatedSubject.next(false);
    }

    isLoggedIn(): Observable<boolean> {
        return this.isAuthenticatedSubject.asObservable();
    }


}
