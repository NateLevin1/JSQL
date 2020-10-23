export default class Dexie {
    on() {

    }
    version() {

    }
    open() {
        return Promise.resolve();
    }
    isOpen() {
        return true;
    }
    tables() {
        return [];
    }
    static exists() {
        return Promise.resolve(false);
    }
    static getDatabaseNames() {
        return Promise.resolve([]);
    }
}