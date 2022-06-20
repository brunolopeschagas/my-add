import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchControl = new FormControl();

  constructor(){
    this.searchControl.valueChanges
    .pipe(
      filter(text=> text.length > 3),
      debounceTime(400)
    )
    .subscribe(value=>{console.log(value)});
  }
}
