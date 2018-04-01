import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';
@Component({
 selector : "calculator",
 templateUrl:"calculator.component.html",
 styleUrls: ["calculator.component.css"]
})
export class CalculatorComponent{
   
   model:CalculatorModel = new CalculatorModel();

}