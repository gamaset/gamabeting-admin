import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerService } from '../../../core/services/CustomerService';
import { CustomerModel } from '../../../core/models/CustomerModel';
import { AgentModel } from '../../../core/models/AgentModel';
import { AgentService } from '../../../core/services/AgentService';
import { log } from 'util';

@Component({
  selector: 'form-cliente',
  templateUrl: 'form-cliente.component.html'
})
export class FormClienteComponent implements OnInit {

  agentList: Array<AgentModel>;
  submitted: boolean = false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService, private agentService: AgentService) {
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log('> enviando formulario criacao de clientes..');
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log('Form de Clientes INVALIDO!');
      return;
    }
    
    let formJson = JSON.parse(JSON.stringify(this.registerForm.value));
    
    let customer = new CustomerModel();
    customer.name = formJson.name;
    customer.email = formJson.email;
    customer.taxId = formJson.taxId;

    this.customerService.createCustomer(customer)
    .subscribe( data => {
      console.log('cliente criado: ' + JSON.stringify(data))
      this.router.navigate(['clientes/listar-clientes']);
    });

  }

  ngOnInit() {
    this.agentService.listAgents().subscribe((result: any) => {
      this.agentList = result.data;
      console.log(`>>>>>>>>>> ${JSON.stringify(this.agentList)}`);
    });
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      taxId: ['', Validators.required],
    });

    // this.registerForm.get('name').setValue("Zeca Santos");
    // this.registerForm.get('username').setValue("zecapostador");
    // this.registerForm.get('email').setValue("zeca@root.com");
    // this.registerForm.get('taxId').setValue("31294312911");
    // this.registerForm.get('password').setValue("cliente1234");
    
  }

}
