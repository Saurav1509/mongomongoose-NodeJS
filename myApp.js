const dotenv = require('dotenv');
dotenv.config({ path: './variables.env' });
const mongoose = require("mongoose");

mongoUrl = process.env.MONGO_URI;

// Connecting to the Atlas MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          console.log('database connection successful') // if connection is successfull
        })
        .catch((err) => {
          console.error('Database connection error: ', err) // Throws error in case of connection error
        });

// Creating the Schema for person MongoDB
let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: String,
});

// Creating the Person Model using the personSchema
let Person = mongoose.model('Person', personSchema);

// Function to Add and Save Person details in the MongoDB
const createAndSavePerson = (done) => {
  
  let person = new Person({
    name: "Sayana",
    age: 24,
    favoriteFoods: "Sandwich"
  })

  person.save()
    .then((data) => {
      done(null , data);
    })
    .catch((err) => {
      done(err);
    })
};

const createManyPeople = (arrayOfPeople, done) => {
  
  Person.create(arrayOfPeople)
    .then((data) => {
      done(null, data);
    })
    .catch((err) => {
      done(err);
    })
  
  // done(null /*, data*/);
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

// createAndSavePerson((err, savedPerson) => {
//   if(err){
//     console.error("Error saving the Person details in mongoDB: ", err);
//   }
//   else{
//     console.log("Person successfully added to mongoDB: ", savedPerson)
//   }
// });

let listOfPeopleToAdd = [{
  name: "Jacobs",
  age: 25,
  favoriteFoods: "Biryani"
},
{
  name: "Sam",
  age: 29,
  favoriteFoods: "Paratha"
},
{
  name: "Naomi",
  age: 34,
  favoriteFoods: "Pasta"
}];

createManyPeople(listOfPeopleToAdd,(err, listOfSavedPersons) => {
  if(err){
    console.error("Error Saving list of Persons in DB: ", err);
  }
  else{
    console.log("Successfully added the list of Persons in DB: ", listOfSavedPersons);
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
