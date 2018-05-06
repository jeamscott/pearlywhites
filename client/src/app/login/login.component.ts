import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // reset login status
    // this.auth.logout();

    // get return url from route params
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.auth.login(this.credentials).subscribe(response => {
	  location.reload();
      console.log(response);
      this.router.navigate([this.returnUrl]);
    },
    error => {
      this.alertService.error('Username or Password is Incorrect');
      this.loading = false;
      console.log(error);
    });
  }
}
