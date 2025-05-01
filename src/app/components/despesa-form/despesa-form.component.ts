import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Despesa } from 'src/app/model/despesa';
import { DespesaService } from 'src/app/service/despesa.service';
import { TipoDespesaService } from 'src/app/service/tipo-despesa.service';

@Component({
  selector: 'app-despesa-form',
  templateUrl: './despesa-form.component.html',
  styleUrls: ['./despesa-form.component.css']
})
export class DespesaFormComponent implements OnInit {

  @Input() selectedExpense: Despesa | null = null;
  despesaForm: FormGroup;

  constructor(private fb: FormBuilder,    private tipoDespesaService: TipoDespesaService,
      private despesaService: DespesaService) {
    this.despesaForm = this.fb.group({
      descricao: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0.01)]],
      tipo: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.selectedExpense) {
      this.despesaForm.patchValue(this.selectedExpense);
    }
  }

  onSubmit() {
    const expense: Despesa = this.despesaForm.value;
    if (this.selectedExpense?.id) {
      this.despesaService.update(this.selectedExpense.id, expense).then(() => {
        this.resetForm();
      });
    } else {
      this.despesaService.create(expense).then(() => {
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.despesaForm.reset();
    this.selectedExpense = null;
  }

}
