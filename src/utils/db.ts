const connectToDB = require('./db');

const testQuery = async () => {
  const pool = await connectToDB();
  if (pool) {
    try {
      const result = await pool.request().query('SELECT GETDATE() AS CurrentDateTime');
      console.log('Query Result:', result.recordset);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Query failed:', err.message);
      } else {
        console.error('Query failed with an unknown error:', err);
      }
    } finally {
      pool.close(); // Always close the pool to prevent resource leaks
    }
  }
};

testQuery();
