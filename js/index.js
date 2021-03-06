const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.querySelectorAll('nav a');
links.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`];
  link.style.color = 'green';
});

let nav = document.querySelector('nav');
let newItemOne = document.createElement('a');
newItemOne.href = '#';
newItemOne.textContent = 'Login';
newItemOne.style.color = 'green';
nav.append(newItemOne);
let newItemTwo = document.createElement('a');
newItemTwo.href = '#';
newItemTwo.textContent = 'Partners';
newItemTwo.style.color = 'green';
nav.append(newItemTwo);

let ctaH1 = document.querySelector('.cta-text h1');
let noSpaces = siteContent.cta.h1.split(' ');
noSpaces.forEach((word) => {
  ctaH1.append(word);
  let br = document.createElement('br');
  ctaH1.append(br);
});

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

let ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent.cta['img-src'];

let topContent = document.querySelectorAll('.top-content .text-content h4');
topContent[0].textContent = siteContent['main-content']['features-h4'];
topContent[1].textContent = siteContent['main-content']['about-h4'];

let topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].textContent = siteContent['main-content']['features-content'];
topContentText[1].textContent = siteContent['main-content']['about-content'];

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src']

let bottomContent = document.querySelectorAll('.bottom-content .text-content h4');
bottomContent[0].textContent = siteContent['main-content']['services-h4'];
bottomContent[1].textContent = siteContent['main-content']['product-h4'];
bottomContent[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentText[0].textContent = siteContent['main-content']['services-content'];
bottomContentText[1].textContent = siteContent['main-content']['product-content'];
bottomContentText[2].textContent = siteContent['main-content']['vision-content'];

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
let br = document.createElement('br');
contactP[0].append(br);
let street = siteContent.contact.address.substr(0, 18);
contactP[0].prepend(street);
let city = siteContent.contact.address.substr(19);
contactP[0].append(city);
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

let copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer.copyright;