import {openDB} from 'idb'

export const dbPromise = openDB("offline-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("requests")) {
      db.createObjectStore("requests", { keyPath: "id", autoIncrement: true });
    }
  },
});