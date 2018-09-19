export class abonnerModel{
  constructor(public userId: string,
              public userEmail: string,
              public fraDato: string,
              public tilDato: string,
              public ukedag: string,
              public leveringstid: string,
              public leveringsadresse: string,
              public varenavn: string,
              public abonnerer: boolean,
              public id?: string) {

  }
}
