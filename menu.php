<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="menu.css">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <title>Monsa Sourcing</title>
</head>
<body>

    <div id="nav" class="nav-container">

        <div class="nav-logo-container">
               <a href="index.php"> <img src="images/monsa-logo-white.svg" alt=""></a>
        </div>

        <div class="nav-button-container">

            <p class="nav-text">menu</p>

            <div id="toggle" class="hamburger-container">
                    <div class="lines"></div>
                    <div class="lines"></div>
                    <div class="lines"></div>
            </div>

        </div>

    </div>


    <div class="overlay"></div>



    <div id="menu" class="menu-container">

           



        <div class="menu-section-left">

            <img src="images/monsa-logo-black.svg" alt="">

        </div>

        <div class="menu-section-right">

                <div id="closebtn" class="close-menu-section">

                    <p class="closemenutext">close menu</p>
                    <img src="images/close-icon.svg" alt="">

                </div>


                <div class="menu-items">

                  <span id="menuitem" class="menu-option"> 
                        <div class="option-line"></div>
                        <a  href="index.php">Home</a>
                    </span>

                    <span id="menuitem" class="menu-option"> 
                            <div class="option-line"></div>
                            <a  href="vision-and-mission.php">Our vision and mission</a>
                        </span>

                        <span id="menuitem" class="menu-option"> 
                                <div class="option-line"></div>
                                <a  href="why-us.php">Why us</a>
                            </span>

                            <span id="menuitem" class="menu-option"> 
                                <div class="option-line"></div>
                                <a  href="this-is-us.php">About us</a>
                            </span>

                            <span id="menuitem" class="menu-option"> 
                                    <div class="option-line"></div>
                                    <a  href="contact.php">Contact us</a>
                                </span>

    
                </div>
                

                <div class="menu-details">

                    <div class="menu-address-container">
                            <p style="margin-bottom: 1rem;">GET IN TOUCH</p>
                            <p>Lewis Workspace</p>
                            <p>No 18, Millers Road, (Nandidurga Road Entrance),</p>
                            <p>Benson Town, Bangalore - 550046</p>
                    </div>

                    <div class="menu-contact-details">
                            <p>T +91 9980197719</p>
                            <p>T +91 9980909629</p>
                            <p>E contact.us@monsasourcing.com</p>
                    </div>

                    <div class="menu-social-follow">
                            <p style="margin-bottom: 1rem;">Follow us</p>
                            <img src="images/fb-icon.svg" alt="">
                            <img src="images/linkedin-icon.svg" alt="">
                    </div>

                </div>
        </div>

    </div>

<!-- Jquery script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 <!-- Gsap script -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
 <!-- Scrolltrigger script -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"></script>
  <!-- main script -->
  <script src="menu.js"></script>
    
</body>
</html>