import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list:Array<any>=[];
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getAPIdata().then(res=>{
      this.list=res.data.summary;
      console.log(res.data);
    })
  }


}
