import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() inputValue: string = '0';
  @Input() diameter: string = '0';
  
  constructor() { }

  ngOnInit(): void {
  }

  get value(): string {
    const num = Number(this.inputValue);
    return (num * 10).toString();
  }

  get displayValue(): string {
    const value = Number(this.inputValue);
    return value.toFixed(1);
  }

  get valueAsNumber(): number {
    return Number(this.inputValue);
  }
}
