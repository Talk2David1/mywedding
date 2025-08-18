import 'dotenv/config';
import { seedDatabase } from './server/seed-data.ts';

console.log('Starting database seeding...');
console.log('MongoDB URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');

seedDatabase()
  .then(() => {
    console.log('✅ Seeding completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  });