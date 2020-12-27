const { JSDOM } = require( "jsdom" )
const { window } = new JSDOM( "" )
const $ = require( "jquery" )( window )

$(document).ready(function() {

    const scrollLink = $('.scroll')

    // auto scroll

    scrollLink.click(function(event) {
        event.preventDefault()
        
    })
})