import { Component, OnInit } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor() { }
  buttons=['C','Del','%','/',7,8,9,'*',4,5,6,'-',1,2,3,'+','.',0,'=']
  answer:string='0'
  current:string=''
  calculate(value:any){
    if(value!='C'&&value!='Del'&&value!='='){
      this.current+=value

      this.answer=this.current
    }
    if(value=='Del'){
      if(this.answer.length>1){
          this.answer=this.answer.substring(0,this.answer.length-1)
        }
      else{
        this.answer='0'
        this.current=''
      }
    }
    if(value=='C'){
      this.answer='0'
      this.current=''
    }
    if(value=='='){
      this.current=eval(this.answer)
      this.answer=this.current
      console.log(eval(this.answer));

      
    }
    //&&value!='%'&&value!='/'&&value!='*'&&value!='-'&&value!='+'
    
  }
  ngOnInit(): void {

  }

}
