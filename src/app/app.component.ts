import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { RangerOne, RangerTwo } from 'src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// {name: string; health: number; print: () => void; fight: () => void; stop: (intervalId: number) => void}
export class AppComponent {
  title: string = 'ranger-game';
  rangerOne: any;
  rangerTwo: any;
  intervalId: any = 0;

  activateRanger() {
    this.rangerOne = new RangerOne('michael', 100);
    
  };

  activateRangerTwo() {
    this.rangerTwo = new RangerTwo('raphael', 100);
  };

  handleFight() {
    this.intervalId = setInterval(()=> {
      this.rangerOne?.fight(40);
      this.rangerTwo?.fight(30);

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
      this.rangerOne.stop(this.intervalId)
      this.rangerTwo.stop(this.intervalId)
  }
}
