import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'zippy',
    styles: [`
        .zippy {
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        
        .zippy .zippy-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .zippy .zippy-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        .zippy .zippy-content {
            padding: 20px;
        }
    `],
    template : `
            <div class="zippy">
                <div
                 class="zippy-title"
                 (click) = "toggle()"
                >
                     {{ zippytitle }}
                    <i 
                        class="pull-right glyphicon"
                        [ngClass]="{
                            'glyphicon-chevron-down' : !isExpanded,
                            'glyphicon-chevron-up' : isExpanded
                        }"
                    >
                    </i>
                </div>
                <div *ngIf="isExpanded" class="zippy-content">
                    <ng-content></ng-content>
                </div>
            </div>        
    `
})

export /**
 * ZippyComponent
 */
class ZippyComponent {
    isExpanded = false;
    @Input() zippytitle: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }

}