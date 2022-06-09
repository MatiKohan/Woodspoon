export default abstract class MEvent{
    name: string;
    timeStamp: Date;
    counter: number;

    constructor(name: string){
        this.name = name;
        this.timeStamp = new Date();
    }

    increaseCount(){
        this.counter++;
    }
}