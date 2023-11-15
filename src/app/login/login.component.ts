import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: User;
  loginUser!: User;
  users!: User[];
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginUser = new User('', '');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
    this.users = WebStorageUtil.get(Constants.USERS_KEY);
  }

  onLogin() {
    if (
      this.loginUser.username === this.user.username &&
      this.loginUser.password === this.user.password
    ) {
      this.loginService.login();
    } else if (this.users && this.users.length > 0) {
      for (let i = 0; i < this.users.length; i++) {
        if (
          this.loginUser.username === this.users[i].username &&
          this.loginUser.password === this.users[i].password
        ) {
          this.loginService.login();
        }
      }
    } else {
      alert(
        'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
      );
    }
  }
}
