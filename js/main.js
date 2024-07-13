
/*leftmenu*/

$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})



/*scrollmenu*/
$("#leftMenu a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
})



/*Accordion*/


$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});



/*counter*/


window.onload = function() {
   
    countDownToTime("10 october 2024 9:56:00");
  }
//function represent the countdown 
  function countDownToTime(countTo) {
    // Convert future date to timestamp in seconds
    const futureDate = new Date(countTo).getTime() / 1000;

    // Function to update countdown
    function updateCountdown() {
        // Get current time as timestamp in seconds
        const now = new Date().getTime() / 1000;

        // Calculate time difference
        let timeDifference = futureDate - now;

        // If the countdown has ended
        if (timeDifference <= 0) {
            $(".days").html("0 D");
            $(".hours").html("0 h");
            $(".minutes").html("0 m");
            $(".seconds").html("0 s");
            clearInterval(interval); // Stop the interval
            return;
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (24 * 60 * 60));
        timeDifference -= days * 24 * 60 * 60;

        const hours = Math.floor(timeDifference / 3600);
        timeDifference -= hours * 3600;

        const mins = Math.floor(timeDifference / 60);
        const secs = Math.floor(timeDifference % 60);

        // Update the HTML elements
        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".minutes").html(`${mins} m`);
        $(".seconds").html(`${secs} s`);
    }

    // Update countdown immediately
    updateCountdown();

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);
}

// Call the function with the desired date
countDownToTime('2024-12-31T23:59:59');




/*textarea*/

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});


