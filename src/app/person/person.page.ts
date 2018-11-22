import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss']
})
export class PersonPage implements OnInit {
  person: any;
  isLoggedIn = false;

  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this._dataService.getPerson(params.get('id'))
        )
      )
      .subscribe(person => {
        this.person = person;
      });
  }

  login(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
