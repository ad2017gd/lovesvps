
$(document).ready(() => {



    $('body').prepend(`

<ul class="navbar">
    <li><span>LovesVPS</span></li>
    <li><a href="/">Home</a></li>
    <li><a href="/info">Info</a></li>
    <li><a href="/contact">Contact</a></li>

    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
    <li class="ne-button" onclick="toggleSmall()"><div class="ne-hov"><img src="/assets/navbar.png" width="32" height="32"></img></div></li>
    <li class="ne-user"><span></span></li>
</ul><br>

`)

    $(`.navbar li a[href='${window.location.pathname}']`).parent().addClass("ne-active")
    if(localStorage.getItem("username") != undefined){
        $($(`.ne-user`)[0].children[0]).text(localStorage.getItem("username"));
    }
    //$(`.navbar li a[href='/']`).parent().addClass("ne-pad")

    

})
function toggleSmall(){
    if($(`.navbar`).hasClass("resp")){
        $(`.navbar`).removeClass("resp");
    } else {
        $(`.navbar`).addClass("resp");
    }
}