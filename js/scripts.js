// const { JSDOM } = require( "jsdom" )
// const { window } = new JSDOM( "" )
// const $ = require( "jquery" )( window )

$(document).ready(function() {

    const scrollLink = $('.scroll')

    // auto scroll

    scrollLink.click(function(event) {
        event.preventDefault()
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500)
    })

    // active link class switch 

    $(window).scroll(function() {
        const scrollBarLocation = $(this).scrollTop()
        
        scrollLink.each(function() {
            console.log(scrollBarLocation)
            const sectionOffset = $(this.hash).offset().top - 72
            if(sectionOffset <= scrollBarLocation) {
                $(this).parent().addClass('active')
                $(this).parent().siblings().removeClass('active')
            } else if (scrollBarLocation === 0) {
                $(this).parent().siblings().removeClass('active')
            }
        })
    })
})