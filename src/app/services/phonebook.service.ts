import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class PhonebookService {

	constructor(private __http: HttpClient, private __router: Router, private __toast: ToastController) {}

	url = environment.url;

	addNewPhonebook(phonebook: any){
		this.__http.post(`${this.url}`, phonebook).subscribe((res: any) => {
			this.showToaster({ message: 'Contact added!', color: 'success' });
			this.__router.navigate(['/']);
		}, (err: any) => {
			if (err.error.errors){
				if (err.error.errors.name && err.error.errors.phone) return this.showToaster({ message: `Contact Name and Contact Phone Number are both required`, color: 'danger' });
				if (err.error.errors.name) return this.showToaster({ message: err.error.errors.name.message, color: 'danger' });
				if (err.error.errors.phone) return this.showToaster({ message: err.error.errors.phone.message, color: 'danger' });
				return console.log(err.error.errors);
			}

			if (err.error) return this.showToaster({ message: err.error.message, color: 'danger' });

			this.showToaster({ message: 'Cannot add contact at the moment', color: 'danger' });
		});
	}

	async getAllPhonebooks(){
		return await this.__http.get(`${this.url}`).toPromise();
	}

	async getOnePhonebook(phonebookId: string){
		return await this.__http.get(`${this.url}/${phonebookId}`).toPromise();
	}

	updateOnePhonebook(phonebook: any){
		return this.__http.patch(`${this.url}/${phonebook.id}`, phonebook).subscribe((res: any) => {
			this.showToaster({ message: 'Contact updated!', color: 'success' });
			this.__router.navigate(['/']);
		}, (err: any) => {
			console.log(err.error.errors);
			this.showToaster({ message: 'Cannot update contact at the moment', color: 'danger' });
		});
	}

	deleteOnePhonebook(phonebookId: string){
		return this.__http.delete(`${this.url}/${phonebookId}`).subscribe((res: any) => {
			this.showToaster({ message: 'Contact deleted!', color: 'warning' });
			this.__router.navigate(['/']);
		}, (err: any) => {
			console.log(err.error.errors);
			this.showToaster({ message: 'Cannot delete contact at the moment', color: 'danger' });
		});
	}

	async searchPhonebook(search_text: string){
		return await this.__http.get(`${this.url}/search?s=${search_text}`).toPromise();
	}

	async showToaster(options: any){
		const toast = await this.__toast.create({
			cssClass: 'custom__toaster',
			message: options.message,
			color: options.color,
			position: 'middle',
			duration: 3000
		});
		toast.present();
	}
}
