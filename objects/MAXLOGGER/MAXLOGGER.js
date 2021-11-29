mos = {
    "objectName": "MAXLOGGER",
    "className": "psdi.util.logging.MaxLoggerSet",
    "description": "Maximo Loggers",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXLOGGERID",
    "primaryKeyColumns": [
        "LOGKEY"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXLOGGER",
            "targetObject": "MAXLOGGER",
            "parentKeys": "MAXLOGGERID",
            "targetKeys": "PARENTLOGGERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Logger",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXLOGGER",
            "targetObject": "MAXLOGGER",
            "parentKeys": "MAXLOGGERID",
            "targetKeys": "PARENTLOGGERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent Logger",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXLOGGERID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGGER",
            "required": true,
            "persistent": true,
            "title": "Logger",
            "remarks": "A logger records events about a system or application component. For example the workflow logger logs all workflow events.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGLEVEL",
            "required": true,
            "persistent": true,
            "title": "Log Level",
            "remarks": "The log level that is assigned to a logger controls the type of information that is logged. Any events with a severity greater than the specified level are logged, too. For example, if you assign a log level of INFO to a logger, events that are FATAL, ERROR and DEBUG events are also logged.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGKEY",
            "required": true,
            "persistent": true,
            "title": "Key",
            "remarks": "String representing the logger definition.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTLOGGERID",
            "required": false,
            "persistent": true,
            "title": "Parent Logger Id",
            "remarks": "The unique id of the parent logger if it's not a root logger.",
            "sameAsAttribute": "MAXLOGGERID",
            "sameAsObject": "MAXLOGGER"
        },
        {
            "attributeName": "APPENDERS",
            "required": false,
            "persistent": true,
            "title": "Appenders",
            "remarks": "An appender stores the configurations of log files and log statements that are associated with a logger. You can assign more than one logger to an appender. You can also assign a single logger to multiple appenders.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Is the logger active?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Internal",
            "remarks": "Indicate whether this is an internal logger.  Internal loggers can not be deleted.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INHERITEDAPPENDERS",
            "required": false,
            "persistent": false,
            "title": "Inherited Appenders",
            "remarks": "Appenders inherited from ancestor loggers.",
            "sameAsAttribute": "APPENDERS",
            "sameAsObject": "MAXLOGGER"
        },
        {
            "attributeName": "GENPROP",
            "required": false,
            "persistent": false,
            "title": "Logging Properties",
            "remarks": "Non-persistent column to store generated logging.properties.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFLTFOLDER",
            "required": false,
            "persistent": false,
            "title": "Root Logging Folder",
            "remarks": "The designated root folder where Maximo log files are written. Each logging request is forwarded to the root logging folder. The account to which the files are written must have read and write access to the Maximo server.",
            "sameAsAttribute": "MAXIMODEFAULT",
            "sameAsObject": "MAXPROP"
        },
        {
            "attributeName": "PMRTITLEBEGIN",
            "required": false,
            "persistent": false,
            "title": "Start Message for the Custom Log",
            "remarks": "The custom message that indicates where the statements and messages for a scenario or issue start being written in the log file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMRDETAILSBEGIN",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "The custom message that indicates where the statements and messages for a scenario or issue start being written in the log file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMRTITLEEND",
            "required": false,
            "persistent": false,
            "title": "End Message for the Custom Log",
            "remarks": "The custom message that indicates where the statements and messages for a scenario or issue stop being written in the log file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMRDETAILSEND",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "The custom message that indicates where the statements and messages for a scenario or issue stop being written in the log file.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "APPENDERS",
            "target": "MAXLOGAPPENDER",
            "remarks": "Relationship to get all appenders.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDLOGGERS",
            "target": "MAXLOGGER",
            "remarks": "Relationship to get all the child loggers for a specific root logger.",
            "whereClause": "parentloggerid=:maxloggerid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIMOROOTLOGGER",
            "target": "MAXLOGGER",
            "remarks": "Relationship to get the Maximo root logger",
            "whereClause": "logkey='log4j.logger.maximo'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROOTLOGGERS",
            "target": "MAXLOGGER",
            "remarks": "Relationship to get all root loggers.",
            "whereClause": "parentloggerid is null and logkey!='log4j.logger.maximo'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFAULTFOLDERPROP",
            "target": "MAXPROP",
            "remarks": "Relationship to get the default logging folder property",
            "whereClause": "propname='mxe.logging.rootfolder'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CHILDLOGGERS",
            "source": "MAXLOGGER",
            "remarks": "Relationship to get all the child loggers for a specific root logger.",
            "whereClause": "parentloggerid=:maxloggerid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIMOROOTLOGGER",
            "source": "MAXLOGGER",
            "remarks": "Relationship to get the Maximo root logger",
            "whereClause": "logkey='log4j.logger.maximo'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROOTLOGGERS",
            "source": "MAXLOGGER",
            "remarks": "Relationship to get all root loggers.",
            "whereClause": "parentloggerid is null and logkey!='log4j.logger.maximo'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXLOGGER",
            "source": "MAXTHREADLOGGERDET",
            "remarks": "TableDomain for Logger.",
            "whereClause": "parentloggerid is null and logkey!='log4j.logger.maximo'",
            "cardinality": null
        }
    ]
}