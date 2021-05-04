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
// reload sperre normal mode
$st_kk = 0;
$st_reload = "no";
$st_treffer = 0;
$st_finbro = file ("$st_iplog");
$st_anzzeilen = count ($st_finbro);
$st_akttstamp = time();
$st_utstamp = $st_akttstamp-1800;
for ($st_k = 0; $st_k <= $st_anzzeilen-1; $st_k++) {
  $st_pieces = explode (",", $st_finbro[$st_k]);
  $st_pieces[2] = str_replace ("\n", "", $st_pieces[2]);
  settype($st_pieces[0], "integer");
  if($st_pieces[2] == "1"){
    $st_newip[$st_kk] = "$st_akttstamp,$st_ipaddr,2";
    $st_treffer = 1;
  }
  else{
    if($st_pieces[0] > $st_utstamp){
      if($st_pieces[1] == $st_ipaddr){
        $st_reload = "yes";
        $st_newip[$st_kk] = "$st_akttstamp,$st_ipaddr,2";
        $st_kk++;
        $st_treffer = 1;
      }
      else{
        $st_newip[$st_kk] = "$st_pieces[0],$st_pieces[1],2";
        $st_kk++;
      }
    }
  }
}
if($st_anzzeilen == 0 || $st_treffer == 0){
  $st_newip[$st_kk] = "$st_akttstamp,$st_ipaddr,1";
  $st_kk++;
}
$st_fp9 = fopen ("$st_iplog", "w");
for($st_j=0;$st_j<1000;$st_j++) {if (flock($st_fp9,2)) {break;}}
for ($st_l = 0; $st_l <= $st_kk; $st_l++) {fputs ($st_fp9, "$st_newip[$st_l]\n");}
fclose ($st_fp9);
?>