import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	registerData = {};
	constructor(private apiService: ApiService) {}

	ngOnInit() {}

	post = () => {
		console.log(this.registerData);
		this.apiService.register(this.registerData);
	}
}
