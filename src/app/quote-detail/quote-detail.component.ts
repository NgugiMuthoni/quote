import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  constructor() { }

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  numberoflikes = 0;
  numberofdislikes = 0;
  counter: number;
  quoteDelete(complete: boolean){
    this.isComplete.emit(complete);
  }
  likebuttonclick(){
    this.numberoflikes++;
  }
  dislikebuttonclick(){
    this.numberofdislikes++;
  }

  ngOnInit(): void {
  }

}
