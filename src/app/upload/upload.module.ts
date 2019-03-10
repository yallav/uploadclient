import { NgModule } from '@angular/core';
import { UploadComponent } from './upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from './user-data.service';

@NgModule({
    declarations: [ UploadComponent ],
    imports : [ ReactiveFormsModule ],
    exports: [ UploadComponent ],
    providers: [ UserDataService]
})
export class UploadModule{

}