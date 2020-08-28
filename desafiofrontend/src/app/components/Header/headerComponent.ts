import { OnInit, Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-headerComponent',
    templateUrl: './headerComponent.html',
    styleUrls: ['./headerComponent.css']



})
export class HeaderComponent implements OnInit {
    @Output() updatesearchChange: EventEmitter<string> = new EventEmitter()
    public search!: string;
    constructor() {

    }
    ngOnInit(): void {

    }
    public updatesearch(value: string): void {
        this.updatesearchChange.emit(value)
    }
}