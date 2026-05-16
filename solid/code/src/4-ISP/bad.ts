// interface databaseOperations {
//     create();
//     read();
//     update();
//     delete();
//     setKey(key: string)
//     getKey(): string;
//     updateKey(key: string);
// }

// class MySQLDatabase implements databaseOperations {
//     setKey(key: string) {
//         throw new Error("Method not needed for MySQL database");
//     }
//     getKey(): string {
//         throw new Error("Method not needed for MySQL database");
//     }
//     updateKey(key: string) {
//         throw new Error("Method not needed for MySQL database");
//     }
//     create() {
//         console.log("Creating record in MySQL database");
//     }
//     read() {
//         console.log("Reading record from MySQL database");
//     }
//     update() {
//         console.log("Updating record in MySQL database");
//     }
//     delete() {
//         console.log("Deleting record from MySQL database");
//     }
// }

// // class MongoDBDatabase implements databaseOperations {
// //     create() {
// //         console.log("Creating record in MongoDB database");
// //     }
// //     read() {
// //         console.log("Reading record from MongoDB database");
// //     }
// //     update() {
// //         console.log("Updating record in MongoDB database");
// //     }
// //     delete() {
// //         console.log("Deleting record from MongoDB database");
// //     }
// // }