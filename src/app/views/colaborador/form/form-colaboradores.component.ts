import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AgentService } from '../../../core/services/AgentService';
import { Agent } from '../../../core/models/Agent';

@Component({
  selector: 'form-colaboradores',
  templateUrl: 'form-colaboradores.component.html'
})
export class FormColaboradoresComponent implements OnInit {

  submitted: boolean = false;
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
    
    let formJson = JSON.parse(JSON.stringify(this.registerForm.value));
    
    let agent = new Agent();
    agent.name = formJson.name;
    agent.nickname = formJson.nickname;
    agent.taxId = formJson.taxId;
    agent.birthDate = '1992-06-20';
    agent.manager = {id: 1};

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
      email: ['', [Validators.required, Validators.email]],
      nickname: ['', Validators.required],
      taxId: ['', Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    });

    this.registerForm.get('name').setValue("zezinho");
    this.registerForm.get('email').setValue("zezinho@express.com");
    this.registerForm.get('taxId').setValue("31294312911");
    this.registerForm.get('nickname').setValue("loginzezinho");

  }

}
