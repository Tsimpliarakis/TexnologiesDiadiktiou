function toggleTheme() {
  // Obtains an array of all <link>
  // elements.
  // Select your element using indexing.
  var theme1 = document.getElementsByTagName('link')[1];
  var theme2 = document.getElementsByTagName('link')[2];
  var theme3 = document.getElementsByTagName('link')[3];

  // Change the value of href attribute 
  // to change the css sheet.
  if (theme1.getAttribute('href') == 'header.css') {
      theme1.setAttribute('href', 'header-acc.css');
  } else {
      theme1.setAttribute('href', 'header.css');
  }

  if (theme3.getAttribute('href') == 'footer.css') {
      theme3.setAttribute('href', 'footer-acc.css');
  } else {
      theme3.setAttribute('href', 'footer.css');
  }
  // Index
  if (theme2.getAttribute('href') == 'index.css') {
      theme2.setAttribute('href', 'index-acc.css');
  } else if (theme2.getAttribute('href') == 'index-acc.css') {
      theme2.setAttribute('href', 'index.css');
  }
  // Catalogue
  if (theme2.getAttribute('href') == 'catalogue.css') {
    theme2.setAttribute('href', 'catalogue-acc.css');
  } else if (theme2.getAttribute('href') == 'catalogue-acc.css') {
    theme2.setAttribute('href', 'catalogue.css');
  }
  // Info
  if (theme2.getAttribute('href') == 'info.css') {
      theme2.setAttribute('href', 'info-acc.css');
  } else if (theme2.getAttribute('href') == 'info-acc.css') {
      theme2.setAttribute('href', 'info.css');
  }
  // Form
  if (theme2.getAttribute('href') == 'form.css') {
      theme2.setAttribute('href', 'form-acc.css');
  } else if (theme2.getAttribute('href') == 'form-acc.css') {
      theme2.setAttribute('href', 'form.css');
  }
}

function search(string){
  window.find(string);
}