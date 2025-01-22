//This code is taken from: "https://gomakethings.com/getting-html-with-fetch-in-vanilla-js"

var url = 'https://raw.githubusercontent.com/iturriker/devcamp/refs/heads/main/header.html';
var dir = document.getElementByTagName("header");

fetch(url)
  .then(function (response)
    {
      // The API call was successful!
      return response.text();
    }
  )
  .then(function (html)
    {
      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');

      // Get element from doc and insert to the dir
      dir.append(doc.getElementByTagName('header'));
    }
  )
  .catch(function (err)
    {
      // There was an error
      console.warn('Something went wrong.', err);
    }
  );