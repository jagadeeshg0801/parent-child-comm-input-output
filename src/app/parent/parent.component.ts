import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentName: string ;
  parentObject: any;
  constructor() { }

  ngOnInit(): void {
  }

  receiveChildData(event: string){
    this.parentName = event;
  }

  updateParentName(){
    this.parentObject = {'name': this.parentName, 'roles': ['USER', 'ADMIN']};

  }

}
