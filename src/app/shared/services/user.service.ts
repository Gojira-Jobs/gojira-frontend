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

    // Verify JWT in local storage with server & load user's info.
    // This runs once on application startup.
    populate() {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(
                    res => this.setAuth(res.data),
                    err => this.purgeAuth());
        } else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
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
        // localStorage.setItem('user', user.name);
        this.isAuthenticatedSubject.next(true);
    }

    public register(user: User) {
        return this.apiService.post(this.registerEndpoint, user)
            .map(data => {
                return data.data;
            });
    }

    public purgeAuth() {
        console.log('purging auth');
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

    getCurrentUser(): Observable<User> {
        return this.currentUserSubject.asObservable();
    }
}
