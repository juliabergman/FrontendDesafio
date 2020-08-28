import { OnInit, Component, Input } from '@angular/core'

@Component({
    selector: 'app-cardComponent',
    templateUrl: './cardComponent.html',
    styleUrls: ['./cardComponent.css']



})

export class CardComponent implements OnInit {
    @Input()
    title!: string;

    constructor() {

    }
    ngOnInit(): void {

    }
}