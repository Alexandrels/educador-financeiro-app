import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioStorageService } from '../usuario-storage.service';

@Component({
  selector: 'app-total-usuarios',
  templateUrl: './total-usuarios.component.html',
  styleUrls: ['./total-usuarios.component.css']
})
export class TotalUsuariosComponent implements OnInit {
  value: number = 0;
  subscription: Subscription;

  constructor(private userService: UsuarioStorageService) {
    this.subscription = this.userService.asObservable().subscribe(
      (data) => {
        this.value = data;
      },
      (error) => {},
      () => {
        //alert('Complete!');
      }
    );
  }

  ngOnInit(): void {
    this.value = this.userService.getUsers()?.length;
  }
}
