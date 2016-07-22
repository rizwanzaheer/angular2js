import { Component, Input , Output , EventEmitter} from '@angular/core';

@Component({
    selector: 'star',
    templateUrl: 'app/star.template.html',
    styles : [`
                .glyphicon-heart{
                    color: deeppink;
                    cursor: pointer;
                }
            `] 

})

export class StarComponent{
        @Input() isFavorite = false;
        @Output() change = new EventEmitter();
        onClick(){
            this.isFavorite = !this.isFavorite;
            this.change.emit({ newValue: this.isFavorite});
           
        }
}