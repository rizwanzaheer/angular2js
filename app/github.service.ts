import { Http } from '@angular/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
//import 'rxjs/add/observable/forkJoin'

@Injectable() 

 /**
 * GithubService
 */
export class GithubService {
    private _baseUrl = 'https://api.github.com/users/';
   /* private _users = 'https://api.github.com/users/octocat';
    private _followers = 'https://api.github.com/users/octocat/followers';*/
    constructor(private _http : Http) {
        console.log("In github service constructor!");        
    }

    getUser(username) {
        return this._http.get(this._baseUrl + username)
            .map(res => res.json());
    }

    getFollowers(username) {
        return this._http.get(this._baseUrl + username + "/followers")
            .map(res => res.json());
    }
}