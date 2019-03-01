import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../../../core/services/AgentService';
import { AgentModel } from '../../../core/models/AgentModel';

@Component({
  selector: 'form-colaboradores',
  templateUrl: 'form-colaboradores.component.html'
})
export class FormColaboradoresComponent implements OnInit {

  submitted =  false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private agentService: AgentService) {
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log('> enviando formulario criacao agente..');

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const formJson = JSON.parse(JSON.stringify(this.registerForm.value));

    const agent = new AgentModel();
    agent.name = formJson.name;
    agent.username = formJson.username;
    agent.taxId = formJson.taxId;
    agent.email = formJson.email;
    agent.budget = formJson.budget;
    agent.password = formJson.password;

    this.agentService.createAgent(agent)
    .subscribe( data => {
      console.log('agente criado: ' + JSON.stringify(data))
      this.router.navigate(['colaboradores/listar-colaboradores']);
    });

  }

  ngOnInit() {
    console.log('> Iniciando FormColaboradoresComponent..');
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      taxId: ['', Validators.required, Validators.minLength(11), Validators.maxLength(11)],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      budget: ['', [Validators.required, Validators.min(0)]],
    });

    // this.registerForm.get('name').setValue('zezinho');
    // this.registerForm.get('username').setValue('loginzezinho');
    // this.registerForm.get('taxId').setValue('31294312911');
    // this.registerForm.get('password').setValue('senha123');
    // this.registerForm.get('email').setValue('zezinho@express.com');

  }

}
