import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {BaseLayout} from './layout/base-layout/base-layout';
import {Login} from './pages/login/login';
import {ModalLayout} from './layout/modal-layout/modal-layout';
import {TaskForm} from './pages/task-form/task-form';
import {UsedIconsNames} from './enums/UsedIconsNames.enum';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: Home,
        children: [
          {
            path: 'task',
            component: ModalLayout,
            children: [
              {
                path: 'create',
                component: TaskForm,
                data: {
                  title: "Criar tarefa",
                  icon: UsedIconsNames.PENCIL_FILL,
                  type: "create"
                }
              },
              {
                path: 'edit',
                component: TaskForm,
                data: {
                  title: "Editar tarefa",
                  icon: UsedIconsNames.PENCIL_FILL,
                  type: "edit"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: Login
  }
];
