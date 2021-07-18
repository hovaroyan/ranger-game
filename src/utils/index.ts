export interface IRanger {
    name: string;
    health: number;
}

abstract class Ranger implements IRanger {
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
        console.log(this.health);
        
    }

    protected stop(intervalId: number,  callback: () => void): void {

    }
    
}

export class RangerOne extends Ranger {
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

export class RangerTwo extends Ranger {
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
