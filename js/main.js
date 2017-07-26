$(document).ready(function() {
    setTimeout(function() {
        $("link[href*='loading-spinner.css']").remove();
        
        $('#loading-screen').animate({
           opacity: 0 
        }, 500, function () {
            $(this).remove();
            triggerTypedMessages();
        });
    }, 1800);
});

function triggerTypedMessages () {
    new Typed('#typed1', {
       stringsElement: '#typed1-message',
       typeSpeed: 30,
       fadeOut: true,
       backDelay: 3000,
       showCursor: false,
       onComplete: (self) => {
           new Typed('#typed2', {
               stringsElement: '#typed2-message',
               typeSpeed: 30,
               startDelay: 750,
               fadeOut: true,
               backDelay: 3000,
               showCursor: false,
               onComplete: (self) => {
                   new Typed('#typed3', {
                       stringsElement: '#typed3-message',
                       typeSpeed: 30,
                       startDelay: 750,
                       fadeOut: true,
                       backDelay: 3000,
                       showCursor: false,
                       onComplete: (self) => {
                           $('#social-media-panel').animate({
                               opacity: 1
                           }, 2000);
                       }
                   });
               }
           });
       }
   });
}