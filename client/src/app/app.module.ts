import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './api.service';

const routes = [
	{
		path: 'register',
		component: RegisterComponent
	}
];

@NgModule({
	declarations: [ AppComponent, MessagesComponent, RegisterComponent ],
	imports: [
		BrowserModule,
		MatInputModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpModule,
		MatButtonModule,
		MatCardModule,
		MatToolbarModule,
		RouterModule.forRoot(routes)
	],
	providers: [ ApiService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
