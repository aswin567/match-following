import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

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
  sub: any;
  userLevel:string;
  baseArray: Array<MatchFollowing> = [];
  toBeMatchedArray: Array<MatchFollowing> = [];
  private answerArray:Array<number>=[]
  animals: Array<any> = [
    { name: 'Rabbit', value: 1 },
    { name: 'Sheep', value: 2 },
    { name: 'Cow', value: 3 },
    { name: 'Duck', value: 4 },
    { name: 'Turkey', value: 5 }
  ];


  homes: Array<any> = [
    { name: 'Burrow', value: 1 },
    { name: 'Pen', value: 2 },
    { name: 'Barn', value: 3 },
    { name: 'Pond', value: 4 },
    { name: 'Farm', value: 5 },
    { name: 'House', value: 6 }
  ];



  constructor(public snackBar: MatSnackBar, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.addItemtoBaseArr();
    this.addItemtoMatchedArr();
    this.sub = this.route.params.subscribe(params => {
      this.userLevel = params['id']; 
   });
  }

  ngOnDestroy(){

  }
  addItemtoBaseArr() {
    this.baseArray.push({
      content: null,
      matched: 0
    })
  }

  addItemtoMatchedArr() {
    this.toBeMatchedArray.push({
      content: null,
      matched: 0
    })
  }

  onAddBaseArray() {
    if (this.baseArray.length != 0) {
      const baseItem: MatchFollowing = this.baseArray[this.baseArray.length - 1]
      if (baseItem.content !== null) {
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
      if (matchItem.content !== null) {
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
      duration: (message.length*100),
    });
  }

  onCheckMatch() {
        this.arraysEqual(this.answerArray, this.toBeMatchedArray);

  }

  onReset() {
    this.baseArray = [];
    this.toBeMatchedArray = [];
    this.addItemtoBaseArr();
    this.addItemtoMatchedArr();
  }

  checkHomesSelected(value: number): boolean {
    return this.toBeMatchedArray.some((item: MatchFollowing) => {
      if (item.content === value) {
        return true;
      } else {
        return false;
      }
    });
  }

  checkAnimalsSelected(value: number): boolean {
    return this.baseArray.some((item: MatchFollowing) => {
      if (item.content === value) {
        return true;
      } else {
        return false;
      }
    });
  }

  arraysEqual(arr1:Array<number>, arr2:Array<MatchFollowing>) {
    for (var i = arr1.length; i--;) {
      if (arr1[i]!== arr2[i].content) {
        arr2[i].matched = false;
      } else {
        arr2[i].matched = true;
      }
    }
  }

  onReorder(){}

  shuffle(a:Array<any>) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
  return a;  
}
createAnswerArray(a:Array<MatchFollowing>){
  this.answerArray=a.map((item)=>{
    return item.content;
  })
}
  goToStudentView() {
    if (this.baseArray[this.baseArray.length - 1].content !== null && this.toBeMatchedArray[this.toBeMatchedArray.length - 1].content !== null) {
      if (this.toBeMatchedArray.length >= this.baseArray.length) {
        this.createAnswerArray(this.toBeMatchedArray);
        this.toBeMatchedArray=this.shuffle(this.toBeMatchedArray);
        this.router.navigate(['/mf', 'student']);
      } else {
        this.showSnacksBar('Number of items in list B bust be grater than or equal to list A');
      }
    } else {
      this.showSnacksBar('Before checking you must make the place holders valid');
    }
  }
}
