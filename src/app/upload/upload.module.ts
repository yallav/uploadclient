import { NgModule } from '@angular/core';
import { UploadComponent } from './upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from './user-data.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ UploadComponent ],
    imports : [ ReactiveFormsModule, 
            CommonModule ],
    exports: [ UploadComponent ],
    providers: [ UserDataService]
})
export class UploadModule{

}