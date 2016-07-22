import { Component, Input, Output } from '@angular/core';

@Component({
    selector:'like',
    templateUrl : 'app/like.template.html',
    styles : [`
                .glyphicon-heart{
                    color: #ccc;
                    cursor: pointer;
                }
                .highlighted{
                    color: deeppink;
                    cursor: pointer;
                }

            `] 
})
/**
 * LikeComponent
 */
export class LikeComponent {
        @Input() totalLikes = 0;
        @Input() iLike = false;
        onClick(){
            this.iLike = !this.iLike;
            this.totalLikes += this.iLike ? 1 : -1;
        }
}