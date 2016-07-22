
import { Component } from '@angular/core';
import { StarComponent } from './star.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';
import { TweetComponent } from './tweet.component';
import { TweetService } from './tweet.service';
import { SummaryPipe } from './summary.pipe';
import { BootstrapPanel } from './bootstrap.panel.component';
import { ZippyComponent } from './zippy.component';
import { ContactFormComponent } from './contact-form.component';
import { SignUpFormComponent } from './signup-form.component';
import { ChangePasswordComponent } from './change-password.component';
import { Observable } from 'rxjs/RX';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [
                    StarComponent,
                    LikeComponent,
                    VoteComponent,
                    TweetComponent,
                    ZippyComponent,
                    BootstrapPanel,
                    ContactFormComponent,
                    SignUpFormComponent,
                    ChangePasswordComponent
                ],
    providers: [
                TweetService
               ],
    styles : [`
                
            `],
    pipes:[ SummaryPipe ]
})

export class AppComponent {
    canSave = true;
    viewMode = 'mapView';
    tweets: any[];
    count = 10;
    courses = {
        title: "Course Title!",
        student: 3333,
        rating:4.4444,
        price: 44.44,
        releaseDate: new Date(),
        body:"This is a Body!",
    }
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();

        // Observable

        // var keyups = Observable.fromEvent($("#search"), "keyup");
        // keyups.subscribe( data => console.log(data));



        // var debounced = _.debounce(function (text) {
        //     var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
        //     $.getJSON(url, function (artists) {
        //         console.log(artists);
                
        //     });
        // },400);

        // $("#search").keyup(function (e) {
        //     var text = e.target.value;
        //     console.log("Zaheer");
            

        //     if (text.length < 3) {
        //         return;
        //     } 
        //     console.log("attique");
        //     debounced(text);
            
        // });
    }
    votePost = {
        voteCount : 10,
        myVote : 0
    }
    onVote($event:any){
        console.log($event);
    }
    
    vote = {
        totalVotes: 20,
        voteEnter: true
    }
    tweet = {
        totalLikes : 10,
        iLike : true
    }
    
    post = {
        title : 'Title',
        isFavorite : true
    }
    
    onFavoriteChange( $event:any ){
        console.log( $event );
        $event.newValue ? this.count-- : this.count++;
       
    }

}
