import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../core/services/AgentService';

@Component({
  selector: 'listar-colaboradores',
  templateUrl: 'listar-colaboradores.component.html'
})
export class ListarColaboradoresComponent implements OnInit {

  agents: any = [];

  constructor(private agentService: AgentService) { }


  ngOnInit() {
    this.agentService.listAgents().subscribe((result: any) => {
      this.agents = result.data;
    })
  }

}
