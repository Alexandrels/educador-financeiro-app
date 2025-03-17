export class FonteRenda {
        id: string;
        descricao: string;
        valor: number;
        constructor(descricao: string, valor: number) {
                this.id = String(Math.round(Math.random() * 1000));
                this.descricao = descricao;
                this.valor = valor;
        };

        // toJSON() {
        //         return {
        //                 id: this.id,
        //                 descricao: this.descricao,
        //                 valor: this.valor,

        //         };
        // }
}
