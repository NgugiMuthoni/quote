import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[];

  toggleDetail(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
    this.quote[index].showSubmitted = !this.quote[index].showSubmitted;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`);

      if (toDelete){
        this.quote.splice(index, 1);
      }
    }
  }

  constructor(){
    this.quote = [
      // tslint:disable-next-line:max-line-length
      new Quote(1, 'Genius is one percent inspiration and ninety-nine percent perspiration.', 'Thomas Edison', 'anon' , new Date(2020, 2, 14)),
      // tslint:disable-next-line:max-line-length
      new Quote(2, 'You can observe a lot just by watching.', ' Yogi Berra', 'anon' , new Date(2020, 1, 14)),
      new Quote(3, 'Difficulties increase the nearer we get to the goal.', 'Johann Wolfgang von Goethe', 'anon' , new Date(2020, 2, 1)),

    ];

  }
  addNewQuote(quote){
    const quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quote.push(quote);
  }

  ngOnInit(): void {
  }

}
