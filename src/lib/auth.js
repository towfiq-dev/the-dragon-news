import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from 'dns'
dns.setDefaultResultOrder('ipv4first')
const client = new MongoClient(process.env.MONGODB_AUTH_URI);
const db = client.db("myAuthDB5");

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});