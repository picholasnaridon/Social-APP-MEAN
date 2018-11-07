import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	messages = [];
	route = 'http://localhost:3000';

	constructor(private http: Http) {}

	register(registerData) {
		this.http.post(this.route + '/register', registerData).subscribe((res) => {});
	}

	login(loginData) {
		console.log(loginData);
		this.http.post(this.route + '/login', loginData).subscribe((res) => {
			console.log(res);
			localStorage.setItem('token', res.json().token);
		});
	}
}
