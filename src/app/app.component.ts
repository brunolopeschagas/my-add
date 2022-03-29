import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'My fisrt angular';
  imageUrl:string = "https://www.w3schools.com/html/pic_mountain.jpg";
  isValid:boolean = false;

  onClickMe($event: any){
    this.isValid=!this.isValid;
  }
}
