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

$st_teile = explode (",", $argv[0]);

require "_short.inc";
$st_refer = getenv("HTTP_REFERER");
$st_checkserver = explode (",", $st_cserver);
$st_checkanz = count($st_checkserver);
for ($st_k = 0; $st_k <= $st_checkanz-1; $st_k++) {
  if(eregi("$st_checkserver[$st_k]",$st_refer) ){
    $st_server_error=1;
    break;
  }
}
if (getenv("HTTP_X_FORWARDED_FOR") != ""){$st_ipaddr = getenv("HTTP_X_FORWARDED_FOR");} 
else{$st_ipaddr = getenv("REMOTE_ADDR");} 
$st_ip = explode(",",$st_ipaddr);
$st_ipaddr = $st_ip[0];
if($st_reloadblock == "on"){
  include $st_rel;
  if($st_reload == "yes"){$st_ip_error=1;}
} 
if($st_server_error != 1 && $st_ip_error != 1){
// $st_log ##############################################
$st_datain1 = file($st_log);
$st_data1 = explode (",", $st_datain1[0]);
// screen
if($st_teile[1] > 0){ 
  switch ($st_teile[1]) {
  case 640:
    $st_data1[74]++;
    break;
  case 800:
    $st_data1[75]++;
    break;
  case 1024:
    $st_data1[76]++;
    break;
  case 1152:
    $st_data1[77]++;
    break;
  case 1280:
    $st_data1[78]++;
    break;
  default:
    $st_data1[79]++;     
  }
}
// color
if($st_teile[2] > 0){ 
  switch ($st_teile[2]) {
  case 4:
    $st_data1[80]++;
    break;
  case 8:
    $st_data1[81]++;
    break;
  case 16:
    $st_data1[82]++;
    break;
  case 24:
    $st_data1[83]++;
    break;
  case 32:
    $st_data1[84]++;
    break;
  default:
    $st_data1[85]++;     
  }
}
$st_fpo = fopen ("$st_log", "w"); 
for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fpo,2)) {break;}}
$st_newzeile1 = implode (",", $st_data1);
fputs ($st_fpo, "$st_newzeile1");
fclose ($st_fpo);
}
?>
