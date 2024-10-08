var C30=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">30 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_etah\"></a><a name=\"CHAPTER30\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Adding New Features</a></span></h1>\n" +
"\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>This is an optional procedure.</dd></dl><br />\n" +
"<p>\n" +
"If user wants to add new features to the installed or upgraded\n" +
"server, run the following commands on these server types as <tt class=\"file-path\">root</tt> user:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">ENIQ Statistics Standalone Server</li>\n" +
"<li class=\"UNORD\">ENIQ Statistics Coordinator Server</li></ul>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Download the feature software that the user wants to install\n" +
"and copy it to <tt class=\"LITERALMONO\">&lt;path_to_feature_sw&gt;</tt> on MWS.<p>\n" +
"For information to set up the <tt class=\"file-path\">feature_sw</tt>, see section, <em class=\"LOWEMPH\">Setup Feature Software and Feature\n" +
"Zip Directories</em> in  <em class=\"LOWEMPH\">ENIQ Statistics X86 Blade\n" +
"Upgrade Procedure</em>, <a href='javascript:parent.parent.parent.showAnchor(\"EniqUpgradeProc\")' class=\"xref\">Reference [6]</a> and Section <em class=\"LOWEMPH\">Setup Feature Software and Feature Zip Directories</em> in <em class=\"LOWEMPH\">ENIQ Statistics Rack Upgrade</em>, <a href='javascript:parent.parent.parent.showAnchor(\"RackUpgradeProcedure\")' class=\"xref\">Reference [22]</a>. </p>\n" +
"</dd></dl><br />\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>Run the following command as a <tt class=\"file-path\">root</tt> user<p>\n" +
"<tt class=\"input\"><b># cd /eniq/admin/bin</b></tt></p>\n" +
"<p>\n" +
"<tt class=\"input\"><b># bash ./manage_eniq_oss.bsh -a update [-h <i class=\"var\">&lt;eniq_alias&gt;</i>] -d <i class=\"var\">&lt;path_to_feature_sw&gt;</i> [-l <i class=\"var\">&lt;path_to_logfile&gt;</i>]</b></tt></p>\n" +
"</dd></dl><br />\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd><tt class=\"file-path\">eniq_alias</tt> refers to the given\n" +
"name of the OSS server by ENIQ Statistics. This is in the form <tt class=\"file-path\">eniq_oss_&lt;n&gt;</tt><p>\n" +
"This script must be run for each managed OSS if the user wants\n" +
"to add additional interfaces for all managed OSS servers.</p>\n" +
"<p>\n" +
"<tt class=\"file-path\">&lt;path_to_feature_sw&gt;</tt> refers to the\n" +
"location on the MWS where features are downloaded.</p>\n" +
"</dd></dl><br />\n" +
"\n"+
"</div>\n";

