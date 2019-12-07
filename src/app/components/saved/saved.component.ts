import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  jobs: Job[] = [];
  constructor() { }

  ngOnInit() {
    var retrivedsaved = localStorage.getItem("savedJobs");
    if(retrivedsaved!=null)
      this.jobs = JSON.parse(retrivedsaved);
  }

}
