import 'dotenv/config';
import { connectToMongoDB } from './mongodb';
import { weddingStorage } from './wedding-storage';
import type { CreateWeddingEvent, CreateContact } from '@shared/wedding-schema';

const sampleWeddingEvents: CreateWeddingEvent[] = [
  {
    title: "Wedding Ceremony",
    description: "The main wedding ceremony where Esther and Basil will exchange vows",
    date: new Date("2025-08-02T14:00:00"),
    startTime: "14:00",
    endTime: "15:30",
    location: {
      name: "St. Mary's Cathedral",
      address: "123 Church Street, Wedding City, WC 12345",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    eventType: "ceremony",
    dressCode: "Formal attire requested",
    isPublic: true
  },
  {
    title: "Cocktail Hour",
    description: "Join us for cocktails and light refreshments",
    date: new Date("2025-08-02T16:00:00"),
    startTime: "16:00",
    endTime: "17:00",
    location: {
      name: "Garden Terrace",
      address: "456 Reception Avenue, Wedding City, WC 12345",
    },
    eventType: "party",
    isPublic: true
  },
  {
    title: "Wedding Reception",
    description: "Dinner, dancing, and celebration",
    date: new Date("2025-08-02T17:00:00"),
    startTime: "17:00",
    endTime: "23:00",
    location: {
      name: "Grand Ballroom",
      address: "456 Reception Avenue, Wedding City, WC 12345",
    },
    eventType: "reception",
    dressCode: "Formal attire requested",
    isPublic: true
  },
  {
    title: "Rehearsal Dinner",
    description: "Private dinner for wedding party and close family",
    date: new Date("2025-08-01T18:00:00"),
    startTime: "18:00",
    endTime: "21:00",
    location: {
      name: "The Garden Restaurant",
      address: "789 Rehearsal Road, Wedding City, WC 12345",
    },
    eventType: "rehearsal",
    isPublic: false
  }
];

const sampleContacts: CreateContact[] = [
  {
    fullName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phoneNumber: "+1-555-123-4567",
    tableNumber: 1
  },
  {
    fullName: "Michael Chen",
    email: "michael.chen@email.com",
    phoneNumber: "+1-555-234-5678",
    tableNumber: 1
  },
  {
    fullName: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    phoneNumber: "+1-555-345-6789",
    tableNumber: 2
  },
  {
    fullName: "David Thompson",
    email: "david.thompson@email.com",
    phoneNumber: "+1-555-456-7890",
    tableNumber: 2
  },
  {
    fullName: "Jessica Williams",
    email: "jessica.williams@email.com",
    phoneNumber: "+1-555-567-8901",
    tableNumber: 3
  },
  {
    fullName: "Robert Davis",
    email: "robert.davis@email.com",
    phoneNumber: "+1-555-678-9012",
    tableNumber: 3
  },
  {
    fullName: "Amanda Miller",
    email: "amanda.miller@email.com",
    phoneNumber: "+1-555-789-0123",
    tableNumber: 4
  },
  {
    fullName: "Christopher Brown",
    email: "christopher.brown@email.com",
    phoneNumber: "+1-555-890-1234",
    tableNumber: 4
  }
];

export async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await connectToMongoDB();
    
    console.log('Seeding wedding events...');
    for (const event of sampleWeddingEvents) {
      try {
        await weddingStorage.createWeddingEvent(event);
        console.log(`Created event: ${event.title}`);
      } catch (error) {
        console.log(`Event ${event.title} might already exist, skipping...`);
      }
    }
    
    console.log('Seeding contacts...');
    for (const contact of sampleContacts) {
      try {
        await weddingStorage.createContact(contact);
        console.log(`Created contact: ${contact.fullName}`);
      } catch (error) {
        console.log(`Contact ${contact.fullName} might already exist, skipping...`);
      }
    }
    
    console.log('Database seeding completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase()
    .then(() => {
      console.log('Seeding finished successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}