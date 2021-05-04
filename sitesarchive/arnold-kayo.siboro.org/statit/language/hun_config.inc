<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # by Helge Orthmann                                        #
// # Contact: otter@otterware.de                              #
// # Homepage: http://www.otterware.de                        #
// # Translated by: Juhász Róbert          to: Hungarian      #
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
$st_l2 = "Utolsó látogatók";
$st_l3 = "A legutolsó látogatás ideje";
$st_l4 = "IP cim";
$st_l5 = "Hosztnév";
$st_l6 = "Nyelv";
$st_l7 = "Böngészõ";
$st_l8 = "Rendszer";
$st_l9 = "Származás";
$st_l10 = "E havi látogatók";
$st_l11 = "Napi statisztika";
$st_l12 = "A hét napjai";
$st_l13 = "Éves statisztika";
$st_l14 = "egyébb";
$st_l15 = "Leggyakoribb származási domaiek";
$st_l16 = "domain";
$st_l17 = "találatok";
$st_l18 = "-";
$st_l19 = "Vasárnap";
$st_l20 = "Hétfõ";
$st_l21 = "Kedd";
$st_l22 = "Szerda"; 
$st_l23 = "Csütörtök";
$st_l24 = "Péntek";
$st_l25 = "Szombat";
$st_l26 = "Képernyõ felbontás";
$st_l27 = "Szinek";
$st_l28 = "Ma";
$st_l29 = "Tegnap";
$st_l30 = "Jelen hónap";
$st_l31 = "Legjobb hónap";
$st_l32 = "Legjobb nap";
$st_l33 = "Legjobb óra";
$st_l34 = "Leggyakoribb böngészõ";
$st_l35 = "Leggyakoribb op.rendszer";
$st_l36 = "Leggyakoribb képernyõ felbontás";
$st_l37 = "Leggyakoribb szinbeállitás";
$st_l38 = "Rövid látogató infomáció";
$st_l39 = "óra";
$st_l40 = "Január";
$st_l41 = "Február";
$st_l42 = "Március";
$st_l43 = "Április";
$st_l44 = "Május";
$st_l45 = "Június";
$st_l46 = "Július";
$st_l47 = "Augusztus";
$st_l48 = "Szeptember";
$st_l49 = "Október";
$st_l50 = "November";
$st_l51 = "December";
$st_l52 = "átlag";
$st_l53 = "website hivások";
$st_l54 = "site";
$st_l55 = "teljesen";
$st_l56 = "a log fileok méretei";
$st_l57 = "a látogatók eredete"; 
$st_l58 = "top level domain"; 
$st_l59 = "területek";
$st_l60 = "Európa";
$st_l61 = "Amerika";
$st_l62 = "Afrika"; 
$st_l63 = "Ászia"; 
$st_l64 = "Óceánia"; 
$st_l65 = "GUS";  
$st_l66 = "Antarktisz";
$st_l67 = "Ismeretlen";
$st_l68 = "Leggyakoribb származás";
$st_l69 = "Leggyakoribb tld";
$st_l70 = "Leggyakoribb terület";
$st_l71 = "Legjobb oldal";
$st_l72 = "Legjobb nap";
$st_l73 = "összesen";
$st_l74 = "keresõgép";
$st_l75 = "kérések";
$st_l76 = "Leggyakoribb kérés";
$st_l77 = "file";
$st_l78 = "mérete (byte-ban)";
$st_l79 = "backups";
$st_l80 = "file month.year";
// admin.php3 
$st_la1 = "Adminisztrációs terület";
$st_la2 = "nullázza a log fileokat";
$st_la3 = "nullázza az értékeket";
$st_la4 = "Felhasználónév";
$st_la5 = "Jelszó";
$st_la6 = "Ismétlés";
$st_la7 = "nulláz";
$st_la8 = "változtatva";
$st_la9 = "edit _config.inc";
$st_la10 = "Ellenõrzés";
$st_la11 = "be";
$st_la12 = "ki";
$st_la13 = "A grafikonok magassága";
$st_la14 = "A grafikonok szélessége";
$st_la15 = "IP cim statisztika";
$st_la16 = "A jelszók különbözõek";
$st_la17 = "hiba";
$st_la18 = "üzenetek";
$st_la19 = "mentés";
$st_la20 = "mentés";
$st_la21 = "visszaállit";
$st_la22 = "a másolás nem sikerült";
$st_la23 = "elmentve";
$st_la24 = "visszaállitva";
$st_la25 = "nincs mentés";
$st_la26 = "log fileok";
$st_la27 = "utolsó mentés ideje";
$st_la28 = "jelszó -> legalább 4 karakter";
$st_la29 = "módositja a _short.inc";
$st_la30 = "látható számláló";
$st_la31 = "szöveges";
$st_la32 = "grafikus";
$st_la33 = "hány digites számláló legyen";
$st_la34 = "csak az egyedi látogatók";
$st_la35 = "max 8 digites számláló lehet";
$st_la36 = "a path/statit.php3 sornak kell a legelsõnek lenni az oldalon ahonnan hivjuk";
$st_la37 = "szöveges számláló mérete";
$st_la38 = "szöveges számláló szine";
$st_la39 = "szöveges számláló háttérszine";
$st_la40 = "szöveges számláló";
$st_la41 = "szin táblázat";
$st_la42 = "szin";
$st_la43 = "a szöveges számláló mérete max 6";
$st_la44 = "A szin formátum #123456";
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