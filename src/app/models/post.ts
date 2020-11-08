import { Url } from 'url';
import { Model } from '../core/model';
import { Usuario } from './usuario';

export class Post extends Model{
    proprietario:string;
    proprietario_profissao:string;
    dataPostagem:Date;
    conteudo:string;
    proprietario_imagem:Url
}
