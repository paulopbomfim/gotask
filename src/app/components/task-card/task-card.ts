import {Component, input} from '@angular/core';
import {UsedIconsNames} from "../../enums/UsedIconsNames.enum";

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCard {

    protected readonly UsedIconsNames = UsedIconsNames;

    title = input<string>("");
    description = input<string>("");
    comments = input<number>(0);
}
