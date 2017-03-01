import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `

    <button (click)="onClicked()">Click Me! for event binding</button>
    <button (click)="onClickedCustom()">Click Me! for custom event binding</button>
  `,
  styles: []
})
export class EventBindingComponent{

  @Output('clickable') clicked = new EventEmitter<string>(); // output icerisine onu ifade eden string bir deger verebiliyoruz.

  onClicked(){
    alert('event binding calisti!'); // for event binding
  }

  onClickedCustom(){
    this.clicked.emit('Emit calisti - custom event binding');
  }

}
