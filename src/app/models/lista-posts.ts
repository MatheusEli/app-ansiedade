import { Model } from '../core/model';
import { Post } from './post';

export class ListaPosts extends Model{
    posts:Array<Post>;

    public adiciona(post:Post){
        this.posts.push(post);
    }

}
