import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class PhonebookService {

	constructor(private __http: HttpClient) {}

	url = environment.url;

	async getAllPhonebooks(){
		return await this.__http.get(`${this.url}`).toPromise();
	}

	async getOnePhonebook(phonebookId: string){
		return await this.__http.get(`${this.url}/${phonebookId}`).toPromise();
	}

	async searchPhonebook(search_text: string){
		return await this.__http.get(`${this.url}/search?s=${search_text}`).toPromise();
	}
}
