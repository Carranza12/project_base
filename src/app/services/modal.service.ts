import { Injectable } from '@angular/core';
import Swal, { SweetAlertPosition, SweetAlertIcon } from 'sweetalert2';


export type modalType = 'success' | 'error' | 'warning'| 'question';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  
  private element: any;

  constructor() {}

  public show(innerH2?: string, innerP?: string): void {
    const spinnerH2: any = window.document.querySelector('#spinner h2');
    const spinnerP: any = window.document.querySelector('#spinner p');
    this.element.classList.add('spinner-show');
    spinnerH2.textContent = innerH2 || 'Un momento';
    spinnerP.textContent = innerP || 'Cargando...';
  }

  public hide(): void {
    this.element.classList.remove('spinner-show');
  }

  public alertMessage(title: string, text: string, type:modalType) {
    //types: success, question, error,warning
    return this.swalTimer('center', type, title, text, 0, true, false);
  }


  public swalTimer(
    position: SweetAlertPosition,
    icon: SweetAlertIcon,
    title: string,
    text: string,
    timer: number,
    showConfirmButton: boolean,
    showCancelButton: boolean
  ) {
    return Swal.fire({
      position: position,
      icon: icon,
      title: title,
      text: text,
      showConfirmButton: showConfirmButton,
      showCancelButton: showCancelButton,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      timer: timer,
      customClass: {
        confirmButton: 'boton swall', 
      }
    });
  }
}
