import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from '@angular/router';
import { AlienService, EncounterService } from '../shared/services';
import { NgForm } from '@angular/common';
import { IAlien, Encounter } from '../shared/models';


@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  providers: [AlienService, EncounterService],
  directives: [ROUTER_DIRECTIVES]

})
export class ReportComponent implements OnInit {

  public NO_ALIEN_SELECTED: string;
  public aliens: IAlien[]
  public encounters: Encounter;
  public colonistId: string;


  constructor(
    private router: Router,
    private alienService: AlienService,
    private encounterService: EncounterService
  ) {
    this.NO_ALIEN_SELECTED = '(none)';


  }

  ngOnInit()  {
    this.colonistId = sessionStorage.getItem('colonistId');
    this.alienService.getAliens().then( alien => this.aliens = alien );
    this.encounters = new Encounter (this.NO_ALIEN_SELECTED, '', '', this.colonistId);
  }
onSubmit(event) : void {
  this.encounterService.postEncounter(this.encounters)
    .then(encounters => this.router.navigate(['/ecounters']) )
}
get noEncounters() : boolean {
  return this.encounters.atype === this.NO_ALIEN_SELECTED;
}
}
