import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonPage } from './person.page';
import { AppPipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: PersonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppPipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonPage]
})
export class PersonPageModule {}