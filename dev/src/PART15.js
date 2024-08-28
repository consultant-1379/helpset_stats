var C15=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">15 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_s55j\"></a><a name=\"CHAPTER15\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Update ARP IP Targets for VLANs</a></span></h1>\n" +
"\n" +
"<p>\n" +
"If there is a flip flap or any other issue due to ARP IP Targets\n" +
"post Initial Installation, execute the following command to update\n" +
"ARP IP post Initial Installation.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE17\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 17 &nbsp;&nbsp; Update ARP IP</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Server</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>User</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"100%\">\n" +
"\n" +
"<p>Commands</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li><p>ENIQ Stats (Standalone) Server</p>\n" +
"</li>\n" +
"<li><p>ENIQ Stats Coordinator Server</p>\n" +
"</li>\n" +
"<li><p>ENIQ Stats Engine Server</p>\n" +
"</li>\n" +
"<li><p>ENIQ Stats Reader Server</p>\n" +
"</li>\n" +
"</ul>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p><tt class=\"file-path\">root</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"100%\">\n" +
"<p><tt class=\"input\"><b># cd /eniq/installation/core_install/bin</b></tt></p><br />\n" +
"<p><tt class=\"input\"><b># bash ./update_arp_target.bsh</b></tt></p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"After executing the command:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">The user is asked to select VLAN Group for which ARP IP\n" +
"needs to be updated.<p>\n" +
"<tt class=\"output\">Available  Vlan Group:<br />[1]  PM Services Group<br />[2]\n" +
" Storage Group<br />[3]  Backup Group <br />Select the Range of Vlan\n" +
"group you want to update arp ip <br />using the format [n,n,n-n,n...n]\n" +
"       E.G. 1,2,3-8,9,10<br />Hit enter to select default [1-3] or\n" +
"enter the Vlan group you wish to update</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select the correct Vlan Group for which ARP IP needs to\n" +
"be updated.</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Current ARP IP set for Vlan is displayed on the screen.<p>\n" +
"<tt class=\"output\">Current ARP IP Information<br />-------------------<br />PM\n" +
"Services Group Highly available server IP:   &lt;current_arp_ip&gt;<br />Enter Yes if the above arp IP needs to be updated else enter No\n" +
"if update not required. (Yes|No)</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Enter Yes to update ARP IP.<p>\n" +
"<tt class=\"output\">Enter the IP address of at least one  highly available\n" +
"server in the same subnet as PM Services Group<br />(MWS Server IP\n" +
"Should be given as mandatory entry)<br />If there are multiple IP addresses\n" +
"to be entered, then they should be separated by comma</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Is the information above correct (Yes|No)</tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Highly available server is used to validate the VLAN connectivity.\n" +
"Ensure that the highly available server is on the same subnet as the\n" +
"PM Services Group. If the highly available server goes down, there\n" +
"is a link failure. Hence, ensure that the highly available server\n" +
"is always up and running, considering MWS to be always up and running.\n" +
"MWS IP must be provided as a mandatory entry, else enter more than\n" +
"one server that belongs to the same subnet as that of the PM Services\n" +
"Group.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Select Yes if the information is correct.</li></ol>\n" +
"\n"+
"</div>\n";

