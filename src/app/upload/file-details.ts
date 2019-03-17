import { updateClassProp } from "@angular/core/src/render3/styling";

export class FileDetails {
    fileName: string;
    uploadDate: Date;
    message: string;

    constructor(fileName : string, uploadDate : Date, message : string){
        this.fileName = fileName;
        this.uploadDate = uploadDate;
        this.message = message;
    }
}