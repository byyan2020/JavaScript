document.querySelector('.get-jokes').addEventListener('click', getJoke);

function getJoke(e) {
  xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  xhr.onload = function() {
    if (this.status === 200) {
      const joke = JSON.parse(this.responseText);
      const output = document.createElement('li');
      output.textContent = joke.value;
    
      document.querySelector('.jokes').appendChild(output);
    }
  }

  xhr.send();
  e.preventDefault();
}