export { 
	find
}

const heroes = [
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213` , name: 'Ironman', alias: "Tony Stark", status: "Dead", _id: 641198},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/77/WarMachine-EndgameProfile.jpg/revision/latest?cb=20190423174940`, name: 'War Machine', alias: "Colonel James 'Rhodey' Rhoades", status: "Alive", _id: 512236},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/BlackWidow-EndgameProfile.jpg/revision/latest?cb=20190423174842`, name: 'Black Widow', alias: "Natasha Romanoff", status: "Dead", _id: 304167},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a4/ProfHulkAvengersEndgamelicensingart001.jpg/revision/latest?cb=20190506122658`, name: 'Hulk', alias: "Bruce Banner", status: "Alive", _id: 266334},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor-EndgameProfile.jpg/revision/latest?cb=20190423174911`, name: 'Thor Odinson', alias: "God of Thunder", status: "Alive", _id: 655055},
  {src: `https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/08/HawkeyeRonin-EndgameProfile.jpg/revision/latest?cb=20190423175147`, name: 'Hawkeye', alias: "Clint Barton", status: "Alive", _id: 551843},
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