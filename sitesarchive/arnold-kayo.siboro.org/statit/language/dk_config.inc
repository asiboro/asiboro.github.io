<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # by Helge Orthmann                                        #
// # Contact: otter@otterware.de                              #
// # Homepage: http://www.otterware.de                        #
// # Translated by: Mogens Valentin        to: Danish         #
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
$st_vlink  = "#FF0000";
$st_bgcolor= "#FFFFFF";
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
$st_l1 = "statistik";
$st_l2 = "sidste bes�gende";
$st_l3 = "tidspunkt sidste bes�g";
$st_l4 = "IP addresse";
$st_l5 = "maskinnavn";
$st_l6 = "sprog";
$st_l7 = "browser";
$st_l8 = "system";
$st_l9 = "referant";
$st_l10 = "bes�gende i aktuelle m�ned";
$st_l11 = "dag statistik";
$st_l12 = "ugedage";
$st_l13 = "�r statistik";
$st_l14 = "andre";
$st_l15 = "top referant dom�ne";
$st_l16 = "dom�ne";
$st_l17 = "bes�g";
$st_l18 = "by";
$st_l19 = "s�";
$st_l20 = "ma";
$st_l21 = "ti";
$st_l22 = "on"; 
$st_l23 = "to";
$st_l24 = "fr";
$st_l25 = "l�";
$st_l26 = "sk�rm st�rrelse";
$st_l27 = "farver";
$st_l28 = "idag";
$st_l29 = "ig�r";
$st_l30 = "actuel m�ned";
$st_l31 = "top m�ned";
$st_l32 = "top arbejds dag";
$st_l33 = "top time";
$st_l34 = "top browser";
$st_l35 = "top system";
$st_l36 = "top sk�rm st�rrelse";
$st_l37 = "top farver";
$st_l38 = "kort bes�gs info";
$st_l39 = "o'clock";
$st_l40 = "Januar";
$st_l41 = "Februar";
$st_l42 = "Marts";
$st_l43 = "April";
$st_l44 = "Maj";
$st_l45 = "Juni";
$st_l46 = "Juli";
$st_l47 = "August";
$st_l48 = "September";
$st_l49 = "October";
$st_l50 = "November";
$st_l51 = "December";
$st_l52 = "gennemsnit";
$st_l53 = "websteder kald";
$st_l54 = "sted";
$st_l55 = "total";
$st_l56 = "st�rrelse af log filer";
$st_l57 = "herkomst af bes�gende"; 
$st_l58 = "top niveau dom�ne"; 
$st_l59 = "verdensdele";
$st_l60 = "Europa";
$st_l61 = "Amerika";
$st_l62 = "Afrika"; 
$st_l63 = "Asien"; 
$st_l64 = "Oceanien"; 
$st_l65 = "GUS";  
$st_l66 = "Antarktika";
$st_l67 = "Ukendt";
$st_l68 = "top referant";
$st_l69 = "top tld";
$st_l70 = "top verdensdel";
$st_l71 = "top websted";
$st_l72 = "top dag";
$st_l73 = "total";
$st_l74 = "s�gemaskine";
$st_l75 = "foresp�rgsler";
$st_l76 = "top foresp�rgsel";
$st_l77 = "fil";
$st_l78 = "st�rrelse (bytes)";
$st_l79 = "backups";
$st_l80 = "file month.year";
// admin.php3 
$st_la1 = "admin areal statistik";
$st_la2 = "nulstil log filer";
$st_la3 = "nulstil v�rdier";
$st_la4 = "login";
$st_la5 = "password";
$st_la6 = "repetition";
$st_la7 = "nulstil";
$st_la8 = "�ndret";
$st_la9 = "rediger _config.inc";
$st_la10 = "authentification";
$st_la11 = "on";
$st_la12 = "off";
$st_la13 = "h�jde af s�jler";
$st_la14 = "bredde af s�jler";
$st_la15 = "IP addresse statistik";
$st_la16 = "passwords er forskellige";
$st_la17 = "fejl";
$st_la18 = "besked(er)";
$st_la19 = "sikkerhedskopiering";
$st_la20 = "sikkerhedskopiering";
$st_la21 = "gendanne";
$st_la22 = "kopiering ikke gennemf�rt";
$st_la23 = "sikkerhedskopieret";
$st_la24 = "gendannet";
$st_la25 = "sikkerhedkopi ikke tilg�ngelig";
$st_la26 = "log filer";
$st_la27 = "tid for sidste sikkerhedskopi";
$st_la28 = "password -> minimum 4 karakterer";
$st_la29 = "rediger _short.inc";
$st_la30 = "synlig t�ller";
$st_la31 = "tekst";
$st_la32 = "grafisk";
$st_la33 = "antal decimaler i t�ller";
$st_la34 = "vis unikke bes�gende";
$st_la35 = "max 8 decimaler i t�ller";
$st_la36 = "include path/statit.php3 skal s�ttes \ntil f�rste linie i kaldende side";
$st_la37 = "tekst st�rrelse t�ller";
$st_la38 = "tekst farve t�ller";
$st_la39 = "baggrunds farve t�ller";
$st_la40 = "font t�ller";
$st_la41 = "farve tabel";
$st_la42 = "farve";
$st_la43 = "max tekst t�ller st�rrelse 6";
$st_la44 = "farve format #123456";
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
