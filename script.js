
function sayHi() {
    console.log('Hi!')
    return function() {
      console.log('Bye!')
    }
  }
  
  setTimeout(sayHi(), 3000); 




  
  const spirit = {
    name: 'Migal',
    sayHi: function() {
      console.log(`${this.name} says: Hi!`)
    }
  }
  
  spirit.sayHi()
  
  setTimeout(spirit.sayHi, 1000)