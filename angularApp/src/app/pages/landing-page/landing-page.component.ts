import { Component } from '@angular/core';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}