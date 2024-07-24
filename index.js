const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;
const PUBLIC_DIR = path.join(__dirname, 'public');
const app = express();
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const connectDB = require('./db/index');

connectDB();

/* models for home page */
const Monster = require('./models/Monster');

/** define Routes */
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const characterRoutes = require('./routes/characters');
const dungeonRoutes = require('./routes/dungeons');
const monsterRoutes = require('./routes/monsters');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

/** Wiring in route handlers */
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/dungeons', dungeonRoutes);
app.use('/api/monsters', monsterRoutes);
// set up middleware

// serve static files
app.use('public', express.static(PUBLIC_DIR));

// serve up the home page
app.get('/', async (req, res, next) => {
  try {
    const monsters = await Monster.find({});

    if (monsters) {
      res.status(200).render('index', {
        page_title: 'Welcome to the D&D Dungeon Builder',
        monstersView: true,
        monsters,
        authenticated: false,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error('error:', error);
  }
});

app.set('view engine', 'pug');

/* handle any requests that fall through */
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`you are listening on localhost on port ${PORT}`);
});
