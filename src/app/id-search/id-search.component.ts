import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-id-search',
  templateUrl: './id-search.component.html',
  styleUrls: ['./id-search.component.css']
})
export class IdSearchComponent implements OnInit {
  @Input() id: string;
  result: Object;

  constructor(private route: Router) {
  }

  ngOnInit() {
  }


  public searchI() {
    let ids = this.id;
    this.route.navigate(['disp', ids]);

  }
}
