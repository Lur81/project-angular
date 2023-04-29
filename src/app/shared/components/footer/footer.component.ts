import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  actualyear: number;

  constructor(){
    this.actualyear = new Date().getFullYear();

  }
}
