import { Component, OnInit } from '@angular/core';
import { WalletBalanceService } from '../../../core/services/walletBalanceService';
import { TokenStorageService } from '../../../core/auth/TokenStorageService';

@Component({
  selector: 'listar-carteira',
  templateUrl: 'listar-carteira.component.html'
})
export class ListarCarteiraComponent implements OnInit {

  balances: any = [];

  constructor(private walletBalanceService: WalletBalanceService, private tokenStorageService: TokenStorageService) { }


  ngOnInit() {
    this.walletBalanceService.listWallets('OPEN').subscribe((result: any) => {
      this.balances = result.data;
    })
  }

}
