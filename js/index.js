$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
   $("ul li a#contact").click(function(){
        $("#content").load("pages/contact.html");
    });

    $("ul li a#start").on('load', function() {
        $.ajax({
            url : "pages/conoceGranada.txt",
            dataType: "text",
            success : function (data) {
                $("#content").html(data);
            }
        });
    });
});
