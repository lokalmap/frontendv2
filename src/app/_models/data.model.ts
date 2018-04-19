export class Data {


  //  constructor(public name: string,public desc: string,
  //              public price: number, public qty: number,
  //              public utype: string, public btcExp: string,
  //              public brand: string, public itmInfo: string,
  //              public supInfo: string, public disc: string,
  //              public cid: string, public vd: string){

  //  }

    constructor(public name: string, public desc: string, public price: number,
                public qty: number, public utype: string, public btcExp: string,
                public brand: string, public itmInfo: string, public supInfo: string,
                public disc: string, public cid: number, public vd: string, public stat?:boolean){

    }
}
