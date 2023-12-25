import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Input() title!: string;

  @Output() menuToggled = new EventEmitter<boolean>(); // Emitir evento

  public user: string = '';

  

  isSidebarOpen = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private _modalService: ModalService
  ) //   public authService: AuthService,
  //  private generalService: GeneralService
  {}

  ngAfterViewInit() {
    //console.log(this.authService.user);
    const sidebar: HTMLElement =
      this.el.nativeElement.querySelector('.sidebar');
    const closeBtn: HTMLElement = this.el.nativeElement.querySelector('#btn');
    const searchBtn: HTMLElement =
      this.el.nativeElement.querySelector('.bx-search');

    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      this.menuBtnChange(sidebar, closeBtn);
    });

    searchBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      this.menuBtnChange(sidebar, closeBtn);
    });
  }

  private menuBtnChange(sidebar: HTMLElement, closeBtn: HTMLElement) {
    if (sidebar.classList.contains('open')) {
      this.renderer.removeClass(closeBtn, 'bx-menu');
      this.renderer.addClass(closeBtn, 'bx-menu-alt-right');
      this.isSidebarOpen = true;
      this.menuToggled.emit(this.isSidebarOpen);
    } else {
      this.isSidebarOpen = false;
      this.menuToggled.emit(this.isSidebarOpen);
      this.renderer.removeClass(closeBtn, 'bx-menu-alt-right');
      this.renderer.addClass(closeBtn, 'bx-menu');
    }
  }

  public async singOut() {
    const result = await this._modalService.alertMessage(
      '¿Estás seguro de que deseas salir?',
      '¡Atención! Cualquier cambio no guardado se perderá.',
      'question'
    );

    if (result.isConfirmed) {
      this._modalService.show('', 'Cerrando Sesión...');
    //  await this.authService.signOut();
      setTimeout(() => {
        this._modalService.hide();
      //  this.generalService.navigateTo('/login');
        window.location.reload();
      }, 1000);
    }
  }
}
