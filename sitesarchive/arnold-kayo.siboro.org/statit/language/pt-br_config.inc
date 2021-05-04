<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # by Helge Orthmann                                        #
// # Contact: otter@otterware.de                              #
// # Homepage: http://www.otterware.de                        #
// # Translated by: Alvaro Reguly and Emerson Pellis          #
// #            to: Brazilian Portuguese                      #
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
$st_l1 = "Estatísitca";
$st_l2 = "Últimos Visitantes";
$st_l3 = "Horário da Última Visita";
$st_l4 = "Endereço IP";
$st_l5 = "Nome do Computador";
$st_l6 = "Língua";
$st_l7 = "Navegador";
$st_l8 = "Sistema";
$st_l9 = "Referer";
$st_l10 = "Visitantes do Mês Atual";
$st_l11 = "Estatística Diária";
$st_l12 = "Dias da Semana";
$st_l13 = "Estatística Anual";
$st_l14 = "Outro";
$st_l15 = "Top Referer Domains";
$st_l16 = "Domínio";
$st_l17 = "Acessos";
$st_l18 = "por";
$st_l19 = "Do";
$st_l20 = "Se";
$st_l21 = "Te";
$st_l22 = "Qa";
$st_l23 = "Qi";
$st_l24 = "Se";
$st_l25 = "Sa";
$st_l26 = "Resolução da Tela";
$st_l27 = "cores";
$st_l28 = "hoje";
$st_l29 = "ontem";
$st_l30 = "mês atual";
$st_l31 = "Mês mais acessado";
$st_l32 = "Dia mais acessado";
$st_l33 = "Hora mais acessada";
$st_l34 = "Navegador mais usado";
$st_l35 = "Sistema mais usado";
$st_l36 = "Resolução mais usada";
$st_l37 = "Quantidade de cores mais usada";
$st_l38 = "Pequena descrição do visitante";
$st_l39 = "horas";
$st_l40 = "Janeiro";
$st_l41 = "Fevereiro";
$st_l42 = "Março";
$st_l43 = "Abril";
$st_l44 = "Maio";
$st_l45 = "Junho";
$st_l46 = "Julho";
$st_l47 = "Agosto";
$st_l48 = "Setembro";
$st_l49 = "Outubro";
$st_l50 = "Novembro";
$st_l51 = "Dezembro";
$st_l52 = "Média";
$st_l53 = "Acessos ao Website";
$st_l54 = "Site";
$st_l55 = "total";
$st_l56 = "tamanho dos arquivos de log";
$st_l57 = "origem dos visitantes";
$st_l58 = "top level domain";
$st_l59 = "territorios";
$st_l60 = "Europa";
$st_l61 = "America";
$st_l62 = "Africa";
$st_l63 = "Asia";
$st_l64 = "Oceania";
$st_l65 = "GUS";
$st_l66 = "Antartica";
$st_l67 = "Desconhecido";
$st_l68 = "top referer";
$st_l69 = "top tld";
$st_l70 = "top territorio";
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
$st_la1 = "Área de administração do statistic";
$st_la2 = "Apagar Arquivos de Log";
$st_la3 = "Apagar Valores";
$st_la4 = "login";
$st_la5 = "senha";
$st_la6 = "repetição";
$st_la7 = "Apagar";
$st_la8 = "mudou";
$st_la9 = "editar _config.inc";
$st_la10 = "autenticação";
$st_la11 = "ligado";
$st_la12 = "desligado";
$st_la13 = "altura das barras";
$st_la14 = "largura das barras";
$st_la15 = "endereço de IP estático";
$st_la16 = "senhas são diferentes";
$st_la17 = "erro";
$st_la18 = "mensagem(s)";
$st_la19 = "Cópia de Segurança";  
$st_la20 = "Cópia";
$st_la21 = "restaurar";
$st_la22 = "Cópia com erro"; 
$st_la23 = "Cópia de Segurança realizada";
$st_la24 = "restaurado";
$st_la25 = "nenhuma Cópia de Segurança disponível";
$st_la26 = "arquivos de log";
$st_la27 = "Tempo da ultima Cópia de Segurança";
$st_la28 = "senha -> mínimo de 4 caracteres";
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