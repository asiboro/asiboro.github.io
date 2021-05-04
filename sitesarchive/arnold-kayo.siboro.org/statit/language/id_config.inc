<?
// ############################################################
// # StatIt                                                   #
// ############################################################
// # by Helge Orthmann                                        #
// # Contact: otter@otterware.de                              #
// # Homepage: http://www.otterware.de                        #
// # Translated by: Edwin Yulianto     to: Indonesian         #
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
$st_l1 = "Statistik";
$st_l2 = "pengunjung terakhir";
$st_l3 = "waktu kunjungan terakhir";
$st_l4 = "alamat IP";
$st_l5 = "nama host";
$st_l6 = "bahasa";
$st_l7 = "browser";
$st_l8 = "sistem";
$st_l9 = "acuan";
$st_l10 = "pengunjung bulan ini";
$st_l11 = "statistik harian";
$st_l12 = "mingguan-harian";
$st_l13 = "statistik tahunan";
$st_l14 = "lain-lain";
$st_l15 = "acuan doamain terpopuler";
$st_l16 = "domain";
$st_l17 = "kunjungan";
$st_l18 = "oleh";
$st_l19 = "ming";
$st_l20 = "sen";
$st_l21 = "sel";
$st_l22 = "rab"; 
$st_l23 = "kam";
$st_l24 = "jum";
$st_l25 = "sab";
$st_l26 = "ukuran layar";
$st_l27 = "warna";
$st_l28 = "hari ini";
$st_l29 = "kemarin";
$st_l30 = "bulan ini";
$st_l31 = "bulan terpopuler";
$st_l32 = "hari kerja terpopuler";
$st_l33 = "jam terpopuler";
$st_l34 = "browser terpopuler";
$st_l35 = "sistem terpopuler";
$st_l36 = "ukuran layar terpopuler";
$st_l37 = "warna terpopuler";
$st_l38 = "info sekilas pengunjung";
$st_l39 = "jam";
$st_l40 = "Januari";
$st_l41 = "Februari";
$st_l42 = "Maret";
$st_l43 = "April";
$st_l44 = "Mei";
$st_l45 = "Juni";
$st_l46 = "Juli";
$st_l47 = "Agustus";
$st_l48 = "September";
$st_l49 = "Oktober";
$st_l50 = "November";
$st_l51 = "Desember";
$st_l52 = "rata-rata";
$st_l53 = "asal panggilan website";
$st_l54 = "site";
$st_l55 = "total";
$st_l56 = "ukuran file log";
$st_l57 = "asal pengunjung"; 
$st_l58 = "tingkat domain terpopuler"; 
$st_l59 = "daerah";
$st_l60 = "Eropa";
$st_l61 = "Amerika";
$st_l62 = "Afrika"; 
$st_l63 = "Asia"; 
$st_l64 = "Oseania"; 
$st_l65 = "GUS";  
$st_l66 = "Antartika";
$st_l67 = "Tidak Diketahui";
$st_l68 = "acuan terpopuler";
$st_l69 = "tingkat domain terpopuler";
$st_l70 = "wilayah terpopuler";
$st_l71 = "site terpopuler";
$st_l72 = "hari terpopuler";
$st_l73 = "jumlah";
$st_l74 = "mesin pencari";
$st_l75 = "queries";
$st_l76 = "query terpopuler";
$st_l77 = "file";
$st_l78 = "ukuran (bytes)";
$st_l79 = "backups";
$st_l80 = "file month.year";
// admin.php3
$st_la1 = "statistik wilayah admin";
$st_la2 = "reset file log";
$st_la3 = "reset nilai (value)";
$st_la4 = "login";
$st_la5 = "password";
$st_la6 = "pengulangan";
$st_la7 = "reset";
$st_la8 = "telah diubah";
$st_la9 = "edit _config.inc";
$st_la10 = "autentifikasi";
$st_la11 = "on";
$st_la12 = "off";
$st_la13 = "tinggi balok";
$st_la14 = "lebar balok";
$st_la15 = "statistik alamat IP";
$st_la16 = "password tidak sama";
$st_la17 = "tidak ditemukan! Cek _short.inc";
$st_la18 = "error";
$st_la19 = "pesan";
$st_la20 = "backup";
$st_la21 = "backup";
$st_la22 = "mengembalikan";
$st_la23 = "pengkopian tidak berhasil";
$st_la24 = "telah di backup";
$st_la25 = "telah di kembalikan";
$st_la25 = "backup tidak tersedia";
$st_la26 = "file log";
$st_la27 = "waktu backup terakhir";
$st_la28 = "password -> minimal 4 karakter";
$st_la29 = "edit _short.inc";
$st_la30 = "penghitung visibel";
$st_la31 = "teks";
$st_la32 = "grafikal";
$st_la33 = "nomor digit penghitung";
$st_la34 = "tampilkan pengunjung unik";
$st_la35 = "maksimum 8 digit untuk penghitung";
$st_la36 = "include path/statit.php3 must set \nto first line in calling page";
$st_la37 = "ukuran teks penghitung";
$st_la38 = "warna teks penghitung";
$st_la39 = "background warna penghitung";
$st_la40 = "font penghitung";
$st_la41 = "tabel warna";
$st_la42 = "warna";
$st_la43 = "maksimum teks penghitung ukuran 6";
$st_la44 = "format warna #123456";
$st_la45 = "panggil ulang pembatas(blocker)";
$st_la46 = "zona waktu server";
$st_la47 = "format +(-)waktu";
$st_la48 = "file background";
$st_la49 = "tidak ada";
$st_la50 = "bagian";
$st_la51 = "besar";
$st_la52 = "kecil";
$st_la53 = "font";
$st_la54 = "warna background";
$st_la55 = "include path/statit.php3 must set in every\nsite which will be count!";
$st_la57 = "server block (s1,s2)";
$st_la58 = "ukuran font dari 1-7";
$st_la59 = "server diblok";
$st_la60 = "tidak ada server yang akan diblok";
$st_la61 = "show log files";
?>