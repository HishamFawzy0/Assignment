import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isHidden: boolean = false;
  mainNumber: string = '012345678910';
  @ViewChild('numberchange') numberchange!: ElementRef;
  @ViewChild('mainModel') mainModel!: ElementRef;
  @ViewChild('using') using!: ElementRef;

  changeNumber(): void {
    if (this.numberchange.nativeElement.value) {
      this.mainNumber = this.numberchange.nativeElement.value;
      this.toggle();
    }
  }
  toggle(): void {
    this.isHidden = !this.isHidden;
  }
  hideModel(e: any): void {
    if (e.target == this.mainModel.nativeElement) {
      this.toggle();
    } else {
      this.isHidden = true;
    }
  }
  notUsable(): void {
    this.using.nativeElement.classList.add('bg-danger') ;
    this.using.nativeElement.innerText = 'تم إلغاء الاستخدام';
  }
}
