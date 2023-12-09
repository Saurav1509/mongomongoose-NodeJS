require('dotenv').config();
const mongoose = require("mongoose");

console.log(process.env.MONGO_URI);

mongoose.connect('mongodb+srv://sauravsayana:f7mSmRGtdu7fQ8TR@pracmongoose.crrpbib.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          console.log('database connection successful')
        })
        .catch((err) => {
          console.error('Database connection error')
        })
let personSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: Number
});

let Person = mongoose.model('Person', personSchema);



const createAndSavePerson = (done) => {
  
  let person = new Person({
    id: 3,
    name: "John",
    age: 30,
  })

  person.save()
    .then((data) => {
      console.log(data);
      done(null , data);
    })
    .catch((err) => {
      console.error(err);
      done(null , data);
    })
  
  
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
}; 

createAndSavePerson((err, savedPerson) => {
  if(err){
    console.error("Error saving the Person details in mongoDB: ", err);
  }
  else{
    console.log("Person successfully added to mongoDB: ", savedPerson)
  }
});






/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
