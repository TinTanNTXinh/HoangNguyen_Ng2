import {Http, Response} from '@angular/http';
import {Injectable, Component, Input} from '@angular/core';
import {ColumnComponent} from '../column/column.component';

@Component({
    selector: 'datatable',
    templateUrl: './datatable.component.html',
    styles: []
})
export class DatatableComponent {

    @Input() dataset;
    @Input() enableFilter = false;
    columns: ColumnComponent[] = [];
    query = "";
    filteredList;

    addColumn(column) {
        this.columns.push(column);
    }

    getData() {
        if (this.query !== "") {
            return this.filteredList;
        } else {
            return this.dataset;
        }
    }

    filter() {
        this.filteredList = this.dataset.filter(function (el) {
            let result = "";
            for (let key in el) {
                result += el[key];
            }
            return result.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }

}
