//MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://flash:Superman123@cluster0.4hzwm7j.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    console.log("Mongo Connected")
    client.close();
});

//Mongoose
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://flash:Superman123@cluster0.4hzwm7j.mongodb.net/?retryWrites=true&w=majority');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));