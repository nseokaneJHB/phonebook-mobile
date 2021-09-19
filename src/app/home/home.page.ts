import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PhonebookService } from "../services/phonebook.service";

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	constructor(private __phonebook: PhonebookService,  private __alert: AlertController) {}

	ngOnInit(): void {}

	phonebookList: any = [];

	async ionViewDidEnter(){
		this.__phonebook.showLoading();
		this.phonebookList = await this.__phonebook.getAllPhonebooks();
	}

	async deletePhonebook(phonebook: any) {
		const alert = await this.__alert.create({
			cssClass: 'delete__alert',
			header: 'Delete Contact!',
			message: `Are you sure you want to delete <strong>${phonebook.name}</strong>'s number?`,
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary'
				}, {
					text: 'Yes',
					handler: () => {
						this.__phonebook.deleteOnePhonebook(phonebook.id);
						location.reload();
					}
				}
			]
		});
	
		await alert.present();
	}

	async searchContact(search: string){
		this.phonebookList = await this.__phonebook.searchPhonebook(search);
	}

}
