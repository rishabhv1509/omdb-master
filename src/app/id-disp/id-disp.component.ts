import { Component, OnInit } from '@angular/core';
import {SendService} from '../send.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-id-disp',
  templateUrl: './id-disp.component.html',
  styleUrls: ['./id-disp.component.css']
})
export class IdDispComponent implements OnInit {
  public result:object;
  constructor(private fetch:SendService,private _route:ActivatedRoute) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id);
    this.fetch.getMovieId(id).subscribe((result)=>{
      this.result=result;
      console.log(result);

    },(error)=>{
      console.log("something went wrong");
    });


  }

}
