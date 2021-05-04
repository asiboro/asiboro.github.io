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
require "_short.inc";
function writenewfile ($st_log,$st_newdata) {
  $st_fp1 = fopen ("$st_log", "w") or die("Can't write $st_log\n"); 
  $st_newzeile = implode (",", $st_newdata);
  fputs ($st_fp1, "$st_newzeile");
  fclose ($st_fp1);
  print "<div align=\"center\"><h3>Update ok!</h3></div>\n";
  print "<div align=\"center\"><h3>Remove now update.php3</h3></div>\n";
  print "<div align=\"center\"><h3>New Users from V1.8!! Please check stat.log because i forget to change the stat.log in V1.8!</h3></div>\n";
}
print "<html>\n<head>\n<title>Update</title>\n</head>\n";
print "<body text=\"#000000\" bgcolor=\"#FFFFFF\" link=\"#FF0000\" alink=\"#FF0000\" vlink=\"#FF0000\">\n";
$st_fp = fopen ("$st_log", "r")  or die("Can't open $st_log\n");
$st_datain = fgets ($st_fp, 1000);
$st_data = explode (",", $st_datain);
fclose ($st_fp);
$st_anz = count($st_data);
if($st_anz == 83){
  // update von v1.0 -> v1.4a auf aktuelle Version
  for ($st_i = 0; $st_i <= 66; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i];
  }
  for ($st_i = 67; $st_i <= 73; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i+9];
  }
  for ($st_i = 74; $st_i <= 86; $st_i++) {
    $st_newdata[$st_i] = 0;
  }
  for ($st_i = 87; $st_i <= 89; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i-20];
  }
  for ($st_i = 90; $st_i <= 92; $st_i++) {
    $st_newdata[$st_i] = 0;
  }
  $st_newdata[93] = $st_data[70];
  for ($st_i = 94; $st_i <= 99; $st_i++) {
    $st_newdata[$st_i] = 0;
  }
  for ($st_i = 100; $st_i <= 103; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i-29];
  }
  for ($st_i = 104; $st_i <= 105; $st_i++) {
    $st_newdata[$st_i] = 0;
  }
  $st_newdata[106] = $st_data[75];
  $st_newdata[107] = 0;
  $st_newdata[108] = 0;
  $st_newdata[109] = 0;
  for ($st_i = 24; $st_i <= 35; $st_i++) {
    $st_newdata[109] = $st_newdata[107] + $st_data[$st_i];;
  }
  writenewfile($st_log,$st_newdata);
}
else if($st_anz == 94){
  // update von v1.5 -> v1.7e auf aktuelle Version
  for ($st_i = 0; $st_i <= 66; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i];
  }
  for ($st_i = 67; $st_i <= 82; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i+9];
  }
  $st_newdata[83] = 0;
  for ($st_i = 84; $st_i <= 85; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i+8];
  }
  $st_newdata[86] = 0;
  for ($st_i = 87; $st_i <= 89; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i-20];
  }
  for ($st_i = 90; $st_i <= 92; $st_i++) {
    $st_newdata[$st_i] = 0;
  }
  $st_newdata[93] = $st_data[70];
  for ($st_i = 94; $st_i <= 99; $st_i++) {
    $st_newdata[$st_i] = 0;
  }
  for ($st_i = 100; $st_i <= 103; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i-29];
  }
  for ($st_i = 104; $st_i <= 105; $st_i++) {
    $st_newdata[$st_i] = 0;
  }
  $st_newdata[106] = $st_data[75];
  $st_newdata[107] = 0;
  $st_newdata[108] = 0;
  $st_newdata[109] = 0;
  for ($st_i = 24; $st_i <= 35; $st_i++) {
    $st_newdata[109] = $st_newdata[107] + $st_data[$st_i];;
  }
  writenewfile($st_log,$st_newdata);
}
else if($st_anz == 98){
  // update von v1.8 auf aktuelle Version
  for ($st_i = 0; $st_i <= 66; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i];
  }
  for ($st_i = 67; $st_i <= 82; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i+13];
  }
  $st_newdata[83] = 0;
  for ($st_i = 84; $st_i <= 85; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i+12];
  }
  $st_newdata[86] = 0;
  for ($st_i = 87; $st_i <= 91; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i-20];
  }
  $st_newdata[92] = 0;
  $st_newdata[93] = $st_data[72];
  for ($st_i = 94; $st_i <= 99; $st_i++) {
    $st_newdata[$st_i] = 0;
  }
  for ($st_i = 100; $st_i <= 106; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i-27];
  }
  $st_newdata[107] = 0;
  $st_newdata[108] = 0;
  $st_newdata[109] = 0;
  for ($st_i = 24; $st_i <= 35; $st_i++) {
    $st_newdata[109] = $st_newdata[107] + $st_data[$st_i];;
  }
  writenewfile($st_log,$st_newdata);
}
else if($st_anz == 107){
  // update von v1.8a -> v1.9c auf aktuelle Version
  for ($st_i = 0; $st_i <= 106; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i];
  }
  $st_newdata[107] = 0;
  $st_newdata[108] = 0;
  $st_newdata[109] = 0;
  for ($st_i = 24; $st_i <= 35; $st_i++) {
    $st_newdata[109] = $st_newdata[107] + $st_data[$st_i];;
  }
  writenewfile($st_log,$st_newdata);
}
else if($st_anz == 110){
  // update von v2.0 -> v2.3a auf aktuelle Version
  for ($st_i = 0; $st_i <= 85; $st_i++) {
    $st_newdata[$st_i] = $st_data[$st_i];
  }
  for ($st_i = 86; $st_i <= 106; $st_i++) {
    $st_newdata[$st_i] = 0;
  }
  if($st_data[107] != 0){
    $st_datum = explode (".", $st_data[107]);
    $st_newdata[105] = $st_datum[0];
    $st_newdata[106] = $st_datum[1];
    $st_newdata[107] = $st_datum[2];
    $st_newdata[108] = $st_data[108];
  }
  else{
    $st_newdata[107] = $st_data[107];
    $st_newdata[108] = $st_data[108];
  }
  $st_newdata[109] = $st_data[109];
  writenewfile($st_log,$st_newdata);
}
else{
  print "<div align=\"center\"><h3>No Update necessary!</h3></div>\n";
  print "<div align=\"center\"><h3>Remove now update.php3</h3></div>\n";
}
print "</BODY></HTML>";
?>