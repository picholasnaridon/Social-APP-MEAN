import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	messages = [];
	users = [];
	user = {};
	constructor(private http: Http) {}

	getMessages() {
		this.http.get('http://localhost:3000/posts').subscribe((res) => {
			this.messages = res.json();
		});
	}

	getUsers() {
		this.http.get('http://localhost:3000/users').subscribe((res) => {
			this.users = res.json();
		});
	}

	getUser(id) {
		return this.http.get(`http://localhost:3000/profile/` + id);
	}
}
