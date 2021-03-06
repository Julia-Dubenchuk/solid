// Dependency inversion principle

// Принцип инверсии зависимостей

// Верхней уровень модулей не должен зависеть от абстракций нижнего уровня

class Fetch {
    request(url) {
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage';
        return dataFromLocalStorage;
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet() {
        return this.fetch.request('vk.com');
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key) {
        return this.localStorage.get(key);
    }
}

class Database {
    constructor(client) {
        this.client = client;
    }

    getData(key) {
        return this.client.clientGet(key);
    }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData('rand'));
