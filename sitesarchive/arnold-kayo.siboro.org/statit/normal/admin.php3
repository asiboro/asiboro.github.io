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
require "_config.inc";
require $st_lopa;
if ( (!isset($PHP_AUTH_USER)) || ! (($PHP_AUTH_USER == $st_LOGIN) && ( $PHP_AUTH_PW == "$st_PASSWORD" )) ) {
  header("WWW-Authenticate: Basic entrer=\"Form2txt admin\"");
  header("HTTP/1.0 401 Unauthorized");
  echo "Unauthorized access...";
  exit;
}
$st_name = basename ($PHP_SELF);
if(!isset ($st_pages)){$st_nopages = "1";}
if(!file_exists ($st_log) || !file_exists ($st_dom) || !file_exists ($st_country) || !file_exists ($st_browserlog) || !file_exists ($st_systemlog) || !file_exists ($st_search)){exit;} 
$st_browserlog = basename($st_browserlog);
$st_systemlog = basename($st_systemlog);
$st_country = basename($st_country);
$st_log = basename($st_log);
$st_pages = basename($st_pages);
$st_dom = basename($st_dom);
$st_search = basename($st_search);
function changefile($st_filename,$st_wert,$st_value){
  $st_fcont = file ("$st_filename");
  $st_anz = count ($st_fcont);
  for ($st_i = 0; $st_i <= $st_anz-1; $st_i++) {
    $st_zeile = explode (" ", $st_fcont[$st_i]);
    if($st_zeile[0] == $st_wert){
      $st_fcont[$st_i] = "$st_wert = \"$st_value\";\n";
      break;
    }
  }
  $st_fp = fopen ("$st_filename", "w"); 
  flock($st_fp,2);
  for ($st_i = 0; $st_i <= $st_anz-1; $st_i++) {
    fputs ($st_fp, "$st_fcont[$st_i]");
  }
  fclose ($st_fp);
}
function counter($st_ctype,$st_images,$st_imagesext,$st_countlen,$st_cbcolor,$st_cfcolor,$st_csize,$st_cfont){
  $st_dataz = "123456";
  $st_laenge = strlen($st_dataz);
  if($st_countlen > 8){$st_countlen = 8;}
  if($st_laenge > $st_countlen){$st_countlen = $st_laenge;}
  if($st_ctype == "graphic"){
    $st_nullpic = "$st_images"."0"."$st_imagesext";
    print "<a href=\"http://www.otterware.de\" target=\"_blank\">";
    for ($st_i=0; $st_i < $st_countlen-$st_laenge; $st_i++){
      print "<img src=\"$st_nullpic\" border=\"0\" alt=\"PHP StatIt\">";
    }
    for ($st_i=0; $st_i < $st_laenge; $st_i++){
      $st_actnum = substr($st_dataz,$st_i,1);
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
    print "$st_dataz</font></a></td></tr></table>\n";
  }
}
function resetfile($st_filename){
  $st_filedel = file ("$st_filename");
  $st_anzzeilen = count ($st_filedel);
  $st_fp = fopen ("$st_filename", "w");
  flock($st_fp,2);
  for ($st_i = 0; $st_i <= $st_anzzeilen-1; $st_i++) {fputs ($st_fp, "");}
  fclose ($st_fp);
}
function resetstat($st_filename,$st_mini,$st_maxi,$st_data){
  $st_fp = fopen ("$st_filename", "r");
  $st_datain = fgets ($st_fp, 1000);
  $st_data = explode (",", $st_datain);
  fclose ($st_fp);
  for ($st_i = $st_mini; $st_i <= $st_maxi; $st_i++) {$st_data[$st_i]=0;}
  $st_fp = fopen ("$st_filename", "w");
  flock($st_fp,2); 
  $st_newzeile = implode (",", $st_data);
  fputs ($st_fp, "$st_newzeile");
  fclose ($st_fp);
}
function mcopy($st_filename,$st_was,$st_la22,$st_la23,$st_la24){
  if($st_was == "backup"){
    if (!copy ($st_filename, $st_filename.'.bak')) {$st_meld = "$st_la17: $st_filename $st_la22!|";}
    else{
      $st_meld = "$st_filename $st_la23!|";
      chmod ($st_filename.'.bak', 0660); 
    }
  }
  else if($st_was == "restore"){
    if (!copy ($st_filename.'.bak', $st_filename)) {$st_meld = "$st_la17: $st_filename $st_la22!|";}
    else{
      $st_meld = "$st_filename $st_la24!|";
      chmod ($st_filename, 0660); 
    }
  }
  return $st_meld;
}
$st_meldung="";
if($st_browser || $st_system || $st_domain || $st_topcountry || $st_topsearch) {
  if($st_browser){
    resetfile($st_browserlog);
    $st_meldung = $st_meldung."$st_browserlog $st_la7!|";
  }
  if($st_system){
    resetfile($st_systemlog);
    $st_meldung = $st_meldung."$st_systemlog $st_la7!|";
  }
  if($st_domain){
    resetfile($st_dom);
    $st_meldung = $st_meldung."$st_dom $st_la7!|";
  }
  if($st_topcountry){
    resetfile($st_country);
    $st_meldung = $st_meldung."$st_country $st_la7!|";
  }
  if($st_topsearch){
    resetfile($st_search);
    $st_meldung = $st_meldung."$st_search $st_la7!|";
  }
}
if($st_color || $st_resolution || $st_tagesverlauf || $st_wtage){
  if($st_color){
    $st_meldung=resetstat($st_log,80,85,$st_data);
    $st_meldung = $st_meldung."$st_l27 $st_la7!|";
  }
  if($st_resolution){
    resetstat($st_log,74,79,$st_data);
    $st_meldung = $st_meldung."$st_l26 $st_la7!|";
  }
  if($st_tagesverlauf){
    resetstat($st_log,0,23,$st_data);
    $st_meldung = $st_meldung."$st_l11 $st_la7!|";
  }
  if($st_wtage){
    resetstat($st_log,67,73,$st_data);
    $st_meldung = $st_meldung."$st_l12 $st_la7!|";
  }
}
if($st_loginname && $st_loginname != $st_LOGIN){
  changefile($st_lopa,"\$st_LOGIN",$st_loginname);
  $st_meldung = $st_meldung."$st_la4 $st_la8!|";
}
if($st_passworda || $st_passwordb){
  if($st_passworda != $st_passwordb){$st_meldung = $st_meldung."$st_la17: $st_la16!|";}
  else if(strlen ($st_passworda) < 4){$st_meldung = $st_meldung."$st_la17: $st_la28!|";}
  else if($st_passworda != $st_PASSWORD){
    changefile($st_lopa,"\$st_PASSWORD",$st_passworda);
    $st_meldung = $st_meldung."$st_la5 $st_la8!|";
  }
}
if($st_authe == "an" && $st_auth == "off"){
  changefile($st_lopa,"\$st_auth","on");
  $st_meldung = $st_meldung."$st_la10 $st_la8!|";
}
if($st_authe == "aus" && $st_auth == "on"){
  changefile($st_lopa,"\$st_auth","off");
  $st_meldung = $st_meldung."$st_la10 $st_la8!|";
}
if($st_hbars && $st_hbars != $st_dheight){
  changefile("_config.inc","\$st_dheight",$st_hbars);
  $st_meldung = $st_meldung."$st_la13 $st_la8!|";
}
if($st_bbars && $st_bbars != $st_dwidth){
  changefile("_config.inc","\$st_dwidth",$st_bbars);
  $st_meldung = $st_meldung."$st_la14 $st_la8!|";
}
if($st_ipadr == "an" && $st_showip == "off"){
  changefile("_config.inc","\$st_showip","on");
  $st_meldung = $st_meldung."$st_la15 $st_la8!|";
}
if($st_ipadr == "aus" && $st_showip == "on"){
  changefile("_config.inc","\$st_showip","off");
  $st_meldung = $st_meldung."$st_la15 $st_la8!|";
}
if($st_backup == "an"){
  if($st_bbrowser){
    $st_meld = mcopy($st_browserlog,"backup",$st_la22,$st_la23,$st_la24);
    $st_meldung = $st_meldung.$st_meld;
  }
  if($st_bsystem){
    $st_meld = mcopy($st_systemlog,"backup",$st_la22,$st_la23,$st_la24);
    $st_meldung = $st_meldung.$st_meld;
  }
  if($st_bdom){
    $st_meld = mcopy($st_dom,"backup",$st_la22,$st_la23,$st_la24);
    $st_meldung = $st_meldung.$st_meld;
  }
  if($st_bcountry){
    $st_meld = mcopy($st_country,"backup",$st_la22,$st_la23,$st_la24);
    $st_meldung = $st_meldung.$st_meld;
  }
  if($st_blog){
    $st_meld = mcopy($st_log,"backup",$st_la22,$st_la23,$st_la24);
    $st_meldung = $st_meldung.$st_meld;
  }
  if($st_bsearch){
    $st_meld = mcopy($st_search,"backup",$st_la22,$st_la23,$st_la24);
    $st_meldung = $st_meldung.$st_meld;
  }
}
if($st_backup == "aus"){
  if($st_bbrowser){
    if(file_exists ($st_browserlog.'.bak')){
      $st_meld = mcopy($st_browserlog,"restore",$st_la22,$st_la23,$st_la24);
      $st_meldung = $st_meldung.$st_meld;
    }
    else{$st_meldung = $st_meldung."$st_la17: $st_la25!|";}
  }
  if($st_bsystem){
    if(file_exists ($st_systemlog.'.bak')){
      $st_meld = mcopy($st_systemlog,"restore",$st_la22,$st_la23,$st_la24);
      $st_meldung = $st_meldung.$st_meld;
    }
    else{$st_meldung = $st_meldung."$st_la17: $st_la25!|";}
  }
  if($st_bdom){
    if(file_exists ($st_dom.'.bak')){
      $st_meld = mcopy($st_dom,"restore",$st_la22,$st_la23,$st_la24);
      $st_meldung = $st_meldung.$st_meld;
    }
    else{$st_meldung = $st_meldung."$st_la17: $st_la25!|";}
  }
  if($st_bcountry){
    if(file_exists ($st_country.'.bak')){
      $st_meld = mcopy($st_country,"restore",$st_la22,$st_la23,$st_la24);
      $st_meldung = $st_meldung.$st_meld;
    }
    else{$st_meldung = $st_meldung."$st_la17: $st_la25!|";}
  }
  if($st_blog){
    if(file_exists ($st_log.'.bak')){
      $st_meld = mcopy($st_log,"restore",$st_la22,$st_la23,$st_la24);
      $st_meldung = $st_meldung.$st_meld;
    }
    else{$st_meldung = $st_meldung."$st_la17: $st_la25!|";}
  }
  if($st_bpages){
    if(file_exists ($st_pages.'.bak')){
      $st_meld = mcopy($st_pages,"restore",$st_la22,$st_la23,$st_la24);
      $st_meldung = $st_meldung.$st_meld;
    }
    else{$st_meldung = $st_meldung."$st_la17: $st_la25!|";}
  }
}
if($st_counter == "text" && $st_ctype == "graphic"){
  changefile("_short.inc","\$st_ctype","text");
  $st_meldung = $st_meldung."$st_la30 $st_la8!|";
}
if($st_counter == "grafik" && $st_ctype == "text"){
  changefile("_short.inc","\$st_ctype","graphic");
  $st_meldung = $st_meldung."$st_la30 $st_la8!|";
}
if($st_anzcounter > 8){$st_meldung = $st_meldung."$st_la17: $st_la35!|";}
else{
  if($st_anzcounter && $st_anzcounter != $st_countlen){
    changefile("_short.inc","\$st_countlen",$st_anzcounter);
    $st_meldung = $st_meldung."$st_la33 $st_la8!|";
  }
}
if($st_uvisits == "an" && $st_unique == "off"){
  changefile("_short.inc","\$st_unique","on");
  $st_meldung = $st_meldung."$st_la34 $st_la8!|";
  $st_meldung = $st_meldung."$st_la36!|";
}
if($st_uvisits == "aus" && $st_unique == "on"){
  changefile("_short.inc","\$st_unique","off");
  $st_meldung = $st_meldung."$st_la34 $st_la8!|";
}
if($st_countersize > 6){$st_meldung = $st_meldung."$st_la17: $st_la43!|";}
else{
  if($st_countersize && $st_countersize != $st_csize){
    changefile("_short.inc","\$st_csize",$st_countersize);
    $st_meldung = $st_meldung."$st_la37 $st_la8!|";
  }
}
if($st_countercolor && $st_countercolor != $st_cfcolor){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_countercolor) ){
    changefile("_short.inc","\$st_cfcolor",$st_countercolor);
    $st_meldung = $st_meldung."$st_la38 $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_counterbcolor && $st_counterbcolor != $st_cbcolor){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_counterbcolor) ){
    changefile("_short.inc","\$st_cbcolor",$st_counterbcolor);
    $st_meldung = $st_meldung."$st_la39 $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_counterfont && $st_counterfont != $st_cfont){
  changefile("_short.inc","\$st_cfont",$st_counterfont);
  $st_meldung = $st_meldung."$st_la40 $st_la8!|";
}
if($st_ntable1 && $st_ntable1 != $st_table1){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_ntable1) ){
    changefile("_config.inc","\$st_table1",$st_ntable1);
    $st_meldung = $st_meldung."$st_la41 1 $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_ntable2 && $st_ntable2 != $st_table2){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_ntable2) ){
    changefile("_config.inc","\$st_table2",$st_ntable2);
    $st_meldung = $st_meldung."$st_la41 2 $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_ntable3 && $st_ntable3 != $st_table3){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_ntable3) ){
    changefile("_config.inc","\$st_table3",$st_ntable3);
    $st_meldung = $st_meldung."$st_la41 3 $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_ntext && $st_ntext != $st_text){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_ntext) ){
    changefile("_config.inc","\$st_text",$st_ntext);
    $st_meldung = $st_meldung."$st_la42 text $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_nlink && $st_nlink != $st_link){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_nlink) ){
    changefile("_config.inc","\$st_link",$st_nlink);
    $st_meldung = $st_meldung."$st_la42 link $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_nvlink && $st_nvlink != $st_vlink){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_nvlink) ){
    changefile("_config.inc","\$st_vlink",$st_nvlink);
    $st_meldung = $st_meldung."$st_la42 vlink $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_nalink && $st_nalink != $st_alink){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_nalink) ){
    changefile("_config.inc","\$st_alink",$st_nalink);
    $st_meldung = $st_meldung."$st_la42 alink $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_relblock == "an" && $st_reloadblock == "off"){
  changefile("_short.inc","\$st_reloadblock","on");
  $st_meldung = $st_meldung."$st_la45 $st_la8!|";
}
if($st_relblock == "aus" && $st_reloadblock == "on"){
  changefile("_short.inc","\$st_reloadblock","off");
  $st_meldung = $st_meldung."$st_la45 $st_la8!|";
}
if($st_timezone && $st_timezone != $st_tzone){
  if( eregi("[+-]{1}[0-9]{1,2}",$st_timezone) ){
    changefile("_short.inc","\$st_tzone",$st_timezone);
    $st_meldung = $st_meldung."$st_la46 $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la47!|";}
}
if(isset($st_backfile) && $st_backfile != $st_backg && $admin2=="1"){
  error_reporting (4);
  if($st_backfile){
    if(fopen($st_backfile,"r") != false){
      changefile("_config.inc","\$st_backg",$st_backfile);
      $st_meldung = $st_meldung."$st_la48 $st_la8!|";
    }
    else{$st_meldung = $st_meldung."$st_la17: $st_la48 $st_la49!|";}
  }
  else{
    changefile("_config.inc","\$st_backg",$st_backfile);
    $st_meldung = $st_meldung."$st_la48 $st_la8!|";
  }
}
if($st_bigtext && $st_bigtext != $st_textsize1){
  if($st_bigtext >= 1 && $st_bigtext <= 7){
    changefile("_config.inc","\$st_textsize1",$st_bigtext);
    $st_meldung = $st_meldung."$st_la31 $st_la51 $st_la8!|";
  }else{$st_meldung = $st_meldung."$st_la17: $st_la58!|";}
}
if($st_smalltext && $st_smalltext != $st_textsize2){
  if($st_smalltext >= 1 && $st_smalltext <= 7){
    changefile("_config.inc","\$st_textsize2",$st_smalltext);
    $st_meldung = $st_meldung."$st_la31 $st_la52 $st_la8!|";
  }else{$st_meldung = $st_meldung."$st_la17: $st_la58!|";}
}
if($st_btextfont && $st_btextfont != $st_textfont){
  changefile("_config.inc","\$st_textfont",$st_btextfont);
  $st_meldung = $st_meldung."$st_la53 $st_la8!|";
}
if($st_backcolour && $st_backcolour != $st_bgcolor){
  if( eregi("(#){1}[0-9_a-f]{6}",$st_backcolour) ){
    changefile("_config.inc","\$st_bgcolor",$st_backcolour);
    $st_meldung = $st_meldung."$st_la54 $st_la8!|";
  }
  else{$st_meldung = $st_meldung."$st_la17: $st_la44!|";}
}
if($st_statitp == "an" && $st_statp == "off"){
  changefile("_short.inc","\$st_statp","on");
  $st_meldung = $st_meldung."$st_la55 $st_la8!|";
  $st_meldung = $st_meldung."$st_la56!|";
}
if($st_statitp == "aus" && $st_statp == "on"){
  changefile("_short.inc","\$st_statp","off");
  $st_meldung = $st_meldung."$st_la55 $st_la8!|";
}
if(isset($st_serverblock) && $st_serverblock != $st_cserver && $admin2=="1"){
  if($st_serverblock){
    changefile("_short.inc","\$st_cserver",$st_serverblock);
    $st_meldung = $st_meldung."$st_la59 $st_serverblock|";
  }
  else if($st_serverblock == "" && $st_cserver != "#dummy"){
    changefile("_short.inc","\$st_cserver","#dummy");
    $st_meldung = $st_meldung."$st_la60|";
  }
}
if($st_logf == "an" && $st_showlog == "off"){
  changefile("_config.inc","\$st_showlog","on");
  $st_meldung = $st_meldung."$st_la61 $st_la8!|";
}
if($st_logf == "aus" && $st_showlog == "on"){
  changefile("_config.inc","\$st_showlog","off");
  $st_meldung = $st_meldung."$st_la61 $st_la8!|";
}
if($st_stback == "an" && $st_statbackup == "off"){
  changefile("_short.inc","\$st_statbackup","on");
  $st_meldung = $st_meldung."$st_la19 $st_pages $st_la8!|";
}
if($st_stback == "aus" && $st_statbackup == "on"){
  changefile("_short.inc","\$st_statbackup","off");
  $st_meldung = $st_meldung."$st_la19 $st_pages $st_la8!|";
}
include "_config.inc";
include "_short.inc";
include $st_lopa;
$st_browserlog = basename($st_browserlog);
$st_systemlog = basename($st_systemlog);
$st_country = basename($st_country);
$st_log = basename($st_log);
$st_pages = basename($st_pages);
$st_dom = basename($st_dom);
$st_search = basename($st_search);
print "<html>\n<head>\n<title>$st_la1</title>\n</head>\n";
if($st_backg == ""){print "<body text=\"$st_text\" bgcolor=\"$st_bgcolor\" link=\"$st_link\" alink=\"$st_alink\" vlink=\"$st_vlink\">\n";}
else{print "<body text=\"$st_text\" background=\"$st_backg\" link=\"$st_link\" alink=\"$st_alink\" vlink=\"$st_vlink\">\n";}
print "<basefont size=\"3\"><basefont face=\"VERDANA\">\n";
print "<table width=100%>\n<tr>\n <td>\n<font size=\"+1\"><b>StatIt $st_ver</b></font> <font size=\"-1\">$st_l18 <i>Helge Orthmann</i></font>";
print " <font size=\"-2\"><a href=\"http://www.otterware.de\" target=\"_blank\">www.otterware.de</a></font>\n </td>\n";
print " <td align=right><b>$st_la1</b>\n </td>\n</tr>\n</table>\n<hr>\n";
####################################################################################################################
if(isset($admin2)){
  print "<div align=\"center\"><a href=\"$st_name\">1. $st_la50 $st_la1</a></div>\n";
  print "<form method=\"post\" action=\"$st_name?admin2=1\">\n";
  print "<table align=center BGCOLOR=\"$st_table1\" border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
  print " <td colspan=2><b>$st_la9</b></td>\n";
  print " <td colspan=2><b>$st_la29</b></td>\n";
  print " <td colspan=2><b>$st_la10</b></td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la41 1</td>\n";
  print " <td><input type=text name=st_ntable1 size=7 value=$st_table1></td>\n";
  print " <td>$st_la45</td>\n";
  print " <td>";
  if($st_reloadblock == "on"){print"<INPUT TYPE=radio NAME=st_relblock value=\"an\" checked> $st_la11 <INPUT TYPE=radio NAME=st_relblock value=\"aus\"> $st_la12 ";}
  else{print"<INPUT TYPE=radio NAME=st_relblock value=\"an\"> $st_la11 <INPUT TYPE=radio NAME=st_relblock value=\"aus\" checked> $st_la12 ";} 
  print "</td>\n";
  print " <td>$st_la10</td>\n";
  print " <td>";
  if($st_auth == "on"){print"<INPUT TYPE=radio NAME=st_authe value=\"an\" checked> $st_la11 <INPUT TYPE=radio NAME=st_authe value=\"aus\"> $st_la12 ";}
  else{print"<INPUT TYPE=radio NAME=st_authe value=\"an\"> $st_la11 <INPUT TYPE=radio NAME=st_authe value=\"aus\" checked> $st_la12 ";}
  print "</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la41 2</td>\n";
  print " <td><input type=text name=st_ntable2 size=7 value=$st_table2></td>\n";
  print " <td>$st_la46</td>\n";
  print " <td><input type=text name=st_timezone size=4 value=$st_tzone></td>\n";
  print " <td>$st_la4</td>\n";
  print " <td><input type=text name=st_loginname size=10 value=$st_LOGIN></td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la41 3</td>\n";
  print " <td><input type=text name=st_ntable3 size=7 value=$st_table3></td>\n";
  print " <td>$st_la57</td>\n";
  print " <td>";
  if($st_cserver=="#dummy"){print "<input type=text name=st_serverblock size=15>";}
  else{print "<input type=text name=st_serverblock size=15 value=$st_cserver>";}
  print "</td>\n";
  print " <td>$st_la5</td>\n";
  print " <td><input type=password name=st_passworda size=10 value=$st_PASSWORD></td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la48</td>\n";
  print " <td><input type=text name=st_backfile size=10 value=$st_backg></td>\n";
  print " <td>";
  if($st_nopages != "1"){print "$st_la55";}else{print "&nbsp;";}
  print "</td>\n";
  print " <td>";
  if($st_nopages != "1"){
    if($st_statp == "on"){print "<input type=radio name=st_statitp value=\"an\" checked> $st_la11 <input type=radio name=st_statitp value=\"aus\"> $st_la12 ";}
    else{print "<input type=radio name=st_statitp value=\"an\"> $st_la11 <input type=radio name=st_statitp value=\"aus\" checked> $st_la12 ";}
  }else{print "&nbsp;";}
  print "</td>\n";
  print " <td>$st_la5 $st_la6</td>\n";
  print " <td><input type=password name=st_passwordb size=10 value=$st_PASSWORD></td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la42 text</td>\n";
  print " <td><input type=text name=st_ntext size=7 value=$st_text></td>\n";
  print " <td>";
  if($st_nopages != "1"){echo $st_la34;}else{print "&nbsp;";}
  print "</td>\n";
  print " <td>";
  if($st_nopages != "1"){
    if($st_unique == "on"){print "<input type=radio name=st_uvisits value=\"an\" checked> $st_la11 <input type=radio name=st_uvisits value=\"aus\"> $st_la12 ";}
    else{print "<input type=radio name=st_uvisits value=\"an\"> $st_la11 <input type=radio name=st_uvisits value=\"aus\" checked> $st_la12 ";}
  }else{print "&nbsp;";}
  print "</td>\n";
  print " <td colspan=2>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la42 link</td>\n";
  print " <td><input type=text name=st_nlink size=7 value=$st_link></td>\n";
  print " <td>";
  if($st_nopages != "1"){print "$st_la30";}else{print "&nbsp;";}
  print "</td>\n <td>";
  if($st_nopages != "1"){
    if($st_ctype == "text"){print "<input type=radio name=st_counter value=\"text\" checked> $st_la31 <input type=radio name=st_counter value=\"grafik\"> $st_la32 ";}
    else{print "<input type=radio name=st_counter value=\"text\"> $st_la31 <input type=radio name=st_counter value=\"grafik\" checked> $st_la32 ";}
  }else{print "&nbsp;";}
  print "</td>\n";
  print " <td colspan=2>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la42 alink</td>\n";
  print " <td><input type=text name=st_nalink size=7 value=$st_alink></td>\n";
  print " <td>";
  if($st_nopages != "1"){echo $st_la40;}else{print "&nbsp;";}
  print "</td>\n";
  print " <td>";
  if($st_nopages != "1"){print "<input type=text name=st_counterfont size=10 value=$st_cfont>";}else{print "&nbsp;";}
  print "</td>\n";
  print " <td colspan=2>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la42 vlink</td>\n";
  print " <td><input type=text name=st_nvlink size=7 value=$st_vlink></td>\n";
  print " <td>";
  if($st_nopages != "1"){echo $st_la38;}else{print "&nbsp;";}
  print "</td>\n";
  print " <td>";
  if($st_nopages != "1"){print "<input type=text name=st_countercolor size=7 value=$st_cfcolor>";}else{print "&nbsp;";} 
  print "</td>\n";
  print " <td colspan=2>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la54</td>\n";
  print " <td><input type=text name=st_backcolour size=7 value=$st_bgcolor></td>\n";
  print " <td>";
  if($st_nopages != "1"){echo $st_la37;}else{print "&nbsp;";}
  print "</td>\n";
  print " <td>";
  if($st_nopages != "1"){print "<input type=text name=st_countersize size=2 value=$st_csize>";}else{print "&nbsp;";}
  print " </td>\n";
  print " <td colspan=2 BGCOLOR=\"$st_table2\"><b>$st_la18</b></td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la31 $st_la51</td>\n";
  print " <td><input type=text name=st_bigtext size=2 value=$st_textsize1></td>\n";
  print " <td>";
  if($st_nopages != "1"){echo $st_la33;}else{print "&nbsp;";}
  print "</td>\n";
  print " <td>";
  if($st_nopages != "1"){print "<input type=text name=st_anzcounter size=1 value=$st_countlen>";}else{print "&nbsp;";}
  print "</td>\n";
  print " <td colspan=2 rowspan=6><textarea rows=10 cols=40 readonly>\n";
  $st_teile = explode ("|", $st_meldung);
  $st_anzahl = count($st_teile);
  for ($st_i = 0; $st_i <= $st_anzahl-1; $st_i++) {print "$st_teile[$st_i]\n";}
  print "</textarea><br><input type=SUBMIT VALUE=Submit></td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la31 $st_la52</td>\n";
  print " <td><input type=text name=st_smalltext size=2 value=$st_textsize2></td>\n";
  print " <td>";
  if($st_nopages != "1"){echo $st_la39;}else{print "&nbsp;";}
  print "</td>\n";
  print " <td>";
  if($st_nopages != "1"){print "<input type=text name=st_counterbcolor size=7 value=$st_cbcolor>";}else{print "&nbsp;";}
  print "</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la53</td>\n";
  print " <td><input type=text name=st_btextfont size=10 value=$st_textfont></td>\n";
  print " <td colspan=2>";
  if($st_nopages != "1"){counter($st_ctype,$st_images,$st_imagesext,$st_countlen,$st_cbcolor,$st_cfcolor,$st_csize,$st_cfont);}else{print "&nbsp;";}
  print "</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la14</td>\n";
  print " <td><input type=text name=st_bbars size=4 value=$st_dwidth></td>\n";
  if($st_nopages != "1"){
    print " <td>$st_la19 $st_pages</td>\n <td>";
    if($st_statbackup == "on"){print "<input type=radio name=st_stback value=\"an\" checked> $st_la11 <input type=radio name=st_stback value=\"aus\"> $st_la12 ";}
    else{print "<input type=radio name=st_stback value=\"an\"> $st_la11 <input type=radio name=st_stback value=\"aus\" checked> $st_la12 ";}
  }else{print "<td colspan=2>&nbsp;";}
  print "</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la13</td>\n";
  print " <td><input type=text name=st_hbars size=4 value=$st_dheight></td>\n";
  print " <td colspan=2>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la15</td>\n";
  print " <td>";
  if($st_showip == "on"){print "<input type=radio name=st_ipadr value=\"an\" checked> $st_la11 <input type=radio name=st_ipadr value=\"aus\"> $st_la12 ";}
  else{print "<input type=radio name=st_ipadr value=\"an\"> $st_la11 <input type=radio name=st_ipadr value=\"aus\" checked> $st_la12 ";}
  print "</td>\n <td colspan=2>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la61</td>\n<td>";
  if($st_showlog == "on"){print "<input type=radio name=st_logf value=\"an\" checked> $st_la11 <input type=radio name=st_logf value=\"aus\"> $st_la12 ";}
  else{print "<input type=radio name=st_logf value=\"an\"> $st_la11 <input type=radio name=st_logf value=\"aus\" checked> $st_la12 ";}
  print "</td>\n";
  print " <td colspan=2>&nbsp; </td>\n <td colspan=2>&nbsp; </td>\n</tr>\n</table>\n";
}
else{
  print "<div align=\"center\"><a href=\"$st_name?admin2=1\">2. $st_la50 $st_la1</a></div>\n";
  print "<form method=\"post\" action=\"$st_name\">\n";
  print "<table align=center BGCOLOR=\"$st_table1\" border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
  print " <td colspan=2><b>$st_la2</b></td>\n";
  print " <td><b>$st_la3</b></td>\n";
  print " <td>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td colspan=2><input type=checkbox name=st_browser>$st_browserlog</td>\n";
  print " <td><input type=checkbox name=st_color>$st_l27</td>\n";
  print " <td>&nbsp;</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td colspan=2><input type=checkbox name=st_system>$st_systemlog</td>\n";
  print " <td><input type=checkbox name=st_resolution>$st_l26</td>\n";
  print " <td>&nbsp;</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td colspan=2><input type=checkbox name=st_domain>$st_dom</td>\n";
  print " <td><input type=checkbox name=st_tagesverlauf>$st_l11</td>\n";
  print " <td>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td colspan=2><input type=checkbox name=st_topcountry>$st_country</td>\n";
  print " <td><input type=checkbox name=st_wtage>$st_l12</td>\n";
  print " <td>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td colspan=2><input type=checkbox name=st_topsearch>$st_search</td>\n";
  print " <td>&nbsp; </td>\n <td>&nbsp; </td>\n</tr>\n<tr BGCOLOR=\"$st_table2\">\n";
  print " <td colspan=3><b>$st_la19</b></td>\n";
  print " <td><b>$st_la18</b></td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td>$st_la26</td>\n";
  print " <td>$st_la26</td>\n";
  print " <td>$st_la27</td>\n";
  print " <td rowspan=7><textarea rows=10 cols=47 readonly>"; 
  $st_teile = explode ("|", $st_meldung);
  $st_anzahl = count($st_teile);
  for ($st_i = 0; $st_i <= $st_anzahl-1; $st_i++) {print "$st_teile[$st_i]\n";}
  print "</textarea><br><input type=SUBMIT VALUE=Submit></td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td rowspan=6 valign=top><input type=radio name=st_backup value=\"an\" checked>$st_la20<br><input type=radio name=st_backup value=\"aus\">$st_la21</td>\n";
  print " <td><input type=checkbox name=st_bbrowser>$st_browserlog</td>\n <td>";
  if(file_exists ($st_browserlog.'.bak')){echo " (",gmdate("j.n.Y H:i", filemtime($st_browserlog.'.bak')),")";}else{print "$st_la25";}
  print "</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td><input type=checkbox name=st_bsystem>$st_systemlog</td>\n <td>";
  if(file_exists ($st_systemlog.'.bak')){echo " (",gmdate("j.n.Y H:i", filemtime($st_systemlog.'.bak')),")";}else{print "$st_la25";}
  print "</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td><input type=checkbox name=st_bdom>$st_dom</td>\n <td>";
  if(file_exists ($st_dom.'.bak')){echo " (",gmdate("j.n.Y H:i", filemtime($st_dom.'.bak')),")";}else{print "$st_la25";}
  print "</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td><input type=checkbox name=st_bcountry>$st_country</td>\n <td>";
  if(file_exists ($st_country.'.bak')){echo " (",gmdate("j.n.Y H:i", filemtime($st_country.'.bak')),")";}else{print "$st_la25";}
  print"</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td><input type=checkbox name=st_bsearch>$st_search</td>\n <td>";
  if(file_exists ($st_search.'.bak')){echo " (",gmdate("j.n.Y H:i", filemtime($st_search.'.bak')),")";}else{print "$st_la25";}
  print "</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td><input type=checkbox name=st_blog>$st_log</td>\n <td>";
  if(file_exists ($st_log.'.bak')){echo " (",gmdate("j.n.Y H:i", filemtime($st_log.'.bak')),")";}else{print "$st_la25";}
  print "</td>\n</tr>\n</table>\n";
}
print "</table>\n</form>\n</body>\n</html>";
?>
