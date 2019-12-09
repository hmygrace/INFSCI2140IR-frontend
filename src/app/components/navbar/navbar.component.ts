import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { SearchService } from 'src/app/service/search.service';
import { GetallService } from 'src/app/service/getall.service';
import { JobdataService } from 'src/app/service/jobdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  last_query: string;
  last_company: string;
  myForm: FormGroup;
  companyList: String[] = [
    "company",
    "Facebook",
    "Apple",
    "Netflix"
  ];

  private createForm() {
    this.myForm = this.formBuilder.group({
      query: [this.last_query?this.last_query:""],
      company: [this.last_company?this.last_company:"company"],//
    });
  }
  submitForm({ value, valid }: { value: any, valid: boolean }) {
    if(valid){
      this.last_query = value.query;
      console.log("query: "+value.query+"  company: "+value.company);
      localStorage.setItem("last_query",this.last_query);
      localStorage.setItem("last_company",value.company);
      location.reload();
      // this.searchService.search(value.query,value.company).subscribe(
      //   res => {
      //     console.log("search result");
      //     console.log(res);
      //     // this.jobdataService.setData(res);
      //     // location.reload();
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
    }
    
  }
  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private getallService: GetallService,
    private jobdataService: JobdataService
    ) { }

  ngOnInit() {
    var query = localStorage.getItem("last_query");
    this.last_query =query;
    var company = localStorage.getItem("last_company");
    this.last_company = company?company:"company";
    this.createForm();
  }

}
