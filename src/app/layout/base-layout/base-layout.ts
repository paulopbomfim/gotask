import { Component } from '@angular/core';
import {Navbar} from "../../components/navbar/navbar";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-base-layout',
  imports: [
    Navbar,
    RouterOutlet
  ],
  templateUrl: './base-layout.html',
  styleUrl: './base-layout.css'
})
export class BaseLayout {

}
