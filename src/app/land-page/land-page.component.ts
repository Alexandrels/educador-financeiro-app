import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Constants } from '../util/constants';
import { Shared } from '../util/shared';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {

  loggedIn = false;
  subscription!: Subscription;

  constructor(private router: Router, private loginService: LoginService) {
    this.subscription = this.loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
      console.log('observer - land-page');
    });
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY);
    console.log('init - land-page');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('destroy - land-page');
  }

}
