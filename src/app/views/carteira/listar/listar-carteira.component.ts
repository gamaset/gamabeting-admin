import { Component, OnInit } from '@angular/core';
import { WalletBalanceService } from '../../../core/services/WalletBalanceService';
import { Router } from '@angular/router';
import { RoleGuardService } from '../../../core/auth/RoleGuardService';
import { WalletService } from '../../../core/services/WalletService';

@Component({
  selector: 'listar-carteira',
  templateUrl: 'listar-carteira.component.html'
})
export class ListarCarteiraComponent implements OnInit {

  balances: any = [];

  constructor(private walletService: WalletService, private walletBalanceService: WalletBalanceService, private roleGuardService: RoleGuardService, private router: Router) { }

  ngOnInit() {
    this.listWalletBalancesByStatus(null);
  }

  navigateToListTransactions(balanceId) {
    this.router.navigate(['carteiras/listar-transacoes/' + balanceId]);
  }

  listWalletBalancesByStatus(status) {
    this.walletBalanceService.listWallets(status).subscribe((result: any) => {
      this.balances = result.data;
    })
  }

  closeWallet(walletId) {
    if (confirm('Deseja Efetuar o Fechamento da Carteira ?')) {
      this.walletService.patchWalletStatus(walletId, 1).subscribe(() => {
        this.listWalletBalancesByStatus(null);
      });
    }
  }

}

