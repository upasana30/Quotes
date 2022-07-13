fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const val=Math.floor(Math.random() * 1000) + 1;
    const quote = data[val].text;
    document.getElementById("element").innerHTML=quote;
  });