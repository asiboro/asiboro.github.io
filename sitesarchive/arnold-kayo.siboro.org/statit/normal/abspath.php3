<html>
<head>
<title>Get the absolut path</title>
</head>
<body text="#000000" background="grund.gif" link="#FF0000" alink="#FF0000" vlink="#FF0000">
<div align="center"><h1>Get the absolut path!</h1></div>
<?
$abspath=ereg_replace("\\\\","/",__FILE__); 
$abspath = dirname ($abspath); 
?>
<table align=center>
<tr>
 <td align=center><b><? print "$abspath<br>"; ?></b></td>
</tr>
<tr>
 <td align=center>^^^ This is your absolut path! ^^^</td>
</tr>
</table><br>
Copy it and put it to _short.inc, statit.php3 ,statitp.php3 and showcount.php3!! After this you can delete the abspath.php3!
</body>
</html>