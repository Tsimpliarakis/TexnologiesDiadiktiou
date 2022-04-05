function toggleTheme() {
  // Obtains an array of all <link>
  // elements.
  // Select your element using indexing.
  var theme1 = document.getElementsByTagName('link')[1];

  // Change the value of href attribute 
  // to change the css sheet.
  if (theme1.getAttribute('href') == 'header.css') {
      theme1.setAttribute('href', 'header-acc.css');
  } else {
      theme1.setAttribute('href', 'header.css');
  }

  var theme2 = document.getElementsByTagName('link')[2];

  if (theme2.getAttribute('href') == 'index.css') {
      theme2.setAttribute('href', 'index-acc.css');
  } else {
      theme2.setAttribute('href', 'index.css');
  }

  var theme2 = document.getElementsByTagName('link')[3];

  if (theme2.getAttribute('href') == 'footer.css') {
      theme2.setAttribute('href', 'footer-acc.css');
  } else {
      theme2.setAttribute('href', 'footer.css');
  }
}

function search(string){
  window.find(string);
}