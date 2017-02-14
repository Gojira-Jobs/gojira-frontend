import {Injectable} from "@angular/core";
import {PassHelper} from "./change-password.component";
import {ApiService} from "../shared/services/api.service";
@Injectable()
export class PasswordService {

    constructor(private apiService: ApiService){}

    matchPass(obj: PassHelper){
        return this.apiService.post('/matchpass', obj)
        .map(data => {
            console.log(data);
            return data;
        });
    }
    
    forgotPass(email: string){
        console.log(email);
    }
}
