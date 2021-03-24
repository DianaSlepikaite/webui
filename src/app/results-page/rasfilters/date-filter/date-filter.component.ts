import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {

  @Output() valueChange = new EventEmitter();

  label : string =  "";
  placeholder : string = "DD/MM/YYYY";
  size : string = "md";
  invalidText : string = "Invalid";
  dateFormat : string =  "d/m/Y";

  formGroup : FormGroup;

  constructor(protected formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({ single: [null, Validators.required]});
  }

  ngOnInit(): void {
    this.getLocaleDateFormat();
  }

  changeDate($event){
    this.valueChange.emit($event);
  }

  get invalidSingle(){
    return this.formGroup.controls["single"].invalid && this.formGroup.controls["single"].touched;
  }

  getLocaleDateFormat() {
    var format;

    let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    var dateString = new Date("1970-02-01T00:00:00.000Z").toLocaleDateString(navigator.languages[0], options);

    if (dateString.indexOf("1970") == 0){
      format = "YYYY/MM/DD";
      this.dateFormat = "Y/m/d";
    } else if (dateString.indexOf("02") == 0){
      format = "MM/DD/YYYY";
      this.dateFormat = "m/d/Y";
    } else {
      format = "DD/MM/YYYY";
    }
    this.placeholder = format;
  }

}
