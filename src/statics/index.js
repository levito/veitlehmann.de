;(function () {
  var cssSupports = (window.CSS || {}).supports || function () {}

  if (!cssSupports('transform-style', 'preserve-3d')) {
    var sections = document.querySelectorAll('.js_section')
    var targets = document.querySelectorAll('.js_target')

    ;[].slice.call(targets).forEach(function (target, i) {
      sections[i].appendChild(target)
    })

    return
  }

  var html = document.documentElement
  var sectionBodies = document.querySelectorAll('.js_section__body')

  document.addEventListener('transitionend', function (e) {
    if (!e.target.matches('a')) {
      sectionBodies.forEach(function (sectionBody) {
        sectionBody.scrollTo(0, 0)
      })

      html.classList.add('is-flat', 'is-static')
    }
  })

  document.addEventListener('click', function (e) {
    var href = e.target.getAttribute('href')

    if (e.target.matches('a') && href[0] === '#') {
      e.preventDefault()
      html.classList.remove('is-flat')

      setTimeout(function () {
        html.classList.remove('is-static')
        window.location.hash = href.substr(1)
      }, 0)
    }
  })
})()
