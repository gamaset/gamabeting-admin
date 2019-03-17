import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EventTypeService } from '../../../core/services/EventTypeService';

@Component({
  selector: 'tipo-de-evento',
  templateUrl: 'tipo-de-evento.component.html'
})
export class ListEventTypesComponent implements OnInit {

  eventTypes: any = [];

  constructor(private router: Router, private eventTypeService: EventTypeService) {
  }

  ngOnInit() {
    this.listEventTypes();
  }

  listEventTypes() {
    this.eventTypeService.listEventTypes().subscribe((result: any) => {
      this.eventTypes = result.data;
    })
  }

  toggleVisibility(competitionId, isChecked) {
    this.eventTypeService.updateStatus(competitionId, isChecked).subscribe(() => { });
  }
}
