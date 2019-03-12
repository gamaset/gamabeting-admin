import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../core/services/AgentService';
import { RoleGuardService } from '../../../core/auth/RoleGuardService';

@Component({
  selector: 'listar-colaboradores',
  templateUrl: 'listar-colaboradores.component.html'
})
export class ListarColaboradoresComponent implements OnInit {

  agents: any = [];

  constructor(private agentService: AgentService, private roleGuardService: RoleGuardService) { }


  ngOnInit() {
    this.agentService.listAgents().subscribe((result: any) => {
      this.agents = result.data;
    })
  }

  canVisible(){
    return this.roleGuardService.isExpectedRole('ROLE_MANAGER');
  }

}
