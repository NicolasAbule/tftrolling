fetch('https://nicolasabule.github.io/tftrolling/rollingodds.json')
  .then(response => response.json())
  .then(data => console.log(data));