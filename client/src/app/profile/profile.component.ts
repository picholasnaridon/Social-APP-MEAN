import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
	constructor(private apiService: ApiService, private route: ActivatedRoute) {}

	profile;

	ngOnInit() {
		this.apiService.getUser(this.route.snapshot.params.id).subscribe((data) => {
			this.profile = data.json();
		});
	}
}
