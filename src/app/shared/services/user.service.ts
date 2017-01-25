import {Injectable} from "@angular/core";
import {JwtService} from "./jwt.service";
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class UserService {

    private loginEndPoint = "/authenticate";
    private registerEndpoint = "/register";

    private currentUserSubject = new BehaviorSubject<User>(new User());
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(!!this.jwtService.getToken());

    constructor(private apiService: ApiService,
                private jwtService: JwtService) {
    }

    login(credentials: User) {
        return this.apiService.post(this.loginEndPoint, credentials)
            .map(res => {
                this.setAuth(res.data);
                return res.data;
            });
    }

    public setAuth(user: User) {
        //save token into local storage
        this.jwtService.saveToken(user.token);

        //set current user into observable
        this.currentUserSubject.next(user);
        localStorage.setItem('email', user.email);
        localStorage.setItem('user', user.name);
        this.isAuthenticatedSubject.next(true);
    }

    public register(user: User) {
        return this.apiService.post(this.registerEndpoint, user)
            .map(data => {
                this.setAuth(data.data);
                return data.data;
            });
    }

    public purgeAuth() {
        //delete token from into local storage
        this.jwtService.destroyToken();

        //set current user into empty object
        this.currentUserSubject.next(new User());
        localStorage.clear();
        this.isAuthenticatedSubject.next(false);
    }

    public isLoggedIn(): Observable<boolean> {
        return this.isAuthenticatedSubject.asObservable();
    }


}
