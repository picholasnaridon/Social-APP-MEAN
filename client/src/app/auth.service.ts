import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	messages = [];
	constructor(private http: Http) {}

	register(registerData) {
		this.http.post('http://localhost:3000/register', registerData).subscribe((res) => {});
	}

	login(loginData) {
		console.log(loginData);
		this.http.post('http://localhost:3000/login', loginData).subscribe((res) => {
			console.log(res);
			localStorage.setItem('token', res.json().token);
		});
	}
}
