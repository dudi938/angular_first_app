import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { 
  Id : number;
  OFirstName : string;
  OLastName : string;
  OCity : string;
  Description: string;
  Date : Date;  
  Images : string[]
}
