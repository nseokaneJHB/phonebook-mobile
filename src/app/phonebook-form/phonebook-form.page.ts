import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PhonebookService } from "../services/phonebook.service";

@Component({
	selector: 'app-phonebook-form',
	templateUrl: './phonebook-form.page.html',
	styleUrls: ['./phonebook-form.page.scss'],
})
export class PhonebookFormPage implements OnInit {

	constructor(private __phonebook: PhonebookService, private __route: ActivatedRoute) { }

	phonebookId: any = {};
	heading: string;

	phonebookForm = new FormGroup({
		id: new FormControl(''),
		name: new FormControl(''),
		phone: new FormControl(''),
		email: new FormControl(''),
	})

	ngOnInit() {}

	async ionViewDidEnter(){
		this.phonebookId = this.__route.snapshot.params;
		this.phonebookId.id ? this.heading = "Update Contact" : this.heading = "Add New Contact";
		if (this.phonebookId.id) this.phonebookForm.patchValue(await this.__phonebook.getOnePhonebook(this.phonebookId.id));
	}

	submitContact(){
		if (!this.phonebookId.id) return this.__phonebook.addNewPhonebook(this.phonebookForm.value);
		return this.__phonebook.updateOnePhonebook(this.phonebookForm.value);
	}
}
