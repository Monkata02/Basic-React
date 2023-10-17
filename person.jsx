/* This code creates a person object with a nested address and a function displayMessage that extracts the state from the address, 
generating a related message when called with the person object. */

const person = {
  name: 'Jesse',
  age: 30, 
  address: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

displayMessage(person)

function displayMessage({ address: { state } }) {
  const message = 'I live in ' + state + '.';
}
