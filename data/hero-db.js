export { 
	find
}

const heroes = [
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213` , name: 'Ironman', status: "dead", _id: 641198},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213`, name: 'War Machine', status: "alive", _id: 512236},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213`, name: 'Black Widow', status: "dead", _id: 304167},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213`, name: 'Hulk', status: "alive", _id: 266334},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213`, name: 'Thor', status: "alive", _id: 655055},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213`, name: 'Hawkeye', status: "alive", _id: 551843},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, heroes)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}