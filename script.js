<script src="https://connect.facebook.net/en_US/sdk.js"></script>

FB.ui(
  {
    method: 'pay',
    action: 'purchaseiap',
    product_id: 'com.fb.friendsmash.coins.10',
    developer_payload: 'this_is_a_test_payload'
  },
  response => (console.log(response)) // Callback function
);

<!DOCTYPE html>
<html>

<head>
    <style>
        /*Put the CSS here */
        .button{
            background-color: aqua;
        }
    </style>
</head>

<body>
    <h1>My First Interface !</h1>
    <button id="firstbutton" class="button">Click on me !</button>
    <script>
        /*Put the javascript here */
        let buttonAlert = document.getElementById("firstbutton");
        buttonAlert.onclick = function(){
            alert("you click on me !")
        };

    </script>
</body>

</html>
