import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ConnexionComponent } from '../connexion/connexion.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterModule,InscriptionComponent,ConnexionComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
