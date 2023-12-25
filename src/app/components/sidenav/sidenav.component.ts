import { Component, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() extraClass = '';
  @Input() rounded = false;

  public formsMenu = [
    {
      title: "Acciones correctivas",
      link: "/acciones"
    },
    {
      title: "Acciones correctivas",
      link: "/acciones"
    },
    {
      title: "Acciones correctivas",
      link: "/acciones"
    },
    {
      title: "Acciones correctivas",
      link: "/acciones"
    },
    {
      title: "Acciones correctivas",
      link: "/acciones"
    },
  ]
  constructor(readonly sidebarService: SidebarService) {}
}
