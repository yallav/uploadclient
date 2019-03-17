import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserDataService {

    constructor(private http : HttpClient){ }

    postUserData(userData : any): Observable<any> {
        return this.http.post("/api/createanduploadfile",userData);
    }

    downloadFile(filename : string) : Observable<any> {
        return this.http.get("/api/downloadfile/"+filename);
    }

    getFileDetails() : Observable<any>{
        return this.http.get("/api/listfiles");
    }
}
