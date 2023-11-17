export class TipoDespesa{

    public id: string;
    public ativo: boolean;

    constructor(public descricao: string) {
        this.id = Math.round(Math.random() * 1000).toString();
        this.descricao = descricao;
        this.ativo = true;

      }

}