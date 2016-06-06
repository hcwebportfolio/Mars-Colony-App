import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from '@angular/router';

import { HomeComponent } from './+home';
import { RegisterComponent } from './+register';
import { EncountersComponent } from './+encounters';
import { ReportComponent } from './+report';

@Component({
  moduleId: module.id,
  selector: 'project-5-app',
  templateUrl: 'project-5.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/register', component: RegisterComponent},
  {path: '/encounters', component: EncountersComponent},
  {path: '/report', component: ReportComponent}
])
export class Project5AppComponent implements OnInit {
  
  constructor(private router: Router) {
    
  }
  
  ngOnInit() {
    this.router.navigate(['/home']);
  }
}
