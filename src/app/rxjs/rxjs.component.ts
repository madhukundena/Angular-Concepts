import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable,ReplaySubject,Subject, subscribeOn } from 'rxjs';
import { ajax} from 'rxjs/ajax';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   //Oservable
  // const obserable = new Observable(obj => obj.next(Math.random()));
  // //subscriber 1
  // obserable.subscribe(result=>console.log('subscriber count'+result))
  // obserable.subscribe(d => console.log(d));
  // //subscriber 2
  // obserable.subscribe(d => console.log(d));

  // const subject1 = new Subject();
  // subject1.subscribe(d => console.log(d));
  // subject1.subscribe(d => console.log(d));
  // subject1.next(Math.random());
    
    
    // const subject2 = new Subject();
    // const data = ajax('https://jsonplaceholder.typicode.com/users');
    // subject2.subscribe(d => console.log(d));
    // subject2.subscribe(d => console.log(d));
    // const result = data.subscribe(subject2);

    //subject
    // const subject3 = new Subject();

    // subject3.subscribe(d => console.log(`subject subsriber1: ${d}`));
    // subject3.next(2020);
    // subject3.subscribe(d => console.log(`subject subsriber2: ${d}`)); //returned nothing


    // //behaviour
    // const bsubject = new BehaviorSubject<number>(12);
    // bsubject.subscribe(d => console.log(`Behaviour subject subscriber 1 ${d}`));
    // bsubject.next(200)
    // bsubject.subscribe(d => console.log(`Behaviour subject subscriber 2 ${d}`));

    //replaysubject
    //$message  help when you go through
    // const message$ = new ReplaySubject(2);
    // message$.next('hello');
    // message$.next('how are you?');
    // message$.next('Where are you from?');
    // message$.next('Stay home stay safe');
    // message$.subscribe(msg => console.log(`User1: ${msg}`));

    // message$.next('get vaccinated');
    // message$.next('keep learning');
    // message$.subscribe(msg => console.log(`user2 ${msg}`));
  //replaysubject ends

    //Async Subject
    // const asyncSubject$ = new AsyncSubject();
    // asyncSubject$.next('value 1');
    // asyncSubject$.next('value 2');
    // asyncSubject$.next('value 3');
    // asyncSubject$.complete();

    // asyncSubject$.subscribe(d =>console.log(`User 1 ${d}`));

    // asyncSubject$.complete();
    // asyncSubject$.next('value 4');
    // asyncSubject$.next('value 5');
    // asyncSubject$.subscribe(d =>console.log(`User 2 ${d}`));
    //Async Subject end

    //
    const url = 'https://restcountries.com/v2/name/india?fullText=true;';

    const cache:any ={};
    function getCountryInfo(url:any){
      if(!cache[url]){
        //api call using fetch method
        cache[url] = new AsyncSubject();
        fetch(url).then(res =>res.json()).then(d=>{
          cache[url].next(d);
          cache[url].complete();
        });
      }
      return cache[url].asObservable();
    }
    getCountryInfo(url).subscribe((d: any) => console.log(d));

    setTimeout(()=>{
      getCountryInfo(url).subscribe((d: any) => console.log(d));
    },1000);



  }
 

}

