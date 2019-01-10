import { Component, OnInit } from '@angular/core';
import { ProjectModule } from '../project/project.module';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  Projects : ProjectModule[];


  constructor() { }

  ngOnInit() {
    this.Projects = [
      { Id: 5, OFirstName: 'David & Michal', OLastName: 'Cohen', OCity: 'Petach Tikva', Description: '5 rooms Apartment, Modernic styling', Date: new Date(), Images: ['/assets/projects/5']},
      { Id: 6, OFirstName: 'Yehuda', OLastName: 'Yazdee', OCity: 'Petach Tikva', Description: '6 rooms Apartment, Modernic styling', Date: new Date(), Images: ['/assets/projects/6']},
      { Id: 7, OFirstName: 'David & Chana', OLastName: 'Gershtenkoren', OCity: 'Petach Tikva', Description: '5 rooms Apartment, Modernic styling', Date: new Date(), Images: ['/assets/projects/7']}
    ]


  }
}
