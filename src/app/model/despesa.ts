import { TipoDespesa } from "./tipo-despesa";



export class Despesa{
    id?: string;
    userId?: string;
    valor?: number;
    descricao?:string;
    dataLancamento?: Date = new Date();
    tipoDespesaId?:string;
    tipoDespesa?:TipoDespesa;
    published?: boolean;

}