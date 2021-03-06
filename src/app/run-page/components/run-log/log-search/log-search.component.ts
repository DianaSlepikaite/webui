import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';

@Component({
  selector: 'app-log-search',
  templateUrl: './log-search.component.html',
  styleUrls: ['./log-search.component.scss']
})
export class LogSearchComponent implements OnInit {
  
  @Input() testStructure: TestStructure = {};
  @Input() runlog: string;

  searchText: string = "";
  ibmButton: any;
  page: number =2;
  pages: number =11;
  invalid: boolean = false;
  disabled: boolean=false;
  items = [
    		{
    		content: "One",
    		selected: false
    		},
    	{
  			content: "Two",
    		selected: false,
    	},
    	{
    		content: "Three",
    		selected: false
    		},
    		{
    			content: "four",
    			selected: false
    		}
     ];
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {

  }

  onSelected(){

  }

  onSearch($event){

  }

  onValueChange(event: any){

    this.searchText = event;

  }




}
