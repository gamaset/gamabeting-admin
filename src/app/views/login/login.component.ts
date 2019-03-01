import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginRequest } from '../../core/auth/AuthLoginRequest';
import { TokenStorageService } from '../../core/auth/TokenStorageService';
import { AuthService } from '../../core/auth/AuthService';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  submitted: boolean = false;
  registerForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  private loginInfo: AuthLoginRequest;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) {
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    console.log('> Iniciando LoginComponent..');
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }

  }

  onSubmit() {
    console.log('> Efetuando Login..');
    console.log(this.registerForm);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    let formJson = JSON.parse(JSON.stringify(this.registerForm.value));
    this.loginInfo = new AuthLoginRequest(formJson.username, formJson.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigate(['dashboard']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  // let agent = new Agent();
  // agent.name = formJson.name;
  // agent.nickname = formJson.nickname;
  // agent.taxId = formJson.taxId;
  // agent.birthDate = '1992-06-20';
  // agent.manager = {id: 1};

  // this.agentService.createAgent(agent)
  // .subscribe( data => {
  //   console.log('agente criado: ' + JSON.stringify(data))
  //   this.router.navigate(['colaboradores/listar-colaboradores']);
  // });

  reloadPage() {
    window.location.reload();
  }
}
