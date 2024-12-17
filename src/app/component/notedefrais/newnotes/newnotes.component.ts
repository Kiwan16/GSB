import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-newnotes',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule],
  templateUrl: './newnotes.component.html',
  styleUrl: './newnotes.component.css'
})
export class NewnotesComponent {

notes = {
    type:'',
    libelle:'',
    montant:'',
    date:'',

}

istoggle = true;
togglepage(){
  this.istoggle = !this.istoggle;
}





}





