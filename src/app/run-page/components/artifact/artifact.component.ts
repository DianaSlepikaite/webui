import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TestStructure } from 'galasa-ras-api-ts-rxjs';
import { HeaderService } from '../../../header/header.service';

@Component({
  selector: 'app-artifact',
  templateUrl: './artifact.component.html',
  styleUrls: ['./artifact.component.css']
})
export class ArtifactComponent implements OnInit {
  @Input() testStructure: TestStructure = {};

  constructor(private headerTitleService: HeaderService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Run test detail / Artifacts');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.testStructure.runName);
  }

}
