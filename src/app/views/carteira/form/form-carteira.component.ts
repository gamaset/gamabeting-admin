import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../../../core/services/AgentService';
import { AgentModel } from '../../../core/models/AgentModel';

@Component({
    selector: 'form-carteira',
    templateUrl: 'form-carteira.component.html'
})
export class FormCarteiraComponent implements OnInit {

    submitted = false;
    registerForm: FormGroup;

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    constructor(private formBuilder: FormBuilder, private router: Router, private agentService: AgentService) {
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
    }

    onSubmit() {
        console.log('> enviando formulario criacao de carteira..');

        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        const formJson = JSON.parse(JSON.stringify(this.registerForm.value));
    }
}