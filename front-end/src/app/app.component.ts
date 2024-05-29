import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CrudComponent } from "./crud/crud.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        FormsModule,
        CrudComponent
    ]
})
export class AppComponent {
  title = 'front-end';
  
}
