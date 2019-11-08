export class Idea {

  _id: string;
  _rev: string;

  constructor(
  public title: string = '',
  public description: string = '',
  public createDate: Date,
  public updateDate: Date) { }
}
