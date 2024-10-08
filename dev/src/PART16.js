var C16=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">16 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_tah4\"></a><a name=\"CHAPTER16\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ENIQ Rolling Snapshots</a></span></h1>\n" +
"\n"+
"</div>\n";

var C16_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">16.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_gutr\"></a><a name=\"CHAPTER16.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rolling Snapshot Mechanism</a></span></h2>\n" +
"\n" +
"<p>\n" +
"The rolling snapshot is a self-maintaining mechanism. It creates\n" +
"and deletes snapshots of the ENIQ server when required. Database Consistency\n" +
"Check (DBCC) is integrated with a rolling snapshot to prevent the\n" +
"creation of snapshot of a corrupted database. If database corruption\n" +
"is encountered during the run of DBCC, the rolling snapshot script\n" +
"exits and snapshot is not created.</p>\n" +
"\n" +
"<p>\n" +
"The rolling snapshot mechanism is achieved using certain scripts\n" +
"or functions.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">These scripts or functions are designed to run in specific\n" +
"ways and care must be taken if these are run manually outside the\n" +
"intended mechanism. Misuse of the scripts can cause unexpected results.</li>\n" +
"<li class=\"UNORD\">As part of rollback procedure, NAS services are restarted.</li></ul></dd></dl><br />\n" +
"\n"+
"</div>\n";

var C16_1_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">16.1.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_t6at\"></a><a name=\"CHAPTER16.1.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Script Locations</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The snapshot scripts are located in <tt class=\"file-path\"> /eniq/bkup_sw/bin/</tt>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_1_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">16.1.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_8mmv\"></a><a name=\"CHAPTER16.1.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rolling Snapshot Logging</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The Rolling Snapshot logs are located in <tt class=\"file-path\">/eniq/local_logs/rolling_snapshot_logs/</tt>. Each of the logs is automatically rotated when the log reaches\n" +
"a certain size. By default, the number of log backup files kept is\n" +
"10 and each log is rotated when it reaches 2 MB in size.</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">When the <tt class=\"file-path\">eniq_rollsnapd.bsh</tt> script runs, it creates the <tt class=\"file-path\">eniq_rollsnapd.log</tt> log file in the log directory.</li>\n" +
"<li class=\"UNORD\">When the <tt class=\"file-path\"> prepare_eniq_bkup.bsh </tt>script runs, it creates the <tt class=\"file-path\">prep_roll_snap.log</tt> log file in the log directory.</li>\n" +
"<li class=\"UNORD\">When the <tt class=\"file-path\">cleanup_eniq_backup.bsh</tt> script runs, it creates the <tt class=\"file-path\">clean_roll_snap.log</tt> log file in the log directory.</li></ul>\n" +
"\n"+
"</div>\n";

var C16_1_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"RollingSnapshotCreation\"></a><span class=\"CHAPNUMBER\">16.1.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_pzau\"></a><a name=\"CHAPTER16.1.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Creating Rolling Snapshots</a></span></h3>\n" +
"\n" +
"<p>\n" +
"The automatic creation of the rolling snapshots is controlled primarily\n" +
"by the Systemd managed rolling snapshot daemon and the <tt class=\"file-path\">root</tt> crontab.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_1_3_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.1.3.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_7g1u\"></a><a name=\"CHAPTER16.1.3.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Root Crontab Entry</a></span></h4>\n" +
"\n" +
"<p>\n" +
"The <tt class=\"file-path\">root</tt> crontab periodically calls\n" +
"the <tt class=\"file-path\">trigger_roll_snap.bsh</tt> script that triggers\n" +
"the creation of a rolling snapshot.</p>\n" +
"\n" +
"<p>\n" +
"If the rolling snapshot Systemd service is <tt class=\"file-path\">active</tt>, this script creates the file that causes the daemon to create the\n" +
"snapshot. This file is created by default every four hours on a rack-mounted\n" +
"installation and every twelve hours on a Blade installation.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_1_3_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.1.3.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_x1rn\"></a><a name=\"CHAPTER16.1.3.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rolling Snapshot Daemon</a></span></h4>\n" +
"\n" +
"<p>\n" +
"On startup, Systemd loads the rolling snapshot service described\n" +
"in the file <tt class=\"file-path\"> /etc/systemd/system/eniq-roll-snap.service</tt>.</p>\n" +
"\n" +
"<p>\n" +
"Systemd then runs the <tt class=\"file-path\">eniq_rollsnapd.bsh</tt> script to act as a daemon. This daemon periodically checks (default\n" +
"5 minutes) for the existence of a particular file, which prompts for\n" +
"the creation of a rolling snapshot.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_1_3_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.1.3.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_olha\"></a><a name=\"CHAPTER16.1.3.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Creating Rolling Snapshots</a></span></h4>\n" +
"\n" +
"<p>\n" +
"These are certain criteria that must be met before the rolling\n" +
"snapshot is created.</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">All the IQ databases must be online at the time and\n" +
"the script must be able to log in to each of them.</li>\n" +
"<li class=\"UNORD\">The IQ dbspace files returned using the IQ command <tt class=\"input\"><b>sp_iqdbspace</b></tt> must exist and have a file size greater than\n" +
"zero.</li></ul>\n" +
"<p>\n" +
"To manually take a rolling snapshot of the system, run the following\n" +
"commands on  the server types mentioned as <tt class=\"file-path\">root</tt> user:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator Server</li></ul>\n" +
"<p>\n" +
"<tt class=\"input\"><b># cd /eniq/bkup_sw/bin</b></tt></p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/bash ./prep_eniq_snapshots.bsh</b></tt></p>\n" +
"\n" +
"<p>\n" +
"If these criteria are met, the script takes a snapshot of each\n" +
"filesystem in a pre-determined order. For the filesystems that are\n" +
"associated with the IQ databases, the script uses the SAP IQ virtual\n" +
"backup facility to take the snapshot.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>To prevent the manually created snapshot from getting overwritten,\n" +
"execution of the script disables the eniq-roll-snap service on each\n" +
"of the server in the deployment.<p>\n" +
"To <tt class=\"file-path\">enable</tt> the eniq-roll-snap service\n" +
"on all the servers in the deployment, follow <a href='javascript:parent.parent.parent.showAnchor(\"enabling-rolling-snapshot\")' class=\"xref\">Section  16.1.5.1</a>.</p>\n" +
"</dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

var C16_1_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">16.1.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_r6su\"></a><a name=\"CHAPTER16.1.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Deleting Rolling Snapshots</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Old rolling snapshots are deleted automatically post successful\n" +
"creation of a new rolling snapshot.</p>\n" +
"\n" +
"<p>\n" +
"The script <tt class=\"file-path\">cleanup_eniq_backup.bsh</tt> is\n" +
"used with certain parameters to delete the required rolling snapshots.</p>\n" +
"\n" +
"<p>\n" +
"If an error occurs during the creation of a rolling snapshot, the\n" +
"script normally cleans up and removes any partially created snapshots.</p>\n" +
"\n" +
"<p>\n" +
"At the end of a successfully created rolling snapshot, any previous\n" +
"rolling snapshots are deleted.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>It is possible for the script to delete any user created\n" +
"snapshots. The snapshot names contain the above string.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C16_1_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><a name=\"Enable_Disable_Rolling_Snapshot\"></a><span class=\"CHAPNUMBER\">16.1.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_gmw8\"></a><a name=\"CHAPTER16.1.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Enabling and Disabling Rolling Snapshots</a></span></h3>\n" +
"\n" +
"<p>\n" +
"To <tt class=\"file-path\">enable</tt> or <tt class=\"file-path\">disable</tt> a rolling snapshot, run the following steps as <tt class=\"file-path\">root</tt> user on the following servers:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"\n"+
"</div>\n";

var C16_1_5_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><a name=\"enabling-rolling-snapshot\"></a><span class=\"CHAPNUMBER\">16.1.5.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_65oy\"></a><a name=\"CHAPTER16.1.5.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Enabling\n" +
"Rolling Snapshot Systemd Service</a></span></h4>\n" +
"\n" +
"<p>\n" +
"Enable the rolling snapshot service by issuing the following command\n" +
"as <tt class=\"file-path\">root</tt> user</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># cd /eniq/admin/bin</b></tt></p>\n" +
"<p><tt class=\"input\"><b># bash ./manage_deployment_services.bsh -a start -s roll-snap</b></tt></p>\n" +
"\n"+
"</div>\n";

var C16_1_5_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.1.5.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_djca\"></a><a name=\"CHAPTER16.1.5.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Disabling Rolling Snapshot Systemd\n" +
"Service</a></span></h4>\n" +
"\n" +
"<p>\n" +
"Disable the rolling snapshot service by issuing the following command\n" +
"as <tt class=\"file-path\">root</tt> user</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># cd /eniq/admin/bin</b></tt></p>\n" +
"<p><tt class=\"input\"><b># bash ./manage_deployment_services.bsh -a stop -s roll-snap</b></tt></p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_1_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">16.1.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_8wyl\"></a><a name=\"CHAPTER16.1.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Listing Snapshots with Creation\n" +
"Time</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Execute the following command as <tt class=\"file-path\">root</tt> user to list all available snapshots on server with creation time:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b># bash /eniq/bkup_sw/bin/prep_eniq_snapshots.bsh -u -N</b></tt><br /><br /><tt class=\"output\">Listing all the available snapshots  <br />==========================================\n" +
" <br />Snap shot label on atrcxb1718 <br /> snss2 2018-12-24 13:16:57 <br /> ==========================================  <br />Snap shot label\n" +
"on atrcxb1720<br /> snss2 2018-12-24 08:21:53 <br /> ========================================== <br /> Snap shot label on atrcxb1724 <br /> snss2 2018-12-24 13:22:04 <br /> ========================================== <br /> Snap shot label\n" +
"on atrcxb1725  <br />snss2 2018-12-24 13:22:15</tt></p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The following text would not be displayed in the output if\n" +
"either commit or rollback steps is performed.</dd></dl><br />\n" +
"<p>\n" +
"<tt class=\"output\">==========================================<br />Snapshot\n" +
"created during upgrade<br />atrcxb1718 : snss2<br />atrcxb1720 : snss2<br />atrcxb1724 : snss2<br />atrcxb1725 : snss2<br />==========================================</tt></p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_1_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">16.1.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_hv2j\"></a><a name=\"CHAPTER16.1.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Monitoring Snapshot Cache</a></span></h3>\n" +
"\n" +
"<p>\n" +
"Monitoring snapshot cache is used to identify the amount of snapshot\n" +
"cache utilized.</p>\n" +
"\n" +
"<p>\n" +
"If the cache utilization exceeds 90% then it becomes impossible\n" +
"to rollback to the saved snapshot.</p>\n" +
"\n" +
"<p>\n" +
"Perform the following steps to monitor the snapshot cache on the\n" +
"server:</p>\n" +
"\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute following commands as <tt class=\"file-path\">root</tt> user to monitor LV snapshot : <br /><tt class=\"input\"><b># lvs | grep &lt;snapshost_name&gt;</b></tt><p>\n" +
"For Example:<br /><tt class=\"input\"><b>atrcxb2332[stats_coordinator] {root} #:\n" +
"lvs | grep snss2</b></tt><br /><br /><tt class=\"output\">LV                     VG\n" +
"                    Attr       LSize   Pool Origin           Data%\n" +
" Meta%  Move Log Cpy%Sync Convert</tt><br /><tt class=\"output\"><br /> bkup_sw-snss2\n" +
"         stats_coordinator_pool swi-a-s--- 204.00m      bkup_sw  \n" +
"       0.45 <br />  connectd-snss2         stats_coordinator_pool swi-a-s---\n" +
" 16.00m      connectd         0.20 <br />  dwh_main-snss2         stats_coordinator_pool\n" +
"swi-a-s---   1.37g      dwh_main         0.17 <br />  dwh_main_dbspace-snss2\n" +
"stats_coordinator_pool swi-a-s---  28.00m      dwh_main_dbspace 0.04 <br />  dwh_reader-snss2       stats_coordinator_pool swi-a-s---  28.00m\n" +
"     dwh_reader       0.04 <br />  installation-snss2     stats_coordinator_pool\n" +
"swi-a-s---   1.06g      installation     0.05 <br />  misc-snss2  \n" +
"          stats_coordinator_pool swi-a-s---  92.00m      misc    \n" +
"        0.01 <br />  rep_main-snss2         stats_coordinator_pool\n" +
"swi-a-s---  &lt;4.21g      rep_main         0.02 <br />  smf-snss2\n" +
"             stats_coordinator_pool swi-a-s---  16.00m      smf  \n" +
"           0.20</tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Execute following commands as <tt class=\"file-path\">master</tt> user to monitor NAS snapshot : <br /><tt class=\"input\"><b># ssh master@nasconsole</b></tt><p>\n" +
"For Example:<br /><tt class=\"input\"><b>atrcxb2332[stats_coordinator] {root} #:\n" +
"ssh master@nasconsole</b></tt><br /><tt class=\"input\"><b>sfs299&gt; storage rollback\n" +
"cache list</b></tt><br /><tt class=\"output\">CACHE NAME                      TOTAL(Mb)\n" +
"  USED(Mb) (%)    AVAIL(Mb) (%)    SDCNT</tt><br /><tt class=\"output\">Enq2332-cache\n" +
"                     409600       8518  (2)     401082 (97)      62</tt><br /><tt class=\"input\"><b>sfs299&gt;</b></tt></p>\n" +
"</li><li class=\"STEPLIST\" id=\"THSSTYLE0\">Perform the following steps to monitor SAN snapshot:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Login to SAN IP.</li>\n" +
"<li class=\"UNORD\">Click on Replicas -&gt; Reserved LUN Pool.</li>\n" +
"<li class=\"UNORD\">Percentage use of each LUN can be seen \n" +
"as shown in image.</li></ul></li></ol>\n" +
"<div style=\"margin-top: 12pt\"><p align=\"left\" class=\"image\"><a title=\"Click to zoom and pan\" name=\"FIGURE57\" class=\"ovl\" onclick=\"ovl(this)\"><img src=\"15_1543-CSA11363_1Uen.T-SAN_checking.jpg\" border=\"0\" width=\"552\" height=\"291\" class=\"tab0\" /></a></p><p align=\"left\"><i>Figure 57 &nbsp; Information of SAN Snapshot Cache</i></p></div>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><a name=\"RollingSnapshotRecovery\"></a><span class=\"CHAPNUMBER\">16.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_trfl\"></a><a name=\"CHAPTER16.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Recovering Using Rolling Snapshots</a></span></h2>\n" +
"\n" +
"<p>\n" +
"For certain types of system failure, for example, database corruption\n" +
"or accidental file deletion, rolling snapshots are used to restore\n" +
"the system to a working state.</p>\n" +
"\n" +
"<p>\n" +
"While using the rolling snapshots to recover from a fault scenario,\n" +
"first <tt class=\"file-path\">disable</tt> the creation of any more\n" +
"rolling snapshots. Disabling the snapshot Systemd service (described\n" +
"previously in this guide) ensures that no more snapshots are taken.</p>\n" +
"\n" +
"<p>\n" +
"The reason for this is that the user does not want the rolling\n" +
"snapshot to snapshot the fault scenario. For example, if a user deletes\n" +
"a file and the automatic snapshot mechanism captures snapshots again\n" +
"before the file is recovered, then the deleted file is not available\n" +
"in the new snapshot.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_2_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h3><span class=\"CHAPNUMBER\">16.2.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_0pom\"></a><a name=\"CHAPTER16.2.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Recovering the Entire System</a></span></h3>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>If ENIQ is installed on a Rack server, then the user only\n" +
"has LV snapshots to rollback.</dd></dl><br />\n" +
"<p>\n" +
"If the fault is so serious that the recovery of all the filesystems\n" +
"is required, then the following procedure ensures the recovery of\n" +
"the ENIQ server to the last known valid state:</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_2_1_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_cuj5\"></a><a name=\"CHAPTER16.2.1.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Disabling Mounts</a></span></h4>\n" +
"\n" +
"<p>\n" +
"This command is run for each managed OSS. The following steps must\n" +
"be run on all server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Engine Server</li></ul>\n" +
"<p><tt class=\"input\"><b># cd /eniq/connectd/mount_info/</b></tt></p>\n" +
"<p><tt class=\"input\"><b># /usr/bin/touch &lt;eniq_alias&gt;/disable_OSS</b></tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><tt class=\"file-path\">eniq_alias</tt> refers to the given\n" +
"name of the OSS server by ENIQ Statistics. This is in the form <tt class=\"file-path\">eniq_oss_&lt;n&gt;</tt></dd></dl><br />\n" +
"\n"+
"</div>\n";

var C16_2_1_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_18a2\"></a><a name=\"CHAPTER16.2.1.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Disabling Rolling Snapshot Systemd\n" +
"Service</a></span></h4>\n" +
"\n" +
"<p>\n" +
"The commands must be run on following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p>\n" +
"Issue the following command as user <tt class=\"file-path\">root</tt> <br /><tt class=\"input\"><b># cd /</b></tt></p>\n" +
"\n" +
"<p><tt class=\"input\"><b># bash /eniq/admin/bin/manage_deployment_services.bsh -a stop\n" +
"-s roll-snap</b></tt></p>\n" +
"\n"+
"</div>\n";

var C16_2_1_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_mgah\"></a><a name=\"CHAPTER16.2.1.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Disabling All ENIQ Services</a></span></h4>\n" +
"\n" +
"<p>\n" +
"The commands must be run on following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p>\n" +
"Issue the following command as <tt class=\"file-path\">root</tt> user:<br /><tt class=\"input\"><b># cd /</b></tt></p>\n" +
"\n" +
"<p><tt class=\"input\"><b># bash /eniq/admin/bin/manage_deployment_services.bsh -a stop\n" +
"-s ALL [-l &lt;path_to_logfile&gt;]</b></tt></p>\n" +
"<p>\n" +
"Check that all services are stopped (<tt class=\"file-path\">inactive</tt>) by using the following command:<br /><tt class=\"input\"><b># services -s eniq</b></tt></p>\n" +
"\n" +
"\n" +
"<table frame=\"void\" class=\"grd\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-connectd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-dwhdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-dwh_reader.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">failed</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-engine.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-esm.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-fls.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-licmgr.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-lwphelper.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-repdb.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-rmiregistry.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-roll-snap.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-scheduler.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"71%\">\n" +
"<p><tt class=\"output\">eniq-webserver.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"29%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

var C16_2_1_4=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.4 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_56dw\"></a><a name=\"CHAPTER16.2.1.4\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rolling Back FS Rolling Snapshots</a></span></h4>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_2_1_4_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h5><span class=\"CHAPNUMBER\">16.2.1.4.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_etmj\"></a><a name=\"CHAPTER16.2.1.4.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Unpack Base Software</a></span></h5>\n" +
"\n" +
"<p>\n" +
"The commands must be run on the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p>\n" +
"This procedure unpacks the required core software on all Blades\n" +
"across the deployment:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b># bash /eniq/installation/core_install/bin/unpack_core_sw.bsh\n" +
"-a create &ndash;d <i class=\"var\">&lt;path_to_eniq_base_sw&gt;</i> -p <i class=\"var\">&lt;eniq_sw_dir&gt;</i> [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"file-path\">&lt;path_to_eniq_base_sw&gt;</tt> refers to\n" +
"ENIQ Statistics Base Software path that is currently installed on\n" +
"the server.</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"file-path\">&lt;eniq_sw_dir&gt;</tt> refers to the directory\n" +
"under /var/tmp/upgrade where the ENIQ core SW package is extracted\n" +
"from <tt class=\"file-path\">&lt;path_to_eniq_base_sw&gt;</tt>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_2_1_4_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h5><span class=\"CHAPNUMBER\">16.2.1.4.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_vvy9\"></a><a name=\"CHAPTER16.2.1.4.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">FS Snapshot Rollback</a></span></h5>\n" +
"\n" +
"<p>\n" +
"The commands must be run on following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li>\n" +
"<li class=\"UNORD\">ENIQ Engine Server</li>\n" +
"<li class=\"UNORD\">ENIQ Reader Servers</li></ul>\n" +
"<p>\n" +
"Issue the following command as user <tt class=\"file-path\">root</tt>:<br /></p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">List FS rolling snapshots to determine the <tt class=\"file-path\">&lt;snap_label&gt;</tt><p>\n" +
"<tt class=\"input\"><b># bash /var/tmp/upgrade/<i class=\"var\">&lt;eniq_sw_dir&gt;</i>/core_install/templates/common/bkup_sw/bin/manage_fs_snapshots.bsh\n" +
"-a list -f ALL</b></tt></p>\n" +
"</li></ul>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Rollback rolling snapshot\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Execute the command to verify if multipath disks are\n" +
"visible on server:<p>\n" +
"<tt class=\"input\"><b># /ericsson/storage/san/bin/blkcli --action listluns</b></tt></p>\n" +
"<p>\n" +
"For any of the disk, if mpath value is not visible, see <a href='javascript:parent.parent.parent.showAnchor(\"MpathValuesarenotVisibleinblkcliCommand\")' class=\"xref\">Section  37.19</a>.</p>\n" +
"</li>\n" +
"<li class=\"UNORD\">Execute the command to rollback FS snapshot:<p>\n" +
"<tt class=\"input\"><b># cd /</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># bash /var/tmp/upgrade/<i class=\"var\">&lt;eniq_sw_dir&gt;</i>/core_install/templates/common/bkup_sw/bin/manage_fs_snapshots.bsh\n" +
"&ndash;a rollback &ndash;f ALL=\"<i class=\"var\">&lt;snap_label&gt;</i>\"[-l<i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"</li></ul><p>\n" +
"If Rollback fails, the following error message is displayed:</p>\n" +
"<p>\n" +
"<tt class=\"output\">-------------------------------------------------------</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">2021-Oct-27_01.30.36 - Starting to rollback FS snapshots</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">-------------------------------------------------------</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Stopping NASd service</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Stopping hostsync service</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">2021-Oct-27_01.31.47 - Rolling back to snapshots with label\n" +
"\"snss1\"</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Un-mounting the file-system /dev/stats_coordinator_pool/bkup_sw</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">27.10.21_01:33:47 - Rolling back LVM snapshot /dev/stats_coordinator_pool/bkup_sw-snss1</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Reactivating bkup_sw </tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Enabling NASd service</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">2021-Oct-27_01.35.32- ERROR : Script aborted.......</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">2021-Oct-27_01.35.32 - ERROR: Failed to rollback FS snapshot\n" +
"with label \"snss1\" on coordinator</tt></p>\n" +
"<p>\n" +
"Check <tt class=\"input\"><b>/eniq/local_logs/snapshot_logs/manage_fs_snapshot.log</b></tt> file. If the following error message is displayed, see section <em class=\"LOWEMPH\">Rollback Fails as the File System is open</em> <a href='javascript:parent.parent.parent.showAnchor(\"Rollback_fail\")' class=\"xref\">Section  37.22.2</a></p>\n" +
"<p>\n" +
"<tt class=\"output\">Delaying merge since origin is open.</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Merging of snapshot stats_coordinator_pool/bkup_sw-snss1\n" +
"will occur on next activation of stats_coordinator_pool/bkup_sw.</tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">Reactivating bkup_sw</tt></p>\n" +
"<p>\n" +
"If FS snapshot rollback fails, before the rerun of manage_fs_snapshot.bsh,\n" +
"execute the command to ensure raw devices and db symlinks are created\n" +
"on server.</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This is applicable only for ENIQ Statistics Blade or Multi-Blade\n" +
"servers.</dd></dl><br /><p>\n" +
"The command must not be run on ENIQ Engine Server:</p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># /eniq/installation/core_install/bin/eniq_core_install.bsh\n" +
"-s create_db_sym_links -n</b></tt></p>\n" +
"</li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Once FS snapshot rollback is successful on the particular\n" +
"server, the snapshot is automatically deleted.</dd></dl><br />\n" +
"\n" +
"\n"+
"</div>\n";

var C16_2_1_5=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.5 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_e8r7\"></a><a name=\"CHAPTER16.2.1.5\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rolling Back NAS Rolling Snapshot</a></span></h4>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This step is applicable only for ENIQ Statistics Blade or\n" +
"Multi-Blade servers.</dd></dl><br />\n" +
"<p>\n" +
"The commands must be run on following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p>\n" +
"Issue the following command as <tt class=\"file-path\">root</tt> user:<br /></p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">List NAS rolling snapshots to determine the <tt class=\"file-path\">&lt;snap_label&gt;</tt>.<p>\n" +
"<br /></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/bash /eniq/bkup_sw/bin/manage_nas_snapshots.bsh\n" +
"-a list -f ALL</b></tt></p>\n" +
"</li></ul>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Stop the NAS service and milestone.<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl stop NASd.service</b></tt></p>\n" +
"</li></ul>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Check that the NAS service and milestone are in <tt class=\"file-path\">inactive</tt> state by executing the following commands:<p>\n" +
"<br /><tt class=\"input\"><b># /usr/bin/systemctl status NASd.service</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">NASd.service - Storage NASd Service<br /> Loaded: loaded\n" +
"(/etc/systemd/system/NASd.service; disabled; vendor preset: disabled)<br /> Active: inactive (dead)</tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl status NAS-online.service</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"output\">NAS-online.service - Milestone NAS Service<br /> Loaded:\n" +
"loaded (/etc/systemd/system/NAS-online.service; disabled; vendor preset:\n" +
"disabled)<br /> Active: inactive (dead)</tt></p>\n" +
"<p>\n" +
" </p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>It can be a few minutes before all the services are made <tt class=\"file-path\">inactive</tt>.</dd></dl><br /></li></ul>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Rollback Snapshot<p>\n" +
"<br /><tt class=\"input\"><b># bash /eniq/bkup_sw/bin/manage_nas_snapshots.bsh -a\n" +
"rollback -f ALL -n <i class=\"var\">&lt;snap_label&gt;</i> [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"</li></ul>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Start the NAS service and milestone.<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl start NASd.service</b></tt></p>\n" +
"</li></ul>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Check that NAS service and milestone are in <tt class=\"file-path\">active</tt> state.<p>\n" +
"<tt class=\"input\"><b># services -s NAS</b></tt></p>\n" +
"\n" +
"<table frame=\"void\" style=\"margin-top:4pt\" class=\"grd\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">NASd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"59%\">\n" +
"<p><tt class=\"output\">NAS-online.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"41%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr></table><p>\n" +
"</p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>It can be a few minutes before the services are started.</dd></dl><br /></li>\n" +
"<li class=\"UNORD\">Remove newly created NAS Filesystems<p>\n" +
"As <tt class=\"file-path\">root</tt>, run these commands on the following\n" +
"servers:</p>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul><p>\n" +
"<tt class=\"input\"><b># cd /eniq/installation/core_install/templates/stats/admin/bin/</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/bash manage_storage_fs.bsh -r /eniq/installation\n" +
"[-l &lt;path_to_logfile&gt;]</b></tt></p>\n" +
"</li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>On successful rollback, NAS snapshots are not deleted automatically\n" +
"and are available for reuse.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C16_2_1_6=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.6 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_aex5\"></a><a name=\"CHAPTER16.2.1.6\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Rolling Back SAN Rolling Snapshot</a></span></h4>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>These steps are only applicable for ENIQ Statistics Blade/Multi-Blade\n" +
"servers.</dd></dl><br />\n" +
"<p>\n" +
"The commands must be run on following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p>\n" +
"Issue the following command as <tt class=\"file-path\">root</tt> user:<br /></p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">List SAN rolling snapshots to determine the <tt class=\"file-path\">&lt;snap_label&gt;</tt><p>\n" +
"<tt class=\"input\"><b># /usr/bin/bash /eniq/bkup_sw/bin/manage_san_snapshots.bsh\n" +
"-a list -f ALL</b></tt></p>\n" +
"</li></ul>\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Rollback SAN rolling snapshot<p>\n" +
"<br /><tt class=\"input\"><b># bash /eniq/bkup_sw/bin/manage_san_snapshots.bsh -a\n" +
"rollback -f ALL -n <i class=\"var\">&lt;snap_label&gt;</i> [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"</li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>On successful rollback, SAN snapshots are not deleted automatically\n" +
"and are available for reuse.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C16_2_1_7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_610u\"></a><a name=\"CHAPTER16.2.1.7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Restoring Repository Database</a></span></h4>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>These steps are only applicable for ENIQ Statistics Blade\n" +
"or Multi-Blade servers.</dd></dl><br />\n" +
"<p>\n" +
"It is necessary to recover the <tt class=\"file-path\">repdb</tt> database following a rollback. Run the following commands on the\n" +
"following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p><tt class=\"input\"><b># su - dcuser</b></tt></p>\n" +
"<p><tt class=\"input\"><b># cd /eniq/bkup_sw/bin</b></tt></p>\n" +
"<p><tt class=\"input\"><b># /usr/bin/bash ./repdb_restore.bsh -c /eniq/sw/conf</b></tt></p>\n" +
"<p><tt class=\"input\"><b># exit</b></tt></p>\n" +
"\n"+
"</div>\n";

var C16_2_1_8=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.8 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_jbht\"></a><a name=\"CHAPTER16.2.1.8\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Restoring the dwhdb Database</a></span></h4>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>These steps are only applicable on ENIQ Statistics Blade\n" +
"or Multi-Blade servers.</dd></dl><br />\n" +
"<p>\n" +
"It is necessary to recover the <tt class=\"file-path\">dwhdb</tt> database following rollback. These steps are only applicable on\n" +
"the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p>\n" +
"Enable the NAS daemon</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># /usr/bin/systemctl start NASd.service</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl enable NASd.service</b></tt></p>\n" +
"\n" +
"<p>\n" +
"Check that the <tt class=\"file-path\">NASd</tt> service, and the <tt class=\"file-path\">NAS milestone</tt> are in <tt class=\"file-path\">active</tt> state by using the following command.</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># services -s NAS</b></tt></p>\n" +
"\n" +
"<table frame=\"void\" class=\"grd\" rules=\"none\" width=\"100%\">\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"60%\">\n" +
"<p><tt class=\"output\">UNIT</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"40%\">\n" +
"<p><tt class=\"output\">STATE</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"60%\">\n" +
"<p><tt class=\"output\">NASd.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"40%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"60%\">\n" +
"<p><tt class=\"output\">NAS-online.service</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"40%\">\n" +
"<p><tt class=\"output\">active</tt></p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"Recover the <tt class=\"file-path\">dwhdb</tt> database by completing\n" +
"the following steps</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># cd /eniq/bkup_sw/bin</b></tt></p>\n" +
"<p><tt class=\"input\"><b># bash ./recover_iq.bsh [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"\n"+
"</div>\n";

var C16_2_1_9=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.9 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_e0e2\"></a><a name=\"CHAPTER16.2.1.9\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Sybase IQ Recovery Deviation</a></span></h4>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>These steps are only applicable for ENIQ Statistics Blade\n" +
"or Multi-Blade servers.</dd></dl><br />\n" +
"<p>\n" +
"During execution of these steps, the following might be seen:</p>\n" +
"\n" +
"<p><tt class=\"output\">-------------------------------------------------------<br />Stopping the utility db<br />Utility db not online. No need to stop\n" +
"it.<br />Starting utility db <br />Sun Microsystems Inc. SunOS 5.10\n" +
"Generic January 2005 <br />Restoring SYBASE IQ database dwhdb <br />Sun\n" +
"Microsystems Inc. SunOS 5.10 Generic January 2005 <br />Error! The\n" +
"connection to the database was closed by the server. <br />Connection\n" +
"was terminated <br />SQLCODE=-308, ODBC 3 State=\"HY000\"<br />File: \"restore_iq.sql\"\n" +
"on line 1, column 1 RESTORE DATABASE '/eniq/database/dwh_main/dwhdb.db'\n" +
"FROM <br />'/eniq/backup/iq_virtual_bkup/dwhdb_FULL_ENCAP_DUMP' <br />You can continue executing or stop. <br />1. Stop <br />2. Continue <br />Select an option: <br />--------------------------------------------------------</tt></p>\n" +
"<p>\n" +
"If you are prompted for input, then select Option &lsquo;2&rsquo;\n" +
"to continue.</p>\n" +
"\n" +
"<p><tt class=\"output\">-------------------------------------------------------- <br />Select an option: 2 <br />(Continuing after error) <br />Execution\n" +
"time: 23.101 seconds <br />Successfully Restored SYBASE IQ database\n" +
"dwhdb <br />Stopping the utility db <br />Utility db not online. No\n" +
"need to stop it. <br />(root) #: <br />--------------------------------------------------------</tt></p>\n" +
"<p>\n" +
"If required, restart the <tt class=\"file-path\">dwhdb</tt> server\n" +
"to allow some initial database checks and to allow the server to reset\n" +
"an identity cookie before the multiplex can be used.</p>\n" +
"\n" +
"<p>\n" +
"As <tt class=\"file-path\">root</tt>, run the following commands:</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># su &ndash; dcuser</b></tt></p>\n" +
"<p><tt class=\"input\"><b># start_iq '@/eniq/database/dwh_main/dwhdb.cfg' '-n' 'dwhdb'\n" +
"'-iqmc' '10028' '-iqtc' '4297' '-x' 'tcpip{port=2640}' '-dt' '/eniq/database/dwh_temp_dbspace'\n" +
"'/eniq/database/dwh_main/dwhdb.db' '-iqmpx_sn' '1'</b></tt></p>\n" +
"<p><tt class=\"input\"><b># exit</b></tt></p>\n" +
"<p>\n" +
"If the recovery is being run on a Multi-Blade deployment, execute\n" +
"the following step on the ENIQ Statistics Coordinator Server:</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># su &ndash; dcuser</b></tt></p>\n" +
"<p><tt class=\"input\"><b># stop_iq</b></tt></p>\n" +
"<p>\n" +
"During execution of the previous step, a prompt to stop the server\n" +
"appears. Type &lsquo;y&rsquo; and press enter.</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># exit</b></tt></p>\n" +
"\n"+
"</div>\n";

var C16_2_1_10=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.10 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_p65j\"></a><a name=\"CHAPTER16.2.1.10\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Enabling all ENIQ Services</a></span></h4>\n" +
"\n" +
"<p>\n" +
"The commands is run on the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p>\n" +
"Issue the following command as <tt class=\"file-path\">root</tt> user:<br /></p>\n" +
"\n" +
"<p><tt class=\"input\"><b># bash /eniq/admin/bin/manage_deployment_services.bsh -a start\n" +
"-s ALL [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"<p>\n" +
"Check that all services are started (<tt class=\"file-path\">active</tt>) by using the following command: <br /><tt class=\"input\"><b># services -s eniq</b></tt></p>\n" +
"\n" +
"\n"+
"</div>\n";

var C16_2_1_11=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.11 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_9i9g\"></a><a name=\"CHAPTER16.2.1.11\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Enabling Rolling Snapshot Systemd\n" +
"Service</a></span></h4>\n" +
"\n" +
"<p>\n" +
"The commands must be run on all server types in the following order:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p>\n" +
"Issue the following command as <tt class=\"file-path\">root</tt> user:<br /></p>\n" +
"\n" +
"<p><tt class=\"input\"><b># bash /eniq/admin/bin/manage_deployment_services.bsh -a start\n" +
"-s roll-snap</b></tt></p>\n" +
"\n"+
"</div>\n";

var C16_2_1_12=
"<div id=\"content\" class=\"body-content\">\n"+
"<h4><span class=\"CHAPNUMBER\">16.2.1.12 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_fj17\"></a><a name=\"CHAPTER16.2.1.12\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Post Rollback ENIQ Steps</a></span></h4>\n" +
"\n" +
"<p>\n" +
"Due to the nature of the rollback procedure, after completion the\n" +
"user might not be able to run commands in the current directory. </p>\n" +
"\n" +
"<p>\n" +
"The commands must be run on following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"<p><tt class=\"input\"><b># su - dcuser </b></tt></p>\n" +
"<p><tt class=\"input\"><b># bash /eniq/sw/installer/post_rollback.bsh </b></tt></p>\n" +
"\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

