import { Component, OnInit,Input, Output, EventEmitter, OnChanges} from '@angular/core'; //DoCheck

@Component({
    selector: 'app-chatobj',
    templateUrl: './chatobj.component.html',
    styleUrls: ['./chatobj.component.scss']
})
export class ChatobjComponent implements OnInit, OnChanges { //DoCheck
    @Input() chatIDs:any;
    @Output() eventref: EventEmitter<any> = new EventEmitter();
    constructor() { }
    private prnthtmlvar:any;
    private chatobjName:string;
    ngOnInit() {
      console.log("chatIDs member", this.chatIDs.m);
    }
    ngOnChanges(){
      console.log("changes : ",this.chatIDs)
      this.chatobjName = this.chatIDs.name;
      this.prnthtmlvar = [
        {
          name:'Jack Sparrow - ' + this.chatIDs.m[0],
          timev:'12 mins ago',
          msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
          avtrimg:'http://placehold.it/50/55C1E7/fff',
          aleft:false
        },
        {
          name:'Bhaumik Patel - ' + this.chatIDs.m[1],
          timev:'11 mins ago',
          msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.',
          avtrimg:'http://placehold.it/50/FA6F57/fff',
          aleft:true
        },
        {
          name:'Jack Sparrow - ' + this.chatIDs.m[0],
          timev:'10 mins ago',
          msg:'test',
          avtrimg:'http://placehold.it/50/55C1E7/fff',
          aleft:false
        }]
    }

  //  ngDoCheck(){
  //    console.log("do check : ", this.chatIDs);
  //  }

  sendButton(msg:string){
    console.log("sendButton");
    let curUserID = localStorage.getItem('currentUID');
    const testconvo = {
      name:'Jack Sparrow - ' + curUserID,
      timev:'now',
      msg:msg,
      avtrimg:'http://placehold.it/50/55C1E7/fff',
      aleft:false
    }
    this.prnthtmlvar.push(testconvo);
  }
}
