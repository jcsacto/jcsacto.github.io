mos = {
    "objectName": "INBOUNDCOMMCFG",
    "className": "psdi.common.emailstner.InboundCommCfgSet",
    "description": "Table defines EmailListner Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "INBOUNDCOMMCFGID",
    "primaryKeyColumns": [
        "EMAILADDRESS",
        "MAILSERVER"
    ],
    "logicalRelationships": [
        {
            "objectName": "INBOUNDCOMMCFG",
            "targetObject": "INBCOMMSECURITY",
            "parentKeys": "EMAILADDRESS, MAILSERVER",
            "targetKeys": "EMAILADDRESS, MAILSERVER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inbound Communication Configuration",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "INBOUNDCOMMCFG",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKINSTANCE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "CRONTASKDEF",
            "targetObject": "INBOUNDCOMMCFG",
            "parentKeys": "CRONTASKNAME",
            "targetKeys": "CRONTASKNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "INBOUNDCOMMCFG",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INBOUNDCOMMCFGID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILADDRESS",
            "required": true,
            "persistent": true,
            "title": "E-mail Address",
            "remarks": "Identifies the e-mail address of the e-mail account for the configuration. The address must be of the form name@domain. For example, customer_service@company.com or service.desk@company.net. Together with the mail server, this value must be unique. The e-mail address can be up to 40 characters in length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the e-mail listener configuration, or the purpose of the e-mail account. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAILSERVER",
            "required": true,
            "persistent": true,
            "title": "Mail Server",
            "remarks": "Identifies the mail server used with the e-mail acount for this configuration, in the form of a valid IP address or fully qualified hostname. Togather with the e-mail address, this value must be unique. The value for the mail server can be up to 40 characters in length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORT",
            "required": false,
            "persistent": true,
            "title": "Port",
            "remarks": "Identifies the port number on which the mail server communicates with a mail client. Maximo automatically inserts a port number when you select a value in the Protocol field. The default value for the IMAP protocol is 143. The default value for the MAPI protocol is 135. The default value for the POP3 protocol lis 110. You can edit the port number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILFOLDER",
            "required": true,
            "persistent": true,
            "title": "E-mail Folder",
            "remarks": "Identifies the name of the directory (folder) on the mail server that holds the e-mail messages for the account. The default value is INBOX. The e-mail folder name can be up to 10 characters in length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILPASSWORD",
            "required": true,
            "persistent": true,
            "title": "E-mail Password",
            "remarks": "Identifies the secret series of characters that let you log into the mail server and open the e-mail folder of the e-mail account. Passwords can be alphanumeric and up to 20 characters in length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AGEUOM",
            "required": false,
            "persistent": true,
            "title": "Age Unit of Measure",
            "remarks": "Used in conjunction with the Age Threshold field to mark the point in time when an e-mail associated with this configuration can be marked for deletion on the mail server. Click the Select Value button to choose from the following supported units of measure: MINUTES, HOURS, DAYS, WEEKS, and MONTHS. The default value is DAYS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WFPROCESS",
            "required": true,
            "persistent": true,
            "title": "Workflow Process",
            "remarks": "Workflow process used with this e-mail listener configuration. The default value is IBEP (InBound E-mail Processor), which creates new service requests or updates existing service requests depending on the contents of the Subject line of an e-mail message. The workflow process name can be up to 10 characters in length. Click the Detail Menu button to choose an existing process or Go To Workflow Designer to create a new workflow process for use with this configuration.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "ADMINEMAIL",
            "required": false,
            "persistent": true,
            "title": "Administrator E-mail",
            "remarks": "Identifies the e-mail address for the system administrator responsible for the configuration. Maximo sends error notifications for this configuration to this e-mail address. The e-mail address can be up to 255 characters in length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREPROCESSOR",
            "required": true,
            "persistent": true,
            "title": "Preprocessor",
            "remarks": "Java class that parses the Subject line of the incoming e-mails to determine whether an e-mail is a new request for help or an update to an existing service request. The default value is psdi.common.emailstner.Preprocessor. You can change the preprocessor. The value in the Preprocessor field can be up to 50 characters in length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJKEYDELIMITER",
            "required": true,
            "persistent": true,
            "title": "Object Key Delimiter",
            "remarks": "One or more characters that need to be placed into an incoming e-mail's Subject line, which enables the preprocessor to distinguish whether an e-mail is a new requet for help or an update to an existing service request. Users sending e-mails to this configuration must place these characters on either side of the service request key when sending updates to an existing service request. The default value is ##. You can change this default value. Since the delimiter must be unique, choose less-commonly used characters or symbols. The value for the object key delimiter can be up to 5 characters in length.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Specifies whether the e-mail account for this configuration is being polled by the E-mail Listener. If the box is selected, the E-mail Listener polls the e-mail account based on the frequency or schedule specified in the Schedule field. If the check box is cleared (the default), E-mail listener does not poll the e-mail account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILDELETION",
            "required": true,
            "persistent": true,
            "title": "E-mail Deleted",
            "remarks": "Specifies whether you want Maximo to automatically mark for deletion any e-mail records on the mail server. If the check box is selected, the E-mail Listener takes the values in the Age Threshold and Age Unit of Measure fields and uses them to mark e-mails for deletion at set intervals off of the mail server. Your implementation determines whether a mail administrator or the mail server itself actually deletes the mail from the server. If the check box is cleared (the default), the E-mail Listener leaves any \"\"read\"\" e-mail on the mail server untouched. In this case, it is the mail administrator's responsibility to delete the e-mails on the mail server manually.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRONTASKNAME",
            "required": true,
            "persistent": true,
            "title": "Cron Task Name",
            "remarks": "Dedicated programming script used for the e-mail listener functionality that Maximo runs automatically and on a fixed schedule. The predefined value is LSNRCRON.",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "CRONTASKINSTANCE",
            "required": true,
            "persistent": true,
            "title": "Cron Task Instance",
            "remarks": "Specifies the instance of the LSNRCRON cron task that is associated with this configuration. Maximo automatically creates a cron task instance for each e-mail listener configuration you define.",
            "sameAsAttribute": "CRONTASKNAME",
            "sameAsObject": "CRONTASKDEF"
        },
        {
            "attributeName": "CONNFACTORY",
            "required": false,
            "persistent": true,
            "title": "Queue Connection Factory",
            "remarks": "JMS Connection Factory",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUEUE",
            "required": false,
            "persistent": true,
            "title": "Processing Queue",
            "remarks": "JMS Queue",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "longdescription column",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AGETHRESHOLD",
            "required": false,
            "persistent": true,
            "title": "Age Threshold",
            "remarks": "Used in conjunction with the Age Unit of Measure field to mark the point in time when an e-mail associated with this configuration can be marked for deletion on the mail server. The age threshold must be a positive integer value and can be up to four characters in length. The default value is seven (7).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROTOCOL",
            "required": true,
            "persistent": true,
            "title": "Protocol",
            "remarks": "Format used for transmitting data between the mail server and the mail client. Click the Select Value button to choose from the following supported protocols: IMAP, MAPI, and POP3. When you select a protocol, Maximo automatically inserts a port number in the Port field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "SCHEDULE",
            "required": true,
            "persistent": false,
            "title": "Schedule",
            "remarks": "Schedule string that indicates how often or when you want the E-mail Listener to poll for incoming e-mails on the account, for example, every day at 11:00 PM or every two minutes. Click the Select Date and Time button to define the schedule or frequency. The default frequency is every five minutes.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTRUN",
            "required": false,
            "persistent": false,
            "title": "Last Run Time",
            "remarks": "Last Run Time Stamp",
            "sameAsAttribute": "LASTRUN",
            "sameAsObject": "TASKSCHEDULER"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASYNC",
            "required": true,
            "persistent": true,
            "title": "Queue-based Processing",
            "remarks": "E-mail processing mode",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTLS",
            "required": true,
            "persistent": true,
            "title": "Enable STARTTLS",
            "remarks": "Enable STARTTLS",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "COMMLOG",
            "target": "COMMLOG",
            "remarks": "Relationship to the COMMLOG table used to get all communication log entries for a inboundcommcfg",
            "whereClause": "ownerid=:inboundcommcfgid and ownertable='INBOUNDCOMMCFG'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRCRONDEF",
            "target": "CRONTASKDEF",
            "remarks": "crontaskdef for inboundcommcfg",
            "whereClause": "crontaskname=:crontaskname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRLASTRUN",
            "target": "CRONTASKINSTANCE",
            "remarks": "Relationship for LASTRUN",
            "whereClause": "crontaskname = :crontaskname and instancename = :crontaskinstance",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRONTASKINSTANCE",
            "target": "CRONTASKINSTANCE",
            "remarks": "Relationship between INBOUNDCOMMCFG and CRONTASKINSTANCE",
            "whereClause": "crontaskname=:crontaskname and instancename = :crontaskinstance",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DATESELECTOR",
            "target": "DATESELECTOR",
            "remarks": "date selector pattern for Email Listener",
            "whereClause": "pattern = :schedule",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INBSECURITY",
            "target": "INBCOMMSECURITY",
            "remarks": "all security records for listener configuration",
            "whereClause": "emailaddress= :emailaddress and mailserver =:mailserver",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INBOUNDCOMM",
            "target": "INBOUNDCOMM",
            "remarks": "inboundcomm resord for inboundcommcfg",
            "whereClause": "emailaddress = :emailaddress and mailserver = :mailserver",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURGEINB",
            "target": "INBOUNDCOMM",
            "remarks": "all inboundcomm records with status not in NEW,INPROCESS or WORKFLOW",
            "whereClause": "emailaddress = :emailaddress and mailserver = :mailserver and status not in (select value from synonymdomain where domainid='EMAILSTATUS' and maxvalue in ('NEW','INPROCESS','WORKFLOW'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LSNRDELETE",
            "target": "INBOUNDCOMM",
            "remarks": "active inboundcomm records for inboundcommcfg",
            "whereClause": "emailaddress = :emailaddress and mailserver = :mailserver and status not in (select value from synonymdomain where domainid='EMAILSTATUS' and maxvalue in ('INVALID','COMPLETE','ERROR'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFPROCESS",
            "target": "WFPROCESS",
            "remarks": "Relationship between INBOUNDCOMMCFG and WFPROCESS",
            "whereClause": "processname=:wfprocess",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LSNRCFG",
            "source": "INBOUNDCOMM",
            "remarks": "inboundcommcfg record for inboundcomm",
            "whereClause": "emailaddress = :emailaddress and mailserver = :mailserver",
            "cardinality": "UNDEFINED"
        }
    ]
}