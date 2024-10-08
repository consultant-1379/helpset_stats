var C9=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">9 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ruhd\"></a><a name=\"CHAPTER9\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Updating OSS-RC IP Address</a></span></h1>\n" +
"\n" +
"<p>\n" +
"To change the IP Address of the OSS-RC alias, run these commands\n" +
"on the following server types:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics (standalone)</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator</li></ul>\n" +
"<p>\n" +
"<tt class=\"input\"><b>#[root] cd /eniq/admin/bin/</b></tt></p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>#[root] bash ./manage_oss_ip.bsh -h <i class=\"var\">&lt;eniq_alias&gt;</i> [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>The &lt;eniq_alias&gt; is a parameter used to show the connection\n" +
"status of OSS-RC host ENIQ. The specified hostname alias must be in\n" +
"the correct format. The alias information is located in <em class=\"LOWEMPH\">/etc/hosts</em>.<p>\n" +
"The following is the example of the alias types:</p>\n" +
"<p>\n" +
"eniq_oss_&lt;n&gt;</p>\n" +
"</dd></dl><br />\n" +
"<p>\n" +
"When prompted, enter the new IP address of the hostname alias:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>Enter the IP address associated with eniq_oss_1</b></tt></p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>Press enter for the default [1.1.1.1]</b></tt></p>\n" +
"\n" +
"<p>\n" +
"When prompted to confirm the entered details, select <b>Y</b> or <b>y</b> to make updates.</p>\n" +
"\n" +
"<p><tt class=\"output\">Do you wish to continue to update the OSS Server details (Yy/Nn)</tt></p>\n" +
"<p>\n" +
"SPARC OSS-RC systems must be remounted. </p>\n" +
"\n" +
"<p>\n" +
"See Section 6, <strong class=\"MEDEMPH\">Mount OSS_RC Master Server on ENIQ</strong> in <a href='javascript:parent.parent.parent.showAnchor(\"OSSRCConfigForEniq\")' class=\"xref\">Reference [20]</a> for instructions.</p>\n" +
"\n" +
"\n"+
"</div>\n";

