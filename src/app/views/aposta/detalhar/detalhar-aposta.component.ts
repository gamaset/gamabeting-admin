import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApostaService } from '../../../core/services/ApostaService';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'detalhar-aposta',
  templateUrl: 'detalhar-aposta.component.html'
})
export class DetalharApostaComponent implements OnInit {

  bet: any;
  ticketLabel = `Gerar Ticket`;
  showTickets: boolean;
  betStatusSelected: number = 0;
  registerForm: FormGroup;
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private apostaService: ApostaService, private router: Router, private route: ActivatedRoute) { }
  
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  ngOnInit() {
    this.initForm();
    let sub = this.route.params.subscribe(params => {
      let betId = +params['betId']; // (+) converts string 'id' to a number
      this.apostaService.buscarAposta(betId).subscribe((result: any) => {
        this.bet = result;
        this.registerForm.get('betStatus').setValue(this.bet.status);
      })
    });
  }

  navigateDetailBet(betId) {
    if (confirm(`Deseja confirmar a EFETIVAÇÃO da aposta ${betId} ?`)) {
      let betStatus = 1;
      this.apostaService.atualizaStatus(betId, betStatus).subscribe((result: any) => {
        this.router.navigate(['apostas/listar-apostas']);
      })
    }
  }
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    
    let betStatus = JSON.parse(JSON.stringify(this.registerForm.value)).betStatus;

    if (confirm(`Deseja confirmar a alteração de status da aposta ${this.bet.hashId} ?`)) {
      this.apostaService.atualizaStatus(this.bet.id, betStatus).subscribe((result: any) => {
        this.router.navigate(['apostas/listar-apostas']);
      })
    }

  }

  initForm() {

    this.registerForm = this.formBuilder.group({
      betStatus: ['', Validators.required],
    });
  }

  public showTicket(): void {
     if(this.showTickets) {
        this.showTickets = false;
        this.ticketLabel = `Gerar Ticket`;
     } else {
      this.showTickets = true;
      this.ticketLabel = `Esconder Ticket`;
     }
  }
}
