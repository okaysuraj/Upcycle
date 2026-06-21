const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function connectDB() {
  try {
    await pool.query('SELECT NOW()');
    console.log('✅ PostgreSQL Connected via pg module');
    
    // Execute schema.sql only if explicitly requested
    if (process.env.RESET_DB === 'true') {
      console.log('⚠️ RESET_DB is true. Resetting database schema...');
      const schemaSql = fs.readFileSync(path.join(__dirname, '..', 'database', 'schema.sql'), 'utf8');
      await pool.query(schemaSql);
      await seedDB();
    }
  } catch (err) {
    console.error('⚠️  PostgreSQL connection error', err);
    process.exit(1);
  }
}

async function seedDB() {
  const { rowCount } = await pool.query('SELECT id FROM users LIMIT 1');
  if (rowCount > 0) return;

  console.log('🌱 Seeding PostgreSQL with sample data...');
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Users
  const usersRes = await pool.query(`
    INSERT INTO users (name, email, password, role, skills, "availabilityHours", "activeTasks", is_verified)
    VALUES 
    ('Dr. Priya Sharma', 'admin@upcycle.edu', $1, 'admin', ARRAY['Plantation', 'Soil Preparation', 'Irrigation', 'Pruning'], 40, 0, true),
    ('Rajesh Kumar', 'staff@upcycle.edu', $1, 'staff', ARRAY['Plantation', 'Watering', 'Weeding', 'Harvesting', 'Pruning'], 35, 1, true),
    ('Ananya Singh', 'ananya@upcycle.edu', $1, 'volunteer', ARRAY['Plantation', 'Watering', 'Soil Preparation'], 15, 1, true),
    ('Karan Mehta', 'karan@upcycle.edu', $1, 'volunteer', ARRAY['Weeding', 'Harvesting', 'Pruning'], 10, 0, true),
    ('Meera Patel', 'meera@upcycle.edu', $1, 'volunteer', ARRAY['Watering', 'Irrigation', 'Soil Preparation'], 20, 2, true),
    ('Arjun Nair', 'arjun@upcycle.edu', $1, 'volunteer', ARRAY['Plantation', 'Pruning', 'Harvesting'], 12, 1, true)
    RETURNING *;
  `, [hashedPassword]);

  const users = usersRes.rows;
  const admin = users.find(u => u.email === 'admin@upcycle.edu');
  const staff1 = users.find(u => u.email === 'staff@upcycle.edu');
  const vol1 = users.find(u => u.email === 'ananya@upcycle.edu');
  const vol2 = users.find(u => u.email === 'karan@upcycle.edu');
  const vol3 = users.find(u => u.email === 'meera@upcycle.edu');
  const vol4 = users.find(u => u.email === 'arjun@upcycle.edu');

  // Tasks
  const tasksRes = await pool.query(`
    INSERT INTO tasks (title, description, category, priority, status, "assignedTo", "assigneeName", "dueDate", "completedAt", "materialsUsed")
    VALUES 
    ('Plant Seasonal Saplings - Block A', 'Plant 50 seasonal saplings along the eastern walkway of Block A. Ensure proper spacing of 2m between each sapling.', 'Plantation', 'High', 'In-Progress', $1, 'Ananya Singh', NOW() + INTERVAL '2 days', NULL, '[{"name": "Saplings", "quantity": 50}, {"name": "Fertilizer", "quantity": 10}]'::jsonb),
    ('Weed Central Garden Bed', 'Remove all invasive weeds from the central garden bed. Apply mulch after weeding to prevent regrowth.', 'Weeding', 'Medium', 'Pending', NULL, NULL, NOW() + INTERVAL '5 days', NULL, '[{"name": "Mulch", "quantity": 20}, {"name": "Gloves", "quantity": 5}]'::jsonb),
    ('Install Drip Irrigation - Greenhouse', 'Set up automated drip irrigation system in the main greenhouse. Test flow rates and ensure even distribution.', 'Irrigation', 'High', 'Assigned', $2, 'Rajesh Kumar', NOW() + INTERVAL '1 day', NULL, '[{"name": "Irrigation Pipes", "quantity": 30}, {"name": "Water", "quantity": 500}]'::jsonb),
    ('Prune Rose Garden - Science Block', 'Prune the rose garden adjacent to the Science Block. Remove dead branches and shape the bushes.', 'Pruning', 'Low', 'Completed', $3, 'Arjun Nair', NOW() - INTERVAL '1 day', NOW() - INTERVAL '12 hours', '[{"name": "Pruning Shears", "quantity": 3}]'::jsonb),
    ('Harvest Vegetable Plot', 'Harvest ripe vegetables from the student vegetable plot. Sort and distribute to the campus canteen.', 'Harvesting', 'Medium', 'In-Progress', $4, 'Meera Patel', NOW() + INTERVAL '3 days', NULL, '[{"name": "Harvest Baskets", "quantity": 10}]'::jsonb)
    RETURNING *;
  `, [vol1.id, staff1.id, vol4.id, vol3.id]);

  const tasks = tasksRes.rows;
  const task1 = tasks.find(t => t.title.includes('Plant Seasonal'));
  const task3 = tasks.find(t => t.title.includes('Irrigation'));
  const task4 = tasks.find(t => t.title.includes('Prune Rose'));

  // Resources
  await pool.query(`
    INSERT INTO resources (name, quantity, unit, threshold, category, icon)
    VALUES 
    ('Saplings', 150, 'units', 30, 'Plants', '🌱'),
    ('Fertilizer', 85, 'kg', 20, 'Chemicals', '🧪'),
    ('Mulch', 40, 'bags', 10, 'Materials', '🪵'),
    ('Water', 8500, 'liters', 1000, 'Utilities', '💧'),
    ('Pruning Shears', 12, 'units', 3, 'Tools', '✂️'),
    ('Shovels', 8, 'units', 2, 'Tools', '🪣'),
    ('Irrigation Pipes', 18, 'meters', 10, 'Equipment', '🔧'),
    ('Gloves', 25, 'pairs', 5, 'Safety', '🧤'),
    ('Harvest Baskets', 15, 'units', 4, 'Equipment', '🧺'),
    ('Soil Compost', 12, 'bags', 5, 'Materials', '🌍');
  `);

  // Notifications
  await pool.query(`
    INSERT INTO notifications (type, message, "userId", "taskId", read)
    VALUES 
    ('task_assigned', 'You have been assigned: "Plant Seasonal Saplings - Block A"', $1, $2, false),
    ('task_assigned', 'You have been assigned: "Install Drip Irrigation - Greenhouse"', $3, $4, true),
    ('task_completed', '"Prune Rose Garden - Science Block" marked as Completed by Arjun Nair', $5, $6, false),
    ('stock_low', '⚠️ Low Stock Alert: Irrigation Pipes are below threshold (18 remaining)', $5, NULL, false),
    ('system', '🌿 Welcome to Upcycle', $5, NULL, true);
  `, [vol1.id, task1.id, staff1.id, task3.id, admin.id, task4.id]);

  console.log('✅ PostgreSQL seeded successfully');
}

module.exports = { connectDB, pool };
