import { Component, OnInit } from '@angular/core';
import { WalletBalanceService } from '../../../core/services/walletBalanceService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'listar-transacoes',
  templateUrl: 'listar-transacoes.component.html'
})
export class ListarTransacoesComponent implements OnInit {

  transactions: any = [];

  constructor(private walletBalanceService: WalletBalanceService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
        let balanceId = +params['balanceId']; // (+) converts string 'id' to a number
        this.walletBalanceService.listByBalanceId(balanceId).subscribe((result: any) => {
          this.transactions = result.data;
        })
      });
  }

}
