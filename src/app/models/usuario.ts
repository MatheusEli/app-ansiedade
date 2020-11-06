
import { Model } from '../core/model';
import { ListaPosts } from './lista-posts';

export class Usuario extends Model {
    nome: string;
    sexo:string;
    idade:number;
    email:string;
    posts:ListaPosts;
    imagem?:string;
}
