import { Component } from '@angular/core';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'forms-examples',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './forms-examples.component.html',
  styleUrl: './forms-examples.component.scss',
})
export class FormsExamplesComponent {
  isMenuOpen = false;

  onMenuToggled(isOpen: boolean) {
    this.isMenuOpen = isOpen;
    console.log('menu activo: ', this.isMenuOpen);
  }
}
