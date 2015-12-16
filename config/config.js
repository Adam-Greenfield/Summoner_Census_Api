module.exports = {
  'secret': process.env.CHAMPION_APP_SECRET
  'database': process.env.MONGOLAB_URI || 'mongodb://localhost:27017/championAPI'
};