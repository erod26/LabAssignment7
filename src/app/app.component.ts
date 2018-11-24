import { Component } from '@angular/core';
import { ToastService } from './toast/toast.service';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toast-app';
  toastTypes: Array<string> = [];

  constructor(private toastService: ToastService) {
    this.toastTypes = ['success', 'info', 'warning', 'danger'];
  }
  //[success, info, warning, danger] is what we need to randomized in our code
  //to show this, make an array with the names of the colors that the html will
  //recognize. Afterwards, follow the code below; we make a variable called rand
  //which sets an array of numbers randomized, here times by 4 and afterwards, you
  //can use rand with toastTypes to cycle through colors randomly.
  showToast() {

    const rand = Math.floor(Math.random() * 4);
    console.log('my random number is : ' + rand);
    const toastType = this.toastTypes[rand];
    const toastMessage = 'Hi, this is a message, my random number is: ' + rand;
    const duration = 4000;
    this.toastService.showToast(toastType, toastMessage, duration);
  }

}
