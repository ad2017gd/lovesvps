$(document).ready(() => {



    $('body').prepend(`

<ul class="navbar">
    <li><a href="/">Home</a></li>
    <li><a href="/info">Info</a></li>
    <li><a href="/contact">Contact</a></li>
</ul><br>

`)

    $(`.navbar li a[href='${window.location.pathname}']`).parent().addClass("ne-active")
    $(`.navbar li a[href='/']`).parent().addClass("ne-pad")

})