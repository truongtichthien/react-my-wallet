const STORE_NAME = 'DebtListStore';

const openIndexedDB = (todoIndex) => {
  let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
  let openDB = indexedDB.open('DebtRecordsDb', 1);

  openDB.onupgradeneeded = () => {
    let db = {};
    db.result = openDB.result;
    db.store = db.result.createObjectStore(STORE_NAME, {keyPath: 'id'});
    if (todoIndex) {
      db.index = db.store.createIndex('ContentIndex', todoIndex);
    }
  }
  return openDB;
};

const getStore = (openDB) => {
  let db = {};
  db.result = openDB.result;
  db.tx = db.result.transaction(STORE_NAME, 'readwrite');
  db.store = db.tx.objectStore(STORE_NAME);
  db.index = db.store.index('ContentIndex');
  return db;
};

const getAllRecords = () => {
  const promise = new Promise((resolve, reject) => {
    const openDB = openIndexedDB();
    openDB.onsuccess = () => {
      let db = getStore(openDB);
      let getData = db.store.getAll();
      getData.onsuccess = (e) => {
        console.log(getData.result);
        resolve(getData.result);
      }
      getData.onerror = (e) => {
        console.log(e);
        reject(e);
      }
    }
  });
  return promise;
};

// const getAllRecord = (callback) => {
//   let openDB = openIndexedDB();
//   openDB.onsuccess = () => {
//     let db = getStore(openDB);
//     let getData = db.store.getAll();
//     getData.onsuccess = (e) => callback(getData.result);
//     getData.onerror = (e) => console.log(e);
//   }
//   return true;
// };

const clearStore = (callback) => {
  let openDB = openIndexedDB();
  openDB.onsuccess = () => {
    let db = getStore(openDB);
    let cleared = db.store.clear();
    cleared.onsuccess = (e) => callback(e);
  }
  return true;
};

const saveRecord = (isUpdate, todo, callback) => {
  let openDB = openIndexedDB();
  openDB.onsuccess = () => {
    let db = getStore(openDB);
    if (isUpdate) {
      db.store.put(todo[0]);
    } else {
      todo.forEach((item) => {
        db.store.add(item);
      })
    }
    db.tx.oncomplete = (e) => {
      callback(e);
    }
    db.tx.onerror = (e) => {
      console.log('Could not sync data!');
      callback(e);
    }
  }
  openDB.onerror = (e) => console.log('Save record failed! ' + e);
  return true;
};

const createIndexedDB = () => {
  if (typeof window !== 'undefined') {
    let todoIndex = ['title', 'status'];
    openIndexedDB(todoIndex);
    return { clearStore, getAllRecords, saveRecord };
  }
  return null;
};

export { createIndexedDB };
