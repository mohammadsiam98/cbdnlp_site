const appendToDOM = (users) => {
    const obj=users
    console.log(Object.values(obj))
const catg=Object.keys(obj)
const value= Object.values(obj)
const span1 = document.querySelector('#siam');
const span2 = document.querySelector('#snigdha');

span1.textContent=catg;
span2.textContent=value;
};

// create a new user
var createUser = (user) => {
    axios.post('http://192.168.0.103:8080/predict', JSON.stringify({content: user}),{
  headers: {
    'content-type': 'application/json'
  }
})
        .then(response => {
            const addedUser = response.data;
            console.log('Got result',addedUser);
            appendToDOM(addedUser);
        })
        .catch(error => console.error(error));
};

// event listener for form submission
const form = document.querySelector('form');

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    const comm = document.querySelector('#comment').value;

    createUser(comm);
});