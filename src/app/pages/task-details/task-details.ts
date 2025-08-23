import { Component } from '@angular/core';
import {Input} from '../../components/input/input';
import {Button} from '../../components/button/button';

@Component({
  selector: 'app-task-details',
  imports: [
    Input,
    Button
  ],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css'
})
export class TaskDetails {

}
