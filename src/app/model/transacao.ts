import { Despesa } from "./despesa";

export class Transacao{
    public dataLancamento: Date;
    // public id: number;
    public userId!: string;

    constructor(public id: number,public valor: number,public descricao: string, public tipoDespesa: Despesa) {
        // this.id = Math.round(Math.random() * 1000);
        this.id =id;
        this.valor = valor;
        this.descricao = descricao;
        this.tipoDespesa = tipoDespesa;
        this.dataLancamento = new Date();
      }
}