import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {UsedIconsNames} from '../../enums/UsedIconsNames.enum';

@Component({
  selector: 'app-navbar',
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  protected readonly UsedIconsNames = UsedIconsNames;

}
