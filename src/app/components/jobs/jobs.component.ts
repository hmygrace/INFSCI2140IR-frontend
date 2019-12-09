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
            console.log("get all job data from server");
          }
        );
    }else{
      var company = localStorage.getItem("last_company");
      company = company==null? "company":company;
      this.searchService.search(last_query,company).subscribe(
        res => {
          console.log("search result");
          console.log(res);
          this.jobs=res;
          // this.jobdataService.setData(res);
          // location.reload();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
