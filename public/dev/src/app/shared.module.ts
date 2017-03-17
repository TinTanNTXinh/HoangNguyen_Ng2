import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// 3rd libraries
import {NKDatetimeModule} from 'ng2-datetime/ng2-datetime';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ToastrModule} from 'ngx-toastr';
import {Ng2PaginationModule} from 'ng2-pagination';

// My libraries
import {ShiftPositionPipe} from './pipes/shift-position.pipe';
import {KeysPipe} from './pipes/keys.pipe';
import {ModalComponent} from './dynamic-components/modal/modal.component';
import {CurrencyComponent} from './dynamic-components/currency/currency.component';
import {DatatableComponent} from './dynamic-components/datatable/datatable.component';
import {ColumnComponent} from './dynamic-components/column/column.component';
import {PaginationComponent} from './dynamic-components/pagination/pagination.component';
import {SpinnerComponent} from './dynamic-components/spinner/spinner.component';
import {SpinnerFbComponent} from './dynamic-components/spinner-fb/spinner-fb.component';

// My components
import {ProducerComponent} from './components/producer/producer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        ToastrModule.forRoot(),
        Ng2PaginationModule,
        Ng2SmartTableModule,
        NKDatetimeModule,
    ],
    declarations: [
        ShiftPositionPipe,
        KeysPipe,
        ModalComponent,
        CurrencyComponent,
        DatatableComponent,
        ColumnComponent,
        PaginationComponent,
        SpinnerComponent,
        SpinnerFbComponent,

        ProducerComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        ToastrModule,
        Ng2PaginationModule,
        Ng2SmartTableModule,
        NKDatetimeModule,

        ShiftPositionPipe,
        KeysPipe,
        ModalComponent,
        CurrencyComponent,
        DatatableComponent,
        ColumnComponent,
        PaginationComponent,
        SpinnerComponent,
        SpinnerFbComponent,

        ProducerComponent,
    ]
})
export class SharedModule {
}