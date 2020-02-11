const working = {
	name : 'Aruna',
	getName : function(){
		console.log(`Name is ${this.name}`)
	}
}


//arrow functions not work well for methods of an object
//but the work perfect for normal functions
const non_working = {
	name : 'Arunaa',
	getName :()=>{
		console.log(`Name is ${this.name}`)
	}
}

//es6 syntax
const working_es6 = {
	name : 'Arunaaa',
	getName(){
		console.log(`Name is ${this.name}`)
	}
}

console.log(working.getName())
console.log(non_working.getName())
console.log(working_es6.getName())