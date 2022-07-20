import { Component } from '@angular/core';
import { GitHubService } from './git-hub-data/github.service';
import { GitHubUser } from './git-hub-data/githubuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent{

  users:GitHubUser[] = []

  constructor(private _gitHubServices:GitHubService){
    this._gitHubServices.getGitHubData('brunolopeschagas')
    .subscribe(data => {
      this.users = data.items;
      console.log(data.items);
    });
  }



}
