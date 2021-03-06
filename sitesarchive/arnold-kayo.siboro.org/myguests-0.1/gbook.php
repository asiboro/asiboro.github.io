<?php

	### myGuests 0.1
	### author: Matthias Keller
	### email: matthias.keller@langenau.org

	### The program is published under the GNU Public Licence. 
	### See licence.txt for details. 

	### variables
	# general options
	$dataFile = "/var/www/gbook/gb"; # location of the data textfile, e.g. /var/www/gb; hint: check the permissions, should be 666
	$adminPassword = "iforgottochangemypassword"; # IMPORTANT
	$entriesPerPage = "10"; # number of entries per page
	$forbiddenTags = "(<img|onload|onmouseover|script|<object|font|<applet)"; # (optional)
	$language = "en"; # german = de/english = en
	
	
	# layout options
	$cssFile = "main.css"; # location of the css-stylesheet (optional)
	$colors = "bgcolor=\"#FFFFFF\" text=\"#000000\"";  # <body>-like color settings (optional)
	$title = "myGuests 0.1"; # title of your page
	
	# email options
	$sendEmail = false; # enable email notification? true/false
	$sender = "email <guestbook@domain.com>"; 
	$recipient = "mister foo <user@domain.com>"; 
	############
	
	### in the most cases it isn't needed to edit below this line ###
			
	include($language . '.lang');		
			
	$fd = fopen ($dataFile, "r"); 
	$i = 0;	 
	while (!feof($fd)) { 
	        $i++;
	        $entry[$i] = fgets($fd, 4096); 
	} 
	fclose ($fd); 
 
 	$i--;
 
 	if ($name != "" && $text != "" && $cmd == "newentry") {
 	
 		if (eregi($forbiddenTags, $text)) { $error1 = true; }
 		
 		else { $error1 = false; } 
 	
 		if ($error1 == false) {
 	
 			$date = date("d.m.y");
 			$time = date("G:i");
 			$host = $REMOTE_ADDR;
 		
 			$text = htmlentities($text);
 			$text = ereg_replace("(\r\n|\n|\r)","<br>",$text);
 		 	
 			$i++;
 	
 			$entry[$i] = $name . "\t" . $email . "\t" . $homepage ."\t" . $text . "\t" . $date . "\t" . $time . "\t"  . $host . "\t" . $comment . "\n";
 		
			$fd = fopen ($dataFile, "w");
		
			for($j = 0; $j <= $i; $j++) {
				fputs($fd, $entry[$j]);
			}
			fclose ($fd);
		
		
			if ($sendEmail == true) {
				$subject = "$langEmailSubject $i"; 
				$header="From: $sender\n";     
				$msg = "Name: $name\n";   
				$msg .= "Email: $email\n"; 
				$msg .= "Homepage: $homepage\n"; 
				$msg .= "Host: $host\n\n"; 
				$msg .= "Text: $text\n"; 
	 		  		
				mail($recipient,$subject,$msg,$header); 
			}
		
		}  
				
 	}
 	
 	if ($cmd == "dodelete"  && $passwd == $adminPassword) {
 	
 		$fd = fopen ($dataFile, "w");
		
		$h = 0;
		for($j = 0; $j <= $i; $j++) {
			if ($cmd == "dodelete" && $j == $id) { $j++; }
			fputs($fd, $entry[$j]);
			$entry[$h] = $entry[$j];
			$h++;
		}		
		fclose ($fd);
		
		$i--;
				 	
 	}
 	
 	if ($cmd == "docomment" && $comment != "" && $passwd == $adminPassword) {
 	
 		$comment = htmlentities($comment);
 		$comment = ereg_replace("(\r\n|\n|\r)","<br>",$comment);
 	
 		list ($name,$email,$homepage,$text,$date,$time,$host,$comment2) = split("\t", chop($entry[$id]), 8);
 		$entry[$id] = $name . "\t" . $email . "\t" . $homepage ."\t" . $text . "\t" . $date . "\t" . $time . "\t"  . $host . "\t" . $comment . "\n";
 		
		$fd = fopen ($dataFile, "w");
		
		for($j = 0; $j <= $i; $j++) {
			fputs($fd, $entry[$j]);
		}
		fclose ($fd);
				 	
 	}
 
  	$h = floor($i / $entriesPerPage);
 	$rest = $i - $h * $entriesPerPage;	# replacement for bcmod()
        $numPages = ($i - $rest) / $entriesPerPage;
	
	if ($rest != 0) { $numPages++; }
	 
	if (!isset($nr)) { $nr = $numPages; }
 


?>

<html>  
<head>  
<title><?=$title?></title>  
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">  
<?php if ($cssFile != "") { ?>
<link rel="stylesheet" href="<?=$cssFile?>" type="text/css">  
<?php } ?>
</head>  
 
<!-- myGuests - Copyright 2002 Matthias Keller (http://www.maedde.de) --> 
  
<body <?=$colors?>>  
<p>&nbsp;</p>  
<p>&nbsp;</p>  
<p align="center">::: guestbook :::</p>

<?php if ($cmd == "newentry" && $error1 == false) { ?>

	<p align="center"><b><?=$langSuccessful?></b></p>

<?php } if ($cmd == "newentry" && $error1 == true) { ?>

	<p align="center"><b><?=$langError1?></b></p>

<?php } if ($i == 0) {?>

	<p align="center"><b><?=$langNoEntry?></b></p>

<?php } ?>
 
	<p align="center"><?=$langPage?>   

<?php for($j = $numPages; $j >= 1; $j--) { ?>

<?php if($j == $nr) { ?>

	<b><?=$j?></b>&nbsp;

<?php } else { ?>

	<a href="<?=$PHP_SELF?>?nr=<?=$j?>"><?=$j?></a>&nbsp;

<?php } } ?>

</p>

<form name="gb" method="post" action="<?=$PHP_SELF?>"> 
  <table cellspacing="3" cellpadding="0" align="center" width="500"> 

<?php if ($cmd == "delete" || $cmd == "comment") { ?>

    <tr>  
      <td width="140"><?=$langPassword?>:</td> 
      <td width="360">  
        <input type="password" name="passwd" size="10"> 
        <input type="hidden" name="id" value="<?=$id?>"> 
         <input type="hidden" name="cmd" value="do<?=$cmd?>"> 
      </td> 
    </tr> 
      

<?php if ($cmd == "comment") { ?> 
    <tr align="center">
    <td colspan="2">comment:</td> 
    </tr> 
    <tr>  
      <td colspan="2" align="center">  
          <textarea name="comment" rows="5" cols="40"></textarea> 
       </td>
    </tr>
<?php } ?>     

    <tr align="center"> 
       <td colspan="2" align="center">            
          <input type="submit" name="submit" value="<?=$langSubmit?>">
        </td> 
    </tr> 
  
<?php } else { ?>  
    
    <tr>  
      <td width="140">name: </td> 
      <td width="360">
      	<input type="hidden" name="cmd" value="newentry">  
        <input type="text" name="name" size="25"> 
      </td> 
    </tr> 
    <tr>  
      <td width="140">email:</td> 
      <td width="360">  
        <input type="text" name="email" size="25"> 
      </td> 
    </tr> 
    <tr>  
      <td width="140">homepage:</td> 
      <td width="360">  
        <input type="text" name="homepage" size="25" value="http://"> 
      </td> 
    </tr> 
    <tr align="center">  
      <td colspan="2">text:</td> 
    </tr> 
    <tr>  
      <td colspan="2" align="center">  
        <p> 
          <textarea name="text" rows="5" cols="40"></textarea> 
        </p> 
        <p>          
          <input type="submit" name="submit" value="<?=$langSubmit?>">
        </p> 
      </td> 
    </tr> 

<?php }?>
    
  </table>
 </form> 
  <br> 
  <hr noshade width="75%"><br> 


<?php
	if ($rest == 0) { $rest = 10; }
	$start = $rest + ($nr-1) * $entriesPerPage;
	$end = $start - $entriesPerPage + 1;
	if ($nr == 1) { $end = 1; }
	if ($nr == 0) { $end = 0; }
 ?>

  <table width="600" cellspacing="0" cellpadding="3" align="center"> 
  
<?php
 	if ($i!= 0 && $cmd != "comment" && $cmd != "delete") { 
	for ($j = $start; $j >= $end; $j--) {
	
	list ($name,$email,$homepage,$text,$date,$time,$host,$comment) = split("\t", chop($entry[$j]), 8);
		
	$text = stripslashes($text);
?> 

  
    <tr align="center">  
      <td colspan="2"><b>::: <?=$j?> ::: </b></td> 
    </tr> 
    <tr>  
      <td colspan="2">  
        <p><?=$langEntry?> <?=$langBy?> 
        
        <?php if ($email != "") { ?>
        	<b><a href="mailto:<?=$email?>"><?=$name?></a></b> 
      
       <?php  } else { ?>
 	       <b><?=$name?></b> 
        
       <?php } if ($homepage != "http://" && $homepage != "") {?> 
        
  	      (<b><a href="<?=$homepage?>" target="_blank">homepage</a></b>)  
        
        <?php } ?>
        
          <?=$langTime?> <b><?=$date?></b> <?=$langAt?> <b><?=$time?> h</b></p> 
      </td> 
    </tr> 
    <tr>  
      <td width="9%" valign="top"><?=$langText?>:</td> 
      <td align="left" width="91%"><?=$text?></td> 
    </tr>
    
<?php if ($comment != "") { ?>     
    <tr>  
       <td colspan="2"><i><?=$langComment?>: <?=$comment?></i></td> 
    </tr>
<?php } ?>

<?php if ($cmd == "admin") {  ?>
    <tr>  
      <td colspan="2"><b><a href="<?=$PHP_SELF?>?id=<?=$j?>&cmd=comment"><?=$langAddComment?></a> 
      	 <a href="<?=$PHP_SELF?>?id=<?=$j?>&cmd=delete"><?=$langDeleteEntry?></a></b></td> 
    </tr> 
 <?php } ?> 
    

    <tr>  
      <td colspan="2">&nbsp;</td> 
    </tr> 
    <tr>  
      <td colspan="2">&nbsp;</td> 
    </tr> 
  
 <?php } } ?>

<?php if ($cmd != "admin" && $cmd != "comment" && $cmd != "delete") {  ?>
    <tr>  
      <td colspan="2" align="right" ><font size="1"><a href="<?=$PHP_SELF?>?cmd=admin">admin</a><br>
      		powered by <a href="http://source.maedde.de/" target="_blank">myGuests</a></font></td> 
    </tr> 
 <?php } ?> 

  
  </table>   
</body>  
</html>  
<!-- myGuests - Copyright 2002 Matthias Keller (http://www.maedde.de) --> 
