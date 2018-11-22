import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppPipesModule } from '../pipes/pipes.module';
import { HomePage } from './home.page';
import { DataService } from '../services/data/data.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppPipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
