export default class Dexie {
    on(type, callback) {
        if(type === "versionchange") {
            callback();
        }
    }
    version() {

    }
    open() {
        return Promise.resolve();
    }
    close() {

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