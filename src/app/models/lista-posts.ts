import { Post } from './post';

export class ListaPosts {
    posts:Array<Post>;

    public adiciona(post:Post){
        this.posts.push(post);
    }

}
