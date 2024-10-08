var C43=
"<div id=\"content\" class=\"body-content\">\n"+
"<h1><span class=\"CHAPNUMBER\">43 &nbsp; </span><span class=\"CHAPTITLE\"><a name=\"id_ceo3\"></a><a name=\"CHAPTER43\" href='javascript:parent.parent.sC2(\"TOP\")' class=\"CHAPLINK\">Appendix - Logging Level Information</a></span></h1>\n" +
"\n" +
"<p>\n" +
"The following tables are intended to give an overview of the logging\n" +
"levels as they are applied on each component:</p>\n" +
"\n" +
"\n" +
"<a name=\"TABLE32\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 32 &nbsp;&nbsp; Logging Level</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Logging Level</p></th>\n" +
"<th align=\"left\" valign=\"top\">\n" +
"\n" +
"<p>Explanation</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>SEVERE</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>An issue that has an adverse effect on the system.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>WARNING</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>An issue to take note of but that does not adversely affect\n" +
"the system.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>INFO</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Information on the current procedure.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>CONFIG</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Rarely used. Was intended to provide info messages for\n" +
"configuration-related components.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>FINE</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>More detail on the procedure, that is, part of a set that\n" +
"is being run</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>FINER</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>Greater detail on the procedure, that is, detail of a sets\n" +
"procedure</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\">\n" +
"<p>FINEST</p>\n" +
"</td>\n" +
"<td align=\"left\">\n" +
"<p>The most detailed view of the procedure, that is, exact\n" +
"line of code being run</p>\n" +
"</td></tr></table>\n" +
"\n" +
"<a name=\"TABLE33\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 33 &nbsp;&nbsp; ENGINE Logging Information Breakdown</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"27%\">\n" +
"\n" +
"<p>Output</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"28%\">\n" +
"\n" +
"<p>Logging Level</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"45%\">\n" +
"\n" +
"<p>Description</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"6\">\n" +
"<p>Aggregation Rule Copy</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Initializing Error<br />Aggregation rule Cache Revalidation\n" +
"did not succeed</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Warning Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>DB Connections established to dwhrep and dwh. <br />Operating\n" +
"in mode <br />DWH successfully updated</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Querying etlrep.Meta_databases 				Found 100 connections <br />Aggregation rule Cache Revalidation did not succeed.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Execution Clause</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"3\">\n" +
"<p>Duplicate Check Action </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>DuplicateCheckAction received a null database connection<br />DuplicateCheckAction <tt class=\"file-path\">failed</tt> Creation\n" +
"of RockFactories in DuplicateCheckAction failed<br />Variable connection\n" +
"was null in DuplicateCheckAction.markDuplicates<br />Variable statement\n" +
"was null in DuplicateCheckAction.markDuplicates<br />Variable context\n" +
"was null in DuplicateCheckAction.markDuplicates<br />duplicateCheckMetaTransferAction\n" +
"was null in DuplicateCheckAction.markDuplicates<br />DuplicateCheckAction.markDuplicatesDuplicateCheckMetaTransferAction.getAction_contents()\n" +
"was null in <br />Marking duplicates in DuplicateCheckAction <tt class=\"file-path\">failed</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>DuplicateCheckAction did not find any entries from DWHType\n" +
"table for tablename <br />DuplicateCheckAction found too many entries\n" +
"from DWHType table for tablename<br />DuplicateCheckAction <tt class=\"file-path\">failed</tt> to evaluate action contents</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"4\">\n" +
"<p>Duplicate Check Action </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>List tableList in setContext was empty</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Starting DuplicateCheckAction<br />Starting to create database\n" +
"connections<br />Trying to create dwh database connection<br />Databaseconnection\n" +
"to dwh created in DuplicateCheckAction<br />Trying to create dwh database\n" +
"connection<br /> Database connections created succesfully <br />Marking\n" +
"duplicates for rawtable name<br /><br />rawTableName<br />columns content<br />column name<br />Executing Query</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finer Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>duplicateCheckMetaTransferAction.getAction_contents()</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>DWH Manager</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>DWHMUpdatePlanAction.execute <tt class=\"file-path\">failed</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Unable to create view for partition</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Error loading action contents</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>CreateViews executing for Tech Pack <br />Migrate executing... <br />Partitioning executing for Tech Pack<br />StorageTime executing for\n" +
"Tech Pack<br />Connection to DWHRep established<br />Connection to DWH\n" +
"established<br />Executing TableCheck in mode<br /><br />Check Tech Pack\n" +
"version ETL &lt;&ndash;&gt;DWH<br />Compare ETL Version &lt;&ndash;&gt; DWH\n" +
"Version + \"\\<br />Version update executing for Tech Pack<br />Sanity\n" +
"Check executing for all Tech Packs<br />Sanity Check executing for\n" +
"Tech Pack<br />SanityCheck successfully finished</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finer Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finest Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"3\">\n" +
"<p>Engine Script </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Failed to connect to Database<br />Failed to connect to\n" +
"License Manager &ndash; Engine does not start <br />Failed to Initialize\n" +
"Engine<br />Unable to Initialize Locate Registry<br />No Execution slots\n" +
"created<br />Database connection details were incorrect.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Engine RMI Reference <br />system property CONF_DIR not\n" +
"defined.<br /> Using default PLUGIN_PATH not defined.<br />Value of\n" +
"property ENGINE_PORT is invalid.<br />Using default Repository database\n" +
"from a URL</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Clean up <tt class=\"file-path\">failed</tt> &ndash; after\n" +
"database connection was not achieved. <br />Error in reading charset\n" +
"encoding from dwhdb database<br />Error in transformer cache initialization<br />Could not create engineThread from (Tech Pack/set) <br />Error while\n" +
"adding startup set to queue</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\">\n" +
"<p>Engine Script</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Gracefully shutting down priority queue <br />Shutting down\n" +
"priority queue <br />Active slots are still running, these slots are\n" +
"stopped<br />Closing execution slots <br />Refreshing Database Lookups\n" +
"Reloading configuration<br />ETLC engine is initializing <br />ETLC\n" +
"Engine Running <br />Starting Up <br />Locking Execution Profile <br />Unlocking Execution Profile <br />Reloading Execution Profile <br />Holding Priority Queue <br />Restarting Priority Queue <br />Starting\n" +
"a Set <br />Set execution finished with status<br />No set exists<br />Refreshing Transformations<br />Reloading Logging Levels<br />Printing\n" +
"Logging Levels<br />Updating Transformations<br /><br />Refreshing Database\n" +
"Lookup<br />Reload properties file<br />Logging status before reload</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\">\n" +
"&nbsp;\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Server registered to already running RMI naming <br />Transfer\n" +
"Engine Initialized<br />Waiting for the engine to initialize before\n" +
"executing set<br />No priority queue in use <br />Starting directly\n" +
"in execution slot <br />Closing execution slots</p><br />\n" +
"<p>Aggregations<br />Update aggregation status to MANUAL 	<br />Update\n" +
"aggregation monitoring status to Worker<br />Execution cancelled because\n" +
"Tech pack is disabled</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"2\">\n" +
"<p>Engine Script</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finer Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>EngineThread initializing<br />EngineThread found Tech pack <br />EngineThread initialized Tech pack<br /> EngineThread getting alarm\n" +
"interfaces<br /> EngineThread did not find any alarm interfaces for\n" +
"set<br /> EngineThread found several interfaces for set<br />EngineThread\n" +
"getting alarm interface reports for an interface<br />EngineThread\n" +
"did not find any alarm reports for interface<br />EngineThread found\n" +
"reports for interface<br />EngineThread getting basetable names for\n" +
"report <br />EngineThread did not find any alarm base tables for report <br />EngineThread found basetables for report <br />EngineThread found\n" +
"basetable for report<br />Database connection initialized<br />Creating\n" +
"an Engine Thread</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>SQL Execution </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Error reading where parameter Exception occurred during\n" +
"execution. <br />Failing set SQL execution <tt class=\"file-path\">failed</tt> to exception <br />Exception occured during execution. <br />Failing\n" +
"set</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Error while trying to fetch UpdateDimSessions ROWSTATUS\n" +
"property<br />Error figuring out partitions for Storage ID<br />Select\n" +
"clause must be defined<br />Illegal level &lt;level&gt;using INFO<br />Error\n" +
"closing JDBC-connection<br />Loader failure (deleting files)</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Starting loading session at &lt;sessionStartTime &gt;<br />Found\n" +
"X number of datafiles<br />Deleting loaded files<br />File loaded to\n" +
"table</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Using only loaded partitions <br />Beginning the execution\n" +
"of &lt;loggerName&gt;<br />Created table list is empty. Using the loaded\n" +
"table list<br />No <tt class=\"file-path\">active</tt> tables found for\n" +
"storageID</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Base Table Name<br />Storage ID<br />SQL Clause&lt;sql clause\n" +
"details&gt;<br />Trying to execute SQL Clause<br />Unparsed SQL: &lt;SQL\n" +
"Clause&gt;<br />Trying to execute sqlClause<br />Executed: sqlClause -\n" +
"Rows Affected &lt;number of rows affected&gt;<br />Added to ignored keys<br />SQLSessionLoader - executing<br />Load table command executed<br />Explicit commit performed</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>SQL Clause details</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Table Cleaner </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Error while reading properties</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Warning Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>&lt;number of &gt; Rows removed from table with datecolumn</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Fine Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finer Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>SQL&lt;SQL details</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Aggregation Status Cache </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Informs the user if the cache has two aggregations of the\n" +
"same type. <br />Informs the user if the database could not be written\n" +
"to</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Informs the user of the cache stats and if a connection\n" +
"is closed</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Informs the user if the cache is initialized</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finer Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Reading the database aggregation<br />Writing the aggregation\n" +
"to the database.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Export</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Could Not Export Tables</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Info Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Executing....</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finer Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Error Committing</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Import</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Could Not Import Tables</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Info Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Executing....</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finer Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Error committing</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Execution Slot </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Default Execution Slot was created<br />Reading from an\n" +
"Execution Slot<br />Execution Slot {Profile saved to Database with <tt class=\"file-path\">active</tt> flag</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Informs the user if there is a problem initializing the\n" +
"Execution Slot Profile List <br />Informs the user if the default Execution\n" +
"slot profile is used	</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Slot held <br />Slot Restarted <br />Informs the user if\n" +
"a profile is being changed <br />What Execution Profile is being used<br />Execution Profile is locked. <br />The default execution slot being\n" +
"used <br />Running execution slots.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Locking Execution Slot <br />Adding an Execution Slot <br />Removing an Execution Slot <br />Removing an Execution Slot from\n" +
"an <tt class=\"file-path\">active</tt> profile <br />Removed an Execution\n" +
"Slot</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>This shows the user what sets are being executed in the\n" +
"Execution Slots. <br />Slot is locked. <br />Slot is busy. <br />Slot\n" +
"list is empty. <br />No free slots.</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Execution Slot Profiles created <br />Profiles locked <br />Execution Slot Profiles reset 	<br />Execution Slot Profile is locked <br />Execution Slot set to <tt class=\"file-path\">active</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"4\">\n" +
"<p>Loader</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Error while trying to fetch UpdateDimSessions ROWSTATUS\n" +
"property<br />Measurement type: is DISABLED, loader not executed, files\n" +
"moved to failed<br />General loader failure. Moving all files to <tt class=\"file-path\">failed</tt>. <br />Unable to delete files. Unable to move\n" +
"files to <tt class=\"file-path\">failed</tt> <br />Load table failed\n" +
"exceptionally, files moved to <tt class=\"file-path\">failed</tt> <br />Move with memory copy <tt class=\"file-path\">failed</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>maxLoadClauseLength was invalid. Ignored</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Files waiting a new partition<br /> Set loaded in total\n" +
"\"+9 totalRowCount +\" rows<br /> Files not loaded, physical table not\n" +
"found<br />Executing load table command for table <br />Load table failed\n" +
"exceptionally, files moved to <tt class=\"file-path\">failed</tt> <br />Files loaded to table<br /> Creating directory </p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"3\">\n" +
"<p>Loader</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Executing...<br /> Successfully loaded<br /> All loader files\n" +
"are waiting for new partition files out of fileNames.size() inserted\n" +
"into SQL</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No UpdateDIMsession action was found from this set<br />Event\n" +
"sent to ETLCEventHandler <br />Load table command executed<br />Explicit\n" +
"commit performed <br />Moving file outputFile.getName()  to  destDir()\n" +
"renameTo <tt class=\"file-path\">failed</tt>.<br />Moving with memory\n" +
"copy</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Statement created <br />Found  tableToFile.size() mappings <br />Files waiting a new partition <br />Succesfully loaded <br />All loader\n" +
"files are waiting for new partition <br />Error closing statement <br />Error committing <br />File moved to <tt class=\"file-path\">failed</tt> <br />SQL velocitytemplate context values: TABLE = TABLE, FILENAMES,\n" +
"LOADERPARAMETERS</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Log Session Loader </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Warning Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Session load failure: Can't parse date from filename<br />Session load failure: Can't find table for storageID date</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Fine Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finer Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finest Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Partitioned Loader</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Directory not found or cannot be read <br />Illegal timestamp\n" +
"format<br />Move with memory copy <tt class=\"file-path\">failed</tt></p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No files found in input directory Reading PhysicalTable\n" +
"data with StorageID<br />Cannot find table for storageID @dateString,\n" +
"but dateString is between current date and last partition endtime\n" +
" &ndash;&gt;waiting for new partition to appear. <br />Cannot find table\n" +
"for storageID @ dateString) No physical tables found for files</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Input files for file different dates 				DateFormat of\n" +
"file is</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Physical table for day dateString filenames.size() files\n" +
"to load<br />Using table tableName for files<br />Failed files moved\n" +
"to failed<br />renameTo <tt class=\"file-path\">failed</tt>. Moving with\n" +
"memory copy</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Storage ID:<br />inDir <br />filename<br />dateString<br />parsed\n" +
"Date fileName &ndash;&gt;dateString</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Priority Queue</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Queue <br />Null Thread removed from the Queue<br />Check\n" +
"Time Limit <tt class=\"file-path\">failed</tt> exceptionally</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Set changing priority<br />Set dropped because of null queue\n" +
"time limit <br />Set dropped because of null set priority</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Fine Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Set added to the Priority Queue <br /> Queue is closed.\n" +
"Set is rejected</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Running Slots: Execution slot number<br /> Free Execution\n" +
"Slot Received : Set not excepted<br /> Active Execution Slot Profile\n" +
"checks <tt class=\"file-path\">failed</tt>. <br />Priority Queue was\n" +
"empty <br />Priority Queue was null. Nothing is done.<br />Priority\n" +
"Queue on Hold</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Transfer Action</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Warning Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Info Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Skipping... Action is not enabled</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Wrote into Meta_statuses: &lt;status&gt;</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Finest Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Update Dim Session </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Update DIM session <tt class=\"file-path\">failed</tt> <br />Error closing statement <br />Error finally committing</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Getting session information from raw tables for measurement\n" +
"type <br />Updating ROWSTATUS from raw table<br />Updating YEAR_IDs\n" +
"from raw table</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Executing...<br /> Saving session information. SessionID:\n" +
"BatchID:<br />Successfully updated</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>SQL Clause</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Session ID <br />Batch ID <br />Row Count <br />Date Time\n" +
"ID <br />Time Level <br />Source</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"27%\" rowspan=\"7\">\n" +
"<p>Update Monitored Types </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Severe Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Parameter startDateModifier is invalid. Using default 0<br />Parameter lookbackDays is invalid. Using default 7<br />Update monitored\n" +
"types failed<br />error closing statement<br />error finally committing</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Inserting new monitored type into monitoredtypes table<br />Inserted OK <br />Tech pack name not found from TPactivations. <br />Type name is empty. No monitored type added</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Executing...<br />Successfully updated</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>SQL Clause</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"28%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"45%\">\n" +
"<p>Type Name<br />Time Level</p>\n" +
"</td></tr></table>\n" +
"<dl class=\"note\"><dt><b>Note: &nbsp;</b></dt><dd>To check the log for the Engine, perform the following:\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">Reload Configuration\n" +
"<ul class=\"unoL\">\n" +
"<li class=\"UNORD\">This shows all the logging status for each part of the\n" +
"system that is being logged.</li>\n" +
"<li class=\"UNORD\">The Caches are also reloaded. <br />Physical Table Cache,\n" +
"Activation Cache, Aggregation Rule Cache</li></ul></li></ul></dd></dl><br />\n" +
"\n" +
"<a name=\"TABLE34\"></a>\n" +
"<table class=\"tblcnt\" width=\"100%\">\n" +
"<caption>Table 34 &nbsp;&nbsp; Logging Information for Export Module</caption>\n" +
"<tr valign=\"top\">\n" +
"<th align=\"left\" valign=\"top\" width=\"17%\">\n" +
"\n" +
"<p>Output</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"19%\">\n" +
"\n" +
"<p>Logging Level</p></th>\n" +
"<th align=\"left\" valign=\"top\" width=\"64%\">\n" +
"\n" +
"<p>Description</p></th></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"17%\" rowspan=\"7\">\n" +
"<p>ETLCExport </p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>ERROR while creating connection</p><br />\n" +
"<p>ERROR reading properties file: ETLCExport.properties</p><br />\n" +
"<p>ERROR in exporting XML file &lt; outputFileName &gt; </p><br />\n" +
"<p>ERROR closing outputfile</p><br />\n" +
"<p>ERROR while closing connection</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>No Warning Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>EXPORTING: &lt; tableList &gt;</p><br />\n" +
"<p>All tables exported successfully</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>No Fine Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>Using sql statement: &lt; sqlStatement &gt;</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>No Finest Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"17%\" rowspan=\"7\">\n" +
"<p>ETLCImport</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Severe</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>ERROR while creating connection</p><br />\n" +
"<p>ERROR reading properties file: ETLCExport.properties 	</p><br />\n" +
"<p>ERROR in importing XML file: &lt; filename &gt; </p><br />\n" +
"<p>	ERROR in rollback</p><br />\n" +
"<p>ERROR while closing connection</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Config</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>No Config Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Warning</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>No Warning Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Info</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>Executing clause</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Fine</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>No Fine Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Finer</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>No Finer Logging</p>\n" +
"</td></tr>\n" +
"<tr valign=\"top\">\n" +
"<td align=\"left\" width=\"19%\">\n" +
"<p>Finest</p>\n" +
"</td>\n" +
"<td align=\"left\" width=\"64%\">\n" +
"<p>XML Document started</p><br />\n" +
"<p>XML Document ended</p><br />\n" +
"<p>XML element started: &lt; name &gt; </p><br />\n" +
"<p>XML element ended:  &lt; name &gt;</p><br />\n" +
"<p>replacing &lt; oldValue &gt; with  &lt; newValue &gt;</p><br />\n" +
"<p>original: &lt; columnValue &gt; </p><br />\n" +
"<p>new:  &lt; columnValue &gt; </p><br />\n" +
"<p>creating statement: </p><br />\n" +
"<p>closing statement</p>\n" +
"</td></tr></table>\n" +
"\n" +
"\n" +
"<br />\n"+
"</div>\n";

