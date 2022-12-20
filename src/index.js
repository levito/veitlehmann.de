const html = document.documentElement
const mediaQuery = matchMedia('(prefers-reduced-motion: reduce)')

if (CSS.supports('transform-style', 'preserve-3d') && !mediaQuery.matches) {
  const sectionBodies = document.querySelectorAll('.js_section__body')
  html.classList.add('is-3d', 'is-flat', 'is-static')
  document.body.prepend(...document.querySelectorAll('.js_target'))

  document.addEventListener('transitionend', (e) => {
    if (!e.target.matches('a')) {
      sectionBodies.forEach((sectionBody) => sectionBody.scrollTo(0, 0))
      html.classList.add('is-flat', 'is-static')
    }
  })

  document.addEventListener('click', (e) => {
    const href = e.target.getAttribute('href')

    if (e.target.matches('a') && href[0] === '#') {
      e.preventDefault()
      html.classList.remove('is-flat')

      setTimeout(() => {
        html.classList.remove('is-static')
        window.location.hash = href.substr(1)
      }, 0)
    }
  })
}
