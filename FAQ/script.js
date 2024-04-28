const toggleBtns = document.querySelectorAll(".faq-toggle");
toggleBtns.forEach(toggle => {
    toggle.addEventListener('click',()=>{
        toggle.parentNode.classList.toggle('active')
    })
})
