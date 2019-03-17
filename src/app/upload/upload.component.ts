import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserData } from './user-data';
import { UserDataService } from './user-data.service';

import { FileDetails } from './file-details';

@Component({
    selector: 'upload',
    templateUrl: './upload.component.html',
    styleUrls: [ './upload.component.css' ]
})
export class UploadComponent {
    
    userForm: FormGroup;
    userModel : UserData[] = [];
    tableisready: boolean = false;
    uploadedFileList: FileDetails[] = [];
    fileDownloadStatus: boolean = false;
    dowloadedFile: FileDetails ;

    constructor(private fb: FormBuilder, private service : UserDataService) { 

        this.userForm = this.fb.group({
            headerText: ['',Validators.required],
            message: ['',Validators.required],
            fontname: ['Arial', Validators.required],
            fonttype: ['0', Validators.required],
            hdrfontsize: ['30', Validators.required],
            msgfontsize: ['20', Validators.required]
        });
    }

    ngOnInit(){

        this.service.getFileDetails().subscribe((fileDetails) =>{
            this.uploadedFileList = fileDetails;
            this.tableisready = true;
        });
    }

    onSubmit(){
        console.warn(this.userForm.value);
        let newHdrData = new UserData();
        newHdrData.text = this.userForm.value.headerText;
        newHdrData.header = true;
        newHdrData.fontName = this.userForm.value.fontname;
        newHdrData.fontType = this.userForm.value.fonttype;
        newHdrData.fontWeight = this.userForm.value.hdrfontsize;

        this.userModel.push(newHdrData);

        let newMsgData = new UserData();
        newMsgData.text = this.userForm.value.message;
        newMsgData.header = false;
        newMsgData.fontName = this.userForm.value.fontname;
        newMsgData.fontType = this.userForm.value.fonttype;
        newMsgData.fontWeight = this.userForm.value.msgfontsize;

        this.userModel.push(newMsgData);
        this.tableisready = false;

        this.service.postUserData(this.userModel).subscribe(
            (fileDetails) => {
                this.uploadedFileList = fileDetails;
                this.tableisready = true;
            });
    }

    downloadfile(downloadfilename: any): void{
        
        this.service.downloadFile(downloadfilename).subscribe(
            (downlaodedfile) => {
            this.fileDownloadStatus = true;
            this.dowloadedFile = downlaodedfile;
            setTimeout(() => {
                this.fileDownloadStatus = false;
            },5000);
        });
    }

}