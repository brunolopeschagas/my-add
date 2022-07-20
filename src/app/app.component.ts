import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { GitHubService } from './git-hub-data/github.service';
import { GitHubUser } from './git-hub-data/githubuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  searchControl = new FormControl();
  users: GitHubUser[] = []

  constructor(private _gitHubServices: GitHubService) {
    this._gitHubServices.getGitHubData('brunolopeschagas')
      .subscribe(data => {
        this.users = data.items;
        console.log(data.items);
      });
  }
  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(filter(text => text.length >= 3), debounceTime(400), distinctUntilChanged())
      .subscribe(value => {
        this._gitHubServices.getGitHubData(value)
          .subscribe(data => { this.users = data.items; })
      });
  }
}
