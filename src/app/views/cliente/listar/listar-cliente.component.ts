import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../core/services/CustomerService';
import { RoleGuardService } from '../../../core/auth/RoleGuardService';

@Component({
  selector: 'listar-cliente',
  templateUrl: 'listar-cliente.component.html'
})
export class ListarClienteComponent implements OnInit {

  customers: any = [];

  constructor(private customerService: CustomerService, private roleGuardService: RoleGuardService) { }


  ngOnInit() {
    this.customerService.listCustomers().subscribe((result: any) => {
      this.customers = result.data;
    });
  }

  isDisplayButtonCreateCustomer(role){
    return this.roleGuardService.isExpectedRole(role);
  }

}
