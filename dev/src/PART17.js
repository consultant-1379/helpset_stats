var C17=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">17 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_r1ng\"></a><a name=\"CHAPTER17\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Manage DDC</a></span></h1>\n" +
"\n" +
"<p>\n" +
"Diagnostics Data Collection (DDC) is a collection of scripts and\n" +
"utilities which perform periodic system analysis and dimensioning\n" +
"of the running ENIQ system. </p>\n" +
"\n" +
"<p>\n" +
"DDC consists of a single Systemd service and three <tt class=\"file-path\">cron</tt> jobs. These are responsible for collecting data\n" +
"throughout the day, and collating the data into a single gzipped tar\n" +
"file. </p>\n" +
"\n" +
"<p>\n" +
"Historical data for the previous 28 days is maintained, and data\n" +
"older than this is removed from the system. The data collected by\n" +
"DDC is intended to act as an aid for Ericsson engineers if there is\n" +
"a fault in the ENIQ software or the network. DDC is installed as part\n" +
"of ENIQ installation, and is enabled by default. No ongoing maintenance\n" +
"or user interaction is required.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>DDC performs a vital role in the diagnosis of faults and\n" +
"performance bottlenecks in an ENIQ installation. DDC is not known\n" +
"to have any impact on the performance of the ENIQ server. Disabling\n" +
"this service might reduce the effectiveness of third-line support\n" +
"fault analysis and require more effort to troubleshoot faults.</dd></dl><br />\n" +
"\n"+
"</div>\n";

var C17_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">17.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_uab8\"></a><a name=\"CHAPTER17.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Managing the DDC Service</a></span></h2>\n" +
"\n" +
"<p>\n" +
"The commands must be run on all the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li>\n" +
"<li class=\"UNORD\">ENIQ Engine Server</li>\n" +
"<li class=\"UNORD\">ENIQ Reader Servers</li></ul>\n" +
"<p>\n" +
"Enter the following command to check the status of the DDC service:<br /><tt class=\"input\"><b># services -s ddc</b></tt></p>\n" +
"\n" +
"<p>\n" +
"To <tt class=\"file-path\">enable</tt> DDC, use the following command:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl enable ddc</b></tt></p>\n" +
"\n" +
"<p>\n" +
"To <tt class=\"file-path\">disable</tt> DDC, use the following command:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl disable ddc</b></tt></p>\n" +
"\n" +
"<p>\n" +
"If the DDC service is in a <tt class=\"file-path\">failed</tt> state,\n" +
"it is necessary to clear the service.</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b># /usr/bin/systemctl clear ddc</b></tt></p>\n" +
"\n" +
"\n"+
"</div>\n";

var C17_2=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">17.2 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_hyq4\"></a><a name=\"CHAPTER17.2\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Managing DDC Collection of SAN/NAS\n" +
"Metrics</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Diagnostic Data Collection for SAN and SFS/VA is enabled by default.</p>\n" +
"\n" +
"<p>\n" +
"The presence of <b>/eniq/log/ddc_data/config/MONITOR_CLARIION</b> file and <b>/eniq/log/ddc_data/config/MONITOR_SFS</b> suggests\n" +
"that the metric collection is enabled for SAN and SFS/VA respectively.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>These steps are only applicable for ENIQ Statistics Blade\n" +
"and Multi-Blade servers.\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li></ul>\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul></dd></dl><br />\n" +
"<p>\n" +
"As <tt class=\"file-path\">root</tt> user, run the following commands:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">To <tt class=\"file-path\">disable</tt> or <tt class=\"file-path\">enable</tt> the metric collection for SAN, use the command:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b># cd /eniq/admin/bin </b></tt></li>\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b># ./manageSanDataCollection.bsh -m <i class=\"var\">&lt;enable/disable&gt;</i></b></tt><p>\n" +
"The log location for the command execution is <tt class=\"file-path\"> /eniq/log/assureddc</tt> and the log name is <tt class=\"file-path\">manageSanDataCollection.bsh.log</tt></p>\n" +
"</li></ul></li>\n" +
"<li class=\"UNORD\">To <tt class=\"file-path\">disable</tt> or <tt class=\"file-path\">enable</tt> the metric collection for SFS/VA, use the command:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b># cd /eniq/admin/bin</b></tt></li></ul><br />\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"><tt class=\"input\"><b># ./manageSfsDataCollection.bsh -m <i class=\"var\">&lt;enable/disable&gt;</i></b></tt><p>\n" +
"The log location for the command execution is /eniq/log/assureddc\n" +
"and the log name is manageSfsDataCollection.bsh.log.</p>\n" +
"</li></ul></li></ul>\n" +
"\n"+
"</div>\n";

var C17_3=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">17.3 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_pgds\"></a><a name=\"CHAPTER17.3\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Managing DDC Collection of Unity\n" +
"SAN Metrics</a></span></h2>\n" +
"\n" +
"<p>\n" +
"Diagnostic Data Collection for Unity SAN is disabled by default. </p>\n" +
"\n" +
"<p>\n" +
"The presence of <tt class=\"input\"><b>/eniq/log/ddc_data/config/MONITOR_UNITY</b></tt> file suggests that the metric collection is enabled for Unity SAN. </p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>These steps are only applicable for ENIQ Statistics Blade\n" +
"and Multi-Blade servers. </dd></dl><br />\n" +
"<p>\n" +
"Run the following steps as <tt class=\"file-path\">root</tt> user\n" +
"on the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ (Standalone) Server</li>\n" +
"<li class=\"UNORD\">ENIQ Coordinator Server</li></ul>\n" +
"\n" +
"<ol class=\"STEPLIST\"><li class=\"STEPLIST\" id=\"THSSTYLE0\">To check the hidden file <tt class=\"file-path\">/ericsson/storage/san/plugins/unity/etc/.ddc.conf</tt> use following command:<p>\n" +
"<tt class=\"input\"><b># ls -lart /ericsson/storage/san/plugins/unity/etc/.ddc.conf</b></tt></p>\n" +
"<p>\n" +
"If file is not present then run following commands to create hidden\n" +
"file <tt class=\"file-path\">.ddc.conf.</tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># cd /ericsson/storage/san/plugins/unity/lib</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># ./encryptdecrypt.py --encrypt &lt;Unity Password&gt;</b></tt></p>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd> <tt class=\"file-path\">&lt;Unity Password&gt;</tt> is password\n" +
"value for Unity.</dd></dl><br /></li><li class=\"STEPLIST\" id=\"THSSTYLE0\">To <tt class=\"file-path\">disable</tt> or <tt class=\"file-path\">enable</tt> the metric collection for Unity SAN, use the\n" +
"command:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\"># cd /eniq/admin/bin</li>\n" +
"<li class=\"UNORD\"># ./manageUnityDataCollection.bsh -m &lt; <tt class=\"file-path\">enable</tt>/ <tt class=\"file-path\">disable</tt>></li></ul></li></ol>\n" +
"<p>\n" +
"The log location for the command execution is /eniq/log/assureddc\n" +
"and the log name is manageUnityDataCollection.bsh.log.</p>\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

