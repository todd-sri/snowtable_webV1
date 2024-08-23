import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-snow-crystal-loader',
  templateUrl: './snow-crystal-loader.component.html',
  styleUrl: './snow-crystal-loader.component.scss'
})
export class SnowCrystalLoaderComponent  implements OnChanges {
  @Input() isLoading!: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    if (changes['isLoading']) {
      this.isLoading = changes['isLoading'].currentValue;
      // Logic to handle changes in the `isLoading` property can be added here
      console.log('isLoading changed:', changes['isLoading'].currentValue);
    }
  }

}
