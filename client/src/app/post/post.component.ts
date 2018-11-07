import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.css' ]
})
export class PostComponent implements OnInit {
	postData = {};

	constructor(private apiService: ApiService) {}

	ngOnInit() {}

	post = () => {
		this.apiService.addPost(this.postData);
	}
}
