import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['../app.component.css', './contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddTableClick(event: any) {
    event.preventDefault();
    console.log('Add clicked!');
  }

  onEditTableClick(event: any) {
    event.preventDefault();
    console.log('Edit clicked!');
  }

  onRemoveTableClick(event: any) {
    event.preventDefault();
    console.log('Remove clicked!');
  }

  onRefreshTableClick(event: any) {
    event.preventDefault();
    console.log('Refresh clicked!');
  }

}
