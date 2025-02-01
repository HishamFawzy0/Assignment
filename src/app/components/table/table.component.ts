import { Component } from '@angular/core';
import { Tabledata } from '../../interfaces/tabledata';
import { PaginationComponent } from "../pagination/pagination.component";


@Component({
  selector: 'app-table',
  imports: [PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  currentPage: number = 1;
  itemPerPages: number = 4;

  data: Tabledata[] = Array.from({ length: 20 }, (_, i) => ({
    client: `الشركة ${i % 2 === 0 ? 'الألمانية' : 'المصرية'} للإبادة...`,
    assignmentDate: `0${(i % 9) + 1}/12/2024`,
    cancellationDate: i % 3 === 0 ? '-' : `0${(i % 6) + 1}/12/2024`,
    manager: `عبدالرحيم ${i % 2 === 0 ? 'إسماعيل' : 'محمد'} ناصف`,
    localMinutes: Math.floor(Math.random() * 9000) + 1000,
    internationalMinutes: Math.floor(Math.random() * 300) + 50,
    amount: Math.floor(Math.random() * 50000) + 20000,
  }));

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemPerPages;
    const end = start + this.itemPerPages;
    return this.data.slice(start, end);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
