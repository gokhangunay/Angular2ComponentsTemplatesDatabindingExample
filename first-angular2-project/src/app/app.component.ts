import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  template: `
               <h1>{{title}}</h1> <!--Binding-->
               <app-other></app-other>
               <app-another>
                  <div>
                    <h1>app.component.ts de app-another tagi icerisindeki deger calisti</h1>
                  </div>
               </app-another>
               <app-databinding></app-databinding>
            `,

//  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {

  title = 'app works!';

}
