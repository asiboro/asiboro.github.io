<?php
//===============================================================
// Rip movie show times from a movie.yahoo.com web page
// Sam McKone <sam_mckone@hotmail.com>
// 11/9/2001
//===============================================================

// Path can be set to any yahoo theater listing, go to movies.yahoo.com
// and search for a city, then click on one of the theaters listed
// than copy the address from the address bar into the path variable
$path = "http://movies.yahoo.com/showtimes/showtimes.html?z=15089&r=sim&m=&t=Destinta%20Theatres%20-%20Plaza%20East%2022&a=&dt=0&s=tm&p=0";


$fp = fopen($path,"r");
if($fp){
        //fpassthru($fp); //just to test if the script works, displays the whole file.
     $times = fread ($fp,100000);
     $times = ereg("<b>Movies and Showtimes</b>(.*)<b>Legend</b>", $times,$content);
     $times = strip_tags($content[0]);
     $times = ereg_replace("&nbsp;"," ",$times);
     $times = ereg_replace("Movies and Showtimes","",$times);
     $times = ereg_replace("Legend","",$times);
     $times = ereg_replace("\n\n","\n",$times);
     $movie = split("\n    \n",$times);
       // get the theater name from $path
     if(ereg("&t=(.*)&a",$path,$theater)){
        $theater = ereg_replace("&t=","",$theater[0]);
        $theater = ereg_replace("&a(.*)","",$theater);
        $theater = ereg_replace("%20"," ",$theater);
     }
     for($i = 0;$i < count($movie);$i++){
        $movie[$i] = split("\n",$movie[$i]);
     }
     
     // sample of how to display the movie info
     print "<b>" . $theater . "</b><p>";
     for($i = 0; $i < count($movie);$i++){
         print $movie[$i][0] . "<br>";
         print $movie[$i][1] . "<p>";
     }// end sample
     
}else{
   echo "Url could not be opened";
}
?>