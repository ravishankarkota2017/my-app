import { Component } from '@angular/core';
@Component({
 selector : "greeter",
 templateUrl:"greeter.component.html",
 styleUrls: ["greeter.component.css"]
})
export class GreeterComponent{
    greeting : string = " Hi Rama";
    // constructor(){
    //     this.greeting = "Hi Rama";
    // }
    greet(greeter){
        this.greeting = `Hello ${greeter}`
    }
  }