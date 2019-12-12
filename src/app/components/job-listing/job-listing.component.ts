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
  p:number = 1;

  getDetail(job: Job){
    job = this.highlight(job);
    // console.log("job detail: "+job.description);
    this.jobDetail = job;
  }

  highlight(job: Job){
    var last_query = localStorage.getItem("last_query");
    console.log("last_query is "+last_query);
    if(last_query!=null&&last_query!=""){
      var query: string[] = last_query.split(" ");
      console.log("query: "+query);
      for(var word of query){
        console.log(word);
        const regex = new RegExp(word,'gi');
        job.description = job.description.replace(regex, (match)=>{
          // console.log("match: "+match);
          return `<strong>`+match+`</strong>`;
        });
      }
      console.log("job detail: "+job.description);
    }
    return job;
  }

  constructor() { }

  ngOnInit() {
    if(!this.jobDetail)
      this.jobs[0] = this.highlight(this.jobs[0]);
      this.jobDetail = this.jobs[0];
  }

}
