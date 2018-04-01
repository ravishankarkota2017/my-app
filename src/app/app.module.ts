import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './Calculator/calculator.component';
import { NewCalculatorComponent1 } from './NewCalculator1/newcalculator1.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    NewCalculatorComponent1
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
