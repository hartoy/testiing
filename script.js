document.querySelectorAll('.circle').forEach((circle) => {
  circle.addEventListener('mouseover', () => {
    circle.style.transform = 'rotate(360deg)'
  })
  circle.addEventListener('mouseout', () => {
    circle.style.transform = 'rotate(0deg)'
  })
})

const brandLink = document.getElementById('brandLink')
const circleLogo = brandLink.querySelector('.circle-logo')
const portfolioText = document.getElementById('portfolioText')

brandLink.addEventListener('mouseenter', () => {
  circleLogo.innerHTML = '<img src="img/nh.jpg" alt="Portfolio" class="img-fluid rounded-circle" />'
  portfolioText.classList.remove('d-none')
})

brandLink.addEventListener('mouseleave', () => {
  circleLogo.innerHTML = '<span>?</span>'
  portfolioText.classList.add('d-none')
})

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler')
  const navbarCollapse = document.getElementById('navbarNav')

  navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show')

    if (window.innerWidth >= 768) {
      navbarToggler.classList.toggle('hide')
    }
  })
})
