import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InscriptionService } from '../../../services/inscription/inscription.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {}

