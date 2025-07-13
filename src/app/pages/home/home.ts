import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {UsedIconsNames} from '../../enums/UsedIconsNames.enum';
import {Button} from '../../components/button/button';
import {NgOptimizedImage} from '@angular/common';
import {TaskCard} from '../../components/task-card/task-card';
import {
  CdkDrag,
  CdkDropList,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDropListGroup
} from '@angular/cdk/drag-drop';
import {RouterLink, RouterOutlet} from '@angular/router';

interface Task {
  id: number;
  title: string;
  description: string;
  comments: number;
  status: string;
}

@Component({
  selector: 'app-home',
  imports: [
    Button,
    NgOptimizedImage,
    TaskCard,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  protected readonly UsedIconsNames = UsedIconsNames;

  todoList: WritableSignal<Task[]> = signal([]);
  inProgressList: WritableSignal<Task[]> = signal([]);
  doneList: WritableSignal<Task[]> = signal([]);


  ngOnInit() {
    this.todoList.set([
      {
        id: 1,
        title: "Implementar paginação na lista de usuários",
        description: "Atualmente, a lista de usuários é carregada integralmente, impactando o desempenho da página. O objetivo é implementar a paginação para otimizar a exibição e melhorar a performance.",
        comments: 2,
        status: "todo"
      },
      {
        id: 2,
        title: "Implementar paginação na lista de usuários",
        description: "Atualmente, a lista de usuários é carregada integralmente, impactando o desempenho da página. O objetivo é implementar a paginação para otimizar a exibição e melhorar a performance.",
        comments: 1,
        status: "todo"
      },
    ])
  }


  drop(event: CdkDragDrop<Task[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }

    else {



      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      event.container.data[event.currentIndex].status = event.container.element.nativeElement.id;
      const updatedTask = event.container.data[event.currentIndex]

      this.requestUpdateStatus(updatedTask)
    }
  }

  requestUpdateStatus(task: Task) {
    console.log(task)
  }
}
