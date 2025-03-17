import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema',
  dbCredentials:{
    user:'postgres',
    password:'postgres',
    host:'localhost',
    port:5432,
    database:'chatbot',
    ssl:false
  },
  
})
