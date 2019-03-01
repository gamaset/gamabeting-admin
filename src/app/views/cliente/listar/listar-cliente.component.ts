import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../../core/services/AgentService';
import { CustomerService } from '../../../core/services/customerService';

@Component({
  selector: 'listar-cliente',
  templateUrl: 'listar-cliente.component.html'
})
export class ListarClienteComponent implements OnInit {

  customers: any = [];

  constructor(private customerService: CustomerService) { }


  ngOnInit() {
    this.customerService.listCustomers().subscribe((result: any) => {
      this.customers = result.data;
    });
  }

}
