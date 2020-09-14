

$(window).scroll(function () { 

    let heightfromtop= $(window).scrollTop();

    if(heightfromtop>100)
    {
        $(".navbar").css("backgroundColor","rgba(0,0,0,0.8)")
    }
    else
    {
        $(".navbar").css("backgroundColor","transparent")

    }
});

$("a").click(function()
{
    let hrefdata=$(this).attr("href");
     let seoffset =$(hrefdata).offset().top;  
     $("html,body").animate({scrollTop:seoffset},2000);  

})

$(document).ready(function()
{
    $(".loading").fadeOut(3000,function()
    {
        $("body").css("overflow","auto")
    });

})