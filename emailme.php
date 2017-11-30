<!DOCTYPE HTML>

<head>
    
    <title>Marquet Reid</title>
    <link rel="stylesheet" type="text/css" href="main.css">
  
</head>

<body>
    
    <nav>
    <a href="home.html"><img src="Marquet-BW50.png" alt="Marquet Reid's Logo" id=logo></a>
<ul>
    <li><a href="home.html#home">Home</a></li>
    <li><a href="about-me.html#about">About</a></li>
    <li><a href=resume.html#resume>Resume</a></li>
    <li><a href=portfolio.htm#portfolio>Portfolio</a></li>
    <li><a href="connect.html#connect">Connect</a></li>
   
    <li><a href="http://www.marquetreid.com/blog">Blog</a></li>
  </li>
</ul>

</nav>
    
<?php
        
$to = "contact@marquetreid.com";
$Subject = "Email from message box at marquetreid.com";

$name = $_POST["user_name"];
$email = $_POST["user_email"];
$message = $_POST["user_message"];

$headers .= "Content-type: text/html;\r\n";
$headers .="From: $email";

mail ($to, $Subject, $message, $headers);

echo "<p style=\"color: #428bca;\">Email has been sent! Thank you $name!</p>";
    
?>

<footer class="footer">
    <a href="https://www.linkedin.com/in/marquetreid" target="_blank"><img src="incircle.png" alt="Join me on linkedin"></a>
    <a href="https://www.twitter.com/codenamequet" target="_blank"><img src="twitter-circle.png" alt="Follow me on Twitter"></a>
    <a href="https://www.github.com/codenamequet" target="_blank"><img src="github32.png" alt="Check out My Code on Github"></a>
</footer>    

</body>

</html>