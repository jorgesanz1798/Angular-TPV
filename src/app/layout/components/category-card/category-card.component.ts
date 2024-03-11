import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  standalone: true,
  imports: [MaterialModule, UpperCasePipe],
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input('cardTitle') cardTitle!: string;
  @Input('cardSubtitle') cardSubtitle!: string;

  constructor(
    private router: Router,
  ) { }

  navigate(cardTitle: string) {
    console.log(cardTitle)
    this.router.navigate(['/home/product',cardTitle]); 
  }
}
