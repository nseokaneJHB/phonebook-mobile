import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { PhonebookService } from '../services/phonebook.service';

@Component({
	selector: 'app-phonebook',
	templateUrl: './phonebook.page.html',
	styleUrls: ['./phonebook.page.scss'],
})
export class PhonebookPage implements OnInit {

	constructor(public __phonebook: PhonebookService, private __route: ActivatedRoute, public __action: ActionSheetController, private __router: Router, private __alert: AlertController) { }

	phonebook: any = {};

	async ngOnInit() {}

	async ionViewDidEnter(){
		const phonebookId = this.__route.snapshot.params;
		if (!phonebookId.id) return this.__phonebook.showToaster({ message: 'Could not find the id;', color: 'danger' });
		this.phonebook = await this.__phonebook.getOnePhonebook(phonebookId.id);
	}

	async openActions() {
		const actionSheet = await this.__action.create({
			header: 'Contact Actions',
			cssClass: 'contact__actions',
			buttons: [
				{
					text: 'Update',
					icon: 'create-outline',
					handler: () => {
						this.__router.navigate([`/update-phonebook/${this.phonebook.id}`])
					}
				}, {
					text: 'Delete',
					role: 'destructive',
					icon: 'trash-outline',
					handler: () => {
						this.openAlert();
					}
				}, {
					text: 'Cancel',
					icon: 'close',
					role: 'cancel',
				}
			]
		});
		await actionSheet.present();
	}

	async openAlert() {
		const alert = await this.__alert.create({
			cssClass: 'delete__alert',
			header: 'Delete Contact!',
			message: `Are you sure you want to delete <strong>${this.phonebook.name}</strong>'s number?`,
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary'
				}, {
					text: 'Yes',
					handler: () => {
						this.__phonebook.deleteOnePhonebook(this.phonebook.id);
					}
				}
			]
		});
	
		await alert.present();
	}
}
