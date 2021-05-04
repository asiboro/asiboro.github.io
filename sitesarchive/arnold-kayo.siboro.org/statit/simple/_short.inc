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
$st_ver = "V 2.3e";  // Don't change this one ;-)             #
// ############################################################
$st_log = "stat.log";
$st_last20 = "last.log";
$st_dom = "domain.log";
$st_country = "country.log";
$st_browserlog = "browser.log";
$st_systemlog = "system.log";
$st_search = "search.log";
$st_iplog =  "ip.log";
$st_lopa = "_lopa.inc.php3";
$st_sengine = "_search.inc";
$st_rel = "_reload.inc";
// check link function: ("on" or "off") (use off if you are behind a firewall)
$st_checklink = "off";
// reload blocker ("on" or "off")?
$st_reloadblock = "off";
// change timezone of your server (e.g. +3 or -4)! No spaces between + or - and hour!!
$st_tzone = "+0";
// place the server from which clicks will not be counted (e.g. www.server.de or www.server.de/user)
// place "#dummy" if you want no server (an empty string "" returns an error!) 
// if you want more than one server separate the server with commata , !!
$st_cserver = "#dummy";
// #######################################################
// don't change!!!!!!
if(!file_exists($st_log)){
  for ($st_i = 0; $st_i <= 109; $st_i++){$st_data[$st_i] = 0;}
  $st_fp2 = fopen ("$st_log", "w"); 
  $st_newzeile = implode (",", $st_data);
  fputs ($st_fp2, "$st_newzeile");
  fclose($st_fp2);
}
$st_logfiles = array($st_last20,$st_dom,$st_browserlog,$st_systemlog,$st_country,$st_search,$st_iplog);
while(list($st_keylog,$st_vallog)=each($st_logfiles)) {
  if(!file_exists($st_vallog)){
    $st_fp2 = fopen ("$st_vallog", "w"); 
    fclose($st_fp2);
    chmod($st_vallog, 0777);
  }
}
?>