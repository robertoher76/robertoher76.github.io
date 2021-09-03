$(document).ready(function() {

    $(".btn-arrow").click(function() {
        $(this).closest(".discusion").find(".secondary-box").slideToggle("slow");
        $(this).closest(".discusion").find(".primary-box").toggleClass("active");
    });

    $(".menu-item").click(function() {
        $(this).toggleClass("selected");
        $(this).closest(".practica").find(".ejercicios").slideToggle("slow");
    });

    $(".menu-icon").click(function() {
        $("header").toggleClass("active");
        $("body").toggleClass("mobile");
        $(".menu-mobile").fadeToggle("slow");
    });
});