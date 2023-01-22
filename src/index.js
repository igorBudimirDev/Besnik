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
