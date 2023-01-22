/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const phoneHamburger = document.querySelector(".phone-hamburger")
const phoneClose = document.querySelector(".phone-close")
const phoneNav = document.querySelector(".phone__nav")
const phoneNavLinks = document.querySelector(".phone__nav__main")
const signUpBtns = document.querySelectorAll(".sign-up-btn")
phoneHamburger.addEventListener("click", () => {
  phoneNav.style.display = "flex"
  phoneNavLinks.classList.add("phone-nav-links")
  phoneNav.classList.add("phone__nav__opened")
  signUpBtns.forEach((btn) => {
    btn.classList.remove("closegi")

    btn.classList.add("phone-nav-links")
  })
})
phoneClose.addEventListener("click", () => {
  phoneNav.classList.remove("phone__nav__opened")
  phoneNav.classList.add("phone__nav__closed")
  signUpBtns.forEach((btn) => {
    btn.classList.add("phone__nav__closed")
  })
  phoneNavLinks.classList.add("closegi")
  setTimeout(() => {
    phoneNav.classList.remove("phone__nav__closed")
    phoneNav.style.display = "none"
    signUpBtns.forEach((btn) => {
      btn.classList.remove("phone__nav__closed")
    })
  }, 200)
})

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7QUM3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGVzL21haW4uc2Nzcz8yZmY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBwaG9uZUhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGhvbmUtaGFtYnVyZ2VyXCIpXHJcbmNvbnN0IHBob25lQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob25lLWNsb3NlXCIpXHJcbmNvbnN0IHBob25lTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG9uZV9fbmF2XCIpXHJcbmNvbnN0IHBob25lTmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob25lX19uYXZfX21haW5cIilcclxuY29uc3Qgc2lnblVwQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lnbi11cC1idG5cIilcclxucGhvbmVIYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwaG9uZU5hdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcclxuICBwaG9uZU5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJwaG9uZS1uYXYtbGlua3NcIilcclxuICBwaG9uZU5hdi5jbGFzc0xpc3QuYWRkKFwicGhvbmVfX25hdl9fb3BlbmVkXCIpXHJcbiAgc2lnblVwQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VnaVwiKVxyXG5cclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwicGhvbmUtbmF2LWxpbmtzXCIpXHJcbiAgfSlcclxufSlcclxucGhvbmVDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBob25lTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJwaG9uZV9fbmF2X19vcGVuZWRcIilcclxuICBwaG9uZU5hdi5jbGFzc0xpc3QuYWRkKFwicGhvbmVfX25hdl9fY2xvc2VkXCIpXHJcbiAgc2lnblVwQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwicGhvbmVfX25hdl9fY2xvc2VkXCIpXHJcbiAgfSlcclxuICBwaG9uZU5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWdpXCIpXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBwaG9uZU5hdi5jbGFzc0xpc3QucmVtb3ZlKFwicGhvbmVfX25hdl9fY2xvc2VkXCIpXHJcbiAgICBwaG9uZU5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgIHNpZ25VcEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwicGhvbmVfX25hdl9fY2xvc2VkXCIpXHJcbiAgICB9KVxyXG4gIH0sIDIwMClcclxufSlcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9