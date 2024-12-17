import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewnotesComponent } from './component/notedefrais/newnotes/newnotes.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ConnexionComponent } from './component/connexion/connexion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NewnotesComponent,NavBarComponent,InscriptionComponent,ConnexionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GSB';
}
