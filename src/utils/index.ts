export interface IPlayer {
    name: string;
    health: number;
    fight: (range: number) => void;
}

export interface IRanger extends IPlayer {
    stop: (intervalId: number, callback: () => void) => void;
}

abstract class Player implements IPlayer {
    name: string = "";
    health: number = 0;

    protected constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }

    fight(range: number): void {
        const healthDecrease = Math.floor(Math.random() * range);
        this.health -= healthDecrease;
        if(Math.sign(this.health) === -1) {
            this.health = 0;
        }
    }

    protected stop(intervalId: number,  callback: () => void): void {

    }
    
}

export class Ranger extends Player implements IRanger {
    constructor(name: string, health: number) {
        super(name, health);
        this.name = name;
        this.health = health;
    }

    stop(intervalId: number,  callback: () => void): void {
        setTimeout(()=>{
            callback();
            clearInterval(intervalId);
        }, 3000);    
    } 
    
}
