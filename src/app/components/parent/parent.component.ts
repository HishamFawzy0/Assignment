import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TableComponent } from "../table/table.component";
import { FooterComponent } from "../footer/footer.component";
import { DatafooterService } from '../../services/datafooter.service';

@Component({
  selector: 'app-parent',
  imports: [HeaderComponent, TableComponent, FooterComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  @ViewChild('parent') parent!: ElementRef;
  @ViewChild('content') content!: ElementRef;
constructor(public datafooterService: DatafooterService){}


  close(): void {
    this.parent.nativeElement.classList.add('hiddenElement');
  }
}
