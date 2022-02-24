import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mn-kazekage-vertical-card',
  templateUrl: './kazekage-vertical-card.component.html',
  styleUrls: ['./kazekage-vertical-card.component.css']
})
export class KazekageVerticalCardComponent implements OnInit {
  @Input() kaze: string;
  @Input() start: string;
  @Input() end: string;
  @Input() term: string;
  @Input() council: string;
  @Input() anbu: string;
  @Input() advisory: string;
  @Input() njonin: string;
  @Input() nchunin: string;
  @Input() nsjonin: string;

  constructor() { 
      this.kaze = "default kazekage",
      this.start = "start date",
      this.end = "end date",
      this.term = "term",
      this.council = "name",
      this.anbu = "name",
      this.advisory = "name",
      this.njonin = "name",
      this.nchunin = "name",
      this.nsjonin = "name"

  }

  ngOnInit(): void {
  }

}
