<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <title>Contact us</title>
</head>
<body>

<!-- Menu -->
<?php  
      
      include 'menu.php';
      
?>

    <div class="contact-container">

        <div class="contact-section-left">

                <div class="contactpage-details">

                        <div class="getintouch-section">
                                <p style="margin-bottom: 1rem;">GET IN TOUCH</p>
                                <p style="margin-bottom: 2rem;">We’d love to know how we could help. Get in touch 
                                        for a chat or to arrange a meeting.</p>
                        </div>


                    <div class="contactpage-details-container">

                                    <div class="contactpage-address">
                                            <p>Lewis Workspace</p>
                                            <p>No 18, Millers Road, (Nandidurga Road Entrance),</p>
                                            <p>Benson Town, Bangalore - 550046</p>
                                    </div>
                
                                    <div class="contactpage-numbers">
                                            <p>T +91 9980197719</p>
                                            <p>T +91 9980909629</p>
                                            <p>E contact.us@monsasourcing.com</p>
                                    </div>
                    </div>

                        <div class="contactpage-social-follow">

                                <p style="margin-bottom: 1rem;">Follow us</p>
                                <img src="images/fb-icon.svg" alt="">
                                <img src="images/linkedin-icon.svg" alt="">
                        </div>
    
                    </div>



                    <div class="contact-form-section">

                            <div class="form-container">
                                    <form name="contact" method="POST" data-netlify="true">   

                                        <div class="textbox-wrapper1">
                                            <input class="textbox" type="text" name="name" required placeholder="Name">
                                            <input class="textbox" type="tel" name="tel" placeholder="Phone (optional">
                                        </div>

                                        <div class="textbox-wrapper2">
                                            <input class="textbox" type="email" name="email" required placeholder="E-mail">
                                            <input class="textbox" type="text" name="company" placeholder="Company name (Optional)">
                                         </div>
                                        <textarea class="textarea" name="message" class="none" required placeholder="Write Your Message Here"></textarea>
                                 
                                    <input type="submit" value="Send" class="contact-submit-btn"> 
                                    </form>
                                </div>
                                
                    </div>

        </div>



       


        <div class="contact-section-right">



        </div>


    </div>


      <div class="contactpage-footer">
                <p style="margin-left: 3rem; font-size: 0.6rem; color: grey;">COPYRIGHT © MONSA SOURCING CONSULTANTS REGISTERED TRADEMARK</p>
      </div>
    
</body>
</html>