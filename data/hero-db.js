export { 
	find
}

const heroes = [
  {text: 'Ironman', survived: false, _id: 641198},
  {text: 'War Machine', survived: true, _id: 512236},
  {text: 'Black Widow', survived: false, _id: 304167},
  {text: 'Hulk', survived: true, _id: 266334},
  {text: 'Thor', survived: true, _id: 655055},
  {text: 'Hawkeye', survived: true, _id: 551843},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, todos)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}