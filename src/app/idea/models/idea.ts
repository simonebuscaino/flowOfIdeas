export class Idea {

  _id: string;
  _rev: string;

  public createDate: Date;
  public updateDate: Date;

  constructor(
  public title: string = '',
  public description: string = '',
  ) { }
}
