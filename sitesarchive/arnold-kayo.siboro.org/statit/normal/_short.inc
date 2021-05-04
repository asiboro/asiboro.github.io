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
// set the absolut path (not http://) begins with slash!!!
$st_abspath = "/absolut path";
// filenames
$st_log = "$st_abspath/stat.log";
$st_last20 = "$st_abspath/last.log";
$st_dom = "$st_abspath/domain.log";
$st_pages = "$st_abspath/pages.log";
$st_country = "$st_abspath/country.log";
$st_browserlog = "$st_abspath/browser.log";
$st_systemlog = "$st_abspath/system.log";
$st_search = "$st_abspath/search.log";
$st_iplog =  "$st_abspath/ip.log";
$st_lopa = "$st_abspath/_lopa.inc.php3";
$st_sengine = "$st_abspath/_search.inc";
$st_rel = "$st_abspath/_reload.inc";
// check link function: ("on" or "off") (use off if you are behind a firewall)
$st_checklink = "off";
// reload blocker ("on" or "off")?
$st_reloadblock = "off";
// change timezone of your server (e.g. +3 or -4)! No spaces between + or - and hour!!
$st_tzone = "+0";
// do you want use statitp.php3 to count all your webfiles ("on" or "off")?
$st_statp = "off"; 
// if "on", do you want to make backups of the pages.log every month?
$st_statbackup = "on";
// do you want to show unique visitors ("on" or "off")? If "on" the 
// php include "path/statit.php3" 
// MUST be in the FIRST line of your calling site before any HTML code!!!
$st_unique = "off";
// place the server from which clicks will not be counted (e.g. www.server.de or www.server.de/user)
// place "#dummy" if you want no server (an empty string "" returns an error!) 
// if you want more than one server separate the server with commata , !!
$st_cserver = "#dummy";
// text counter ("text") or graphical counter ("graphic")? 
$st_ctype = "graphic"; 
// if text counter select font, fontcolor, backcolor and size
$st_cfont = "Verdana";
$st_cfcolor = "#ffffff";
$st_cbcolor = "#000000";
$st_csize = "3"; 
// digits of counter (max 8)
$st_countlen = "6";
// set the http path to counter pics (slash at the end)!!!
$st_images = "http://yourserver/pics/";      
$st_imagesext = ".gif"; 
// ##############################################################
// don't change!!!!!!
if(!file_exists($st_log)){
  for ($st_i = 0; $st_i <= 109; $st_i++){$st_data[$st_i] = 0;}
  $st_fp2 = fopen ("$st_log", "w"); 
  $st_newzeile = implode (",", $st_data);
  fputs ($st_fp2, "$st_newzeile");
  fclose($st_fp2);
}
$st_logfiles = array($st_last20,$st_dom,$st_browserlog,$st_systemlog,$st_country,$st_pages,$st_search,$st_iplog);
while(list($st_keylog,$st_vallog)=each($st_logfiles)) {
  if(!file_exists($st_vallog)){
    $st_fp2 = fopen ("$st_vallog", "w"); 
    fclose($st_fp2);
    chmod($st_vallog, 0777);
  }
}
?>