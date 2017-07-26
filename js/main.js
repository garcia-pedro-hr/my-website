$(document).ready(function() {
   new Typed('#typed1', {
       stringsElement: '#typed1-message',
       typeSpeed: 50,
       fadeOut: true,
       backDelay: 3000,
       showCursor: false,
       onComplete: (self) => {
           new Typed('#typed2', {
               stringsElement: '#typed2-message',
               typeSpeed: 50,
               startDelay: 1000,
               fadeOut: true,
               backDelay: 3000,
               showCursor: false,
               onComplete: (self) => {
                   new Typed('#typed3', {
                       stringsElement: '#typed3-message',
                       typeSpeed: 50,
                       startDelay: 1000,
                       fadeOut: true,
                       backDelay: 3000,
                       showCursor: false,
                       onComplete: (self) => {
                           // TODO
                       }
                   });
               }
           });
       }
   }); 
});