    var number = 45;
    var intervalId;
    var score = 0;

    function run() 
    {
      number = 45;
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
      document.getElementById('wrapper').style.display = "block";
    }

    function decrement() 
    {
      number--;

      $("#show-number").html("Seconds Left! <h2>" + number + "</h2>");

      if (number === 0) 
      {

       stop();

      alert("Time Up!");
      document.getElementById('startc').style.display = "block";  
      document.getElementById('text').style.display = "block";
      check();
      $("#yourscore").html("Your Score out of 3 is: <h2>" + score + "</h2> <br>");
      document.getElementById('wrapper').style.display = "none";

      }

    }


    function stop() 
    {
      clearInterval(intervalId);
    }

    function check ()
    {
      score = 0;
      if(document.getElementById("q1c").checked)
      score++;

      if(document.getElementById("q2d").checked)
      score++;

      if(document.getElementById("q3b").checked)
      score++;

    }

    function uncheck()
    {
      document.getElementById("q1a").checked = false;
      document.getElementById("q1b").checked = false;
      document.getElementById("q1c").checked = false;
      document.getElementById("q1d").checked = false;
      document.getElementById("q2a").checked = false;
      document.getElementById("q2b").checked = false;
      document.getElementById("q2c").checked = false;
      document.getElementById("q2d").checked = false;
      document.getElementById("q3a").checked = false;
      document.getElementById("q3b").checked = false;
      document.getElementById("q3c").checked = false;
      document.getElementById("q3d").checked = false;
    }

    $("#start").on("click", function() 
                              { 
                                document.getElementById('startc').style.display = "none";  
                                document.getElementById('text').style.display = "none"; 
                                uncheck();
                                stop();
                                document.getElementById('show-number').style.display = "block";
                                $("#show-number").html("Seconds Left! <h2>45</h2>");
                                $("#yourscore").html("");
                                run();
                                             
                               });
    
    $("#done").on("click", function() 
                              { 
                                document.getElementById('startc').style.display = "block";  
                                document.getElementById('text').style.display = "block";  
                                document.getElementById('wrapper').style.display = "none";
                                //document.getElementById('start').style.display = "none";
                                document.getElementById('show-number').style.display = "none";
                                stop();
                                check();

                                $("#yourscore").html("Your Score out of 3 is: <h2>" + score + "</h2><br>");
                          
                               });

