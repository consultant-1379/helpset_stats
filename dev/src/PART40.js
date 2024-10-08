var C40=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">40 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ubpc\"></a><a name=\"CHAPTER40\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">ENIQ Services</a></span></h1>\n" +
"\n" +
"<p>\n" +
"In <a name=\"tbl-EniqServices\" href='javascript:parent.parent.parent.showAnchor(\"tbl-EniqServices\")' class=\"xref\"> Table 31</a>, each ENIQ service and other\n" +
"important services are described.</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE31\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 31 &nbsp;&nbsp; ENIQ and other important services</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"24%\">\n" +
"\n" +
"<p>Service</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"51%\">\n" +
"\n" +
"<p>Description</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"26%\">\n" +
"\n" +
"<p>Runs on which server in Multi-Blade setup</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-rmiregistry.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Responsible for communication between 2 services running\n" +
"on different servers of the Coordinator Engine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Coordinator</p><br />\n" +
"<p>Engine</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-licmgr.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Fetches license related information from Sentinel</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-repdb.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>A database service for REPDB (SQL Anywhere) operations</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-dwhdb.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Service responsible for dwhdb IQ server operations</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-webserver.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Responsible for running all web applications</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-engine.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Engine is the main service of the platform that is used\n" +
"to run all actions scheduled by the scheduler</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Engine</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-lwphelper.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Lwphelper is responsible for running the commands triggered\n" +
"by the engine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Engine</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-fls.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Fls is responsible for creating the symbolic links for\n" +
"the PM file</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Engine</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-scheduler.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Scheduler is a platform clock that runs every second and\n" +
"checks for sets to be executed</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Coordinator</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-dwh_reader.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Responsible for all database read and write operations.\n" +
"Same service is responsible for read operations on reader server and\n" +
"for write operations on writer server</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>Dwh_reader_1</p><br />\n" +
"<p>Dwh_reader_2</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-esm.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Monitors local ENIQ Systemd services. Clears and starts\n" +
"any services that has gone into a <tt class=\"file-path\">failed</tt> state</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>All</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>NASd.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Service to monitor and mount NAS.</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>All</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>NAS-online.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>Milestone to indicate if NAS FileSystems are available.\n" +
"Restarts all ENIQ services if NAS filesystems are not available. </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>All</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>hostsync.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>A service introduced for Blades Service to monitor NAS\n" +
"for updates to hosts <tt class=\"file-path\">master</tt> file and update\n" +
"local hosts file if necessary</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>All</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"24%\">\n" +
"<p>eniq-roll-snap.service</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"51%\">\n" +
"<p>The rolling snapshot is a self-maintaining mechanism. It\n" +
"creates and deletes snapshots of the ENIQ Statistics server when required</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"26%\">\n" +
"<p>All</p>\n" +
"</td></tr></table>\n" +
"<p>\n" +
"Further details of each of these and other services, including\n" +
"dependencies and location of log files, are found by executing the\n" +
"following command:</p>\n" +
"\n" +
"<p><tt class=\"input\"><b># systemctl status <i class=\"var\">&lt;service_name&gt;</i></b></tt></p>\n" +
"\n"+
"</div>\n";

