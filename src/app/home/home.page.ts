import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  people: Array<any> = [];
  isLoggedIn = false;

  constructor(
    private _dataService: DataService,
    private _navCtrl: NavController
  ) {}

  ngOnInit() {
    this._dataService.getPeopleList().subscribe((people: any) => {
      this.people = people;
    });
  }

  login() {
    console.log('Logging');
    this.isLoggedIn = !this.isLoggedIn;
  }
  openPerson(index) {
    this._navCtrl.navigateForward(`/person/${index}`);
  }
}
