import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Idea } from '../models/idea';
import PouchDBFind from 'pouchdb-find';

@Injectable({
  providedIn: 'root'
})
export class PouchdbService {
  localDB: PouchDB;

  constructor() {
    this.localDB = new PouchDB('idea');
    const remoteDB = new PouchDB('http://localhost:5984/idea');

    PouchDB.plugin(PouchDBFind);

    this.localDB
    .sync(remoteDB,  {live: true, retry: true})
    .on('change', change => {
      console.log('Qualcosa è cambiato');
      console.log(change);
    })
    .on('paused', info => {
      console.log('In pausa (perso la connessione?)');
      console.log(info);
    })
    .on('active', info => {
      console.log('Collegamento con il PC remoto ripristinato');
      console.log(info);
    })
    .on('error', error => {
      console.error('Errore DB');
      console.log(error);
    });
  }

  getIdea(id: string): Promise<Idea> {
    return this.localDB.get(id);
  }

  fetchIdea(): Promise<Idea[]> {
    return this.localDB
      .allDocs({ include_docs: true })
      .then(response => response.rows
      .map(item => item.doc)
      .filter(item => item.title)
    );
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

  searchIdea(title: string): Promise<Idea[]> {
    return this.localDB.createIndex({
      index: {
        fields: ['title']
      }
    }).then(response =>
      this.localDB.find({
        selector: {
          title
        },
        sort: ['title']
      })
    );
  }
}
