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
  @Input() jobDetail: Job;

  // jobDetail: Job;

  getDetail(job: Job){
    this.jobDetail = job;
  }

  constructor() { }

  ngOnInit() {
    if(!this.jobDetail)
      this.jobDetail = this.jobs[0];
    var retrive = localStorage.getItem("savedJobs");
    if(retrive!=null){
      var newSave:Job[] = JSON.parse(retrive);
      var saveSet: Set<string> = new Set<string>();
      for(var i=0;i<newSave.length;i++){
        saveSet.add(newSave[i].id);
      }
      for(var i=0;i<this.jobs.length;i++){
        if(saveSet.has(this.jobs[i].id)){
          this.jobs[i].saved = true;
        }else{
          this.jobs[i].saved = false;
        }
      }
    }
  }

}
