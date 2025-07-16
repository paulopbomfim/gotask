import { Component } from '@angular/core';
import {Input} from '../../components/input/input';
import {Button} from '../../components/button/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-task-form',
  imports: [
    Input,
    Button,
    RouterLink,
  ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {

}
