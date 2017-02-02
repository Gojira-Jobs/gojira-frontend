import {Injectable} from "@angular/core";
import {Http, Headers, Response, URLSearchParams} from "@angular/http";
import {JwtService} from "./jwt.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

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
            headersConfig['Token'] = `${this.jwtService.getToken()}`;
            headersConfig['email'] = `${localStorage.getItem('email') || localStorage.getItem('hremail')}`;
        }
        return new Headers(headersConfig);
    }

    private formatErrors(error: any) {
        return Observable.throw(error.json());
    }

    get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, {
            headers: this.setHeaders(),
            search: params
        }).catch(this.formatErrors).map((res: Response) => {
            console.log(res.json());
            return res.json();
        });
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${environment.api_url}${path}`,
            JSON.stringify(body),
            {headers: this.setHeaders()}
        ).catch(this.formatErrors)
            .map((res: Response) => {
                console.log(res.json());
                return res.json();
            });
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            `${environment.api_url}${path}`,
            JSON.stringify(body),
            {headers: this.setHeaders()}
        ).catch(this.formatErrors)
            .map((res: Response) => {
                return res.json()
            });
    }


}
