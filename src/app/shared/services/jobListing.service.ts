import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {ApiService} from "./api.service";

@Injectable()
export class JobListingService {
    constructor(private apiService: ApiService) {
    }

    getAll() {
        return this.apiService.get('/joblisting')
            .map(data => {
            console.log(data.jobs);
                return data.jobs;
            });
    }

    applyJob() {
        console.log("TO DO");
    }

}
