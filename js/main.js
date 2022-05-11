// Fetch

document.querySelector("body").addEventListener('click', getFetch)

function getFetch() {
  const url = `https://api.thecatapi.com/v1/images/search`
  const urlFacts = `https://catfact.ninja/fact?max_length=130`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data[0])

        document.querySelector(".introSect").style.display = "none"
        document.querySelector("#catImg").src = data[0].url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

// FACTS API

      fetch(urlFacts)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        document.querySelector("p").innerText = data.fact
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


////////////////////////////////////////

// CONFETTI ANIMATION

let button = document.getElementById("button");

button.addEventListener('click', (e) => {
  e.preventDefault;
  e.target.classList.toggle("animate");

  document.querySelector(".text").style.display = "flex"
  document.querySelector("#catImg").style.display = "flex"

  setTimeout(function () {
      e.target.classList.remove('animate');


  }, 700);
}, false);


////////////////////////////////////////

// CLICK SIMULATION

function simulateClick() {
  // Get the element to send a click event
  const cat = document.getElementById("catImg");
  const button = document.getElementById("button");

  // Create a synthetic click MouseEvent
    let evt = new MouseEvent("click", {
      animate: true,
      cancelable: true,
      view: window
    });
  
  // Send the event to the checkbox element
  button.dispatchEvent(evt);
}
  document.getElementById("catImg").addEventListener('click', simulateClick);


////////////////////////////////////////