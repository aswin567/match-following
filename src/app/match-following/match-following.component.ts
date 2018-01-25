import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { MatSnackBar } from '@angular/material';


import { MatchFollowing } from './match-following';

@Component({
  selector: 'app-match-following',
  templateUrl: './match-following.component.html',
  styleUrls: ['./match-following.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class MatchFollowingComponent implements OnInit {
  // Declaration 
  baseArray: Array<MatchFollowing> = [];
  toBeMatchedArray: Array<MatchFollowing> = [];

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.addItemtoBaseArr();
    this.addItemtoMatchedArr();
  }

  addItemtoBaseArr() {
    this.baseArray.push({
      content: ''
    })
  }

  addItemtoMatchedArr() {
    this.toBeMatchedArray.push({
      content: ''
    })
  }

  onAddBaseArray() {
    if (this.baseArray.length != 0) {
      const baseItem: MatchFollowing = this.baseArray[this.baseArray.length - 1]
      if (baseItem.content.length !== 0) {
        this.addItemtoBaseArr();
      } else {
        this.showSnacksBar('Kindly fill the data');
      }
    } else {
      this.addItemtoBaseArr();
    }
  }

  onAddMatchedArray() {
    if (this.toBeMatchedArray.length != 0) {
      const matchItem: MatchFollowing = this.toBeMatchedArray[this.toBeMatchedArray.length - 1]
      if (matchItem.content.length !== 0) {
        this.addItemtoMatchedArr();
      } else {
        this.showSnacksBar('Kindly fill the data');
      }
    } else {
      this.addItemtoMatchedArr();
    }
  }

  showSnacksBar(message: string) {
    this.snackBar.open(message, 'ok', {
      duration: 1000,
    });
  }

  onCheckMatch() {
    if (this.baseArray[this.baseArray.length - 1].content.length !== 0 && this.toBeMatchedArray[this.toBeMatchedArray.length - 1].content.length !== 0) {
      if (this.toBeMatchedArray.length > this.baseArray.length) {

      } else {
        this.showSnacksBar('Number of items in list B bust be grater than list A');
      }
    } else {
      this.showSnacksBar('Before checking you must make the place holders valid');
    }
  }

  onReset(){
    this.baseArray=[];
    this.toBeMatchedArray=[];
    this.addItemtoBaseArr();
    this.addItemtoMatchedArr();
  }
}
