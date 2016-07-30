/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/underscore/index.d.ts" />

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
import	{ControlGroup,	FormBuilder} from '@angular/common';
import { Observable } from 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator';
// import 'rxjs/add/operator/filter';

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
    form: ControlGroup;    
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

    constructor(tweetService: TweetService, fb: FormBuilder){
        	

        this.tweets = tweetService.getTweets();
        	this.form = fb.group({
							search:	[]
        });

        // var	search = this.form.find('search');
        // search.valueChanges
        //     .debounceTime(400)
        //     .map(str =>	(<string>str).replace(' ','-'))
        //     .subscribe(x => console.log(x));
        //     Observable.of([1, 2, 3]);
        
        // var	observable = observable.subscribe(x => console.log(x));
        
        // var	startDates	=	[];
        // var	startDate	=	new	Date();	//	Assuming	today	for	simplicity
        // for (var day = -2; day <= 2; day++) {
        //     var date = new Date(
        //                         startDate.getFullYear(),
        //                         startDate.getMonth(),
        //                         startDate.getDate() + day
        //     );
        //     startDates.push(date);

        // }  
        // Observable.fromArray(startDates)
		// 		.map(date	=>	{	
        // 	 	 	console.log("Getting	deals	for	date	"	+	date);
        // 	 	 	return	[1,	2,	3];
	 	// 		})
		// 		.subscribe(x =>	console.log(x));	
        //  console.log(new Observable());
           // Observable.fromArray([1, 2, 3]);
        // var	observable	=	Observable.interval(6000);	
        // observable.flatMap(x => {
        //     console.log("calling the server	to get the latest news");
        //     return observable [1, 2, 3];
        // })
        //     .subscribe(news => console.log(news));
        
        //Observable.forkJoin(obs1, obs2);
        var	userStream	=	Observable.of({	
        						userId:	1,	username:	'Rizwan Zaheer'	
                            }).delay(2000);	
        var tweetsStream = Observable.of([1, 2, 3, 2, 3]).delay(1500);
        Observable.forkJoin(userStream, tweetsStream)
                    .map(joined	=>	new	Object({user:	joined[0],	tweets:	joined[1]	}))    
            .subscribe(a => console.log(a)// error => console.error(error)
                        );
        var observable = Observable.throw(new Error("Something failed."));
        observable.subscribe(
        				x	=>	console.log(x)
        				//error	=>	console.error(error)
        );	
        // var keyups = Observable.fromEvent($("#search"), "keyup")
        //     .map(e =>  e.target.value)
        //     .filter(text => text.length >= 3)
        //     .debounceTime(400)
        //     .distinctUntilChanged()
        //     .flatMap(searchTearm => {
        //         var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTearm;
        //         var promise:any = $.getJSON(url);
        //         return Observable.fromPromise(promise);

        //     });        
        // var subscription = keyups.subscribe(data => console.log(data)); 
        // subscription.unsubscribe();
        //  var debounced = _.debounce(function (text) {
        //     var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
        //     $.getJSON(url, function (artists) {
        //         console.log(artists);
                
        //      });
        //  },400);

        //   $("#search").keyup(function (e) {
        //       var text = e.target.value;
        //       console.log(text);
              
        //      console.log("Zaheer");
        //      var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
        //         $.getJSON(url, function (artists) {
        //              console.log(artists); 
        //          });
    
        //      if (text.length < 3) {
        //          return;
        //      } 
        //        console.log("attique");
        //        debounced(text);
            
        //   });
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
