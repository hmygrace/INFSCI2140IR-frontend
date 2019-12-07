import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job';



@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  @Input() jobs: Job[];
  @Input() saved: boolean;

  jobDetail: Job;

  getDetail(job: Job){
    this.jobDetail = job;
  }

  constructor() { }

  ngOnInit() {
    this.jobDetail = this.jobs[0];
  }

}
