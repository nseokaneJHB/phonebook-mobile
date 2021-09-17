import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonebookFormPageRoutingModule } from './phonebook-form-routing.module';

import { PhonebookFormPage } from './phonebook-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonebookFormPageRoutingModule
  ],
  declarations: [PhonebookFormPage]
})
export class PhonebookFormPageModule {}
