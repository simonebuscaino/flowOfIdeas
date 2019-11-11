export class Idea {

  _id: string;
  _rev: string;
  createDate: Date;
  updateDate: Date;

  constructor(
  public title: string = '',
  public description: string = ''
  ) { }
}
