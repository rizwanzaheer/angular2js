import { Http } from '@angular/http';
import  { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';


@Injectable() 

/**
 * PostService
 */
export class PostService {
    private _url ='http://jsonplaceholder.typicode.com/posts';
    constructor(private _http : Http) {
        
    }
    getPosts(): Observable<Post[]> {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    creatPost(post: Post) {
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
}