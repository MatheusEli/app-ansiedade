import { Model } from '../core/model';
import { Usuario } from './usuario';

export class Post extends Model{
    proprietario:Usuario;
    dataPostagem:Date;
    conteudo:string;
    imagem:string
}
