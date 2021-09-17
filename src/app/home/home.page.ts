import { Component, OnInit } from '@angular/core';
import { PhonebookService } from "../services/phonebook.service";

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	constructor(private __phonebook: PhonebookService) {}

	ngOnInit(): void {}

	phonebookList: any = [];

	async ionViewDidEnter(){
		this.phonebookList = await this.__phonebook.getAllPhonebooks();
		console.log(this.phonebookList[0]);
	}

	updatePhonebook(contact: any){
		console.log(contact);
	}

	deletePhonebook(contact: any){
		console.log(contact);
	}

}
