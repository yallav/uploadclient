import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserData } from './user-data';
import { UserDataService } from './user-data.service';

@Component({
    selector: 'upload',
    templateUrl: './upload.component.html',
    styleUrls: [ './upload.component.css' ]
})
export class UploadComponent {
    
    userForm: FormGroup;
    userModel : UserData[] = [];

    constructor(private fb: FormBuilder, private service : UserDataService) { }

    ngOnInit(){
        this.userForm = this.fb.group({
            headerText: ['',Validators.required],
            message: ['',Validators.required],
            fontname: ['', Validators.required],
            hdrfonttype: ['', Validators.required],
            msgfonttype: ['', Validators.required],
            hdrfontsize: ['', Validators.required],
            msgfontsize: ['', Validators.required]
        });
    }

    onSubmit(){
        console.warn(this.userForm.value);
        let newHdrData = new UserData();
        newHdrData.text = this.userForm.value.headerText;
        newHdrData.header = true;
        newHdrData.fontName = this.userForm.value.fontname;
        newHdrData.fontType = this.userForm.value.hdrfonttype;
        newHdrData.fontWeight = this.userForm.value.hdrfontsize;

        this.userModel.push(newHdrData);

        let newMsgData = new UserData();
        newMsgData.text = this.userForm.value.message;
        newMsgData.header = false;
        newMsgData.fontName = this.userForm.value.fontname;
        newMsgData.fontType = this.userForm.value.msgfonttype;
        newMsgData.fontWeight = this.userForm.value.msgfontsize;

        this.userModel.push(newMsgData);
        this.service.postUserData(this.userModel).subscribe(
            (data) => {
                console.log(data);
            });

        console.log("User Data::" + this.userModel);
    }
}