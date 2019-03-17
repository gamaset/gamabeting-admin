import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CompetitionService } from '../../../core/services/CompetitionService';

@Component({
  selector: 'competicao',
  templateUrl: 'competicao.component.html'
})
export class ListCompetitionComponent implements OnInit {

  competitions: any = [];

  constructor(private router: Router, private competitionService: CompetitionService) {
  }

  ngOnInit() {
    this.listCompetitions();
  }

  listCompetitions(){
    this.competitionService.listCompetitions().subscribe((result: any) => {
      this.competitions = result.data;
    })
  }

  toggleVisibility(competitionId, isChecked){
    this.competitionService.updateStatus(competitionId, isChecked).subscribe(() => {});
  }

}
