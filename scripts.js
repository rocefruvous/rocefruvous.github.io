
// i did nut write this script because i really don't understand js (personallu fuck js)


$(document).ready(function(){


    var waves = ['⎻⎼⎽⎼⎻','⎼⎻⎼⎽⎼','⎽⎼⎻⎼⎽','⎼⎽⎼⎻⎼',];
    var title = "roce ";

    var timeInterval = 400; /** interval between each titles **/

    exec();

    setInterval(function(){
        exec();
    }, 
    
    timeInterval * waves.length);

    function exec(){
        $.each(waves, function(i, string){

            setTimeout(function(){
                $('title').html(title + string);
            }, 

            timeInterval * (i + 1));
        }
    );
    }
});