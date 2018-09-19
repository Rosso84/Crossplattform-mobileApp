export class Nyheter{

  constructor(public userId: string,
              public vare: string,
              public detaljer: string,
              public pris: number,
              public abonnerer: boolean,
              public vekt: string,
              public kg_pris: string,
              public imgUrl: string,
              public antall: number,
              public id?: string) {


  }
}
