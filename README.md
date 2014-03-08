rating 1.02
===========

jquery rating simple &amp; easy

1. Include necessary JS and CSS files

        
            <script type="text/javascript" src="rating.js"></script>
            <link rel="stylesheet" type="text/css" href="rating.css" />
        
    

2. Create a text box element (the class "rating10" contain a num "10", this will display 10 starts)

        
            <input type="text" class="rating rating10" />
        
3. You can change size of control by adding classes "rating-size-medium" or "rating-size-small" or "rating-size-normal".
   If "rating-size-xxx" is not specified it would be interpreted as "rating-size-normal".

               
            <input type="text" class="rating rating10 rating-size-medium" />

4. You can use floating number as value:
   
            
            <input type="text" class="rating rating10 rating-size-normal" value="3.4"/>

5. You can use different shapes:
   
            
            <input type="text" class="rating rating10 rating-size-normal rating-shape-rect" value="3"/>

6. Fire plugin using jQuery selector

        
           $(function ()
            {
                $('.rating').rating();
            });
        
    

7. When form submit, You can access these values in the server-side script using the $_POST (PHP), Request.Form (Asp or Asp.net).

8. view the demo
http://www.chukeer.com/plus/rating/example.html