import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UtilitiesService} from '../../services/utilities/utilities.service';

@Component({
    selector: 'currency',
    templateUrl: 'currency.component.html'
})
export class CurrencyComponent implements OnInit {
    private currencyStringData: string;
    private currencyNumberData: number;
    private SUFFIX: string;

    constructor(private utilities: UtilitiesService) {
        this.SUFFIX = 'đ';
    }

    ngOnInit() {

    }

    @Input() get numberData(): number {
        this.currencyStringData = this.utilities.formatThousandsSeparator(this.currencyNumberData.toString());
        return this.currencyNumberData;
    }

    set numberData(money: number) {
        this.currencyNumberData = money;
        this.currencyStringData = this.utilities.formatThousandsSeparator(this.currencyNumberData.toString());
    }

    @Output() onKeyUpped: EventEmitter<number> = new EventEmitter();

    keyUpped(event?: Event) {
        this.changed();
    }

    changed(event?: Event){
        this.currencyStringData = this.utilities.formatThousandsSeparator(this.currencyStringData);
        this.currencyNumberData = this.utilities.convertToNumber(this.currencyStringData);
        this.onKeyUpped.emit(this.currencyNumberData);
    }
}