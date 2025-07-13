import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {UsedIconsNames} from '../../enums/UsedIconsNames.enum';

@Component({
  selector: 'app-modal-layout',
  imports: [
    RouterOutlet
  ],
  templateUrl: './modal-layout.html',
  styleUrl: './modal-layout.css'
})
export class ModalLayout implements OnInit{

  protected readonly UsedIconsNames = UsedIconsNames;

  ModalIcon = signal("");
  ModalTitle = signal("");

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.children.forEach(child => {
      child.data.subscribe(data => {
        this.ModalIcon.set(data['icon'])
        this.ModalTitle.set(data['title'])
      })
    })
  }

  closeModalAction() {
    this.router.navigate(['/'])
      .then(success => console.log(success))
      .catch(err => console.log(err));
  }
}
