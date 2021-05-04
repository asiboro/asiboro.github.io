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
// table backgrounds
$st_table1 = "#408488";
$st_table2 = "#58AC97";
$st_table3 = "#58ACB0";
// background file (if not set, bgcolor will be used)
$st_backg = "grund.gif";
// body style
$st_text = "#000000"; 
$st_link = "#FF0000";
$st_alink = "#FF0000";
$st_vlink = "#FF0000";
$st_bgcolor = "#FFFFFF";
// text style
$st_textsize1 = "4"; // greater text (1-7)
$st_textsize2 = "1"; // smaller text (1-7)
$st_textfont = "Verdana";
// max height and width of the bars
$st_dwidth = "100";
$st_dheight = "100";
// want to show IP address in statistic ("on" or "off")?
$st_showip = "on";
// want to show log files in statistic ("on" or "off")?
$st_showlog = "on";
// language
$st_l1 = "statistic";
$st_l2 = "last visitors";
$st_l3 = "time of last visit";
$st_l4 = "IP address";
$st_l5 = "hostname";
$st_l6 = "language";
$st_l7 = "browser";
$st_l8 = "system";
$st_l9 = "referer";
$st_l10 = "vistors for the actual month";
$st_l11 = "day statistic";
$st_l12 = "week-days";
$st_l13 = "year statistic";
$st_l14 = "other";
$st_l15 = "top referer domains";
$st_l16 = "domain";
$st_l17 = "hits";
$st_l18 = "by";
$st_l19 = "su";
$st_l20 = "mo";
$st_l21 = "tu";
$st_l22 = "we"; 
$st_l23 = "th";
$st_l24 = "fr";
$st_l25 = "sa";
$st_l26 = "screen size";
$st_l27 = "colors";
$st_l28 = "today";
$st_l29 = "yesterday";
$st_l30 = "actual month";
$st_l31 = "top month";
$st_l32 = "top work day";
$st_l33 = "top hour";
$st_l34 = "top browser";
$st_l35 = "top system";
$st_l36 = "top screen size";
$st_l37 = "top colors";
$st_l38 = "short visitor info";
$st_l39 = "o'clock";
$st_l40 = "January";
$st_l41 = "February";
$st_l42 = "March";
$st_l43 = "April";
$st_l44 = "May";
$st_l45 = "June";
$st_l46 = "July";
$st_l47 = "August";
$st_l48 = "September";
$st_l49 = "October";
$st_l50 = "November";
$st_l51 = "December";
$st_l52 = "average";
$st_l53 = "websites calls";
$st_l54 = "site";
$st_l55 = "total";
$st_l56 = "size of log files";
$st_l57 = "origin of visitors"; 
$st_l58 = "top level domain"; 
$st_l59 = "territories";
$st_l60 = "Europe";
$st_l61 = "America";
$st_l62 = "Africa"; 
$st_l63 = "Asia"; 
$st_l64 = "Ozeania"; 
$st_l65 = "GUS";  
$st_l66 = "Antarktica";
$st_l67 = "Unknown";
$st_l68 = "top referer";
$st_l69 = "top tld";
$st_l70 = "top territory";
$st_l71 = "top site";
$st_l72 = "top day";
$st_l73 = "total";
$st_l74 = "searchengine";
$st_l75 = "queries";
$st_l76 = "top query";
$st_l77 = "file";
$st_l78 = "size (bytes)";
$st_l79 = "backups";
$st_l80 = "file month.year";
// admin.php3 
$st_la1 = "admin area statistic";
$st_la2 = "reset log files";
$st_la3 = "reset values";
$st_la4 = "login";
$st_la5 = "password";
$st_la6 = "repetition";
$st_la7 = "reset";
$st_la8 = "changed";
$st_la9 = "edit _config.inc";
$st_la10 = "authentification";
$st_la11 = "on";
$st_la12 = "off";
$st_la13 = "height of bars";
$st_la14 = "width of bars";
$st_la15 = "IP address statistic";
$st_la16 = "passwords are different";
$st_la17 = "error";
$st_la18 = "message(s)";
$st_la19 = "backup";
$st_la20 = "backup";
$st_la21 = "restore";
$st_la22 = "copy not successfull";
$st_la23 = "backuped";
$st_la24 = "restored";
$st_la25 = "no backup available";
$st_la26 = "log files";
$st_la27 = "last backup time";
$st_la28 = "password -> minimum 4 characters";
$st_la29 = "edit _short.inc";
$st_la30 = "visible counter";
$st_la31 = "text";
$st_la32 = "graphical";
$st_la33 = "number of digits counter";
$st_la34 = "show unique visitors";
$st_la35 = "max 8 digists for counter";
$st_la36 = "include path/statit.php3 must set \nto first line in calling page";
$st_la37 = "text size counter";
$st_la38 = "text color counter";
$st_la39 = "background color counter";
$st_la40 = "font counter";
$st_la41 = "color table";
$st_la42 = "color";
$st_la43 = "max text counter size 6";
$st_la44 = "color format #123456";
$st_la45 = "reload blocker";
$st_la46 = "timezone server";
$st_la47 = "format +(-)time";
$st_la48 = "background file";
$st_la49 = "doesn't exist";
$st_la50 = "part";
$st_la51 = "big";
$st_la52 = "small";
$st_la53 = "font";
$st_la54 = "background color";
$st_la55 = "include path/statit.php3 must set in every\nsite which will be count!";
$st_la57 = "server block (s1,s2)";
$st_la58 = "fontsize from 1-7";
$st_la59 = "server blocked";
$st_la60 = "no server will be blocked";
$st_la61 = "show log files";
?>