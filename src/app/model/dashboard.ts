export class Dashboard {
    id: string;
    descricao: string;
    total: number;
    percent: number;
    constructor( descricao: string,total: number){
            this.id = String(Math.round(Math.random() * 1000));
            this.descricao = descricao;
            this.total =total;
            this.percent = total/10000;
    };
}

