import 'dotenv/config';
import { connectToMongoDB, getDatabase } from './mongodb';
import { weddingStorage } from './wedding-storage';
import type { CreateWeddingEvent, CreateGuest, CreateRSVP, CreateContact } from '@shared/wedding-schema';

// Sample Wedding Events
const sampleWeddingEvents: CreateWeddingEvent[] = [
  {
    title: "Wedding Ceremony",
    description: "Join us as we take our vows. Please arrive 15 minutes early to be seated before the ceremony begins",
    date: new Date("2025-08-02T11:00:00"),
    startTime: "11:00",
    endTime: "12:00",
    location: {
      name: "Aquila Events Hub",
      address: "No 40 Tos Benson Road, Ikorodu, Lagos 100001",
    },
    eventType: "ceremony",
    dressCode: "Formal attire requested",
    isPublic: true
  },
  {
    title: "Reception Celebration",
    description: "Join us as we celebrate our love",
    date: new Date("2025-08-02T13:00:00"),
    startTime: "13:00",
    endTime: "18:00",
    location: {
      name: "Aquila Events Hub",
      address: "No 40 Tos Benson Road, Ikorodu, Lagos 100001",
    },
    eventType: "reception",
    dressCode: "Formal attire requested",
    isPublic: true
  }
];

// Sample Guests
const sampleGuests: CreateGuest[] = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+234 901 234 5678",
    relationship: "friend",
    inviteStatus: "sent",
    rsvpStatus: "pending",
    plusOne: true
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+234 902 345 6789",
    relationship: "family",
    inviteStatus: "delivered",
    rsvpStatus: "confirmed",
    tableNumber: 1,
    plusOne: false
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    relationship: "colleague",
    inviteStatus: "sent",
    rsvpStatus: "pending",
    plusOne: true
  }
];

// Sample RSVPs
const sampleRSVPs: CreateRSVP[] = [
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    whatsappInvite: "yes",
    willAttend: "yes",
    guests: 1,
    message: "So excited to celebrate with you both!"
  },
  {
    name: "David Wilson",
    email: "david.wilson@example.com",
    whatsappInvite: "yes",
    willAttend: "yes",
    guests: 2,
    message: "Looking forward to your special day!"
  }
];

// Sample Contacts
const sampleContacts: CreateContact[] = [
  {
    fullName: "Wedding Coordinator",
    email: "coordinator@wedding.com",
    phoneNumber: "+234 905 896 8649"
  },
  {
    fullName: "Venue Manager",
    email: "venue@aquilaevents.com",
    phoneNumber: "+234 906 123 4567"
  }
];

export async function initializeMongoDBSchema() {
  try {
    console.log('🚀 Initializing MongoDB Schema for Wedding Website...');
    console.log('==========================================\n');
    
    // Connect to MongoDB
    console.log('📡 Connecting to MongoDB Atlas...');
    const db = await connectToMongoDB();
    console.log('✅ Connected successfully!\n');
    
    // List existing collections
    console.log('📋 Checking existing collections...');
    const collections = await db.listCollections().toArray();
    const existingCollections = collections.map(c => c.name);
    console.log('Existing collections:', existingCollections.length > 0 ? existingCollections : 'None');
    console.log('');
    
    // Initialize Wedding Events
    console.log('🎉 Seeding Wedding Events...');
    for (const event of sampleWeddingEvents) {
      try {
        const createdEvent = await weddingStorage.createWeddingEvent(event);
        console.log(`✅ Created event: ${event.title}`);
      } catch (error) {
        console.log(`⚠️  Event "${event.title}" might already exist, skipping...`);
      }
    }
    console.log('');
    
    // Initialize Guests
    console.log('👥 Seeding Sample Guests...');
    for (const guest of sampleGuests) {
      try {
        const createdGuest = await weddingStorage.createGuest(guest);
        console.log(`✅ Created guest: ${guest.name}`);
      } catch (error) {
        console.log(`⚠️  Guest "${guest.name}" might already exist, skipping...`);
      }
    }
    console.log('');
    
    // Initialize RSVPs
    console.log('📝 Seeding Sample RSVPs...');
    for (const rsvp of sampleRSVPs) {
      try {
        const createdRSVP = await weddingStorage.createRSVP(rsvp);
        console.log(`✅ Created RSVP: ${rsvp.name}`);
      } catch (error) {
        console.log(`⚠️  RSVP for "${rsvp.name}" might already exist, skipping...`);
      }
    }
    console.log('');
    
    // Initialize Contacts
    console.log('📞 Seeding Sample Contacts...');
    for (const contact of sampleContacts) {
      try {
        const createdContact = await weddingStorage.createContact(contact);
        console.log(`✅ Created contact: ${contact.fullName}`);
      } catch (error) {
        console.log(`⚠️  Contact "${contact.fullName}" might already exist, skipping...`);
      }
    }
    console.log('');
    
    // Verify collections were created
    console.log('🔍 Verifying collections...');
    const finalCollections = await db.listCollections().toArray();
    const finalCollectionNames = finalCollections.map(c => c.name);
    
    const expectedCollections = ['rsvps', 'guests', 'wedding_events', 'contacts'];
    for (const collectionName of expectedCollections) {
      if (finalCollectionNames.includes(collectionName)) {
        const collection = db.collection(collectionName);
        const count = await collection.countDocuments();
        console.log(`✅ Collection "${collectionName}": ${count} documents`);
      } else {
        console.log(`❌ Collection "${collectionName}": Not found`);
      }
    }
    
    console.log('\n==========================================');
    console.log('🎊 MongoDB Schema Initialization Complete!');
    console.log('Your wedding website database is ready to use.');
    console.log('==========================================');
    
  } catch (error) {
    console.error('❌ Error initializing MongoDB schema:', error);
    throw error;
  }
}

// Run initialization if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  initializeMongoDBSchema()
    .then(() => {
      console.log('\n✨ Schema initialization finished successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Schema initialization failed:', error);
      process.exit(1);
    });
}
