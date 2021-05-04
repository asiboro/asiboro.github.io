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
require "_config.inc";
require "_short.inc";
require "_tld.inc";
require $st_lopa;
if ($st_auth == "on"){
  if ( (!isset($PHP_AUTH_USER)) || ! (($PHP_AUTH_USER == $st_LOGIN) && ( $PHP_AUTH_PW == "$st_PASSWORD" )) ) {
    header("WWW-Authenticate: Basic entrer=\"Form2txt admin\"");
    header("HTTP/1.0 401 Unauthorized");
    echo "Unauthorized access...";
    exit;
  }
}
print "<html>\n<head>\n<title>$st_l1</title>\n</head>\n";
if($st_backg == ""){print "<body text=\"$st_text\" bgcolor=\"$st_bgcolor\" link=\"$st_link\" alink=\"$st_alink\" vlink=\"$st_vlink\">\n";}
else{print "<body text=\"$st_text\" background=\"$st_backg\" link=\"$st_link\" alink=\"$st_alink\" vlink=\"$st_vlink\">\n";}
print "<basefont size=\"3\"><basefont face=\"$st_textfont\">\n";
print "<font size=\"$st_textsize1\"><b>StatIt $st_ver</b></font> <font size=\"-1\">$st_l18 <i>Helge Orthmann</i></font>";
print " <font size=\"$st_textsize2\"><a href=\"http://www.otterware.de\" target=\"_blank\">www.otterware.de</a></font><hr>\n";
$st_iY = date("Y");
$st_iM = date("n");
$st_name = basename ($PHP_SELF);
function getmax($st_filename){
  $st_fcont = file ("$st_filename");
  $st_anz = count ($st_fcont);
  for ($st_i = 0; $st_i <= $st_anz-1; $st_i++) {
    $st_teile = explode (",", $st_fcont[$st_i]);
    settype($st_teile[0], "integer");
    $st_array1[$st_teile[1]] = $st_teile[0];
  }
  if($st_anz != 0){
    arsort($st_array1);
    return key($st_array1);
  }
}
function ausgabe($st_filename,$st_text,$st_text2,$st_gelinkt,$st_nummer,$st_name,$st_wohin,$st_p){
  global $st_textsize2,$st_table1,$st_table2,$st_table3,$st_l17,$st_tld,$st_dwidth,$st_l79;  
  $st_summe = 0;
  $st_fcont = file ("$st_filename");
  $st_anz = count ($st_fcont);
  if($st_nummer == 1){
    if($st_anz > 20){$st_num = 20;}
    else{$st_num = $st_anz;}
  }
  if($st_anz > 0){
    $st_summe=0;
    if($st_nummer == 1 && $st_p > 0){print "<div align=\"center\"><h3>$st_text <a href=\"$st_name?goto=$st_wohin\"><font size=\"$st_textsize2\">($st_num/$st_anz)</font></a> <a href=\"$st_name?goto=$st_wohin&id=$st_p\"><font size=\"$st_textsize2\">($st_l79: $st_p)</font></a></h3></div>\n";}
    else if($st_nummer == 1){print "<div align=\"center\"><h3>$st_text <a href=\"$st_name?goto=$st_wohin\"><font size=\"$st_textsize2\">($st_num/$st_anz)</font></a></h3></div>\n";}
    else{print "<div align=\"center\"><h3>$st_text</h3></div>\n";}
    for ($st_i = 0; $st_i <= $st_anz-1; $st_i++) {
      $st_teile = explode (",", $st_fcont[$st_i]);
      settype($st_teile[0], "integer");
      $st_array1[$st_teile[1]] = $st_teile[0];
      $st_summe = $st_summe + $st_teile[0];
    }
    $st_biggestr = max($st_array1);
    arsort($st_array1);
    print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
    print " <td>$st_text2</td>\n <td colspan=3 align=center>$st_l17</td>\n</tr>\n";
    $st_k=0;
    while(list($st_key,$st_val)=each($st_array1)) {
      $st_proz = 100 * $st_val / $st_summe;
      $st_width = $st_dwidth * $st_val / $st_biggestr;
      if($st_wohin == "tlds"){
        $st_key = str_replace ("\n", "", $st_key);
        if($st_tld[$st_key]){$st_tldges = explode (":", $st_tld[$st_key]);}
        else{$st_tldges = "?";}
      }
      print "<tr BGCOLOR=\"$st_table3\">\n";
      if($st_gelinkt == 1 && $st_wohin != "tlds"){echo " <td><font size=\"$st_textsize2\"><a href=\"http://",$st_key,"\" target=\"_blank\">",$st_key,"</a></font></td>\n";}
      else if ($st_wohin == "tlds"){
        print " <td><font size=\"$st_textsize2\">";
        echo $st_key;
        print " ($st_tldges[0])</font></td>\n";
      }
      else{echo " <td><font size=\"$st_textsize2\">",$st_key,"</font></td>\n";}
      echo " <td align=right><font size=\"$st_textsize2\">",$st_val,"</font></td>\n";
      print " <td align=right><font size=\"$st_textsize2\">";
      printf ("%1.1f", $st_proz);
      print " %</font></td>\n";
      print " <td valign=center><img src=\"w.gif\" width=\"$st_width\" height=\"5\" border=\"0\"></td>\n";
      print "</tr>\n";
      if($st_nummer == 1 && $st_k == 19){break;}
      $st_k++;
    }
  }
  print "</table>\n";
  if($st_nummer == 0){print "<br><div align=\"center\"><a href=\"$st_name\">$st_name</a></div>\n";}
}
function ausgabe1($st_filename,$st_vergleich,$st_table1,$st_table2,$st_table3,$st_text,$st_l17,$st_dwidth){
  global $st_textsize2; 
  $st_summe = 0;
  $st_fcont3 = file ("$st_filename");
  $st_anz3 = count ($st_fcont3);
  if($st_anz3 > 0){
    for ($st_i = 0; $st_i <= $st_anz3-1; $st_i++) {
      $st_teile = explode (",", $st_fcont3[$st_i]);
      settype($st_teile[0], "integer");
      $st_teile[1] = str_replace ("\n", "", $st_teile[1]);
      $st_teile2 = explode (" ", $st_teile[1]);
      while(list($st_key,$st_val)=each($st_vergleich)) {
        if($st_val == $st_teile2[0]){
          $st_neu[$st_teile2[0]] = $st_neu[$st_teile2[0]] + $st_teile[0];
          $st_summe = $st_summe + $st_teile[0];
        }
      }
      reset($st_vergleich);
    }
    arsort($st_neu);
    $st_biggestp = max($st_neu);
    print "<br>\n<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
    print " <td>$st_text</td>\n <td colspan=3 align=center>$st_l17</td>\n</tr>\n";
    $st_k=0;
    while(list($st_key,$st_val)=each($st_neu)) {
      $st_proz = 100 * $st_val / $st_summe;
      $st_width = $st_dwidth * $st_val / $st_biggestp;
      print "<tr BGCOLOR=\"$st_table3\">\n";
      print " <td><font size=\"$st_textsize2\">";
      echo $st_key;
      print "</font></td>\n";
      echo " <td align=right><font size=\"$st_textsize2\">",$st_val,"</font></td>\n";
      print " <td align=right><font size=\"$st_textsize2\">";
      printf ("%1.1f", $st_proz);
      print " %</font></td>\n";
      print " <td valign=center><img src=\"w.gif\" width=\"$st_width\" height=\"5\" border=\"0\"></td>\n";
      print "</tr>\n";
      if($st_k == 19){break;}
      $st_k++;
    }
    print "</table>\n";
  }
}
if($goto == "referer"){ausgabe($st_dom,$st_l15,$st_l15,1,0,$st_name,"referer",0);}
elseif($goto == "tlds"){ausgabe($st_country,"$st_l57 - $st_l58",$st_l58,0,0,$st_name,"tlds",0);}
elseif($goto == "pages"){
  if($id > 0 && isset($file)){
    ausgabe($file,"$st_l53  $file",$st_l54,0,0,$st_name,"pages",0);
  }
  else if($id > 0){
    $st_lyea = $st_iY - 1;
    print "<div align=\"center\"><h3>$st_l79 $st_l53</h3></div>\n";
    print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
    print " <td>$st_l80</td>\n</tr>\n";
    for ($st_i = 12; $st_i >= 1; $st_i--) {
      if(file_exists("pages_$st_i.$st_iY")){print "<tr BGCOLOR=\"$st_table3\">\n <td><a href=\"$st_name?goto=pages&id=$id&file=pages_$st_i.$st_iY\">pages_$st_i.$st_iY</a></td>\n</tr>\n";}
    }
    for ($st_i = 12; $st_i >= 1; $st_i--) {
      if(file_exists("pages_$st_i.$st_lyea")){print "<tr BGCOLOR=\"$st_table3\">\n <td><a href=\"$st_name?goto=pages&id=$id&file=pages_$st_i.$st_lyea\">pages_$st_i.$st_lyea</a></td>\n</tr>\n";}
    }
    print "</tr>\n</table>\n";
    print "<br><div align=\"center\"><a href=\"$st_name\">$st_name</a></div>\n";
  }
  else{ausgabe($st_pages,"$st_l53  $st_iM. $st_iY",$st_l54,0,0,$st_name,"pages",0);}
}
elseif($goto == "browser"){ausgabe($st_browserlog,$st_l7,$st_l7,$st_table1,0,0,$st_name,"browser",0);}
elseif($goto == "system"){ausgabe($st_systemlog,$st_l8,$st_l8,0,0,$st_name,"system",0);}
elseif($goto == "queries"){ausgabe($st_search,"$st_l74 $st_l75",$st_l75,0,0,$st_name,"queries",0);}
else{
  // $st_log ##############################################
  $st_fp = fopen ("$st_log", "r");
  $st_datain = fgets ($st_fp, 1000);
  $st_data = explode (",", $st_datain);
  fclose ($st_fp);
  function maximus ($st_min, $st_max, $st_dataa) {
    $st_big[0] = 0;
    for ($st_i = $st_min; $st_i <= $st_max; $st_i++) {
      if($st_big[0] < $st_dataa[$st_i]){
        $st_big[0] = $st_dataa[$st_i];
        $st_big[1] = $st_i;
      }
    }
    $st_big[1] = $st_big[1] - $st_min ;
    return $st_big;
  }
  $st_iD = date("j");
  $st_monat = array($st_l40,$st_l41,$st_l42,$st_l43,$st_l44,$st_l45,$st_l46,$st_l47,$st_l48,$st_l49,$st_l50,$st_l51);
  $st_wochentag = array($st_l19,$st_l20,$st_l21,$st_l22,$st_l23,$st_l24,$st_l25);
  $st_aufl = array("640","800","1024","1152","1280",$st_l14);
  $st_colors = array("4 bit","8 bit","16 bit","24 bit","32 bit",$st_l14);
  $st_dbrowser = array("Opera","Konqueror","MSIE","Netscape","Lynx","Links","w3m","?");
  $st_dsystem = array("Windows","Unix","Macintosh","Linux","OS/2","OSF","FreeBSD","OpenBSD","Plan9","SunOS","BeOS","IRIX","?");
  // aktueller Monat ###############
  $st_werte = maximus("36","66",$st_data);
  $st_bigvard = $st_werte[0];
  $st_bigkeyd = $st_werte[1];
  // Tagesverlauf ##################
  $st_werte = maximus("0","23",$st_data);
  $st_bigvarh = $st_werte[0];
  $st_bigkeyh = $st_werte[1];
  // Wochentage ####################
  $st_werte = maximus("67","73",$st_data);
  $st_bigvardw = $st_werte[0];
  $st_bigkeydw = $st_werte[1];
  // Jahresverlauf #################
  $st_werte = maximus("24","35",$st_data);
  $st_bigvarm = $st_werte[0];
  $st_bigkeym = $st_werte[1];
  // Browser #######################
  $st_werte = maximus("87","93",$st_data);
  $st_bigvarb = $st_werte[0];
  $st_bigkeyb = $st_werte[1];
  // Betriebssystem ################
  $st_werte = maximus("100","106",$st_data);
  $st_bigvarbr = $st_werte[0];
  $st_bigkeybr = $st_werte[1];
  // screen #######################
  $st_werte = maximus("74","79",$st_data);
  $st_bigvars = $st_werte[0];
  $st_bigkeys = $st_werte[1];
  // color #############################
  $st_werte = maximus("80","85",$st_data);
  $st_bigvarc = $st_werte[0];
  $st_bigkeyc = $st_werte[1];
  // Kurz Info Besucher
  if($st_iD == 1){$st_gesttagb="-";}
  else{
    $st_gesttag = $st_iD+34;
    $st_gesttagb = $st_data[$st_gesttag];
  }
  $st_aktday = $st_iD+35;
  $st_aktmonat = $st_iM+23;
  // Wahrscheinlichkeit
  $st_iH = date("G");
  $st_imi = date("i");
  $st_total = 0;
  $st_frac = 0;
  for ($st_i = 0; $st_i <= 23; $st_i++) {$st_total = $st_total + $st_data[$st_i];}
  for ($st_i = 0; $st_i < $st_iH; $st_i++) {$st_frac = $st_frac + $st_data[$st_i];}
  if($st_iH == 0 || $st_data[$st_iH] == 0){$st_frac = 1;}
  if($st_data[$st_aktday] == 0){$st_aktualday = 1;}
  else{$st_aktualday = $st_data[$st_aktday];}
  $st_frac = $st_frac + ( $st_data[$st_iH] * $st_imi ) / 60;
  $st_evt = ( $st_aktualday * $st_total ) / $st_frac;
  // Ausgabe
  $st_summe=0;
  for ($st_i = 36; $st_i <= $st_aktday; $st_i++) {$st_summe = $st_summe + $st_data[$st_i];}
  $st_schnitt = $st_summe / $st_iD;
  print "<div align=\"center\"><h3>$st_l38</h3></div>\n";
  $st_maxbrowser = getmax($st_browserlog);
  $st_maxsystem = getmax($st_systemlog);
  $st_maxreferer = getmax($st_dom);
  $st_maxtld = getmax($st_country);
  $st_maxquery = getmax($st_search);
  if($st_statp == "on"){$st_maxpages = getmax($st_pages);}
  print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";  
  print " <td align=center><font size=\"$st_textsize2\">$st_l28</font></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_l28?</font></td>\n <td align=center><font size=\"$st_textsize2\">$st_l29</font></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_l52</font></td>\n <td align=center><a href=\"#monat\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l30</font></a></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_l55</font></td>\n <td align=center><a href=\"#jahr\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l31</font></a></td>\n";
  print " <td align=center><a href=\"#wtage\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l32</font></a></td>\n <td align=center><a href=\"#stunde\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l33</font></a></td>\n";
  print " <td align=center><a href=\"#screen\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l36</font></a></td>\n <td align=center><a href=\"#color\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l37</font></a></td>\n</tr>\n";
  print "<tr BGCOLOR=\"$st_table3\">\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_data[$st_aktday]</font></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">";
  printf ("%d", $st_evt);
  print "</font></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_gesttagb</font></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">";
  printf ("%1.0f", $st_schnitt);
  print "</font></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_data[$st_aktmonat]</font></td>\n <td align=center><font size=\"$st_textsize2\">$st_data[109]";
  if($st_unique == "on"){print " ($st_data[86])";}
  print "</font></td>\n <td align=center><font size=\"$st_textsize2\">$st_monat[$st_bigkeym]</font></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_wochentag[$st_bigkeydw]</font></td>\n <td align=center><font size=\"$st_textsize2\">$st_bigkeyh $st_l39</font></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_aufl[$st_bigkeys]</font></td>\n <td align=center><font size=\"$st_textsize2\">$st_colors[$st_bigkeyc]</font></td>\n</tr>\n";
  print "</table>\n<br>";
  print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";  
  print " <td align=center><a href=\"#browser\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l34</font></a></td>\n <td align=center><a href=\"#system\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l35</font></a></td>\n";
  print " <td align=center><a href=\"#referer\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l68</font></a></td>\n <td align=center><a href=\"#tld\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l69</font></a></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_l72</font></td>\n ";
  if($st_maxquery){print " <td align=center><a href=\"#queries\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l76</font></a></td>\n";}
  if($st_statp == "on"){print " <td align=center><a href=\"#pages\" style=\"text-decoration:none; color:$st_text\"><font size=\"$st_textsize2\">$st_l71</font></a></td>\n";}
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_maxbrowser</font></td>\n <td align=center><font size=\"$st_textsize2\">$st_maxsystem</font></td>\n";
  print " <td align=center><a href=\"http://$st_maxreferer\" target=\"_blank\"><font size=\"$st_textsize2\">$st_maxreferer</font></a></td>\n <td align=center><font size=\"$st_textsize2\">$st_maxtld</font></td>\n";
  print " <td align=center><font size=\"$st_textsize2\">$st_data[105].$st_data[106].$st_data[107] ($st_data[108])</font></td>\n";
  if($st_maxquery){print " <td align=center><font size=\"$st_textsize2\">$st_maxquery</font></td>\n";}
  if($st_statp == "on"){print " <td align=center><font size=\"$st_textsize2\">$st_maxpages</font></td>\n";}
  print "</tr>\n</table>\n"; 
  // $st_last20 ###########################################
  print "<div align=\"center\"><h3>$st_l2</h3></div>\n";
  $st_fcontents = file ("$st_last20");
  $st_anzahl = count($st_fcontents);
  print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
  print " <td><font size=\"$st_textsize2\">$st_l3</font></td>\n";
  if($st_showip == "on"){print " <td><font size=\"$st_textsize2\">$st_l4</font></td>\n";}
  print " <td><font size=\"$st_textsize2\">$st_l5</font></td>\n <td><font size=\"$st_textsize2\">$st_l6</font></td>\n";
  print " <td><font size=\"$st_textsize2\">$st_l7</font></td>\n <td><font size=\"$st_textsize2\">$st_l8</font></td>\n";
  print " <td><font size=\"$st_textsize2\">$st_l9</font></td>\n</tr>\n";
  for ($st_i = $st_anzahl-1; $st_i >= 0; $st_i--) {
    print "<tr BGCOLOR=\"$st_table3\">\n";
    $st_pieces = explode (",", $st_fcontents[$st_i]);
    print " <td><font size=\"$st_textsize2\">$st_pieces[0]</font></td>\n";
    if($st_showip == "on"){print " <td><font size=\"$st_textsize2\">$st_pieces[1]</font></td>\n";}
    for ($st_k = 2; $st_k <= 5; $st_k++) {print " <td><font size=\"$st_textsize2\">$st_pieces[$st_k]</font></td>\n";}
    $st_pieces[7] = str_replace ("\n", "", $st_pieces[7]);
    $st_referer = explode ("/", $st_pieces[6]);
    if($st_pieces[7] == 0){print "<td><font size=\"$st_textsize2\">$st_pieces[6]</font></td>\n";}
    else if($st_pieces[7] == 1){print " <td><font size=\"$st_textsize2\"><a href=\"$st_pieces[6]\" target=\"_blank\">$st_pieces[6]</a></font></td>\n";}
    print "</tr>\n";
  }
  print "</table>\n";
  // $st_log ##############################################
  // aktueller Monat ###############
  print "<a name=\"monat\"></a>\n";
  $st_lmonth = $st_monat[$st_iM - 1]; 
  print "<div align=\"center\"><h3>$st_l10 $st_lmonth $st_iY</h3></div>\n";
  print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=6 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
  for ($st_i = 1; $st_i <= 16; $st_i++) {print " <td width=20 align=center>$st_i</td>\n";}
  print "</tr>\n<tr BGCOLOR=\"$st_table3\" height=$st_dheight>\n";
  for ($st_i = 36; $st_i <= 51; $st_i++) {
    if($st_bigvard != 0){$st_height = $st_dheight * $st_data[$st_i] / $st_bigvard;}
    else{$st_height = 0;}
    print " <td valign=bottom align=center><img src=\"v.gif\" width=\"5\" height=\"$st_height\" border=\"0\"></td>\n";
  }
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 36; $st_i <= 51; $st_i++) {print " <td align=center><font size=\"$st_textsize2\">$st_data[$st_i]</font></td>\n";}
  print "</tr>\n<tr BGCOLOR=\"$st_table2\">\n";
  for ($st_i = 17; $st_i <= 31; $st_i++) {print " <td width=20 align=center>$st_i</td>\n";}
  print " <td width=20 align=center>&nbsp;</td>\n";
  print "</tr>\n<tr BGCOLOR=\"$st_table3\" height=$st_dheight>\n";
  for ($st_i = 52; $st_i <= 66; $st_i++) {
    if($st_bigvard != 0){$st_height = $st_dheight * $st_data[$st_i] / $st_bigvard;}
    else{$st_height = 0;}
    print " <td valign=bottom align=center><img src=\"v.gif\" width=\"5\" height=\"$st_height\" border=\"0\"></td>\n";
  }
  print " <td valign=bottom align=center>&nbsp;</td>\n";
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 52; $st_i <= 66; $st_i++) {print " <td align=center><font size=\"$st_textsize2\">$st_data[$st_i]</font></td>\n";}
  print " <td align=center>&nbsp;</td>\n";
  print "</tr>\n</table>\n";
  // Jahresverlauf #################
  print "<a name=\"jahr\"></a>\n";
  print "<div align=\"center\"><h3>$st_l13</h3></div>\n";
  print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
  for ($st_i = 1; $st_i <= 12; $st_i++) {print " <td width=40 align=center>$st_i</td>\n";}
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 24; $st_i <= 35; $st_i++) {
    if($st_bigvarm != 0){$st_height = $st_dheight * $st_data[$st_i] / $st_bigvarm;}
    else{$st_height = 0;}
    print " <td valign=bottom align=center><img src=\"v.gif\" width=\"5\" height=\"$st_height\" border=\"0\"></td>\n";
  }
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 24; $st_i <= 35; $st_i++) {print " <td align=center><font size=\"$st_textsize2\">$st_data[$st_i]</font></td>\n";}
  print "</tr>\n</table>\n";
  // Tagesverlauf ##################
  print "<a name=\"stunde\"></a>\n";
  $st_summe=0;
  print "<div align=\"center\"><h3>$st_l11</h3></div>\n";
  print "<table BGCOLOR=\"$st_table1\" width=100% align=center border=0 cellPadding=1 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
  for ($st_i = 0; $st_i <= 23; $st_i++) {print " <td align=center>$st_i</td>\n";}
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 0; $st_i <= 23; $st_i++) {
    if($st_bigvarh != 0){$st_height = $st_dheight * $st_data[$st_i] / $st_bigvarh;}
    else{$st_height = 0;}
    print " <td valign=bottom align=center><img src=\"v.gif\" width=\"5\" height=\"$st_height\" border=\"0\"></td>\n";
    $st_summe = $st_summe + $st_data[$st_i];
  }
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 0; $st_i <= 23; $st_i++) {print " <td align=center><font size=\"$st_textsize2\">$st_data[$st_i]</font></td>\n";}
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 0; $st_i <= 23; $st_i++) {
    if($st_summe != 0){$st_proz = 100 * $st_data[$st_i] / $st_summe;}
    else{$st_proz = 0;}
    print " <td align=center><font size=\"$st_textsize2\">";
    printf ("%1.1f", $st_proz);
    print " %</font></td>\n";
  }
  print "</tr>\n</table>\n";
  // Wochentage ####################
  print "<a name=\"wtage\"></a>\n";
  print "<div align=\"center\"><h3>$st_l12</h3></div>\n";
  print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=5 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
  print " <td width=30 align=center>$st_l19</td>\n";
  print " <td width=30 align=center>$st_l20</td>\n";
  print " <td width=30 align=center>$st_l21</td>\n";
  print " <td width=30 align=center>$st_l22</td>\n";
  print " <td width=30 align=center>$st_l23</td>\n";
  print " <td width=30 align=center>$st_l24</td>\n";
  print " <td width=30 align=center>$st_l25</td>\n";
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  $st_summe=0;
  for ($st_i = 67; $st_i <= 73; $st_i++) {
    if($st_bigvardw != 0){$st_height = $st_dheight * $st_data[$st_i] / $st_bigvardw;}
    else{$st_height = 0;}
    print " <td valign=bottom align=center><img src=\"v.gif\" width=\"5\" height=\"$st_height\" border=\"0\"></td>\n";
    $st_summe = $st_summe + $st_data[$st_i];
  }
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 67; $st_i <= 73; $st_i++) {print " <td align=center><font size=\"$st_textsize2\">$st_data[$st_i]</font></td>\n";}
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 67; $st_i <= 73; $st_i++) {
    if($st_summe != 0){$st_proz = 100 * $st_data[$st_i] / $st_summe;}
    else{$st_proz = 0;}
    print " <td align=center><font size=\"$st_textsize2\">";
    printf ("%1.1f", $st_proz);
    print " %</font></td>\n";
  }
  print "</tr>\n</table>\n";
  // Browser #######################
  print "<a name=\"browser\"></a>\n";
  ausgabe($st_browserlog,$st_l7,$st_l7,0,1,$st_name,"browser",0);
  ausgabe1($st_browserlog,$st_dbrowser,$st_table1,$st_table2,$st_table3,$st_l7,$st_l17,$st_dwidth);
  // Betriebssystem ################
  print "<a name=\"system\"></a>\n";
  ausgabe($st_systemlog,$st_l8,$st_l8,0,1,$st_name,"system",0);
  ausgabe1($st_systemlog,$st_dsystem,$st_table1,$st_table2,$st_table3,$st_l8,$st_l17,$st_dwidth);
  // screen #######################
  print "<a name=\"screen\"></a>\n";
  $st_summe=0;
  print "<div align=\"center\"><h3>$st_l26</h3></div>\n";
  print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=6 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
  print " <td width=70 align=center>640</td>\n <td width=70 align=center>800</td>\n";
  print " <td width=70 align=center>1024</td>\n <td width=70 align=center>1152</td>\n";
  print " <td width=70 align=center>1280</td>\n";
  print " <td width=70 align=center>$st_l14</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 74; $st_i <= 79; $st_i++) {
    if($st_bigvars != 0){$st_height = $st_dheight * $st_data[$st_i] / $st_bigvars;}
    else{$st_height = 0;}
    print " <td valign=bottom align=center><img src=\"v.gif\" width=\"5\" height=\"$st_height\" border=\"0\"></td>\n";
    $st_summe = $st_summe + $st_data[$st_i];
  }
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 74; $st_i <= 79; $st_i++) {print " <td align=center>$st_data[$st_i]</td>\n";}
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 74; $st_i <= 79; $st_i++) {
    if($st_summe != 0){$st_proz = 100 * $st_data[$st_i] / $st_summe;}
    else{$st_proz = 0;}
    print " <td align=center><font size=\"$st_textsize2\">";
    printf ("%1.1f", $st_proz);
    print " %</font></td>\n";
  }
  print "</tr>\n</table>\n";
  // color #############################
  print "<a name=\"color\"></a>\n";
  $st_summe=0;
  print "<div align=\"center\"><h3>$st_l27</h3></div>\n";
  print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=6 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
  print " <td width=70 align=center>4 bit</td>\n <td width=70 align=center>8 bit</td>\n";
  print " <td width=70 align=center>16 bit</td>\n <td width=70 align=center>24 bit</td>\n";
  print " <td width=70 align=center>32 bit</td>\n <td width=70 align=center>$st_l14</td>\n</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 80; $st_i <= 85; $st_i++) {
    if($st_bigvarc != 0){$st_height = $st_dheight * $st_data[$st_i] / $st_bigvarc;}
    else{$st_height = 0;}
    print " <td valign=bottom align=center><img src=\"v.gif\" width=\"5\" height=\"$st_height\" border=\"0\"></td>\n";
    $st_summe = $st_summe + $st_data[$st_i];
  }
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 80; $st_i <= 85; $st_i++) {print " <td align=center>$st_data[$st_i]</td>\n";}
  print "</tr>\n<tr BGCOLOR=\"$st_table3\">\n";
  for ($st_i = 80; $st_i <= 85; $st_i++) {
    if($st_summe != 0){$st_proz = 100 * $st_data[$st_i] / $st_summe;}
    else{$st_proz = 0;}
    print " <td align=center><font size=\"$st_textsize2\">";
    printf ("%1.1f", $st_proz);
    print " %</font></td>\n";
  }
  print "</tr>\n</table>\n";
  // Top Referer Domains ###############
  print "<a name=\"referer\"></a>\n";
  ausgabe($st_dom,$st_l15,$st_l15,1,1,$st_name,"referer",0);
  // $st_country ###################################
  print "<a name=\"tld\"></a>\n";
  ausgabe($st_country,"$st_l57 - $st_l58",$st_l58,1,1,$st_name,"tlds",0);
  $st_summe=0;
  $st_fcont2 = file ("$st_country");
  $st_anz2 = count ($st_fcont2);
  $st_anz3 = $st_anz2;
  if($st_anz2 > 0){
    print "<div align=\"center\"><h3>$st_l57 - $st_l59</h3></div>\n";
    $st_tlds["UN"]=0;
    $st_tlds["AS"]=0;
    $st_tlds["AF"]=0;
    $st_tlds["EU"]=0;
    $st_tlds["GUS"]=0;
    $st_tlds["AM"]=0;
    $st_tlds["OZ"]=0;
    $st_tlds["AN"]=0;
    for ($st_i = 0; $st_i <= $st_anz3-1; $st_i++) {
      $st_teile = explode (",", $st_fcont2[$st_i]);
      settype($st_teile[0], "integer");
      $st_teile[1] = str_replace ("\n", "", $st_teile[1]);
      if($st_tld[$st_teile[1]]){
        $st_teile1 = explode (":", $st_tld[$st_teile[1]]);
        $st_tlds[$st_teile1[1]] = $st_tlds[$st_teile1[1]] + $st_teile[0];
      }
      else{$st_tlds["UN"] = $st_tlds["UN"] + $st_teile[0];}
    }
    $st_tlds1[$st_l67]=$st_tlds["UN"];
    $st_tlds1[$st_l63]=$st_tlds["AS"];
    $st_tlds1[$st_l62]=$st_tlds["AF"];
    $st_tlds1[$st_l60]=$st_tlds["EU"];
    $st_tlds1[$st_l65]=$st_tlds["GUS"];
    $st_tlds1[$st_l61]=$st_tlds["AM"];
    $st_tlds1[$st_l64]=$st_tlds["OZ"];
    $st_tlds1[$st_l66]=$st_tlds["AN"];
    arsort($st_tlds1);
    $st_biggestp = max($st_tlds1);
    print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=3 cellSpacing=1>\n<tr BGCOLOR=\"$st_table2\">\n";
    print " <td>$st_l59</td>\n <td colspan=3 align=center>$st_l17</td>\n</tr>\n";
    $st_summe = $st_tlds["UN"] + $st_tlds["AS"] + $st_tlds["AF"] + $st_tlds["EU"] + $st_tlds["GUS"] + $st_tlds["AM"] + $st_tlds["OZ"] + $st_tlds["AN"];
    $st_k=0;
    while(list($st_key,$st_val)=each($st_tlds1)) {
      $st_proz = 100 * $st_val / $st_summe;
      $st_width = $st_dwidth * $st_val / $st_biggestp;
      print "<tr BGCOLOR=\"$st_table3\">\n";
      print " <td><font size=\"$st_textsize2\">";
      echo $st_key;
      print "</font></td>\n";
      echo " <td align=right><font size=\"$st_textsize2\">",$st_val,"</font></td>\n";
      print " <td align=right><font size=\"$st_textsize2\">";
      printf ("%1.1f", $st_proz);
      print " %</font></td>\n";
      print " <td valign=center><img src=\"w.gif\" width=\"$st_width\" height=\"5\" border=\"0\"></td>\n";
      print "</tr>\n";
      if($st_k == 19){break;}
      $st_k++;
    }
    print "</table>\n";
  }
  // searchengine queries
  print "<a name=\"queries\"></a>\n";
  ausgabe($st_search,"$st_l74 $st_l75",$st_l75,0,1,$st_name,"queries",0);
  // $st_pages ################################
  print "<a name=\"pages\"></a>\n";
  if($st_statp == "on"){
    $st_lyea = $st_iY - 1;
    $st_c = 0;
    for ($st_i = 1; $st_i <= 12; $st_i++) {
      if(file_exists("pages_$st_i.$st_iY")){$st_c++;}
      if(file_exists("pages_$st_i.$st_lyea")){$st_c++;}
    }
    ausgabe($st_pages,"$st_l53  $st_iM. $st_iY",$st_l54,0,1,$st_name,"pages",$st_c);
  }
  // file size ############################
  if($st_showlog == "on"){
    $st_size1 = filesize ($st_log);
    $st_size2 = filesize ($st_last20);
    $st_size3 = filesize ($st_dom);
    $st_size4 = filesize ($st_country);
    $st_size5 = filesize ($st_browserlog);
    $st_size6 = filesize ($st_systemlog);
    $st_size7 = filesize ($st_search);
    $st_log = basename ($st_log);
    $st_last20 = basename ($st_last20);
    $st_dom = basename ($st_dom);
    $st_country = basename ($st_country);
    $st_browserlog = basename($st_browserlog);
    $st_systemlog = basename($st_systemlog);
    $st_search = basename($st_search);
    $st_gesamt = $st_size1 + $st_size2 + $st_size3 + $st_size4 + $st_size5 + $st_size6 + $st_size7;
    if($st_statp == "on"){
      $st_size8 = filesize ($st_pages);
      $st_pages = basename ($st_pages);
      $st_gesamt = $st_gesamt + $st_size8;
    }
    if($st_reloadblock == "on"){
      $st_size9 = filesize ($st_iplog);
      $st_iplog = basename ($st_iplog);
      $st_gesamt = $st_gesamt + $st_size9;
    }
    print "<div align=\"center\"><h3>$st_l56</h3></div>\n";
    print "<table BGCOLOR=\"$st_table1\" align=center border=0 cellPadding=4 cellSpacing=1>\n";
    print "<tr BGCOLOR=\"$st_table2\">\n <td>$st_l77</td>\n <td>$st_l78</td>\n</tr>\n";
    print "<tr BGCOLOR=\"$st_table3\">\n <td>$st_log</td>\n <td align=right>$st_size1</td>\n</tr>\n";
    print "<tr BGCOLOR=\"$st_table3\">\n <td>$st_last20</td>\n <td align=right>$st_size2</td>\n</tr>\n";
    print "<tr BGCOLOR=\"$st_table3\">\n <td>$st_dom</td>\n <td align=right>$st_size3</td>\n</tr>\n";
    print "<tr BGCOLOR=\"$st_table3\">\n <td>$st_country</td>\n <td align=right>$st_size4</td>\n</tr>\n";
    print "<tr BGCOLOR=\"$st_table3\">\n <td>$st_browserlog</td>\n <td align=right>$st_size5</td>\n</tr>\n";
    print "<tr BGCOLOR=\"$st_table3\">\n <td>$st_systemlog</td>\n <td align=right>$st_size6</td>\n</tr>\n";
    print "<tr BGCOLOR=\"$st_table3\">\n <td>$st_search</td>\n <td align=right>$st_size7</td>\n</tr>\n";
    if($st_statp == "on"){print "<tr BGCOLOR=\"$st_table3\">\n <td>$st_pages</td>\n <td align=right>$st_size8</td>\n</tr>\n";}
    if($st_reloadblock == "on"){print "<tr BGCOLOR=\"$st_table3\">\n <td>$st_iplog</td>\n <td align=right>$st_size9</td>\n</tr>\n";}
    print "<tr BGCOLOR=\"$st_table3\">\n <td><b>$st_l73</b></td>\n <td align=right><b>$st_gesamt</b></td>\n</tr>\n</table>\n";
  }
}
print "<hr><font size=\"$st_textsize1\"><b>StatIt $st_ver</b></font> <font size=\"-1\">$st_l18 <i>Helge Orthmann</i></font>";
print " <font size=\"$st_textsize2\"><a href=\"http://www.otterware.de\" target=\"_blank\">www.otterware.de</a></font>\n";
print "</BODY>\n</HTML>";
?>