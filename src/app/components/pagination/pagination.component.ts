import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() totalItems!: number;
  @Input() currentPage!: number;
  @Input() itemPerPages!: number;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  @ViewChild('next') Nextele!: ElementRef;
  totalPages: number = 0;
  pages: number[] = [];

  ngOnInit(): void {
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemPerPages);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  changePage(page: number): void {
    if (page <= this.totalPages) {
      
      this.onClick.emit(page);
    }
  }
}
