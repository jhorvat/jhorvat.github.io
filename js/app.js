$(document).foundation();
new WOW().init();

$("#resumeLink").click(function(e) {
    e.preventDefault();
    $("#intro, #resume").toggleClass("hide");
    // var a = $("#intro .small-11").get(0);
    // var b = $("#resume .medium-4").get(0);
    //
    // ramjet.hide(a,b);
    // ramjet.transform(a, b, {
    //     done: function () {
    //         ramjet.show(b);
    //     }
    // });

});
