import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'voter',
    templateUrl : `app/vote.template.html`,
    styles : [`
              .voter{
                  Width:20px;
                  text-align:center;
                  color: #999;

              }  
              .vote-count{
                  font-size: 1.2em;
              }
              .vote-button{
                  cursor:pointer;
              }
              .highlighted{
                  font-weight: bold;
                  color:orange;
              }
            `]
})

export /**
 * VoteComponent
 */
class VoteComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();
    upVote(){
       // this.voteEnter = !this.voteEnter;
       // this.totalVotes += this.voteEnter ? 1 : null ;
       if (this.myVote == 1)
           return;
       this.myVote++;
       this.vote.emit({ myVote: this.myVote});
    }
    downVote(){
        //this.voteEnter = !this.voteEnter;
        // this.totalVotes += this.voteEnter ? -1 : null ;
        if (this.myVote == -1)
           return;
       this.myVote--;
       this.vote.emit({ myVote: this.myVote});

    }
}