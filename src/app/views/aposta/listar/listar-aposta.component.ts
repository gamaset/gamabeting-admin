import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentService } from '../../../core/services/AgentService';
import { ApostaService } from '../../../core/services/ApostaService';

@Component({
  selector: 'listar-aposta',
  templateUrl: 'listar-aposta.component.html'
})
export class ListarApostaComponent implements OnInit {

  apostas: any = [];
  badgeClass: string = 'warning';
  constructor(private apostaService: ApostaService, private router: Router) { }


  ngOnInit() {
    this.apostaService.listarApostas().subscribe((result: any) => {
      this.apostas = result.data;
    })
  }

  navigateDetailBet(betId) {
    this.router.navigate(['apostas/detalhar-apostas/'+betId]);
  }

}