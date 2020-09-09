import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//For Hamburger menu to work
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header.container')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        mobile_menu.classList.toggle('active')
    })
})

// document.addEventListener('scroll', () => {
//     let scroll_position = window.scrollY;
//     if(scroll_position > 250){
//         header.style.backgroundColor = "#29323c"
//     } else {
//         header.style.backgroundColor = 'transparent'
//     }
// })

//End for Hamburger menu to work


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
