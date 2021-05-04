############################################################
# StatIt                                                   #
############################################################
# by Helge Orthmann                                        #
# Contact: otter@otterware.de                              #
# Homepage: http://www.otterware.de                        #
############################################################

StatIt contains the following files:

install.php3                   - install script
doc/readme.txt                 - this file
doc/StatIt.html                - HTML-file with installation notes
doc/licence.txt                - GNU licence
doc/statit.gif                 - StatIt banner (88x31)
normal/admin.php3              - script to edit _config.inc and reset stats
normal/statit.php3             - script to collect data
normal/statitjs.php3           - script to collect java script data
normal/statitp.php3            - script to count webhits
normal/statistik.php3          - script to show data
normal/_config.inc             - config file (german)
normal/_short.inc              - config file for log files and others
normal/_tld.inc                - top level domains
normal/_search.inc             - searchengines
normal/_reload.inc             - block reloader
normal/_lopa.inc.php3          - config file for authentification
normal/v.gif                   - gif file for the bars
normal/w.gif                   - gif file for the bars
normal/grund.gif               - gif file for background
normal/update.php3             - only for users to update from older version
normal/pics/0 - 9.gif          - pics for visible graphical counter
normal/abspath.php3            - script to get the absolut path
normal/showcount.php3          - script to show visible counter
simple/admin.php3              - script to edit _config.inc and reset stats
simple/statitjs.php3           - script to collect data
simple/statistik.php3          - script to show data
simple/_config.inc             - config file (german)
simple/_short.inc              - config file for log files and others
simple/_tld.inc                - top level domains
simple/_search.inc             - searchengines
simple/_reload.inc             - block reloader
simple/_lopa.inc.php3          - config file for authentification
simple/v.gif                   - gif file for the bars
simple/w.gif                   - gif file for the bars
simple/grund.gif               - gif file for background
simple/update.php3             - only for users to update from older version
language/eng_config.inc        - english config file
language/nl_config.inc         - dutch config file (thanxs to Richard Warmenhoven)
language/pt-br_config.inc      - brazilian portuguese config file (thanxs to Alvaro Reguly and Emerson Pellis)
language/es_confic.inc         - spanish config file (thanxs to David Asin Sanchez)
language/fr_config.inc         - french config file (thanxs to Jean-Marc Jacquot)
language/id_config.inc         - indonesian config file (thanxs to Edwin Yulianto)
language/it_config.inc         - italian config file (thanxs to Valerio Felici)
language/pl_config.inc         - polish config file (thanxs to Wojtek Pobrayn)
language/hun_config.inc        - hungarian config file (thanxs to Juhász Róbert)
language/dk_config.inc        - hungarian config file (thanxs to Mogens Valentin)

############################################################################

Introduction:

StatIt is a script written in PHP. It is a web page logger that keeps track
of visitor count and other information such as system, browser, referal
domains, screen resolution, color etc. A web-based statistics page is 
available.

StatIt is Freeware!
You can change the code if you want! But never change or delete the header 
in the files!! 
Read the license.txt!

StatIt is FREEWARE, but if you like the program you can support me!
---------------------------------------------------
|This is my bank-account:                         |
|Helge Orthmann                                   |
|BLZ: 760 300 80    ConSors       (bank ID)       |
|Kto: 930 746 032                 (account number)|
---------------------------------------------------
Any amount is welcome!

Do you have translated the _config.inc into your language? That's ok! 
Please mail it to me! 
otter@otterware.de

###########################################################################

Installation:

see StatIt.html

###########################################################################

File format:

stat.log:
110 values separated by ,   (only one line)

00 - 23    hour
24 - 35    month
36 - 66    day
67 - 73    work day
74 - 79    screen resolution
           74 640
           75 800
           76 1024
           77 1152
           78 1280
           79 other
80 - 85    screen color
           80 4 bit
           81 8 bit
           82 16 bit
           83 24 bit
           84 32 bit
           85 other
86 - 104   unused
105        top day (day)
106        top day (month)
107        top day (year)
108        top day count
109        total visitors

----------

domain.log:
2 values, each line separated by ,  (open end)

0      count referer domain
1      referer domain

----------

pages.log:
2 values, each line separated by ,  (max n lines, where n is
the number of your websites)
count only one month, then reset!!

0      count website
1      website

----------

last.log:
8 values, each line separated by ,  (max 20 lines)

0      time (d.m. h:m)
1      IP address
2      hostname
3      country
4      browser
5      system
6      referer
7      link or not (1 : link, 0 : no link)

----------

country.log
2 values, each line separated by ,  (max 268)

0      count country
1      country

----------

browser.log
2 values, each line separated by ,  (open end)

0      count browser
1      browser

----------

system.log
2 values, each line separated by ,  (open end)

0      count system
1      system

----------

search.log
2 values, each line separated by ,  (open end)

0      count searchengine queries
1      queries

----------

ip.log simple mode
2 values, each line separated by ,  (max visitors in half an hour)

0      unix timestamp
1      IP address

----------

ip.log normal mode
3 values, each line separated by ,  (max visitors in half an hour)

0      unix timestamp
1      IP address
2      count call

###########################################################################
