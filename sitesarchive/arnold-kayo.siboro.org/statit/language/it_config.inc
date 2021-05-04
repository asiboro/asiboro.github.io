<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # by Helge Orthmann                                        #
// # Contact: otter@otterware.de                              #
// # Homepage: http://www.otterware.de                        #
// # Translated by: Valerio Felici        to: italian         #
// ############################################################
// # Leave this header in this file !                         #
// ############################################################ 
// colori di backgrounds delle tabelle
$st_table1 = "#408488";
$st_table2 = "#58AC97";
$st_table3 = "#58ACB0";
// file di background (se non settato, sarà usato bgcolor)
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
// altezza e larghezza max delle barre
$st_dwidth = "100";
$st_dheight = "100";
// want to show IP address in statistic ("on" or "off")?
$st_showip = "on";
// want to show log files in statistic ("on" or "off")?
$st_showlog = "on";
// traduzioni
$st_l1 = "Statistiche sugli accessi al sito";
$st_l2 = "ultimo visitatore";
$st_l3 = "durata dell'ultima visita";
$st_l4 = "IP address";
$st_l5 = "hostname";
$st_l6 = "lingua";
$st_l7 = "browser";
$st_l8 = "S.O.";
$st_l9 = "navigante";
$st_l10 = "visitatori nel mese attuale";
$st_l11 = "statistica del giorno";
$st_l12 = "giorni della settimana";
$st_l13 = "statistica dell'anno";
$st_l14 = "altro";
$st_l15 = "dominii top del navigante";
$st_l16 = "dominio";
$st_l17 = "hits";
$st_l18 = "da";
$st_l19 = "dom";
$st_l20 = "lun";
$st_l21 = "mar";
$st_l22 = "mer"; 
$st_l23 = "gio";
$st_l24 = "ven";
$st_l25 = "sab";
$st_l26 = "risoluzione";
$st_l27 = "colori";
$st_l28 = "oggi";
$st_l29 = "ieri";
$st_l30 = "mese attuale";
$st_l31 = "mese top";
$st_l32 = "giorno lav. top";
$st_l33 = "ora top";
$st_l34 = "browser top";
$st_l35 = "S.O. top";
$st_l36 = "risoluzione top";
$st_l37 = "colori top";
$st_l38 = "brevi info sul visitatore";
$st_l39 = "ore";
$st_l40 = "Gennaio";
$st_l41 = "Febbraio";
$st_l42 = "Marzo";
$st_l43 = "Aprile";
$st_l44 = "Maggio";
$st_l45 = "Giugno";
$st_l46 = "Luglio";
$st_l47 = "Agosto";
$st_l48 = "Settembre";
$st_l49 = "Ottobre";
$st_l50 = "Novembre";
$st_l51 = "Dicembre";
$st_l52 = "media";
$st_l53 = "chiamate sito web";
$st_l54 = "sito";
$st_l55 = "totale";
$st_l56 = "dimensione dei files di log";
$st_l57 = "origine dei visitatori"; 
$st_l58 = "dominio top level"; 
$st_l59 = "territori";
$st_l60 = "Europa";
$st_l61 = "America";
$st_l62 = "Africa"; 
$st_l63 = "Asia"; 
$st_l64 = "Oceania"; 
$st_l65 = "Russia";  
$st_l66 = "Antartide";
$st_l67 = "Sconosciuto";
$st_l68 = "origine top";
$st_l69 = "top tld";
$st_l70 = "territorio top";
$st_l71 = "sito top";
$st_l72 = "giorno top";
$st_l73 = "totale";
$st_l74 = "searchengine";
$st_l75 = "queries";
$st_l76 = "top query";
$st_l77 = "file";
$st_l78 = "size (bytes)";
$st_l79 = "backups";
$st_l80 = "file month.year";
// admin.php3 
$st_la1 = "statistiche area admin";
$st_la2 = "reset dei files di log";
$st_la3 = "reset dei valori";
$st_la4 = "login";
$st_la5 = "password";
$st_la6 = "ripetizione";
$st_la7 = "reset";
$st_la8 = "modificato";
$st_la9 = "modifica _config.inc";
$st_la10 = "statistiche";
$st_la11 = "on";
$st_la12 = "off";
$st_la13 = "altezza delle barre";
$st_la14 = "larghezza delle barre";
$st_la15 = "statistiche indirizzi IP";
$st_la16 = "Le password sono differenti";
$st_la17 = "errore";
$st_la18 = "messaggi(o)";
$st_la19 = "backup";
$st_la20 = "backup";
$st_la21 = "restore";
$st_la22 = "copia non riuscita"; 
$st_la23 = "backuped";
$st_la24 = "restored";
$st_la25 = "nessun backup disponibile";
$st_la26 = "files di log";
$st_la27 = "data ultimo backup";
$st_la28 = "password -> minimo 4 caratteri";
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
