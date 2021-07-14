export { 
	find
}

const heroes = [
  {src: `/images/IronMan-EndgameProfile.jpeg` , name: 'Ironman', alias: "Tony Stark", status: "Dead", _id: 641198},
  {src: `/images/WarMachine-EndgameProfile.jpeg`, name: 'War Machine', alias: "Colonel James 'Rhodey' Rhoades", status: "Alive", _id: 512236},
  {src: `/images/BlackWidow-EndgameProfile.jpeg`, name: 'Black Widow', alias: "Natasha Romanoff", status: "Dead", _id: 304167},
  {src: `/images/ProfHulkAvengersEndgamelicensingart001.jpeg`, name: 'Hulk', alias: "Bruce Banner", status: "Alive", _id: 266334},
  {src: `/images/Thor-EndgameProfile.jpeg`, name: 'Thor Odinson', alias: "God of Thunder", status: "Alive", _id: 655055},
  {src: `/images/HawkeyeRonin-EndgameProfile.jpeg`, name: 'Hawkeye', alias: "Clint Barton", status: "Alive", _id: 551843},
  /* {src: `/images/IronMan-EndgameProfile.jpeg` , name: 'Ironman', alias: "Tony Stark", status: "Dead", _id: 641198},
  {src: `/images/WarMachine-EndgameProfile.jpeg`, name: 'War Machine', alias: "Colonel James 'Rhodey' Rhoades", status: "Alive", _id: 512236},
  {src: `/images/BlackWidow-EndgameProfile.jpeg`, name: 'Black Widow', alias: "Natasha Romanoff", status: "Dead", _id: 304167},
  {src: `/images/ProfHulkAvengersEndgamelicensingart001.jpeg`, name: 'Hulk', alias: "Bruce Banner", status: "Alive", _id: 266334},
  {src: `/images/Thor-EndgameProfile.jpeg`, name: 'Thor Odinson', alias: "God of Thunder", status: "Alive", _id: 655055},
  {src: `/images/HawkeyeRonin-EndgameProfile.jpeg`, name: 'Hawkeye', alias: "Clint Barton", status: "Alive", _id: 551843},
  {src: `/images/IronMan-EndgameProfile.jpeg` , name: 'Ironman', alias: "Tony Stark", status: "Dead", _id: 641198},
  {src: `/images/WarMachine-EndgameProfile.jpeg`, name: 'War Machine', alias: "Colonel James 'Rhodey' Rhoades", status: "Alive", _id: 512236},
  {src: `/images/BlackWidow-EndgameProfile.jpeg`, name: 'Black Widow', alias: "Natasha Romanoff", status: "Dead", _id: 304167},
  {src: `/images/ProfHulkAvengersEndgamelicensingart001.jpeg`, name: 'Hulk', alias: "Bruce Banner", status: "Alive", _id: 266334},
  {src: `/images/Thor-EndgameProfile.jpeg`, name: 'Thor Odinson', alias: "God of Thunder", status: "Alive", _id: 655055},
  {src: `/images/HawkeyeRonin-EndgameProfile.jpeg`, name: 'Hawkeye', alias: "Clint Barton", status: "Alive", _id: 551843}, */
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