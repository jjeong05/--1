$(function(){


    $("#m_btn").click(function(e){
            e.preventDefault();

            if($("nav").is(":visible")){
                $("nav").hide();
                $("#m_btn").removeClass("on");
            }else{
                $("nav").show();
                $("#m_btn").addClass("on");
            }
           
    });

    $("nav>li>a").click(function(){
        preventDefault()
        $(this).next("ul").slideToggle();
    });


})