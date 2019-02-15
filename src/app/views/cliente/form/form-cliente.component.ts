import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Customer } from '../../../core/models/Customer';
import { CustomerService } from '../../../core/services/customerService';

@Component({
  selector: 'form-cliente',
  templateUrl: 'form-cliente.component.html'
})
export class FormClienteComponent implements OnInit {

  submitted: boolean = false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) {
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log('> enviando formulario criacao de clientes..');

    this.submitted = true;

    console.log(this.registerForm);
    

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('Form de Clientes INVALIDO!');
      return;
    }
    
    let formJson = JSON.parse(JSON.stringify(this.registerForm.value));
    
    let customer = new Customer();
    customer.name = formJson.name;
    customer.email = formJson.email;
    customer.nickname = formJson.nickname;
    customer.taxId = formJson.taxId;
    customer.password = formJson.password;
    customer.agent = {id: 2};

    this.customerService.createCustomer(customer)
    .subscribe( data => {
      console.log('cliente criado: ' + JSON.stringify(data))
      this.router.navigate(['clientes/listar-clientes']);
    });

  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', Validators.required],
      taxId: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.registerForm.get('name').setValue("Zeca Santos");
    this.registerForm.get('email').setValue("zeca@root.com");
    this.registerForm.get('nickname').setValue("zecapostador");
    this.registerForm.get('taxId').setValue("31294312911");
    this.registerForm.get('password').setValue("cliente1234");
    
  }

}
