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
db: SQLiteObject;
currentUser = {"fname":"Pass","email":"email","password":"pass","country":"Pass","state":"Pass","city":"Pass","postal":"Pass","address":"Pass","category":"secondary"};;
  constructor(private sqlite: SQLite) {
    console.log('Hello DatabaseAccessProvider Provider');
    // this.currentUser = {"fname":"Pass","email":"email","password":"pass","country":"Pass","state":"Pass","city":"Pass","postal":"Pass","address":"Pass","category":"secondary"};
  }

  initDB(){
    console.log('initdb called');
  this.sqlite.create({
  name: 'cpmad.db',
  location: 'default'
  }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS person(fullname TEXT, email TEXT, password TEXT, country TEXT, state TEXT,city TEXT,pcode TEXT, address TEXT, category TEXT)', {})
        .then(() => {
          console.log('Created person Table');
          this.db = db;
      })
        .catch(e => console.log(e));
      }).catch(e => console.log(e));
  }
 //{"fname": "",
                        // "email": "",
                        // "password": "",
                        // "country": "",
                        // "state": "",
                        // "city": "",
                        // "postal": "",
                        // "address": ""}


                        //?,?,?,?,?,?,?,?
                        //userDetails.fname+'","'+userDetails.email+'","'+userDetails.password+'","'+userDetails.country+'","'+userDetails.state+'","'+userDetails.city+'","'+userDetails.postal+'","'+userDetails.address
  registerUser(userDetails){
    console.log('registering'  + JSON.stringify(userDetails));
    this.db.executeSql('INSERT INTO person(fullname, email, password, country, state, city, pcode, address, category) VALUES(?,?,?,?,?,?,?,?,?)',[userDetails.fname,userDetails.email,userDetails.password,userDetails.country,userDetails.state,userDetails.city,userDetails.postal,userDetails.address,userDetails.category])
        .then(() => console.log('Registered user'));
  }

  loginUser(userDetails,callback){
    this.initDB();
    this.db.executeSql('SELECT * FROM person', [])
            .then((data) =>
            {
              if(data.rows.length > 0) {
              // tempItems = data.rows.item(0); 
              this.currentUser = data.rows.item(0);
              callback(data.rows.item(0)); 
            }
          });
  }

}
