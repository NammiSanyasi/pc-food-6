import { Input } from "@angular/core";
import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  @Input() img!: string;
  @Input() title!: string;
}
