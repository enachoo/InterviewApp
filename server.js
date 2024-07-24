const mongoose = require('mongoose');
const app = require('./app');

const mongoURI = 'mongodb+srv://enacheevlad:Iamfree3105%21@ac-wmzqkwb.aage74b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// db
mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`DB connection error - ${err}`));