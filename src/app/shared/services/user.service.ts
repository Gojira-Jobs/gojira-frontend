import {Injectable} from "@angular/core";
import {JwtService} from "./jwt.service";
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class UserService {

    private signoutEdnpoint = "/user/auth/signout";
    private loginEndPoint = "/authenticate";
    private registerEndpoint = "/register";
    private userEndpoint = "/user";

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
            this.apiService.get(this.userEndpoint)
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
        console.log(JSON.stringify(user));
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
                console.log(data.data);
                return data.data;
            },err=>console.log("Error"));
    }

    public purgeAuth() {
        console.log('purging auth');
        //delete token from into local storage
        this.apiService.post(this.signoutEdnpoint, {email: this.currentUserSubject.getValue().email})
            .map(data => data.json());
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

    public update(user): Observable<User> {
        console.log("Inside update function");
    return this.apiService
    .put('/user', user)
    .map(data => {
      // Update the currentUser observable
      console.log(data);
      this.currentUserSubject.next(data.data);
      return data.data;
    });
  }


}
