import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApostaService } from '../../../core/services/ApostaService';
import { RoleGuardService } from '../../../core/auth/RoleGuardService';

@Component({
  selector: 'listar-aposta',
  templateUrl: 'listar-aposta.component.html'
})
export class ListarApostaComponent implements OnInit {

  apostas: any = [];
  badgeClass: string = 'warning';
  constructor(private apostaService: ApostaService, private roleGuardService: RoleGuardService, private router: Router) { }


  ngOnInit() {
    this.listBets();
  }
  
  navigateDetailBet(betId) {
    this.router.navigate(['apostas/detalhar-aposta/'+betId]);
  }
  
  doBet(betID){
    if(confirm('Deseja Efetuar a Aposta ?')){
      this.apostaService.atualizaStatus(betID, 1).subscribe(() => {
        this.listBets();
      });
    }
  }
  
  cancelBet(betID){
    if(confirm('Deseja Cancelar a Aposta ?')){
      this.apostaService.atualizaStatus(betID, 2).subscribe(() => {
        this.listBets();
      });
    }
  }
  
  listBets(){
    this.apostaService.listarApostas().subscribe((result: any) => {
      this.apostas = result.data;
    })
  }

  showButtonRegisterBet(betStatus){
    return betStatus == 0 && this.roleGuardService.isExpectedRole('ROLE_AGENT');
  }

}
