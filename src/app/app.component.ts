import { Component, OnInit } from '@angular/core';
import { Client, Idea } from './services/hackoverflow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hack-overflow';

  teamName: string;
  description: string;
  member1: string;
  member2: string;

  ideas: Idea[];

  constructor(private client: Client) { }
  
  ngOnInit() {
    this.refreshData();
  }

  save(args) {
    var idea = Idea.fromJS({
      teamName: this.teamName,
      member1: this.member1,
      member2: this.member2,
      description: this.description
    });

    this.client.createIdea(idea).subscribe(() => {
      this.teamName = "";
      this.member1 = "";
      this.member2 = "";
      this.description = "";

      this.refreshData();
    });
  }

  refreshData() {
    this.client.getAllIdeas().subscribe(ideas => {
      this.ideas = ideas;
    });
  }
}
