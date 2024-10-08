import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';
@Component({
  selector: 'sgc-table-part',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './table-part.component.html',
  styleUrl: './table-part.component.scss'
})
export class TablePartComponent {

}
