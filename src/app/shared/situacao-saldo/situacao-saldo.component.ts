import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { da } from 'date-fns/locale';
import { UsuarioStorageService } from 'src/app/cadastro-usuario/usuario-storage.service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Shared } from 'src/app/util/shared';

@Component({
  selector: 'app-situacao-saldo',
  templateUrl: './situacao-saldo.component.html',
  styleUrls: ['./situacao-saldo.component.css'],
})
export class SituacaoSaldoComponent implements OnInit, OnChanges {
  @Input() value: number = 0;
  @Input() valorLancado: number = 0;
  @Output() rendaComprometidaEvent = new EventEmitter<boolean>();

  user!: User;
  backgroundColor = 'primary-collor';
  totalSaldo: number = 10000;

  constructor(private userService: UserService) {}

  ngOnChanges(): void {
    console.log('onChanges do sitacao saldo');
    if (this.valorLancado > 0) {
      this.value = this.value - this.valorLancado;
      let result = (this.value / this.totalSaldo) * 100;
      this.atualizarSaldoUser(this.value);
      if (result < 50)
        setTimeout(() => {
          this.rendaComprometidaEvent.emit(true);
        }, 3000);
    }
  }

  atualizarSaldoUser(valor: number) {
    this.user.balance = valor;
    this.userService.patch(this.user).subscribe((data) => {
      console.log('Atualiozado com sucesso! ' + data);
    });
  }

  ngOnInit(): void {
    console.log('onINit');
    Shared.initializeWebStorage();
    this.userService.getByUsername('ale.leite').subscribe(
      (data) => {
        if (data[0]) {
          this.user = data[0];

          this.value = this.user.balance;
        } else {
          this.value = this.totalSaldo;
          this.user = new User('', '');
        }
      },
      (error) => {
        console.log('componente');
        console.log(error);
        this.user = new User('', '');
      }
    );
  }

  onDblClickBalance(color: string) {
    this.backgroundColor = color;
  }

  getBackgroundColor() {
    return this.backgroundColor;
  }
}
