<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # Gemaakt door Helge Orthmann                              #
// # Contact: otter@otterware.de                              #
// # Website: http://www.otterware.de                         #
// # Vertaalt door: Richard Warmenhoven   to: Dutch           #
// ############################################################
// # Vrij te gebruiken , mits deze header intact blijft       #
// ############################################################
// Achtergrondkleur tabellen
$st_table1 = "#408488";
$st_table2 = "#58AC97";
$st_table3 = "#58ACB0";
// Achtergrondafbeelding (weglaten als achtergrondkleur gebruikt moet worden)
$st_backg = "grund.gif";
// standaard stijltags
$st_text = "#000000";
$st_link = "#FF0000";
$st_alink = "#FF0000";
$st_vlink = "#FF0000";
$st_bgcolor = "#FFFFFF";
// text style
$st_textsize1 = "4"; // greater text (1-7)
$st_textsize2 = "1"; // smaller text (1-7)
$st_textfont = "Verdana";
// Maximale hoogte en breedte van tabellen
$st_dwidth = "100";
$st_dheight = "100";
// ipadressen laten zien in statistieken ("on" of "off")?
$st_showip = "on";
// want to show log files in statistic ("on" or "off")?
$st_showlog = "on";
// taal. zie andere vertalingen in "langage map"
$st_l1 = "Statistik";
$st_l2 = "Laatste bezoekers";
$st_l3 = "Tijdstip";
$st_l4 = "IP-adres";
$st_l5 = "Hostnaam";
$st_l6 = "Taal";
$st_l7 = "Browser";
$st_l8 = "Besturingssysteem";
$st_l9 = "Referentie";
$st_l10 = "Bezoekers maand:";
$st_l11 = "Dagstaat";
$st_l12 = "Weekstaat";
$st_l13 = "Jaarstaat";
$st_l14 = "Andere";
$st_l15 = "Vanaf welke url komen de meeste bezoekers";
$st_l16 = "Domein";
$st_l17 = "Hits";
$st_l18 = "van";
$st_l19 = "Zo";
$st_l20 = "Ma";
$st_l21 = "Di";
$st_l22 = "Wo";
$st_l23 = "Do";
$st_l24 = "Vr";
$st_l25 = "Za";
$st_l26 = "Beeldschermresolutie";
$st_l27 = "Kleurinstellingen";
$st_l28 = "Vandaag";
$st_l29 = "Gisteren";
$st_l30 = "Deze maand";
$st_l31 = "Beste maand";
$st_l32 = "Beste dag";
$st_l33 = "Beste uur";
$st_l34 = "Meestgebruikte  browser";
$st_l35 = "Meestgebruikte  besturingssysteem";
$st_l36 = "Meestgebruikte  resolutie";
$st_l37 = "Meestgebruikte  kleurinstelling";
$st_l38 = "Korte bezoekersinformatie";
$st_l39 = "Uur";
$st_l40 = "Januari";
$st_l41 = "Februari";
$st_l42 = "Maart";
$st_l43 = "April";
$st_l44 = "Mei";
$st_l45 = "Juni";
$st_l46 = "Juli";
$st_l47 = "Augustus";
$st_l48 = "September";
$st_l49 = "Oktober";
$st_l50 = "November";
$st_l51 = "December";
$st_l52 = "Gemiddelde";
$st_l53 = "Paginastatistieken van";
$st_l54 = "Pagina";
$st_l55 = "Totaal";
$st_l56 = "Groote van de logbestanden";
$st_l57 = "Herkomst van bezoekers";
$st_l58 = "top level domeinen";
$st_l59 = "Werelddelen";
$st_l60 = "Europa";
$st_l61 = "Amerika";
$st_l62 = "Afrika";
$st_l63 = "Azi&euml; ";
$st_l64 = "Australie";
$st_l65 = "Rusland";
$st_l66 = "Antartika";
$st_l67 = "Onbekent";
$st_l68 = "Beste referenties";
$st_l69 = "Beste tld";
$st_l70 = "Beste werelddeel";
$st_l71 = "Beste site";
$st_l72 = "Beste dag";
$st_l73 = "total";
$st_l74 = "searchengine";
$st_l75 = "queries";
$st_l76 = "top query";
$st_l77 = "file";
$st_l78 = "size (bytes)";
$st_l79 = "backups";
$st_l80 = "file month.year";
// admin.php3
$st_la1 = "Instellingen statistic";
$st_la2 = "reset logbestanden";
$st_la3 = "reset waardes";
$st_la4 = "login";
$st_la5 = "wachtwoord";
$st_la6 = "herhaling";
$st_la7 = "reset";
$st_la8 = "veranderd";
$st_la9 = "bewerk _config.inc";
$st_la10 = "autorisatie";
$st_la11 = "aan";
$st_la12 = "uit";
$st_la13 = "hoogte tabellen";
$st_la14 = "breedte tabellen";
$st_la15 = "IP aderes statistic";
$st_la16 = "wachtwoorden komen niet overeen";
$st_la17 = "fout";
$st_la18 = "bericht(en)";
$st_la19 = "backup";
$st_la20 = "backup";
$st_la21 = "terugzetten";
$st_la22 = "kopieeren mislukt";
$st_la23 = "gebackuped";
$st_la24 = "teruggezet";
$st_la25 = "geen backup beschikbaar";
$st_la26 = "logbestanden";
$st_la27 = "tijdstip laatste backup";
$st_la28 = "wachtwoord-> minimaal 4 karakters(tekens)";
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