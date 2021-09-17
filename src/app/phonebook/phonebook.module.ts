import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonebookPageRoutingModule } from './phonebook-routing.module';

import { PhonebookPage } from './phonebook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonebookPageRoutingModule
  ],
  declarations: [PhonebookPage]
})
export class PhonebookPageModule {}
