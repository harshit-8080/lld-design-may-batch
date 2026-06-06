// class Repository {
//     // private database: PostgreSQLDatabase;
//     // constructor(database:PostgreSQLDatabase){
//     //     this.database = database;
//     // }

//     constructor(private database: PostgreSQLDatabase) {}

//     create(data: any) {
//         this.database.createRow(data)
//     }
//     read(id: string) {
//         this.database.readRow(id)
//     }
//     update(id: string, data: any) {
//         this.database.updateRow(id, data)
//     }
//     delete(id: string) {
//         this.database.deleteRow(id)
//     }
// }

// class PostgreSQLDatabase {
//     createRow(data: any) {
//         console.log("Postgres create.......");
//     }
//     readRow(id: string) {
//         console.log("Postgres read.......");
//     }
//     updateRow(id: string, data: any) {
//         console.log("Postgres update.......");
//     }
//     deleteRow(id: string) {
//         console.log("Postgres delete.......");
//     }   
// }

// class MongoDBDatabase {
//     createRecord(data: any) {
//         console.log("mongoDB create");
//     }       
//     readRecord(id: string) {
//         console.log("mongoDB read");
//     }
//     updateRecord(id: string, data: any) {
//         console.log("mongoDB update");
//     }
//     deleteRecord(id: string) {
//         console.log("mongoDB delete");
//     }
// }


// const repo = new Repository(new PostgreSQLDatabase());

// repo.create({ name: "John Doe", age: 30 });
