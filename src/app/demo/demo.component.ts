import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  public Addition: any;
  public Subtraction: any;
  constructor(private obj: ArithmeticService) {
    this.Addition = obj.Add(5, 2);
    this.Subtraction = obj.Sub(10, 5);
  }
}
