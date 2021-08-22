import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@client/server-interfaces';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/server/hello');
  constructor(private http: HttpClient) {}
}
