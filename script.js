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
