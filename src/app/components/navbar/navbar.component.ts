import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  last_query: string = "Search";
  myForm: FormGroup;
  companyList: String[] = [
    "company",
    "Facebook",
    "Apple",
    "Netflix"
  ];

  private createForm() {
    this.myForm = this.formBuilder.group({
      query: [this.last_query],
      company: [""],
    });
  }
  submitForm({ value, valid }: { value: any, valid: boolean }) {
    if(valid){
      this.last_query = value.query;
      this.searchService.search(value.query,value.company).subscribe(
        res => {
          console.log("search result");
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    }
    
  }
  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
    ) { }

  ngOnInit() {
    this.createForm();
  }

}
