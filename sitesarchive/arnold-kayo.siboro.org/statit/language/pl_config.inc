<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # by Helge Orthmann                                        #
// # Contact: otter@otterware.de                              #
// # Homepage: http://www.otterware.de                        #
// # Translated by: Wojtek Pobrayn     to: Polish             #
// #                wojtas@iname.com                          #
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
$st_l1 = "statystyka";
$st_l2 = "ostanie odwiedziny";
$st_l3 = "czas ostnich odwiedzin";
$st_l4 = "adres IP";
$st_l5 = "hostname";
$st_l6 = "jezyk";
$st_l7 = "przgladarka";
$st_l8 = "system";
$st_l9 = "odsylacz";
$st_l10 = "odwiedziny w tym miesiacu";
$st_l11 = "statystyka dzienna";
$st_l12 = "dni tygodnia";
$st_l13 = "statystyka roczna";
$st_l14 = "inne";
$st_l15 = "najczestsze odsylacze";
$st_l16 = "domena";
$st_l17 = "hity";
$st_l18 = "przez";
$st_l19 = "nd";
$st_l20 = "pn";
$st_l21 = "wt";
$st_l22 = "sr"; 
$st_l23 = "czw";
$st_l24 = "pt";
$st_l25 = "sob";
$st_l26 = "rozdzielczosc";
$st_l27 = "kolory";
$st_l28 = "dzisiaj";
$st_l29 = "wczoraj";
$st_l30 = "biezacy miesiac";
$st_l31 = "najlepszy miesiac";
$st_l32 = "najlepszy dzien tygodnia";
$st_l33 = "najlepsza godzina";
$st_l34 = "najczestsza przegladarka";
$st_l35 = "najczestszy system";
$st_l36 = "najczestsza rozdzielczosc";
$st_l37 = "najczestsze kolory";
$st_l38 = "krotka informacja o odwiedzinach";
$st_l39 = "godz.";
$st_l40 = "Styczen";
$st_l41 = "Luty";
$st_l42 = "Marzec";
$st_l43 = "Kwiecien";
$st_l44 = "Maj";
$st_l45 = "Czerwiec";
$st_l46 = "Lipiec";
$st_l47 = "Sierpien";
$st_l48 = "Wrzesien";
$st_l49 = "Pazdziernik";
$st_l50 = "Listopad";
$st_l51 = "Grudzien";
$st_l52 = "srednia";
$st_l53 = "ilosc wywolan";
$st_l54 = "strona";
$st_l55 = "razem";
$st_l56 = "rozmiar logow";
$st_l57 = "pochodzenie odwiedzajacych"; 
$st_l58 = "domena glowna"; 
$st_l59 = "terytoria";
$st_l60 = "Europa";
$st_l61 = "Ameryka";
$st_l62 = "Afryka"; 
$st_l63 = "Azja"; 
$st_l64 = "Oceania"; 
$st_l65 = "WNP";  
$st_l66 = "Antarktyka";
$st_l67 = "Nieznane";
$st_l68 = "najczestrzy odsylacz";
$st_l69 = "najcz. dom";
$st_l70 = "najcz. terytorium";
$st_l71 = "najcz. strona";
$st_l72 = "najcz. dzien";
$st_l73 = "razem";
$st_l74 = "wyszukiwarka";
$st_l75 = "hasla";
$st_l76 = "najcz. hasla";
$st_l77 = "plik";
$st_l78 = "rozmiar (w bajtach)";
$st_l79 = "backups";
$st_l80 = "file month.year";
// admin.php3 
$st_la1 = "administracja statystyk";
$st_la2 = "zresetuj logi";
$st_la3 = "zresetuj dane";
$st_la4 = "login";
$st_la5 = "haslo";
$st_la6 = "powtorz";
$st_la7 = "zresetuj";
$st_la8 = "zmieniono";
$st_la9 = "edytuj _config.inc";
$st_la10 = "weryfikacja";
$st_la11 = "wl.";
$st_la12 = "wyl.";
$st_la13 = "wysokosc slupkow";
$st_la14 = "szerokosc slupkow";
$st_la15 = "Statystyka adresow IP";
$st_la16 = "hasla sie roznia";
$st_la17 = "blad";
$st_la18 = "wiadomosc(i)";
$st_la19 = "archiwizacja";
$st_la20 = "archiwizacja";
$st_la21 = "przywroc";
$st_la22 = "kopiowanie nie powiodlo sie";
$st_la23 = "archiwizacja powiodla sie";
$st_la24 = "przywrocono";
$st_la25 = "brak archiwum";
$st_la26 = "pliki log";
$st_la27 = "czas ostatniej archiwizacji";
$st_la28 = "haslo -> minimum 4 znaki";
$st_la29 = "edytuj _short.inc";
$st_la30 = "licznik widoczny";
$st_la31 = "tekst";
$st_la32 = "graficznie";
$st_la33 = "ilosc cyfr licznika";
$st_la34 = "pokazuj unikalne odwiedziny";
$st_la35 = "maksymalnie 8 ilosc cyfr licznika";
$st_la36 = "include path/statit.php3 musi byc ustawione \njako pierwsza linijka na stronie wywolujacej";
$st_la37 = "wielkosc tekstu licznika";
$st_la38 = "kolor tekstu licznika";
$st_la39 = "kolor tla licznika";
$st_la40 = "czcionka licznika";
$st_la41 = "kolor tabeli";
$st_la42 = "kolor";
$st_la43 = "maksymalnie 6 cyfr licznika tekstowego";
$st_la44 = "format koloru #123456";
$st_la45 = "reload blocker";
$st_la46 = "strefa czasowa serwera";
$st_la47 = "format +(-)czasu";
$st_la48 = "plik tla";
$st_la49 = "nie istnieje";
$st_la50 = "czesc";
$st_la51 = "duzy";
$st_la52 = "maly";
$st_la53 = "czcionka";
$st_la54 = "kolr tla";
$st_la55 = "include path/statit.php3 musi byc ustawnione na kazdej\nstronie ktora ma byc uwzgledniona!";
$st_la57 = "blokuj serwery (s1,s2)";
$st_la58 = "wielkosc czcionki w przedziale 1-7";
$st_la59 = "serwer blokowany";
$st_la60 = "zaden serwer nie bedzie blokowany";
$st_la61 = "show log files";
?>