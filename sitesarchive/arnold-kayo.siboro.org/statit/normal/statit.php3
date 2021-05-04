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
// set the absolut path, begins with slash (not http://) !!
require "/absolut path/_short.inc";
// ############################################################
require $st_sengine;
$st_refer = $HTTP_REFERER;
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
$st_host = gethostbyaddr($st_ipaddr);
if($st_host == $st_ipaddr){$st_host = "?";}
$st_lang1 = getenv("HTTP_ACCEPT_LANGUAGE"); 
$st_lang1 = str_replace (",", "-", $st_lang1);
$st_lang2 = explode (";", $st_lang1);
$st_lang = $st_lang2[0];
if(! $st_lang){$st_lang = "?";}
eregi("([+-])([0-9]{1,2})",$st_tzone,$st_regs1);
if($st_regs1[1]=="+"){$st_tstamp = time()+$st_regs1[2]*3600;}
else if($st_regs1[1]=="-"){$st_tstamp = time()-$st_regs1[2]*3600;}
$st_iM  = date("n",$st_tstamp);
$st_iD  = date("j",$st_tstamp);
$st_iHH = date("G",$st_tstamp);
$st_iDW = date("w",$st_tstamp);
$st_imi = date("i",$st_tstamp);
$st_tag = date("d",$st_tstamp);
$st_monat = date("m",$st_tstamp);
$st_jahr = date("Y",$st_tstamp);
function st_infile($st_filename,$st_vergleich){
  $st_counter = 0;
  $st_finbro = file ("$st_filename");
  $st_anzzeilen = count ($st_finbro);
  for ($st_k = 0; $st_k <= $st_anzzeilen-1; $st_k++) {
    $st_pieces = explode (",", $st_finbro[$st_k]);
    $st_pieces[1] = str_replace ("\n", "", $st_pieces[1]);
    if($st_pieces[1] == $st_vergleich){
      settype($st_pieces[0], "integer");
      $st_pieces[0]++;
      $st_pieces[1]="$st_pieces[1]\n";
      $st_finbro[$st_k] = implode (",", $st_pieces); 
      $st_counter = 1;
      break;
    }  
  }
  if($st_counter == 0){
    $st_fp5 = fopen ("$st_filename", "a");
    for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fp5,2)) {break;}}
    fputs ($st_fp5, "1,$st_vergleich\n");
    fclose ($st_fp5);
  }
  else{
    $st_fp6 = fopen ("$st_filename", "w");
    for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fp6,2)) {break;}}
    for ($st_l = 0; $st_l <= $st_anzzeilen-1; $st_l++) {fputs ($st_fp6, "$st_finbro[$st_l]");}
    fclose ($st_fp6);
  }
}
// $st_log ##############################################
$st_datain = file($st_log);
$st_data = explode (",", $st_datain[0]);
// cookie
if($st_unique == "on" && !isset($st_PHPStatIt)){
    setcookie ("st_PHPStatIt", "$st_tag.$st_monat.$st_jahr", time()+31536000);
    $st_data[86]++;
}
// total
$st_data[109]++;
// Stunde
$st_data[$st_iHH]++;
// Monate zurücksetzen und Daten sichern
if($st_iM == 1){
  for ($st_i = $st_iM+24; $st_i <= 35; $st_i++) {
    if($st_data[$st_i] != 0){
      for ($st_i = 24; $st_i <= 35; $st_i++) {$st_data[$st_i] = 0;}
      break;
    }
  }
}
// Monat ###############
$st_data[$st_iM + 23]++;
// Tage zurücksetzen
for ($st_i = $st_iD+36; $st_i <= 66; $st_i++) {
  if($st_data[$st_i] != 0){
    for ($st_i = 36; $st_i <= 66; $st_i++) {$st_data[$st_i] = 0;}
    if($st_statbackup="on"){
      if($st_iM == "1"){
        $st_mon = 12;
        $st_yea = $st_jahr - 1;
      }
      else{
        $st_mon = $st_iM - 1;
        $st_yea = $st_jahr;
      }
      copy ($st_pages, "pages_$st_mon.$st_yea");
    }
    $st_fileww = file ("$st_pages");
    $st_anzzeilen = count ($st_fileww);
    $st_fp2 = fopen ("$st_pages", "w");
    for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fp2,2)) {break;}}
    for ($st_i = 0; $st_i <= $st_anzzeilen-1; $st_i++) {fputs ($st_fp2, "");}
    fclose ($st_fp2);
    break;
  }
}
// Tag #################
$st_data[$st_iD + 35]++;
// bester Tag
if($st_data[$st_iD + 35] > $st_data[108]){
  $st_data[108] = $st_data[$st_iD + 35];
  $st_data[105] = "$st_tag";
  $st_data[106] = "$st_monat";
  $st_data[107] = "$st_jahr";
}
// Wochentag ########### Achtung, fängt bei 0 an
$st_data[$st_iDW + 67]++;
// Browser #############
if( eregi("(opera) ([0-9]{1,2}.[0-9]{1,3}){0,1}",$HTTP_USER_AGENT,$st_regs) || eregi("(opera/)([0-9]{1,2}.[0-9]{1,3}){0,1}",$HTTP_USER_AGENT,$st_regs)){$st_browser = "Opera $st_regs[2]";}
else if( eregi("(konqueror)/([0-9]{1,2}.[0-9]{1,3})",$HTTP_USER_AGENT,$st_regs) ){$st_browser = "Konqueror $st_regs[2]";}
else if( eregi("(lynx)/([0-9]{1,2}.[0-9]{1,2}.[0-9]{1,2})",$HTTP_USER_AGENT,$st_regs) ){$st_browser = "Lynx $st_regs[2]";}
else if( eregi("(links) \(([0-9]{1,2}.[0-9]{1,3})",$HTTP_USER_AGENT,$st_regs) ){$st_browser = "Links $st_regs[2]";}
else if( eregi("(msie) ([0-9]{1,2}.[0-9]{1,3})",$HTTP_USER_AGENT,$st_regs) ){$st_browser = "MSIE $st_regs[2]";}
else if( eregi("(netscape6)/(6.[0-9]{1,3})",$HTTP_USER_AGENT,$st_regs) ){$st_browser = "Netscape $st_regs[2]";}
else if( eregi("mozilla/5",$HTTP_USER_AGENT) ){$st_browser = "Netscape";}
else if( eregi("(mozilla)/([0-9]{1,2}.[0-9]{1,3})",$HTTP_USER_AGENT,$st_regs) ){$st_browser = "Netscape $st_regs[2]";}
else if( eregi("w3m",$HTTP_USER_AGENT) ){$st_browser = "w3m";}
else{$st_browser = "?";}
st_infile($st_browserlog,$st_browser);
// System ##############
if(eregi("linux",$HTTP_USER_AGENT)){$st_system = "Linux";}
else if(eregi("win32",$HTTP_USER_AGENT)){$st_system = "Windows";}
else if( (eregi("(win)([0-9]{2})",$HTTP_USER_AGENT,$st_regs)) || (eregi("(windows) ([0-9]{2})",$HTTP_USER_AGENT,$st_regs)) ){$st_system = "Windows $st_regs[2]";}
else if( eregi("(winnt)([0-9]{1,2}.[0-9]{1,2}){0,1}",$HTTP_USER_AGENT,$st_regs) ){$st_system = "Windows NT $st_regs[2]";}
else if( eregi("(windows nt)( ){0,1}([0-9]{1,2}.[0-9]{1,2}){0,1}",$HTTP_USER_AGENT,$st_regs) ){$st_system = "Windows NT $st_regs[3]";}
else if(eregi("mac",$HTTP_USER_AGENT)){$st_system = "Macintosh";}
else if(eregi("(sunos) ([0-9]{1,2}.[0-9]{1,2}){0,1}",$HTTP_USER_AGENT,$st_regs)){$st_system = "SunOS $st_regs[2]";}
else if(eregi("(beos) r([0-9]{1,2}.[0-9]{1,2}){0,1}",$HTTP_USER_AGENT,$st_regs)){$st_system = "BeOS $st_regs[2]";}
else if(eregi("freebsd",$HTTP_USER_AGENT)){$st_system = "FreeBSD";}
else if(eregi("openbsd",$HTTP_USER_AGENT)){$st_system = "OpenBSD";}
else if(eregi("irix",$HTTP_USER_AGENT)){$st_system = "IRIX";}
else if(eregi("os/2",$HTTP_USER_AGENT)){$st_system = "OS/2";}
else if(eregi("plan9",$HTTP_USER_AGENT)){$st_system = "Plan9";}
else if(eregi("unix",$HTTP_USER_AGENT) || eregi("hp-ux",$HTTP_USER_AGENT) ){$st_system = "Unix";}
else if(eregi("osf",$HTTP_USER_AGENT)){$st_system = "OSF";}
else{$st_system = "?";}
st_infile($st_systemlog,$st_system);
$st_fp2 = fopen ("$st_log", "w"); 
$st_newzeile = implode (",", $st_data);
for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fp2,2)) {break;}}
fputs ($st_fp2, "$st_newzeile");
fclose ($st_fp2);
// $st_last20 #############
function st_checkrefer($referer,$todo){
  if($todo=="on"){
    if(fopen($referer,"r") != false){return true;}
    else{return false;}
  }
  else{return true;}
}
error_reporting (4);
if($st_refer){
  $st_referer = explode ("/", $st_refer);
  if($st_referer[0] == "http:"){
    if(st_checkrefer($st_refer,$st_checklink) != false){
      $st_domainname = $st_referer[2];
      $st_linkit = "1";
    }
    else{$st_linkit = "0";}
  }
  else if(eregi(":",$st_referer[0])){$st_linkit = "0";} 
  else{
    $st_refer1 = "http://$st_refer";
    if(st_checkrefer($st_refer1,$st_checklink) != false){
      $st_domainname = $st_referer[0];
      $st_refer = $st_refer1;
      $st_linkit = "1";
    }
    else{$st_linkit = "0";}
  }
}
else{
  $st_refer = "-";
  $st_linkit = "0";
}
if(strlen($st_iD)==1){$st_iD="0$st_iD";}
if(strlen($st_iM)==1){$st_iM="0$st_iM";}
if(strlen($st_iHH)==1){$st_iHH="0$st_iHH";}
$st_fcontents = file ("$st_last20");
$st_anzzeile = count ($st_fcontents);
if($st_anzzeile >= 20){
  $st_fp3 = fopen ("$st_last20", "w"); 
  for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fp3,2)) {break;}}
  for ($st_i = 0; $st_i <= 18; $st_i++) {
    $st_fcontents[$st_i] = $st_fcontents[$st_i+1];
    fputs ($st_fp3, "$st_fcontents[$st_i]");
  }
  $st_fcontents[19] = "$st_iD.$st_iM. $st_iHH:$st_imi,$st_ipaddr,$st_host,$st_lang,$st_browser,$st_system,$st_refer,$st_linkit";
  fputs ($st_fp3, "$st_fcontents[19]\n");
  fclose ($st_fp3);  
}
else{
  $st_fp4 = fopen ("$st_last20", "a");
  for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fp4,2)) {break;}}
  $st_fcontents[$st_anzzeile] = "$st_iD.$st_iM. $st_iHH:$st_imi,$st_ipaddr,$st_host,$st_lang,$st_browser,$st_system,$st_refer,$st_linkit";
  fputs ($st_fp4, "$st_fcontents[$st_anzzeile]\n");
  fclose ($st_fp4);  
}
// $st_domain #############
$st_counter = 0;
if($st_domainname){st_infile($st_dom,$st_domainname);}
// $st_country #################
if($st_host != "?"){
  $st_counter = 0;
  $st_hostname = explode (".", $st_host);
  $st_anzahl = count($st_hostname);
  $st_land = $st_hostname[$st_anzahl-1];
  $st_land = strtolower($st_land);
  st_infile($st_country,$st_land);
}
// suchengine
$st_sdomain = explode (".", $st_domainname);
$anz6 = count($st_sdomain);
$st_sdomain = $st_sdomain[$anz6-2];
if($st_suche[$st_sdomain]){
  if(eregi("&$st_suche[$st_sdomain]",$st_refer)){$st_ssuche = explode ("&$st_suche[$st_sdomain]", $st_refer);}
  else if(eregi("\?$st_suche[$st_sdomain]",$st_refer)){$st_ssuche = explode ("?$st_suche[$st_sdomain]", $st_refer);}
  $st_ssuche = explode ("&", $st_ssuche[1]);
  $st_ssuche = $st_ssuche[0];
  $st_ssuche = strtolower($st_ssuche);
  $st_unix = array("%2b","%22","%26","%2a","*");
  while(list($st_keyunix,$st_valunix)=each($st_unix)) {$st_ssuche = str_replace ($st_valunix, "", $st_ssuche);}
  st_infile($st_search,$st_ssuche);
}
}
?>
