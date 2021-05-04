<?php
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
$st_link = "#FF000d";
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
$st_l1 = "Statistik";               // document title
$st_l2 = "Letzte Besucher";         // last visitors
$st_l3 = "Zeitpunkt";               // time of last visit
$st_l4 = "IP-Adresse";              // IP address
$st_l5 = "Hostname";                // hostname
$st_l6 = "Sprache";                 // language
$st_l7 = "Browser";                 // browser
$st_l8 = "System";                  // system (win, mac etc.)
$st_l9 = "Referer";                 // referer
$st_l10 = "Besucher Monat";         // vistors for the actual month
$st_l11 = "Tagesverlauf";           // day statistik
$st_l12 = "Wochentage";             // week-days
$st_l13 = "Jahresverlauf";          // year statistic
$st_l14 = "Andere";                 // other
$st_l15 = "Top Referer Domains";    // top referer domains
$st_l16 = "Domain";                 // domain
$st_l17 = "Hits";                   // hits
$st_l18 = "von";                    // by
$st_l19 = "So";                     // sunday    |
$st_l20 = "Mo";                     // monday    |
$st_l21 = "Di";                     // tuesday   |
$st_l22 = "Mi";                     // wednesday + work days (short form)
$st_l23 = "Do";                     // thursday  |
$st_l24 = "Fr";                     // friday    |
$st_l25 = "Sa";                     // saturday  |
$st_l26 = "Bildschirm-Aufl&ouml;sung";   // screen size
$st_l27 = "Farbtiefe";              // colors  
$st_l28 = "heute";                  // today
$st_l29 = "gestern";                // yesterday
$st_l30 = "akt. Monat";             // actual month
$st_l31 = "Top Monat";              // top month
$st_l32 = "Top Wochentag";          // top work day
$st_l33 = "Top Stunde";             // top hour
$st_l34 = "Top Browser";            // top browser
$st_l35 = "Top System";             // top system
$st_l36 = "Top Aufl&ouml;sung";     // top screen size
$st_l37 = "Top Farbtiefe";          // top colors
$st_l38 = "Kurz-Info Besucher";     // short visitor info
$st_l39 = "Uhr";                    // o'clock  
$st_l40 = "Januar";                 // January
$st_l41 = "Februar";                // February
$st_l42 = "M&auml;rz";              // March
$st_l43 = "April";                  // April
$st_l44 = "Mai";                    // May
$st_l45 = "Juni";                   // June
$st_l46 = "Juli";                   // July
$st_l47 = "August";                 // August
$st_l48 = "September";              // September
$st_l49 = "Oktober";                // October
$st_l50 = "November";               // November
$st_l51 = "Dezember";               // December
$st_l52 = "Schnitt";                // average
$st_l53 = "Webseiten Aufrufe";      // websites calls
$st_l54 = "Seite";                  // site
$st_l55 = "total";                  // total visitors
$st_l56 = "Gr&ouml;&szlig;e der log-files";   // size of log files
$st_l57 = "Herkunft der Besucher";  // origin of visitors 
$st_l58 = "top level domain";       // tld
$st_l59 = "Territorien";            // territories
$st_l60 = "Europa";                 // europe
$st_l61 = "Amerika";                // america
$st_l62 = "Afrika";                 // africa
$st_l63 = "Asien";                  // asia
$st_l64 = "Ozeanien";               // ozeania
$st_l65 = "GUS";                    // GUS (former sovjet union)
$st_l66 = "Antarktis";              // antarctica
$st_l67 = "Unbekannt";              // unknown
$st_l68 = "Top referer";            // top referer domain
$st_l69 = "Top tld";                // top tld (top level domain)
$st_l70 = "Top Territorium";        // top territory
$st_l71 = "Top Seite";              // top site
$st_l72 = "Top Tag";                // top day
$st_l73 = "gesamt";                 // total (for log file size)
$st_l74 = "Suchmaschinen";          // searchengine
$st_l75 = "Abfragen";               // queries
$st_l76 = "Top Abfrage";            // top query
$st_l77 = "Datei";                  // file
$st_l78 = "Gr&ouml;&szlig;e (bytes)";     // size (bytes)
$st_l79 = "backups";                // backups
$st_l80 = "Datei Monat.Jahr";       // file month.year
// admin.php3 
$st_la1 = "Admin Area Statistik";   // admin area statistic
$st_la2 = "Log files zur&uuml;cksetzen"; // reset log files
$st_la3 = "Werte zur&uuml;cksetzen";     // reset values
$st_la4 = "Login";                  // login
$st_la5 = "Passwort";               // password
$st_la6 = "Wiederholung";           // repetition
$st_la7 = "zur&uuml;ckgesetzt";     // reset
$st_la8 = "ge&auml;ndert";          // changed
$st_la9 = "_config.inc bearbeiten"; // edit _config.inc
$st_la10 = "Authentifikation";      // authentification statistic
$st_la11 = "an";                    // on
$st_la12 = "aus";                   // off
$st_la13 = "H&ouml;he der Balken";  // height of bars
$st_la14 = "Breite der Balken";     // width of bars
$st_la15 = "IP-Adresse Statistik";  // IP address statistic
$st_la16 = "Passw&ouml;rter ungleich";   // passwords are different
$st_la17 = "Fehler";                // error
$st_la18 = "Meldung(en)";           // message(s)
$st_la19 = "Sicherung";             // backup (the)
$st_la20 = "sichern";               // backup
$st_la21 = "herstellen";            // restore
$st_la22 = "kopieren nicht m&ouml;glich"; // copy not successfull 
$st_la23 = "gesichert";             // backuped
$st_la24 = "wiederhergestellt";     // restored
$st_la25 = "noch kein backup";      // no backup available
$st_la26 = "Log files";             // log files
$st_la27 = "letzte Sicherung";      // last backup time
$st_la28 = "Passwort -> mindestens 4 Zeichen";  // password -> minimum 4 characters
$st_la29 = "_short.inc bearbeiten"; // edit _short.inc
$st_la30 = "sichtbarer Counter";    // visible counter
$st_la31 = "Text";                  // text
$st_la32 = "Grafiken";              // graphical
$st_la33 = "Counterl&auml;nge";     // number of digits counter
$st_la34 = "Erstbesucher anzeigen"; // show unique visitors
$st_la35 = "h&ouml;chstens 8 Counter Stellen";  // max 8 digists for counter
$st_la36 = "include path/statit.php3 mu&szlig; in der \nersten Zeile der aufrufenden Seite stehen"; 
// include path/statit.php3 must set to first line in calling page
$st_la37 = "Text Gr&ouml;&szlig;e Counter";   // text size counter
$st_la38 = "Schriftfarbe Counter";  // text color counter
$st_la39 = "Hintergrundfarbe Counter"; // background color counter
$st_la40 = "Schriftart Counter";    // font counter
$st_la41 = "Farbe table";           // color table
$st_la42 = "Farbe";                 // color
$st_la43 = "h&ouml;chstens Countergr&ouml;&szlig;e 6"; // max text counter size 6
$st_la44 = "Farbformat #123456 einhalten"; // color format #123456
$st_la45 = "Reload Sperre";          // reload blocker
$st_la46 = "Zeitzone Server";        // timezone server
$st_la47 = "Format +(-)Zeit einhalten"; // format +(-)time
$st_la48 = "Hintergrundbild";        // background file
$st_la49 = "existiert nicht";        // doesn't exist
$st_la50 = "Teil";                   // part
$st_la51 = "gro&szlig;";             // big
$st_la52 = "klein";                  // small
$st_la53 = "Schriftart";             // font
$st_la54 = "Hintergrundfarbe";       // background color
$st_la55 = "Webseitenaufrufe z&auml;hlen";   // Count all files
$st_la56 = "include path/statitp.php3 mu&szlig; in jede\nSeite, die gez&auml;hlt werden soll!";
// include path/statit.php3 must set in every\nsite which will be count!
$st_la57 = "Server blocken (s1,s2)"; // server block
$st_la58 = "Schriftgr&ouml;&szlig;e von 1-7";   // fontsize from 1-7
$st_la59 = "Server geblockt:";       // server blocked
$st_la60 = "kein Server wird geblockt";  // no server will be blocked
$st_la61 = "Log Files anzeigen";     // show log files
?>
