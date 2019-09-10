import { MongoClient as mongo } from 'mongodb';

const { MONGODB_DATABASE: DATABASE, MONGODB_URI } = process.env;

export const COLLECTION_ACCOUNTS = 'accounts';

export const getDatabase = () => {
  const dbOptions = {
    useNewUrlParser: true,
  };
  const promiseCallback = (resolve, reject) => {
    mongo.connect(MONGODB_URI, dbOptions, (err, client) => {
      if (err) return reject(err);

      const db = client.db(DATABASE);
      return resolve(db);
    });
  };
  return new Promise(promiseCallback);
};

export const getCollection = (collectionName) => getDatabase()
  .then((db) => db.collection(collectionName));
