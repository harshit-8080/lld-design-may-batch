interface databaseOperations {
    create();
    read();
    update();
    delete();

}

interface cacheOperations {
    setKey(key: string)
    getKey(): string;
    updateKey(key: string);
}

class MySQLDatabase implements databaseOperations {
    create() {
        console.log("Creating record in MySQL database");
    }
    read() {
        console.log("Reading record from MySQL database");
    }
    update() {
        console.log("Updating record in MySQL database");
    }
    delete() {
        console.log("Deleting record from MySQL database");
    }
}

class RedisCache implements cacheOperations {
    setKey(key: string) {
        console.log(`Setting key ${key} in Redis cache`);
    }
    getKey(): string {
        console.log("Getting key from Redis cache");
        return "value";
    }     
    updateKey(key: string) {
        console.log(`Updating key ${key} in Redis cache`);
    }
}