import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	messages = [];
	constructor(private http: Http) {}

	getMessages() {
		this.http.get('http://localhost:3000/posts').subscribe((res) => {
			this.messages = res.json();
		});
	}
}
