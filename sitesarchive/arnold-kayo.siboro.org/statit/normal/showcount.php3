<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # by Helge Orthmann                                        #
// # Contact: otter@otterware.de                              #
// # Homepage: http://www.otterware.de                        #
// ############################################################
// # Leave this header in this file !                         #
// ############################################################
// set the absolut path , begins with slash (not http://)!!!
require "/absolut path/_short.inc";

// visible counter
$st_fp = fopen ("$st_log", "r");
$st_datain = fgets ($st_fp, 1000);
$st_data = explode (",", $st_datain);
fclose ($st_fp);
$st_laenge = strlen($st_data[109]);
if($st_countlen > 8){$st_countlen = 8;}
if($st_laenge > $st_countlen){$st_countlen = $st_laenge;}
if($st_ctype == "graphic"){
  $st_nullpic = "$st_images"."0"."$st_imagesext";
  print "<a href=\"http://www.otterware.de\" target=\"_blank\">";
  for ($st_i=0; $st_i < $st_countlen-$st_laenge; $st_i++){
    print "<img src=\"$st_nullpic\" border=\"0\" alt=\"PHP StatIt\">";
  }
  for ($st_i=0; $st_i < $st_laenge; $st_i++){
    $st_actnum = substr($st_data[109],$st_i,1);
    $st_actpic = "$st_images"."$st_actnum"."$st_imagesext";
    print "<img src=\"$st_actpic\" border=\"0\" alt=\"PHP StatIt\">";
  }
  print "</a>\n";
}
else{
  print "<table><tr><td bgcolor=\"$st_cbcolor\">";
  print "<a href=\"http://www.otterware.de\" target=\"_blank\" style=\"text-decoration:none; color:$st_cfcolor\">";
  print "<font size=\"$st_csize\" face=\"$st_cfont\">";
  for ($st_i=0; $st_i < $st_countlen-$st_laenge; $st_i++){print "0";}
  print "$st_data[109]</font></a></td></tr></table>\n";
}
?>