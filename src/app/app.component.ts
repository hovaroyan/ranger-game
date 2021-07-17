import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { RangerOne, RangerTwo } from 'src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'ranger-game';
  rangerOne: any;
  rangerTwo: any;
  intervalId: any = 0;
  startGame: boolean = false;
  isVisibleRangerOne = false;
  isVisibleRangerTwo = false;
  rangerOnePercentage: string = "";
  rangerTwoPercentage: string = "";


  activateRangerOne() {
    this.rangerOne = new RangerOne('Michelangelo', 100);
    this.isVisibleRangerOne = true;
    
  };

  activateRangerTwo() {
    this.rangerTwo = new RangerTwo('Leonardo', 100);
    this.isVisibleRangerTwo = true;
  };

  handleFight() {
      this.startGame = true;
      this.intervalId = setInterval(()=> {
      this.rangerOne?.fight(32);
      this.rangerTwo?.fight(30);
      this.rangerOnePercentage = `${this.rangerOne.health}%`;
      this.rangerTwoPercentage = `${this.rangerTwo.health}%`;

      if(!this.rangerOne.health) {
        clearInterval(this.intervalId);
      };

      if(!this.rangerTwo.health) {
        clearInterval(this.intervalId);
      }
    },1000);

    console.log(this.rangerOne.health);
    console.log(this.rangerTwo.health);
  }


  handleStop() {
      this.rangerOne.stop(this.intervalId);
      this.rangerTwo.stop(this.intervalId);
  }
}
