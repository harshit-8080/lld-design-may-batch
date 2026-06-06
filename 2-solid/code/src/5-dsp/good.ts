class Repository {
    constructor(private database: IDatabase) {}

    create(data: any) {
        this.database.create(data)
    }
    read(id: string) {
        this.database.read(id)
    }
    update(id: string, data: any) {
        this.database.update(id, data)
    }
    delete(id: string) {
        this.database.delete(id)
    }
    getAll(){
        this.database.getAll();
    }
}


interface IDatabase {
    create(data: any);
    read(id: string);
    update(id: string, data: any);
    delete(id: string);
    getAll():void
}


class PostgreSQLDatabase implements IDatabase{
    getAll(): void {
        console.log("returning alll");
    }
    create(data: any) {
        console.log("Postgres create.......");
    }
    read(id: string) {
        console.log("Postgres read.......");
    }
    update(id: string, data: any) {
        console.log("Postgres update.......");
    }
    delete(id: string) {
        console.log("Postgres delete.......");
    }   
}

class MongoDBDatabase implements IDatabase {
        getAll(): void {
        console.log("returning alll");
    }
    create(data: any) {
        console.log("mongoDB create");
    }       
    read(id: string) {
        console.log("mongoDB read");
    }
    update(id: string, data: any) {
        console.log("mongoDB update");
    }
    delete(id: string) {
        console.log("mongoDB delete");
    }
}


const repo = new Repository(new PostgreSQLDatabase());

repo.create({ name: "John Doe", age: 30 });
