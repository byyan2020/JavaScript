const http = new EasyHTTP();

// Get user from external api.
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));


// Create new user.
const newUser = {
    name: 'Biyu Yan',
    email: 'biyuyan@gmail.com'
}

// Post new user to external api.
http.post('https://jsonplaceholder.typicode.com/users', newUser)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Make a PUT request
http.put('https://jsonplaceholder.typicode.com/users/2', newUser)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Make a PUT request
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));

