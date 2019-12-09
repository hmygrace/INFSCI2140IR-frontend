import { Injectable } from '@angular/core';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobdataService {
  private jobs: Job[] = [
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

  setData(data: Job[]){
    this.jobs = data;
  }
  
  getData():Job[]{
    return this.jobs;
  }
  constructor() { }
}
