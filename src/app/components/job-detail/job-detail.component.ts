import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  @Input() job: Job;
  @Input() saved: boolean;

  saveJob(job: Job){
    console.log(job);
    var retrive = localStorage.getItem("savedJobs");
    var newSave: Job[] = [];
    if(retrive==null){
      job.saved = true;
      newSave.push(job);
    }else{
      newSave = JSON.parse(retrive);
      var saved: boolean = false;
      for(var i=0;i<newSave.length;i++){
        if(newSave[i].id==job.id){
          alert("You already saved this job! Please check on your saved menu.");
          saved=true;
        }
      }
      if(!saved){
        job.saved = true;
        newSave.push(job);
      }
    }
    localStorage.setItem("savedJobs",JSON.stringify(newSave));
    location.reload();
  }

  unsaveJob(job: Job){
    console.log(job);
    var retrive = localStorage.getItem("savedJobs");
    var newSave: Job[] = [];
    if(retrive==null){
      //may be something wrong
    }else{
      newSave = JSON.parse(retrive);
      for(var i=0;i<newSave.length;i++){
        if(newSave[i].id==job.id){
          newSave.splice(i,1);
          job.saved = false;
          break;
        }
      }
    }
    localStorage.setItem("savedJobs",JSON.stringify(newSave));
    console.log(newSave);
    location.reload();
  }

  constructor() { }

  ngOnInit() {
  }

}
