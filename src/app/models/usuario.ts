
import { Url } from 'url';
import { Model } from '../core/model';
import { ListaPosts } from './lista-posts';

export class Usuario extends Model {
    nome: string;
    profissao: string;
    sexo:string;
    idade:number;
    email:string;
    posts:ListaPosts;
    foto:Url;
}
