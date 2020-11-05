
import { Model } from '../core/model';
import { ListaPosts } from './lista-posts';

export class Usuario extends Model {
    nome: string;
    numero:string;
    email:string;
    sexo:string;
    posts:ListaPosts;
}
