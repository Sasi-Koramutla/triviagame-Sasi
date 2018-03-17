   
     var r = Math.floor((Math.random() * 12) + 1);
     var y = Math.floor((Math.random() * 12) + 1);
     var g = Math.floor((Math.random() * 12) + 1);
     var b = Math.floor((Math.random() * 12) + 1);

     var w = 0;
     var l = 0;
     var randomscore = Math.floor((Math.random() * 110) + 10);
     var yourscore = 0;


     console.log(r,y,g,b);
     $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
   

     $("#red").on("click", function()
       {

        yourscore += r;
        console.log(yourscore);
        $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);

        if(yourscore === randomscore)
        {
            w++;
            $("#w").html("Wins: " + w);
           // $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Won!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;            
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" W");
        }

        if(yourscore > randomscore)
        {
            l++;
            $("#l").html("Losses: " + l);
            //$("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Lost!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" L");
        }

       });

       $("#yellow").on("click", function()
       {
           
        yourscore += y;
        console.log(yourscore);
        $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);

        if(yourscore === randomscore)
        {
            w++;
            $("#w").html("Wins: " + w);
           // $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Won!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;            
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" W");
        }

        if(yourscore > randomscore)
        {
            l++;
            $("#l").html("Losses: " + l);
            //$("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Lost!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" L");
        }

       });

       $("#blue").on("click", function()
       {
           
        yourscore += b;
        console.log(yourscore);
        $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);

        if(yourscore === randomscore)
        {
            w++;
            $("#w").html("Wins: " + w);
           // $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Won!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;            
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" W");
        }

        if(yourscore > randomscore)
        {
            l++;
            $("#l").html("Losses: " + l);
            //$("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Lost!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" L");
        }

       });

       $("#green").on("click", function()
       {

        yourscore += g;
        console.log(yourscore);
        $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);

        if(yourscore === randomscore)
        {
            w++;
            $("#w").html("Wins: " + w);
           // $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Won!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;            
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" W");
        }

        if(yourscore > randomscore)
        {
            l++;
            $("#l").html("Losses: " + l);
            //$("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Lost!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" L");
        }

       });


       /*
     var r = Math.floor((Math.random() * 12) + 1);
     var y = Math.floor((Math.random() * 12) + 1);
     var g = Math.floor((Math.random() * 12) + 1);
     var b = Math.floor((Math.random() * 12) + 1);

     var w = 0;
     var l = 0;
     var randomscore = Math.floor((Math.random() * 110) + 10);
     var yourscore = 0;

//
     console.log(r,y,g,b);
     $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
   

     $("#red").on("click", function()
       {

        yourscore += r;
        console.log(yourscore);
        $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);

        if(yourscore === randomscore)
        {
            w++;
            $("#w").html("Wins: " + w);
           // $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Won!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;            
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" W");
        }

        if(yourscore > randomscore)
        {
            l++;
            $("#l").html("Losses: " + l);
            //$("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Lost!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" L");
        }

       });

       $("#yellow").on("click", function()
       {
           
        yourscore += y;
        console.log(yourscore);
        $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);

        if(yourscore === randomscore)
        {
            w++;
            $("#w").html("Wins: " + w);
           // $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Won!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;            
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" W");
        }

        if(yourscore > randomscore)
        {
            l++;
            $("#l").html("Losses: " + l);
            //$("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Lost!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" L");
        }

       });

       $("#blue").on("click", function()
       {
           
        yourscore += b;
        console.log(yourscore);
        $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);

        if(yourscore === randomscore)
        {
            w++;
            $("#w").html("Wins: " + w);
           // $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Won!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;            
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" W");
        }

        if(yourscore > randomscore)
        {
            l++;
            $("#l").html("Losses: " + l);
            //$("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Lost!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" L");
        }

       });

       $("#green").on("click", function()
       {

        yourscore += g;
        console.log(yourscore);
        $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);

        if(yourscore === randomscore)
        {
            w++;
            $("#w").html("Wins: " + w);
           // $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Won!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;            
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" W");
        }

        if(yourscore > randomscore)
        {
            l++;
            $("#l").html("Losses: " + l);
            //$("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            //$("#yourscore").html("Your Score: "+  "<br>" + yourscore);
            alert("You Lost!");
            randomscore = Math.floor((Math.random() * 110) + 10);
            yourscore = 0;
            r = Math.floor((Math.random() * 12) + 1);
            y = Math.floor((Math.random() * 12) + 1);
            g = Math.floor((Math.random() * 12) + 1);
            b = Math.floor((Math.random() * 12) + 1);
            console.log(r,y,g,b);
            $("#randomscore").html("Random Target Score: " + "<br>" + randomscore);
            $("#yourscore").html("Your Total Score: "+ "<br>" + yourscore);
            $("#tr").append(" L");
        }

       });
*/
