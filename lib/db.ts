// lib/db.ts
import { Pool } from 'pg';

// Only create the pool on the server side
const pool = typeof window === 'undefined' 
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
    })
  : null;

export default pool;