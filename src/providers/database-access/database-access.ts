import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import 'rxjs/add/operator/map';

/*
  Generated class for the DatabaseAccessProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DatabaseAccessProvider {

  constructor(private sqlite: SQLite) {
    console.log('Hello DatabaseAccessProvider Provider');
  }

    initDB(){
    this.sqlite.create({
    name: 'data.db',
    location: 'default'
    }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS person(name VARCHAR(32),age INTEGER, address VARCHAR(250), telephone INTEGER)', {})
          .then(() => console.log('Created Students Table'))
          .catch(e => console.log(e));
        }).catch(e => console.log(e));
  }

}
