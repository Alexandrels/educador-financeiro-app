


export class Despesa{
  public id: number;
    public dataLancamento: Date;
    // public id: number;
    public userId!: string;

    constructor(public valor: number,public descricao: string, public tipoDespesaId: string) {
        this.id = Math.round(Math.random() * 1000);
        // this.id =id;
        this.valor = valor;
        this.descricao = descricao;
        this.tipoDespesaId = tipoDespesaId;
        this.dataLancamento = new Date();
      }
}