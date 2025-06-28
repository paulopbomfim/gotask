import {Component, input} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})

export class Button {

label = input<string>("")
icon = input<string>("")
variant = input<'filled' | 'outline' | 'light'>("outline")
}
