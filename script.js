
const plus = document.querySelectorAll('.plus')
const minus = document.querySelectorAll('.minus')

plus.forEach(icon =>{
    icon.addEventListener('click', () =>{
        icon.classList.toggle('hidden')
        const heading = icon.parentElement
        const content = heading.nextElementSibling
        const innerInfo = content.firstElementChild
        const height = innerInfo.getBoundingClientRect().height
        content.style.height = height + 'px'
        const minus = heading.querySelector('.minus')
        minus.classList.toggle('hidden')

    })
})

minus.forEach(icon =>{
    icon.addEventListener('click', () =>{
        icon.classList.toggle('hidden')
        const heading = icon.parentElement
        const content = heading.nextElementSibling
        content.style.height = '0px'
        const plus = heading.querySelector('.plus')
        plus.classList.toggle('hidden')

    })
})