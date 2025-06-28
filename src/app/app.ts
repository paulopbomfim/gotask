import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UsedIconsNames} from './enums/UsedIconsNames.enum';
import {Navbar} from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'GoTask';
  protected readonly UsedIconsNames = UsedIconsNames;
}
