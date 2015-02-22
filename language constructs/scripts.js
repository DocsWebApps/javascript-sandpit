// When loading javascript into a web page
// Either - load it at the bootom of the page so that your page get displayed first
// Or add the async attribute
// Browsers can have 6 channels downloading concurrently but when <script> is encoutntered it will switch to 1 and block

// Bad - slow laoding javascript prevents the page from loading - boaring !!!
<html>
<head>
<script type='text/javascript' src='http://mysite.com/myslow_javascript_file.js'</script>
</head>
<body>
	...... stuff
</body>
</html>

// Good - Load page before javascript
<html>
<head>
</head>
<body>
	...... stuff
	<script type='text/javascript' src='http://mysite.com/myslow_javascript_file.js'</script>
</body>
</html>

// Good - load the javascript asynchronously
<html>
<head>
	<script type='text/javascript' src='http://mysite.com/myslow_javascript_file.js' async</script>
</head>
<body>
	...... stuff
</body>
</html>