<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # par Helge Orthmann                                       #
// # Contact: otter@otterware.de                              #
// # Homepage: http://www.otterware.de                        #
// # Traduction: jim@aegis-corp.org    to: French             #
// ############################################################
// # Leave this header in this file !                         #
// ############################################################
// Fond des tableaux
$st_table1 = "#408488";
$st_table2 = "#58AC97";
$st_table3 = "#58ACB0";
// Image de fond (si non configure, bgcolor sera utilise)
$st_backg = "grund.gif";
// Style du corps
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
$st_l1 = "Statistiques";
$st_l2 = "Derniers visiteurs";
$st_l3 = "Heure de la dernière visite";
$st_l4 = "Adresse IP";
$st_l5 = "Nom Machine";
$st_l6 = "Langue";
$st_l7 = "Naviguateur";
$st_l8 = "Systeme d'exploitation";
$st_l9 = "Origine";
$st_l10 = "Visiteurs pour le mois en cours";
$st_l11 = "Stats journalières";
$st_l12 = "Stats hebdomadaires";
$st_l13 = "Stats annuelles";
$st_l14 = "Autres";
$st_l15 = "Meilleurs domaines d'origines";
$st_l16 = "Domaines";
$st_l17 = "Hits";
$st_l18 = "par";
$st_l19 = "Di";
$st_l20 = "Lu";
$st_l21 = "Ma";
$st_l22 = "Me";
$st_l23 = "Je";
$st_l24 = "Ve";
$st_l25 = "Sa";
$st_l26 = "Resolution";
$st_l27 = "Couleurs";
$st_l28 = "Aujourd'hui";
$st_l29 = "Hier";
$st_l30 = "Mois en cours";
$st_l31 = "Top mois";
$st_l32 = "Top jour";
$st_l33 = "Top heure";
$st_l34 = "Top naviguateur";
$st_l35 = "Top Systeme";
$st_l36 = "Top Resolution";
$st_l37 = "Top Couleurs";
$st_l38 = "Breve description visiteur";
$st_l39 = "Heure";
$st_l40 = "Janvier";
$st_l41 = "Fevrier";
$st_l42 = "Mars";
$st_l43 = "Avril";
$st_l44 = "Mai";
$st_l45 = "Juin";
$st_l46 = "Juillet";
$st_l47 = "Aout";
$st_l48 = "Septembre";
$st_l49 = "Octobre";
$st_l50 = "Novembre";
$st_l51 = "Decembre";
$st_l52 = "Moyenne";
$st_l53 = "Chargement des pages";
$st_l54 = "Site";
$st_l55 = "Total";
$st_l56 = "Taille des fichiers log";
$st_l57 = "Origine des visiteurs";
$st_l58 = "Domaines racines";
$st_l59 = "Continents";
$st_l60 = "Europe";
$st_l61 = "Amerique";
$st_l62 = "Afrique";
$st_l63 = "Asie";
$st_l64 = "Oceanie";
$st_l65 = "Russie";
$st_l66 = "Antartique";
$st_l67 = "Inconnu";
$st_l68 = "Top adresse d'origine";
$st_l69 = "Top tld";
$st_l70 = "Top continents";
$st_l71 = "Top sites";
$st_l72 = "Top jours";
$st_l73 = "Total";
$st_l74 = "searchengine";
$st_l75 = "queries";
$st_l76 = "top query";
$st_l77 = "file";
$st_l78 = "size (bytes)";
$st_l79 = "backups";
$st_l80 = "file month.year";
// admin.php3
$st_la1 = "Administration des stats";
$st_la2 = "Reset des fichiers de log";
$st_la3 = "Reset des valeurs";
$st_la4 = "Login";
$st_la5 = "Mot de passe";
$st_la6 = "Repetition";
$st_la7 = "Reset";
$st_la8 = "Changés";
$st_la9 = "Editer _config.inc";
$st_la10 = "Authentification";
$st_la11 = "Marche";
$st_la12 = "Arrêt";
$st_la13 = "Hauteur des barres";
$st_la14 = "Largeur des barres";
$st_la15 = "Stats des adresses IP";
$st_la16 = "Les mots de passes sont différents";
$st_la17 = "Erreur";
$st_la18 = "Message(s)";
$st_la19 = "Sauvegarge";
$st_la20 = "Sauvegarder";
$st_la21 = "Restaurer";
$st_la22 = "La copie a échouée";
$st_la23 = "Sauvegardé";
$st_la24 = "Restauré";
$st_la25 = "Pas de sauvegarde disponible";
$st_la26 = "Fichiers de log";
$st_la27 = "Date de la dernière sauvegarde";
$st_la28 = "Mot de passe -> 4 caractères";
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