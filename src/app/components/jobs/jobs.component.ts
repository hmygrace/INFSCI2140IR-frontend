import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [
    {
      id: "1",
      title: "Software Engineer",
      company: "Apple",
      location: "Pittsburgh, PA",
      description: "This is a testing job, may have description later."
    },{
      id: "2",
      title: "Software Developer",
      company: "Facebook",
      location: "Pittsburgh, PA",
      description: "This is a testing job, may have description later."
    },{
      id: "3",
      title: "Software Developer",
      company: "Facebook",
      location: "Pittsburgh, PA",
      description: "This is a testing job, may have description later."
    },{
      id: "4",
      title: "Software Developer",
      company: "Facebook",
      location: "Pittsburgh, PA",
      description: "This is a testing job, may have description later."
    },{
      id: "5",
      title: "Software Developer",
      company: "Facebook",
      location: "Pittsburgh, PA",
      description: "This is a testing job, may have description later."
    },{
      id: "6",
      title: "Software Developer",
      company: "Facebook",
      location: "Pittsburgh, PA",
      description: "This is a testing job, may have description later."
    },{
      id: "7",
      title: "Software Developer",
      company: "Facebook",
      location: "Pittsburgh, PA",
      description: "This is a testing job, may have description later."
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
