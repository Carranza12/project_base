import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';
import { Subscription, tap } from 'rxjs';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, MatInputModule, ReactiveFormsModule, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public firebase = inject(FirebaseService);
  public documents$!:Subscription[];
  public document$!:Subscription;
  ngOnInit(): void {
    this.initData()
  }

  initData(){
   this.firebase.getDocuments("prueba").pipe(tap()).subscribe((value)=>{
    this.documents$ = value;
  });
  }

  deleteDocument(id: string) {
    this.firebase.deleteDocument("prueba",id);
  }

  saveDocument() {
    const item = {
      name: "David"
    }
    this.firebase
      .addDocument("prueba",item)
      .subscribe((res) => res);
  }

  getDocument(){
    const id = "D0AWey0tI4IXsexINN6E";
    this.firebase.getDocument("prueba",id).subscribe((value) => {
      this.document$ = value
    });

   
  }

}
