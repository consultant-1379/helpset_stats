var C29=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><a name=\"ConnectdMonitor\"></a><span class=\"CHAPNUMBER\">29 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_hmev\"></a><a name=\"CHAPTER29\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Connectd Monitor\n" +
"Daemon</a></span></h1>\n" +
"\n" +
"<p>\n" +
"<tt class=\"file-path\">Connectd</tt>, is a Systemd service that\n" +
"monitors the NFS Mounts between ENIQ and each OSS/NAS. <tt class=\"file-path\">Connectd</tt> runs in the background and constantly checks\n" +
"for any OSS that has been added to the ENIQ server, or, in a Multi-Blade\n" +
"deployment on the Engine Blade.</p>\n" +
"\n" +
"<p>\n" +
"Each OSS setup on the system has a subdirectory in <tt class=\"file-path\">/eniq/connectd/mount_info/</tt>. This subdirectory contains\n" +
"configuration data for that OSS. <tt class=\"file-path\">Connectd</tt> cycles through each OSS, and enables or disables an NFS monitoring\n" +
"script.</p>\n" +
"\n" +
"<p>\n" +
"The monitoring script sets up and monitors the NFS Mounts between\n" +
"ENIQ and each OSS/NAS. The script sets up and uses an SSH tunnel (if\n" +
"indicated in the configuration data for that OSS).</p>\n" +
"\n" +
"<p>\n" +
" If the connection to the OSS is lost, for example, because of\n" +
"network problems or OSS reboot, <tt class=\"file-path\">connectd</tt> unmounts the file systems and shuts down the SSH tunnel (if one\n" +
"was initially setup).</p>\n" +
"\n" +
"<p>\n" +
"When connectivity is restored, <tt class=\"file-path\">connectd</tt> mounts the file systems, and sets up a SSH tunnel (if necessary).\n" +
"If ENIQ cannot see the OSS file systems or mount points, check the\n" +
"log files in <tt class=\"file-path\">/eniq/local_logs/connectd</tt> to\n" +
"verify that the file systems are correctly mounted.</p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>In Multi-Blade deployment, the <tt class=\"file-path\">connectd</tt> service must be <tt class=\"file-path\">active</tt> on both Coordinator\n" +
"and Engine blade. The status of the <tt class=\"file-path\">connectd</tt> service is decided based on the smf_contract_config file and must\n" +
"not be intervened with manually.</dd></dl><br />\n" +
"\n"+
"</div>\n";

