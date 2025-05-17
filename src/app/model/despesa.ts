import { Timestamp } from "@firebase/firestore";
import { TipoDespesa } from "./tipo-despesa";



export class Despesa{
    id?: string;
    userId?: string;
    valor?: number;
    descricao?:string;
    dataLancamento?: Timestamp;
    tipoDespesaId?:string;
    tipoDespesa?:TipoDespesa;
    published?: boolean;

}