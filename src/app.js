fetch('https://api.yourdomain.com/users')
  .then(res => res.json())
  .then(data => {
    document.getElementById("data").innerHTML =
      "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
  });