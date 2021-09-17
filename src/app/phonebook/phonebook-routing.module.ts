import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonebookPage } from './phonebook.page';

const routes: Routes = [
  {
    path: '',
    component: PhonebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonebookPageRoutingModule {}
