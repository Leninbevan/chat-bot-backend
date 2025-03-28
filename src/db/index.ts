import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

// We can specify any property from the node-postgres connection options
const db = drizzle({ 
  connection: { 
    connectionString: process.env.DATABASE_URL!
  }
});

export default db;