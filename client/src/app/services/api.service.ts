import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	messages = [];
	users = [];
	user = {};
	route = 'http://localhost:3000';

	constructor(private http: Http) {}

	getMessages() {
		this.http.get(this.route + '/posts').subscribe((res) => {
			this.messages = res.json();
		});
	}

	getUsers() {
		this.http.get(this.route + '/users').subscribe((res) => {
			this.users = res.json();
		});
	}

	getUser(id) {
		return this.http.get(`${this.route}/users/${id}`);
	}

	addPost(postData) {
		this.http.post(this.route + '/posts', postData).subscribe((res) => {
			console.log(res);
		});
	}
}
