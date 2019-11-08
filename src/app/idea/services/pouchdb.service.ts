import { Injectable } from '@angular/core';
import { PouchDB } from 'pouchdb';
import { Idea } from '../models/idea';

@Injectable({
  providedIn: 'root'
})
export class PouchdbService {
  localDB: PouchDB;

  constructor() {
    this.localDB = new PouchDB('idea');
    const remoteDB = new PouchDB('http://localhost:5984/idea');
  }

  getIdea(id: string): Promise<Idea> {
    return this.localDB.get(id);
  }

  fetchIdea(): Promise<Idea[]> {
    return this.localDB
      .allDocs({ include_docs: true })
      .then(response => response.rows
      .map(item => item.doc));
  }

  setIdea(idea: Idea): Promise<any> {
    if (idea._id) {
      return this.updateIdea(idea);
    } else {
      return this.createIdea(idea);
    }
  }

  private createIdea(idea: Idea): Promise<any> {
    return this.localDB.post(idea);
  }

  private updateIdea(idea: Idea): Promise<any> {
    return this.localDB.put(idea);
  }

  deleteIdea(idea: Idea): Promise<any> {
    return this.localDB.remove(idea);
  }
}
