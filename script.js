function registre_login(id) {

    if (id == 'x') {
        var y = document.getElementById('panel');
        var x = document.getElementById(id);
        var x1 = document.getElementById('login-panel');
        var x2 = document.getElementById('registre-panel');
        y.style.display = "none";
        x.style.display = "none";
        x1.style.display = "none";
        x2.style.display = "none";
    }
    if (id == 'login-panel') {
        var y = document.getElementById('panel');
        y.style.display = "flex";
        var x = document.getElementById(id);
        x.style.display = "flex";
        var f = document.getElementById('xr');
        f.style.display = "block";
        // disable registre
        var s = document.getElementById('registre-panel');
        s.style.display = "none";
    }
    else if (id == 'registre-panel') {
        console.log("Please select");
        var y = document.getElementById('panel');
        y.style.display = "flex";
        // enable registre
        var x = document.getElementById(id);
        x.style.display = "flex";
        var f = document.getElementById('x');
        f.style.display = "block";
        // disable login
        var s = document.getElementById('login-panel');
        s.style.display = "none";
    }
}

function unvisible_menu(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
        x.style.display = "flex";
    }
    else
        x.style.display = "none";
}
function showbar() {
    var m = document.getElementById("navmobile");
    if (m.style.display == "flex")
        m.style.display = "none";
    else
        m.style.display = "flex";
}
function ft_menu() {
    var x = document.getElementById("left-s");
    if (x.style.display == "none")
        x.style.display = "flex";
    else
        x.style.display = "none";
}

function ft_sc(value, svg) {
    var p = document.getElementById(value);
    var svg = document.getElementById(svg);

    if (p.style.display == 'block') {
        p.style.overflow = 'hidden'
        p.style.display = 'none';
        svg.style.transform = 'rotate(0)';
    }
    else {
        p.style.display = 'block';
        svg.style.transform = 'rotate(-90deg)';
    }
}

function Copy_Past() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

function ft_change_package(package) {
    var other = 'monthly';
    if (package == 'monthly')
        other = 'yearly';
    // button
    let p_button = document.getElementById(package + '_b');
    p_button.classList.replace('package_off', 'package_on');
    let o_button = document.getElementById(other + '_b');
    o_button.classList.replace('package_on', 'package_off');
    // context
    let mypackage = document.getElementById(package);
    mypackage.style.display = 'grid';
    let opackage = document.getElementById(other);
    opackage.style.display = 'none';
}

// slider
$(document).on('ready', function () {
    /*---First Slider ----*/
                /*----Second Slider ----*/
              $(".slider2").slick({
                   infinite: true,
                   slidesToShow: 2,
                   autoplay:true,
                   autoplaySpeed: 3000,
                   variableWidth: true,
                   slidesToScroll: 1,
                //    fade: true,
                    nextArrow : '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
                   prevArrow: '<button type="button" class="slick-prev"><</button>',
                           responsive: [
                           {
                             breakpoint: 1024,
                             settings: {
                               slidesToShow: 3,
                               slidesToScroll: 3,
                               infinite: true,
                               dots: true
                             }
                           },
                            {
                             breakpoint: 600,
                             settings: {
                               slidesToShow: 2,
                               slidesToScroll: 2
                             }
                           },
                           {
                             breakpoint: 480,
                             settings: {
                               slidesToShow: 1,
                               slidesToScroll: 1
                             }
                           }
                           // You can unslick at a given breakpoint now by adding:
                           // settings: "unslick"
                           // instead of a settings object
                         ]
   
                   });
           });