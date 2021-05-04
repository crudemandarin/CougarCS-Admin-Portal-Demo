import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-contact-search-component',
  templateUrl: './contact-search-component.component.html',
  styleUrls: ['./contact-search-component.component.css']
})
export class ContactSearchComponentComponent implements AfterViewInit {
  @ViewChild('searchInputField') searchInputFieldRef: HTMLElement;

  value = 'Clear me';
  filters: any[] = [ { name: 'NAME', checked: true }, { name: 'EMAIL', checked: false}, { name: 'PSID', checked: false } ];
  filter: string = 'NAME';

  ngAfterViewInit(): void {
    console.log(this.searchInputFieldRef)
  }

  onClearSearchFieldClick(event: any) {
    event.preventDefault();
    console.log('clear!');
  }

  onGoSearchClick(event: any) {
    event.preventDefault();
    console.log('search!')
  }


  onRadioButtonClick(event: any) {
    if (!event) return;
    console.log('onRadioButtonClick: ', event.value)
    this.filter = event.value;
  }
}
