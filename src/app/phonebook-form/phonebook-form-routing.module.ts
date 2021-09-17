import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonebookFormPage } from './phonebook-form.page';

const routes: Routes = [
  {
    path: '',
    component: PhonebookFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonebookFormPageRoutingModule {}
