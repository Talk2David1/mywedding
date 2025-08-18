import 'dotenv/config';
import { connectToMongoDB, getContactCollection } from './server/mongodb.ts';
import { seedDatabase } from './server/seed-data.ts';

async function clearAndReseed() {
  try {
    console.log('Connecting to MongoDB...');
    await connectToMongoDB();
    
    console.log('Clearing existing contacts...');
    const contactsCollection = getContactCollection();
    const deleteResult = await contactsCollection.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} existing contacts`);
    
    console.log('Reseeding database with updated contact data...');
    await seedDatabase();
    
    console.log('✅ Clear and reseed completed successfully!');
  } catch (error) {
    console.error('❌ Clear and reseed failed:', error);
    throw error;
  }
}

clearAndReseed()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Process failed:', error);
    process.exit(1);
  });