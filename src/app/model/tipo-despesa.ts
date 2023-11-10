export class TipoDespesa{

    public id: number;
    public ativo: boolean;

    constructor(public descricao: string) {
        this.id = Math.round(Math.random() * 1000);
        this.descricao = descricao;
        this.ativo = true;

      }

}