import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonebookService } from '../services/phonebook.service';

@Component({
	selector: 'app-phonebook',
	templateUrl: './phonebook.page.html',
	styleUrls: ['./phonebook.page.scss'],
})
export class PhonebookPage implements OnInit {

	constructor(private __phonebook: PhonebookService, private __route: ActivatedRoute) { }

	phonebook: any = {};

	async ngOnInit() {}

	async ionViewDidEnter(){
		const phonebookId = this.__route.snapshot.params;
		if (!phonebookId.id) return console.log('Could not find the id;');
		this.phonebook = await this.__phonebook.getOnePhonebook(phonebookId.id);
		console.log(this.phonebook);
	}

	callContact(contact: any){
		console.log(contact);
	}

	EmailContact(contact: any){
		console.log(contact);
	}
}
