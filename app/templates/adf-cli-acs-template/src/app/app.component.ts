import { Component } from '@angular/core';
import { AlfrescoTranslationService, AuthenticationService } from 'ng2-alfresco-core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(translateService: AlfrescoTranslationService,
              private authService: AuthenticationService,
              private router: Router) {
    translateService.use('en');
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
