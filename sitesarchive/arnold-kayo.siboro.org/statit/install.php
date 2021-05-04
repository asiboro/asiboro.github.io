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
$st_abspath=ereg_replace("\\\\","/",__FILE__); 
$st_abspath = dirname ($st_abspath); 
$st_abspathnormal = "$st_abspath/normal";
$st_abspathsimple = "$st_abspath/simple";
$st_name = basename ($PHP_SELF);
print "<html>\n<head>\n<title>Installation</title>\n</head>\n";
print "<body link=\"#FF0000\" alink=\"#FF0000\" vlink=\"#FF0000\" bgcolor=\"#FFFFFF\"\n";
print "<basefont size=\"3\"><basefont face=\"VERDANA\">\n";
print "<font size=\"+1\"><b>StatIt $st_ver</b></font> <font size=\"-1\">by <i>Helge Orthmann</i></font>";
print " <font size=\"-2\"><a href=\"http://www.otterware.de\" target=\"_blank\">www.otterware.de</a></font>\n<hr>\n";
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
function changeabspath($st_filename,$st_abspathcomplete){
  $st_fcont = file ("$st_filename");
  $st_anz = count ($st_fcont);
  for ($st_i = 0; $st_i <= $st_anz-1; $st_i++) {
    if(eregi("/absolut path",$st_fcont[$st_i])){
      $st_fcont[$st_i] = str_replace ("/absolut path", $st_abspathcomplete, $st_fcont[$st_i]);
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
$error=0;
if($st_version && $st_language && $st_loginname && $st_passworda && $st_passwordb && $st_phpversion && $st_servername){
  if($st_passworda != $st_passwordb){
    $st_meldung = $st_meldung."passwords are different!|";
    $error=1;
  }
  else if(strlen ($st_passworda) < 4){
    $st_meldung = $st_meldung."minimum 4 characters for password!|";
    $error=1;
  }
  else{
    if($st_version == "normal"){
      changefile("normal/_short.inc","\$st_abspath",$st_abspathnormal);
      changeabspath("normal/showcount.php3",$st_abspathnormal);
      changeabspath("normal/statit.php3",$st_abspathnormal);
      changeabspath("normal/statitp.php3",$st_abspathnormal);
      changefile("normal/_lopa.inc.php3","\$st_LOGIN",$st_loginname);
      changefile("normal/_lopa.inc.php3","\$st_PASSWORD",$st_passworda);
      $st_imagepfad = "http://$st_servername/normal/pics/";
      changefile("normal/_short.inc","\$st_images",$st_imagepfad);
      if($st_language != "german"){
        $lfile = $st_language."_config.inc";
        if(!copy ("language/$lfile", "normal/_config.inc")){
          $st_meldung = $st_meldung."cannot copy!|"; 
          $error=1;
        }
      }
      if($st_phpversion != "php3"){
        changefile("normal/_short.inc","\$st_lopa","\$st_abspath/_lopa.inc.php");
        if(!rename ("$st_abspathnormal/_lopa.inc.php3", "$st_abspathnormal/_lopa.inc.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathnormal/abspath.php3", "$st_abspathnormal/abspath.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathnormal/admin.php3", "$st_abspathnormal/admin.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathnormal/showcount.php3", "$st_abspathnormal/showcount.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathnormal/statistik.php3", "$st_abspathnormal/statistik.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathnormal/statit.php3", "$st_abspathnormal/statit.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathnormal/statitjs.php3", "$st_abspathnormal/statitjs.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathnormal/statitp.php3", "$st_abspathnormal/statitp.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathnormal/update.php3", "$st_abspathnormal/update.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
      }
      $st_javascodef1="&lt;script language=\"javascript\">\n";
      $st_javascodef2=$st_javascode."&lt;!--\n";
      if($st_phpversion=="php3"){$st_javascodef3=$st_javascode."document.write(\"&lt;img width=1 height=1 border=0 src=http://$st_servername/normal/statitjs.php3?1,\"+screen.width+\",\"+screen.colorDepth+\">\");\n";}
      else{$st_javascodef3=$st_javascode."document.write(\"&lt;img width=1 height=1 border=0 src=http://$st_servername/normal/statitjs.php?1,\"+screen.width+\",\"+screen.colorDepth+\">\");\n";}
      $st_javascodef4=$st_javascode."//-->\n";
      $st_javascodef5=$st_javascode."&lt;/script>";
      if($st_phpversion=="php3"){$st_statitcode="&lt;?php include \"$st_abspathnormal/statit.php3\" ?>";}
      else{$st_statitcode="&lt;?php include \"$st_abspathnormal/statit.php\" ?>";}
    }
    else if($st_version == "simple"){
      changefile("simple/_lopa.inc.php3","\$st_LOGIN",$st_loginname);
      changefile("simple/_lopa.inc.php3","\$st_PASSWORD",$st_passworda);
      if($st_language != "german"){
        $lfile = $st_language."_config.inc";
        if(!copy ("language/$lfile", "simple/_config.inc")){
          $st_meldung = $st_meldung."cannot copy!|"; 
          $error=1;
        }
      }
      if($st_phpversion != "php3"){
        changefile("simple/_short.inc","\$st_lopa","_lopa.inc.php");
        if(!rename ("$st_abspathsimple/_lopa.inc.php3", "$st_abspathsimple/_lopa.inc.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathsimple/admin.php3", "$st_abspathsimple/admin.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathsimple/statistik.php3", "$st_abspathsimple/statistik.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathsimple/statitjs.php3", "$st_abspathsimple/statitjs.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
        if(!rename ("$st_abspathsimple/update.php3", "$st_abspathsimple/update.php")){
          $st_meldung = $st_meldung."cannot rename!|"; 
          $error=1;
        }
      }
      $st_javascodef1="&lt;script language=\"javascript\">\n";
      $st_javascodef2=$st_javascode."&lt;!--\n";
      if($st_phpversion=="php3"){$st_javascodef3=$st_javascode."document.write(\"&lt;img width=1 height=1 border=0 src=http://$st_servername/simple/statitjs.php3?1,\"+screen.width+\",\"+screen.colorDepth+\",\"+top.document.referrer+\">\");\n";}
      else{$st_javascodef3=$st_javascode."document.write(\"&lt;img width=1 height=1 border=0 src=http://$st_servername/simple/statitjs.php?1,\"+screen.width+\",\"+screen.colorDepth+\",\"+top.document.referrer+\">\");\n";}
      $st_javascodef4=$st_javascode."//-->\n";
      $st_javascodef5=$st_javascode."&lt;/script>";
      $st_javascode1="&lt;script language=\"javascript\">\n";
      $st_javascode2=$st_javascode."&lt;!--\n";
      if($st_phpversion=="php3"){$st_javascode3=$st_javascode."document.write(\"&lt;img width=1 height=1 border=0 src=http://$st_servername/simple/statitjs.php3?1,\"+screen.width+\",\"+screen.colorDepth+\",\"+document.referrer+\">\");\n";}
      else{$st_javascode3=$st_javascode."document.write(\"&lt;img width=1 height=1 border=0 src=http://$st_servername/simple/statitjs.php?1,\"+screen.width+\",\"+screen.colorDepth+\",\"+document.referrer+\">\");\n";}
      $st_javascode4=$st_javascode."//-->\n";
      $st_javascode5=$st_javascode."&lt;/script>";
    }
  }
}  
else{ 
  $st_meldung = $st_meldung."please fill out all !|"; 
  $error=1;
}
if($error=="1"){
  print "<b>Installation</b><br>\n";
  print "Before you make anything check if you set the permissions for the directories to 777!!!!<br>\n";
  print "<form method=\"post\" action=\"$st_name\">\n";
  print "<b>a) version</b><br>\n";
  print "Please choose the version you want to install:<br>(simple version for users who have the calling site on an different server as the statistic and<br>\n";
  print "normal version for users who have the calling site on an PHP server with the statistic!)<br>\n";
  print "<input type=radio name=st_version value=\"simple\" checked> simple <input type=radio name=st_version value=\"normal\"> normal <br><br>\n";
  print "<b>b) servername</b><br>\n";
  print "What is the http path of the statistic directory you have created ? <br>(without slash / at end and without http:// e.g. <b>www.server.de/stat</b> or <b>www.cgiserver.com/userxy/stat</b>)?<br>";
  print "<input type=text name=st_servername size=60><br><br>\n";
  print "<b>c) language</b><br>\n<table>\n<tr>\n";
  print " <td><input type=radio name=st_language value=\"german\" checked> german</td>\n";
  print " <td><input type=radio name=st_language value=\"eng\"> english</td>\n";
  print " <td><input type=radio name=st_language value=\"fr\"> french</td>\n";
  print " <td><input type=radio name=st_language value=\"nl\"> dutch</td>\n";
  print " <td><input type=radio name=st_language value=\"dk\"> dutch</td>\n";
  print " <td><input type=radio name=st_language value=\"pl\"> polish</td>\n</tr>\n<tr>\n";
  print " <td><input type=radio name=st_language value=\"pt-br\"> portuguese</td>\n";
  print " <td><input type=radio name=st_language value=\"id\"> indonesian</td>\n";
  print " <td><input type=radio name=st_language value=\"it\"> italian</td>\n"; 
  print " <td><input type=radio name=st_language value=\"es\"> spanish</td>\n";
  print " <td><input type=radio name=st_language value=\"hun\"> hungarian</td>\n<td></td></tr>\n</table><br>\n";
  print "<b>d) authentification</b><br>\n";
  print "<table>\n<tr>\n <td>login</td>\n <td><input type=text name=st_loginname size=10></td>\n";
  print " <td>password</td>\n <td><input type=password name=st_passworda size=10></td>\n";
  print " <td>password repetition</td>\n <td><input type=password name=st_passwordb size=10></td>\n</tr>\n</table><br>\n";
  print "<b>e) PHP version</b><br>\n";
  print "<input type=radio name=st_phpversion value=\"php3\" checked> .php3 <input type=radio name=st_phpversion value=\"php4\"> .php <br><br>\n";
  print "<textarea rows=3 cols=70 readonly>\n";
  $st_teile = explode ("|", $st_meldung);
  $st_anzahl = count($st_teile);
  for ($st_i = 0; $st_i <= $st_anzahl-1; $st_i++) {print "$st_teile[$st_i]\n";}
  print "</textarea><br>\n<input type=SUBMIT VALUE=Submit>\n";
}
else if($error=="0"){
  if($st_version=="normal"){
    print "If you have a frameset as index.php copy this code between the body tags<br>\n";
    print "of a part of your frameset (e.g. menue.html or menue.php3)!:<br>\n";
    print "If you work without frames copy this code between the body tags<br>\n";
    print "of your calling page (e.g. index.php3)!<br>\n";
    print "<form><textarea rows=7 cols=90 readonly>\n";
    print "$st_javascodef1$st_javascodef2$st_javascodef3$st_javascodef4$st_javascodef5";
    print "</textarea><br>\n";
    print "and copy this code to the calling page (e.g. index.php3)! If you want to count unique visitors<br>";
    print "the include must be in the first line before any HTML code!<br>";
    print "<textarea rows=2 cols=90 readonly>\n";
    print "$st_statitcode";
    print "</textarea></form><br><br>\n";
    print "<b>You can now delete the directories simple, doc and language and the install script!</b><br><br>\n";
    if($st_phpversion=="php3"){print "You can now start the <a href=\"normal/admin.php3\">admin.php3</a> to administrate!\n";}
    else{print "You can now start the <a href=\"normal/admin.php\">admin.php</a> to administrate!\n";}
  }
  else if($st_version=="simple"){
    print "If you have a frameset as index.php copy this code between the body tags<br>\n";
    print "of a part of your frameset (e.g. menue.html or menue.php3)!:<br>\n";
    print "<form><textarea rows=7 cols=90 readonly>\n";
    print "$st_javascodef1$st_javascodef2$st_javascodef3$st_javascodef4$st_javascodef5";
    print "</textarea><br>\n";
    print "If you work without frames copy this code between the body tags<br>\n";
    print "of your calling page (e.g. index.php3)!<br>\n";
    print "<textarea rows=7 cols=90 readonly>\n";
    print "$st_javascode1$st_javascode2$st_javascode3$st_javascode4$st_javascode5";
    print "</textarea></form><br><br>\n";
    print "<b>You can now delete the directories normal, doc and language and the install script!</b><br><br>\n";
    if($st_phpversion=="php3"){print "You can now start the <a href=\"simple/admin.php3\">admin.php3</a> to administrate!\n";}
    else{print "You can now start the <a href=\"simple/admin.php\">admin.php</a> to administrate!\n";}
  }
}
print "</body>\n</html>";
?>