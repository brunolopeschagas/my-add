import { Component, OnInit } from '@angular/core';
import { GitHubService } from './github.service';

@Component({
  selector: 'app-git-hub-data',
  templateUrl: './git-hub-data.component.html',
  styleUrls: ['./git-hub-data.component.css'],
  providers:[GitHubService]
})
export class GitHubDataComponent implements OnInit {

  constructor(private _gitHubService: GitHubService) { }

  ngOnInit(): void {
    this._gitHubService.getGitHubData('brunolopeschagas').subscribe(data=>console.log(data));
  }

}
