import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';
  display = '0';
  firstValue: number = 0;
  action: string | null = null;
  

  numClick(val:number|string){
    if (this.display == '0'){
      this.display = val.toString();
    } else{
      this.display = `${this.display}${val}`;
    }
  }


  operationClick(operation:string){
    if(operation == '+'){
      this.firstValue = Number(this.display);
      this.action = "addition";
      this.display = '0';
    }
    if(operation == '-'){
      this.firstValue = Number(this.display);
      this.action = "subtract";
      this.display = '0';
    }
    if(operation == 'C'){
      this.action = "clear";
      this.display = '0';
    }
    if(operation == '='){
      this.calculate(this.action);
    }

  }

  calculate(action:string | null = null){
    let a:number = this.firstValue;  
    let b:number = Number(this.display);
    if (action == "addition"){
      let calc = a+b;
      this.display = `${calc}`;
    }

    if (action == "subtract"){
      let calc = a-b;
      this.display = `${calc}`;
    }

  }









}
