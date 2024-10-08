var C33=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">33 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ig8r\"></a><a name=\"CHAPTER33\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Automatic Housekeeping</a></span></h1>\n" +
"\n" +
"<p>\n" +
"ENIQ has several automatic housekeeping activities that are described\n" +
"in <a href='javascript:parent.parent.parent.showAnchor(\"tbl-house\")' class=\"xref\"> Table 24</a>.</p>\n" +
"\n" +
"<p><a name=\"tbl-house\"></a>\n" +
"Contact Ericsson Customer Support, if the user wants to change\n" +
"the default intervals.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE24\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 24 &nbsp;&nbsp; Automatic Housekeeping Activities</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"23%\">\n" +
"\n" +
"<p>Action Name</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"17%\">\n" +
"\n" +
"<p>Interval</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"28%\">\n" +
"\n" +
"<p>Target Directory or Database</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"32%\">\n" +
"\n" +
"<p>Description</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\" rowspan=\"2\">\n" +
"<p>Cleanup_logdir</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"17%\" rowspan=\"2\">\n" +
"<p>Every Monday at 4 am.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes all files older than 65 days, except upgrade related\n" +
"files that are stored under the <tt class=\"file-path\">/eniq/log/sw_log/upgrade</tt> directory.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/data/rejected</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes all files older than 65 days, except upgrade related\n" +
"files that are stored under <tt class=\"file-path\">/eniq/log/sw_log/upgrade</tt> directory.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Diskmanager_DWH_BASE</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"17%\">\n" +
"<p>Every day at 9 pm.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/engine/DWH_BASE/</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Creates an archive zip file of files older than 7 days. </p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>Diskmanager_/eniq/data/pmdata/eniq_oss_1/alarmData</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"17%\">\n" +
"<p>Every 15 minutes.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/data/pmdata/eniq_oss_1/alarmData</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>If the <tt class=\"file-path\">alarmData</tt> directory exists,\n" +
"the script removes any files in the directory that are older than\n" +
"15 minutes.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\" rowspan=\"4\">\n" +
"<p>Diskmanager_[INTERFACE_NAME]</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"17%\" rowspan=\"4\">\n" +
"<p>Every day at 5 am.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/archive/<i class=\"var\">[OSS_NAME]</i>/<i class=\"var\">[TYPE]</i>/archive/</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes any file older than 15 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/archive/<i class=\"var\">[OSS_NAME]</i>/<i class=\"var\">[TYPE]</i>/processed/	</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes any file older than 15 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/archive/<i class=\"var\">[OSS_NAME]</i>/<i class=\"var\">[TYPE]</i>/double/</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes any file older than 15 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/archive/<i class=\"var\">[OSS_NAME]</i>/<i class=\"var\">[TYPE]</i>/failed/</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes any file older than 15 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\" rowspan=\"3\">\n" +
"<p>Diskmanager_[TECHPACK_NAME]</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"17%\" rowspan=\"3\">\n" +
"<p>Every day at 8 pm.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/iqloader/<i class=\"var\">[TECHPACK_NAME]</i>/</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Creates an archive zip file of files older than 2 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/data/rejected/<i class=\"var\">[TECHPACK_NAME]</i>/	</tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Creates an archive zip file of files older than 2 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p><tt class=\"file-path\">/eniq/log/sw_log/engine/<i class=\"var\">[TECHPACK_NAME]</i></tt>	</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Creates an archive zip file of files older than 2 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\" rowspan=\"2\">\n" +
"<p>Diskmanager_DWH_MONITOR</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"17%\" rowspan=\"2\">\n" +
"<p>Every day at 8 pm. </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\" rowspan=\"2\">\n" +
"<p><tt class=\"file-path\">/eniq/data/etldata/<i class=\"var\">[TECHPACK_NAME]_[MEASUREMENT_TYPE_NAME]/failed</i></tt></p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Creates an archive zip file of <tt class=\"file-path\">failed</tt> files older than 7 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes archive.zip files older than 60 Days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>eniq-esm</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"17%\">\n" +
"<p>Always</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Local ENIQ Systemd services</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Monitors local ENIQ Systemd services. Clears and starts\n" +
"services that have transitioned to a <tt class=\"file-path\">failed</tt> state.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\" rowspan=\"8\">\n" +
"<p>cleanup_log_files</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"17%\" rowspan=\"8\">\n" +
"<p>Every day at 01:00 am</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>/ericsson/storage/log/</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes nas_cmd_ and nas_screen log files older than 180\n" +
"days and deletes log files older than 90 days when partition use crosses\n" +
"80%.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>/eniq/log/sw_log/asa/</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes backup_repdb_ ,stop_repdb_,start_rebdb_ log files\n" +
"older than 180 days and deletes log files older than 90 days when\n" +
"partition use crosses 80%.</p><br />\n" +
"<p>Compresses backup_repdb_ and stop_repdb_ log files older than\n" +
"7 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>/eniq/log/sw_log/iq/</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Compresses .iqmsg.,stderr_,sr vlog_ log files.</p><br />\n" +
"<p>Deletes iqtracedwhdb.log files older than 180 days and deletes\n" +
"log files older than 90 days when partition use crosses 80%. </p><br />\n" +
"<p>Compresses iqtracedwhdb.log files older than 7 days.</p><br />\n" +
"<p>Deletes .iqmsg, stderr_log, srvlog_log files older than 90 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p></p>\n" +
"<p>/eniq/log/sw_log/iq/DbChecklogs/</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deleted _cron_dbcc_log_ log file older than 30 days and\n" +
"deletes log files older than 15 days when partition use crosses 80%.</p><br />\n" +
"<p>Compresses _cron_dbcc_log_ log file older than 7 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>/eniq/log/feature_management_log/</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Compresses _call_dtrace log file.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>/eniq/local_logs/eniq_services_log/debug_log/</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes services_debug_log file older than 180 days.</p><br />\n" +
"<p>Compresses services_debug_log file older than 7 days.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>/eniq/local_logs/NASd/</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Compresses NASd.log_ files and deletes log files older\n" +
"than 180 days when partition use crosses 80%.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>/eniq/local_logs/connectd/</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes <tt class=\"file-path\">connectd</tt> log file older\n" +
"than 180 days only when partition use crosses 80%.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"23%\">\n" +
"<p>cleanup_log_files</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"17%\">\n" +
"<p>Every day at 01:00 am</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>/eniq/local_logs/core_dumps/</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"32%\">\n" +
"<p>Deletes any files older than 90 days and deletes log files\n" +
"older than 30 days when partition use crosses 80%.</p>\n" +
"</td></tr></table>\n" +
"\n"+
"</div>\n";

