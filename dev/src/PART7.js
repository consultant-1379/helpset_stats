var C7=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><a name=\"BusinessIntellServer\"></a><span class=\"CHAPNUMBER\">7 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_uk7p\"></a><a name=\"CHAPTER7\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Business\n" +
"Intelligence Server</a></span></h1>\n" +
"\n" +
"<p>\n" +
"Ericsson Network IQ Web Portal Graphical User Interface is used\n" +
"by end users to access the Ericsson Network IQ database through Business\n" +
"Intelligence Server.</p>\n" +
"\n" +
"<p>\n" +
"ENIQ Web Portal brings the following additional features to BusinessObjects\n" +
"BILaunchPad:</p>\n" +
"\n" +
"\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Storing of prompt values</li>\n" +
"<li class=\"UNORD\">Navigating and grouping reports</li></ul>\n" +
"<p>\n" +
"For more information on standard BusinessObjects functionality,\n" +
"see <a href='javascript:parent.parent.parent.showAnchor(\"rf-BO\")' class=\"xref\">Reference [5]</a>.</p>\n" +
"\n" +
"\n"+
"</div>\n";

var C7_1=
"<div id=\"content\" class=\"body-content\">\n"+
"<h2><span class=\"CHAPNUMBER\">7.1 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_cbbd\"></a><a name=\"CHAPTER7.1\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Setting Date Prompt Rules</a></span></h2>\n" +
"\n" +
"<p>\n" +
"The date rules settings file is an ASCII configuration file.<br /> By default, the file is stored at:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"file-path\">&lt;Tomcat_Installation_Dir&gt;\\webapps\\AnalyticalReporting\\webportal\\prompt\\defaultdate.properties</tt></p>\n" +
"\n" +
"<p>\n" +
"The rules are listed as name and value pairs in consecutive lines.\n" +
"Use any operating system text editor to edit the default rules in\n" +
"the file. <br />Rule format is:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b><i class=\"var\">&lt;Prompt name&gt;</i>= <i class=\"var\">&lt;Rule&gt;</i></b></tt></p>\n" +
"\n" +
"<p>\n" +
"where <tt class=\"file-path\">Rule</tt> is a string that includes <tt class=\"file-path\">lastworkingday</tt> keyword and/or a counting rule,<br /> <tt class=\"LITERALMONO\">lastworkingday</tt> denotes the last working day calculated\n" +
"backwards from the current day.<br /> The counting rule is:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>[-]&lt;number&gt;[d,w,m]</b></tt></p>\n" +
"\n" +
"<p>\n" +
"The rule specifies how many days, weeks, or months from the current\n" +
"day (or the last working day if the keyword <tt class=\"LITERALMONO\">lastworkingday</tt> is used) are calculated. This new date is the default prompt value. <br />For example:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>Date:=lastworkingday(-2w)</b></tt></p>\n" +
"\n" +
"<p>\n" +
"means that the default value of the <b>Date:</b> prompt\n" +
"is two weeks before the last working day.</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>Next date:=(+2d)</b></tt></p>\n" +
"\n" +
"<p>\n" +
"means that the default value of the <b>Next date:</b> prompt is two days after the current date.</p>\n" +
"\n" +
"<p>\n" +
"The date rule file includes a special name value pair:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>weekend=&lt;SATURDAY,SUNDAY&gt;</b></tt></p>\n" +
"\n" +
"<p>\n" +
"This lists the non-working days that are skipped when the last\n" +
"working day is calculated. The possible values are:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"input\"><b>SUNDAY<br />MONDAY<br />TUESDAY<br />WEDNESDAY<br />THURSDAY<br />FRIDAY<br />SATURDAY</b></tt></p>\n" +
"\n" +
"<p>\n" +
"If the weekend definition row is missing from the date rule settings\n" +
"file, the keyword <tt class=\"LITERALMONO\">lastworkingday</tt> always means the\n" +
"previous day.</p>\n" +
"\n" +
"<p>\n" +
"The default date rules setting file is:</p>\n" +
"\n" +
"<p>\n" +
"<tt class=\"LITERALMONO\">weekend = SATURDAY, SUNDAY</tt><br />\n" +
"<tt class=\"LITERALMONO\">Date:=lastworkingday</tt><br />\n" +
"<tt class=\"LITERALMONO\">Date(s):=lastworkingday</tt><br />\n" +
"<tt class=\"LITERALMONO\">First date:=lastworkingday(-1w)</tt><br />\n" +
"<tt class=\"LITERALMONO\">Last Date:=lastworkingday</tt><br />\n" +
"<tt class=\"LITERALMONO\">First Date (3m):=lastworkingday(-3m)</tt></p>\n" +
"\n" +
"\n" +
"\n"+
"</div>\n";

