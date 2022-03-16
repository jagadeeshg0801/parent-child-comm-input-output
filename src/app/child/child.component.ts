import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input('childName') childName:string;
  @Output() sendChildEvent =  new EventEmitter();
  c_name = '';
  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(){
    this.sendChildEvent.emit(this.c_name)
  }

  ngOnChanges(changes: SimpleChanges): void {
      // if(changes && changes['childName'] && changes['childName'].currentValue != changes['childName'].previousValue){
      //   this.c_name = changes['childName'].currentValue;
      // }
  }

}
