// ==== MENU BURGER ====
const burger = document.querySelector('#burger')
const nav = document.querySelector('nav')

burger.addEventListener('click', function() {
    nav.classList.toggle('open')
})

document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && e.target !== burger) {
        nav.classList.remove('open')
    }
})

// ==== SCROLL SMOOTH ====
document.querySelectorAll('a[href^="#"]').forEach(function(lien) {
    lien.addEventListener('click', function(e) {
        e.preventDefault()
        const cible = document.querySelector(this.getAttribute('href'))
        cible.scrollIntoView({ behavior: 'smooth' })
    })
})

// ==== ANIMATION AU SCROLL ====
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
}, { threshold: 0.1 })

document.querySelectorAll('section').forEach(function(section) {
    observer.observe(section)
})

