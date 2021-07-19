import { Component } from '@angular/core';
import { IRanger, Ranger } from 'src/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'ranger-game';
  rangerOne: IRanger | undefined = undefined;
  rangerTwo: IRanger | undefined = undefined;
  intervalId: any;
  isVisibleRangerOne: boolean = false;
  isVisibleRangerTwo: boolean = false;
  rangerOnePercentage: string = "";
  rangerTwoPercentage: string = "";
  startGame: boolean = false;
  stopGame: boolean = false;
  resetGame: boolean = true;
  rangerOneImg: string = "/assets/orange-ninja1.png";
  rangerTwoImg: string = "/assets/blue-ninja1.png";


  activateRangerOne() {
    this.rangerOne = new Ranger('Michelangelo', 100);
    this.isVisibleRangerOne = true;

    
  };

  activateRangerTwo() {
    this.rangerTwo = new Ranger('Leonardo', 100);
    this.isVisibleRangerTwo = true;

  };

  handleFight() {
      this.startGame = true;
      this.stopGame = true;
      this.resetGame = true;
      this.intervalId = setInterval(()=> {
      this.rangerOne?.fight(32);
      this.rangerTwo?.fight(30);
      this.rangerOnePercentage = `${this.rangerOne?.health}%`;
      this.rangerTwoPercentage = `${this.rangerTwo?.health}%`;

      if(!this?.rangerOne?.health) {
        clearInterval(this.intervalId);
        this.startGame = true;
        this.stopGame = false;
        this.resetGame = false;
      };

      if(!this?.rangerTwo?.health) {
        clearInterval(this.intervalId);
        this.startGame = true;
        this.stopGame = false;
        this.resetGame = false;
      }
    },1000);
  }


  handleStop() {
      this.rangerOne?.stop(this.intervalId, () => {
        this.startGame = false;
        this.stopGame = false;
      });
      this.rangerTwo?.stop(this.intervalId, () => {
        this.startGame = false;
        this.stopGame = false;
      });
  }

  handleReset() {
    this.rangerOne = undefined;
    this.rangerTwo = undefined;
    this.startGame = false;
    this.stopGame = false;
    this.resetGame = true;
    this.rangerOnePercentage= "";
    this.rangerTwoPercentage = "";
    this.isVisibleRangerOne = false;
    this.isVisibleRangerTwo = false;
  }
}
