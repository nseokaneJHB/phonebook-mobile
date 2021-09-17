import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonebookFormPageRoutingModule } from './phonebook-form-routing.module';

import { PhonebookFormPage } from './phonebook-form.page';

@NgModule({
	imports: [
		PhonebookFormPageRoutingModule,
		ReactiveFormsModule,
		CommonModule,
		FormsModule,
		IonicModule,
	],
	declarations: [PhonebookFormPage]
})
export class PhonebookFormPageModule {}
