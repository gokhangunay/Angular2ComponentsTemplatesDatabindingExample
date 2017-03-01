import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{

  stringValue = "Databinding string degeri";
  numberValue = 2;

  onTest(){
    return true;
  }

  onClickedCustom(value: String){
    alert(value);
  }

}
