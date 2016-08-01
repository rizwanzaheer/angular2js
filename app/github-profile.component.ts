import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'github-profile',
    template: `
            
    `,
    styles: [`
        .avatar	{
				width:	100;
				height:	100;
				border-radius:	100%;
            }	
    `] 
})

export /**
 * GitHubProfileComponent
 */
class GitHubProfileComponent implements OnInit{
    isLoading = true;
    username = 'octocat';
    user = {};
    followers = [];
    constructor(private _githubService: GithubService) {
            
    }

    ngOnInit() {
        Observable.forkJoin(
            this._githubService.getUser(this.username),
            this._githubService.getFollowers(this.followers))
            .subscribe(res => {
                this.user = res[0];
                this.followers = res[1];
            },
            null,
                () => {
                    this.isLoading = false;
                }
        );
    }

}