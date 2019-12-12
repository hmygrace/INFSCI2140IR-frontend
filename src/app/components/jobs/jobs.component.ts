import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';
import { JobdataService } from 'src/app/service/jobdata.service';
import { GetallService } from 'src/app/service/getall.service';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];
  constructor(private jobdataService: JobdataService,
    private getallService: GetallService,
    private searchService: SearchService) { }

  ngOnInit() {
    // this.jobs = this.jobdataService.getData();
    // if(this.jobdataService.getData.length==0){
    //   this.getallService.getAllJobs()
    //   .subscribe(
    //     res => {
    //       this.jobdataService.setData(res);
    //       this.jobs = this.jobdataService.getData();
    //       console.log("get all job data from server");
    //     }
    //   );
    // }

    var last_query = localStorage.getItem("last_query");
    if(last_query==null||last_query==""){
        this.getallService.getAllJobs()
        .subscribe(
          res => {
            this.jobdataService.setData(res);
            this.jobs = this.jobdataService.getData();
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
            console.log("get all job data from server");
            this.jobs[0] = this.highlight(this.jobs[0]);
          }
        );
    }else{
      var company = localStorage.getItem("last_company");
      company = company==null? "company":company;
      var location = localStorage.getItem("last_location");
      this.searchService.search(last_query,location,company).subscribe(
        res => {
          console.log("search result");
          console.log(res);
          this.jobs=res;
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
          this.jobs[0] = this.highlight(this.jobs[0]);

          // this.jobdataService.setData(res);
          // location.reload();
        },
        error => {
          console.log(error);
        }
      );
    }
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
}
