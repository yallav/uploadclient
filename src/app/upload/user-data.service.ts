import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDataService {

    constructor(private http : HttpClient){ }

    postUserData(userData : any) {
        return this.http.post("/api/createanduploadfile",userData);
    } 
}
