const { MongoClient } = require('mongodb');
const userMock = require('../../src/mongoose/mock/mockUser');
describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('test-collection');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection(process.env.MONGO_DB_NAME);
    await users.insertOne(userMock);

    const insertedUser = await users.findOne({ _id: userMock._id });
    expect(insertedUser).toEqual(userMock);
  });

  it('should return all (or 100) the documents in the collection', async () => {
    const users = db.collection(process.env.MONGO_DB_NAME);

    const insertedUsers = await users.find({}).limit(100);
    expect(insertedUsers.length).toBeGreaterThan(0);
  });
});
