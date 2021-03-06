<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # by Helge Orthmann                                        #
// # Contact: otter@otterware.de                              #
// # Homepage: http://www.otterware.de                        #
// # Translated by: Juh�sz R�bert          to: Hungarian      #
// ############################################################
// # Hagyd a fejlecet a fileban!                              #
// ############################################################
// tablazat hatterek
$st_table1 = "#408488";
$st_table2 = "#58AC97";
$st_table3 = "#58ACB0";
// hatter file (ha nem alitasz be akkor a hatterszint hasznalja)
$st_backg = "grund.gif";
// a szoveg stilusa
$st_text = "#000000"; 
$st_link = "#FF0000";
$st_alink = "#FF0000";
$st_vlink = "#FF0000";
$st_bgcolor = "#FFFFFF";
// text style
$st_textsize1 = "4"; // greater text (1-7)
$st_textsize2 = "1"; // smaller text (1-7)
$st_textfont = "Verdana";
// a maximum magassag es szelesseg a grafikonokbol
$st_dwidth = "100";
$st_dheight = "100";
// latni akarod az ip cimet a statisztikaban ("on" vagy "off")?
$st_showip = "on";
// want to show log files in statistic ("on" or "off")?
$st_showlog = "on";
// nyelv
$st_l1 = "statisztika";
$st_l2 = "Utols� l�togat�k";
$st_l3 = "A legutols� l�togat�s ideje";
$st_l4 = "IP cim";
$st_l5 = "Hosztn�v";
$st_l6 = "Nyelv";
$st_l7 = "B�ng�sz�";
$st_l8 = "Rendszer";
$st_l9 = "Sz�rmaz�s";
$st_l10 = "E havi l�togat�k";
$st_l11 = "Napi statisztika";
$st_l12 = "A h�t napjai";
$st_l13 = "�ves statisztika";
$st_l14 = "egy�bb";
$st_l15 = "Leggyakoribb sz�rmaz�si domaiek";
$st_l16 = "domain";
$st_l17 = "tal�latok";
$st_l18 = "-";
$st_l19 = "Vas�rnap";
$st_l20 = "H�tf�";
$st_l21 = "Kedd";
$st_l22 = "Szerda"; 
$st_l23 = "Cs�t�rt�k";
$st_l24 = "P�ntek";
$st_l25 = "Szombat";
$st_l26 = "K�perny� felbont�s";
$st_l27 = "Szinek";
$st_l28 = "Ma";
$st_l29 = "Tegnap";
$st_l30 = "Jelen h�nap";
$st_l31 = "Legjobb h�nap";
$st_l32 = "Legjobb nap";
$st_l33 = "Legjobb �ra";
$st_l34 = "Leggyakoribb b�ng�sz�";
$st_l35 = "Leggyakoribb op.rendszer";
$st_l36 = "Leggyakoribb k�perny� felbont�s";
$st_l37 = "Leggyakoribb szinbe�llit�s";
$st_l38 = "R�vid l�togat� infom�ci�";
$st_l39 = "�ra";
$st_l40 = "Janu�r";
$st_l41 = "Febru�r";
$st_l42 = "M�rcius";
$st_l43 = "�prilis";
$st_l44 = "M�jus";
$st_l45 = "J�nius";
$st_l46 = "J�lius";
$st_l47 = "Augusztus";
$st_l48 = "Szeptember";
$st_l49 = "Okt�ber";
$st_l50 = "November";
$st_l51 = "December";
$st_l52 = "�tlag";
$st_l53 = "website hiv�sok";
$st_l54 = "site";
$st_l55 = "teljesen";
$st_l56 = "a log fileok m�retei";
$st_l57 = "a l�togat�k eredete"; 
$st_l58 = "top level domain"; 
$st_l59 = "ter�letek";
$st_l60 = "Eur�pa";
$st_l61 = "Amerika";
$st_l62 = "Afrika"; 
$st_l63 = "�szia"; 
$st_l64 = "�ce�nia"; 
$st_l65 = "GUS";  
$st_l66 = "Antarktisz";
$st_l67 = "Ismeretlen";
$st_l68 = "Leggyakoribb sz�rmaz�s";
$st_l69 = "Leggyakoribb tld";
$st_l70 = "Leggyakoribb ter�let";
$st_l71 = "Legjobb oldal";
$st_l72 = "Legjobb nap";
$st_l73 = "�sszesen";
$st_l74 = "keres�g�p";
$st_l75 = "k�r�sek";
$st_l76 = "Leggyakoribb k�r�s";
$st_l77 = "file";
$st_l78 = "m�rete (byte-ban)";
$st_l79 = "backups";
$st_l80 = "file month.year";
// admin.php3 
$st_la1 = "Adminisztr�ci�s ter�let";
$st_la2 = "null�zza a log fileokat";
$st_la3 = "null�zza az �rt�keket";
$st_la4 = "Felhaszn�l�n�v";
$st_la5 = "Jelsz�";
$st_la6 = "Ism�tl�s";
$st_la7 = "null�z";
$st_la8 = "v�ltoztatva";
$st_la9 = "edit _config.inc";
$st_la10 = "Ellen�rz�s";
$st_la11 = "be";
$st_la12 = "ki";
$st_la13 = "A grafikonok magass�ga";
$st_la14 = "A grafikonok sz�less�ge";
$st_la15 = "IP cim statisztika";
$st_la16 = "A jelsz�k k�l�nb�z�ek";
$st_la17 = "hiba";
$st_la18 = "�zenetek";
$st_la19 = "ment�s";
$st_la20 = "ment�s";
$st_la21 = "vissza�llit";
$st_la22 = "a m�sol�s nem siker�lt";
$st_la23 = "elmentve";
$st_la24 = "vissza�llitva";
$st_la25 = "nincs ment�s";
$st_la26 = "log fileok";
$st_la27 = "utols� ment�s ideje";
$st_la28 = "jelsz� -> legal�bb 4 karakter";
$st_la29 = "m�dositja a _short.inc";
$st_la30 = "l�that� sz�ml�l�";
$st_la31 = "sz�veges";
$st_la32 = "grafikus";
$st_la33 = "h�ny digites sz�ml�l� legyen";
$st_la34 = "csak az egyedi l�togat�k";
$st_la35 = "max 8 digites sz�ml�l� lehet";
$st_la36 = "a path/statit.php3 sornak kell a legels�nek lenni az oldalon ahonnan hivjuk";
$st_la37 = "sz�veges sz�ml�l� m�rete";
$st_la38 = "sz�veges sz�ml�l� szine";
$st_la39 = "sz�veges sz�ml�l� h�tt�rszine";
$st_la40 = "sz�veges sz�ml�l�";
$st_la41 = "szin t�bl�zat";
$st_la42 = "szin";
$st_la43 = "a sz�veges sz�ml�l� m�rete max 6";
$st_la44 = "A szin form�tum #123456";
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