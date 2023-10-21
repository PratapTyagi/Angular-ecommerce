import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss'],
})
export class UserAuthComponent implements OnInit {
  isLoginPage = true;
  constructor() {}

  ngOnInit(): void {}

  onOpenLogin = () => {
    this.isLoginPage = true;
  };

  onOpenSignUp = () => {
    this.isLoginPage = false;
  };
}
