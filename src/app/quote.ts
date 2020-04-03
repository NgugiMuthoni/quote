export class Quote {
  public showDescription: boolean;
  public showSubmitted: boolean;
  constructor(public id: number, public name: string, public description: string, public  submitted: string, public completeDate: Date){
    this.showDescription = false;
    this.showSubmitted = false;
  }
}

