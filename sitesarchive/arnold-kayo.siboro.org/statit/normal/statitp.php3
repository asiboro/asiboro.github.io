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
// set the absolut path !!!
require "/absolut path/_short.inc";

$st_url = "$PHP_SELF";
$st_files = file ("$st_pages");
$st_anzzeilen = count ($st_files);
for ($st_i = 0; $st_i <= $st_anzzeilen-1; $st_i++) {
  $st_pieces = explode (",", $st_files[$st_i]);
  $st_pieces[1] = str_replace ("\n", "", $st_pieces[1]);
  if($st_pieces[1] == $st_url){
    settype($st_pieces[0], "integer");
    $st_pieces[0]++;
    $st_pieces[1]="$st_pieces[1]\n";
    $st_files[$st_i] = implode (",", $st_pieces); 
    $st_counter = 1;
    break;
  }  
}
if($st_counter == 0){
  $st_fp = fopen ("$st_pages", "a");
  for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fp,2)) {break;}}
  fputs ($st_fp, "1,$st_url\n");
  fclose ($st_fp);
}
else{
  $st_fp = fopen ("$st_pages", "w");
  for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fp,2)) {break;}}
  for ($st_i = 0; $st_i <= $st_anzzeilen-1; $st_i++) {fputs ($st_fp, "$st_files[$st_i]");}
  fclose ($st_fp);
}
?>