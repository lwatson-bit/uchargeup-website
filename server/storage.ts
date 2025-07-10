import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { contacts, type Contact, type ContactForm } from "@shared/schema";

const connectionString = process.env.DATABASE_URL || "postgresql://localhost:5432/uchargeup";
const client = postgres(connectionString);
export const db = drizzle(client);

export interface IStorage {
  createContact(contact: ContactForm): Promise<Contact>;
}

export class DBStorage implements IStorage {
  async createContact(contact: ContactForm): Promise<Contact> {
    const [result] = await db.insert(contacts).values(contact).returning();
    return result;
  }
}

export class MemStorage implements IStorage {
  private contacts: Contact[] = [];
  private nextId = 1;

  async createContact(contact: ContactForm): Promise<Contact> {
    const newContact: Contact = {
      id: this.nextId++,
      ...contact,
      createdAt: new Date(),
    };
    this.contacts.push(newContact);
    return newContact;
  }
}
