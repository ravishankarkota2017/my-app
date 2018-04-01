import { Component } from '@angular/core';
import { CalculatorModel } from '../Calculator/CalculatorModel';

@Component({
    selector: "newcalculator1",
    templateUrl: "newcalculator1.component.html",
    styleUrls: ["newcalculator1.component.css"]
})
export class NewCalculatorComponent1 {

    model: CalculatorModel = new CalculatorModel(); 


    ///version 1
   // Send(func) {
     
        // if (func == "add")
        //     this.model.add();
        // if (func == "subtract")
        //     this.model.subtract();
        // if (func == "multiply")
        //     this.model.multiply();
        // if (func == "divide")
        //     this.model.divide();
  //  }


      ///version 2 
      //Send(func) {
         //  this.model[func]();
   // }

}