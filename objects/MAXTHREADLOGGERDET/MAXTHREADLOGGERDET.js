mos = {
    "objectName": "MAXTHREADLOGGERDET",
    "className": "com.ibm.tivoli.maximo.log.ThreadLoggerDetailsSet",
    "description": "Thread Logger Details",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXTHREADLOGGERDETID",
    "primaryKeyColumns": [
        "CONTEXTNAME",
        "CONTEXTUSER",
        "LOGGER"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXTHREADLOGGER",
            "targetObject": "MAXTHREADLOGGERDET",
            "parentKeys": "CONTEXTNAME, CONTEXTUSER",
            "targetKeys": "CONTEXTNAME, CONTEXTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Max Thread Logger",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXTHREADLOGGERDET",
            "parentKeys": "PERSONID",
            "targetKeys": "CONTEXTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTEXTNAME",
            "required": true,
            "persistent": true,
            "title": "Context Name",
            "remarks": "Context Name",
            "sameAsAttribute": "CONTEXTNAME",
            "sameAsObject": "MAXTHREADLOGGER"
        },
        {
            "attributeName": "CONTEXTUSER",
            "required": false,
            "persistent": true,
            "title": "User Name",
            "remarks": "User Name",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "LOGGER",
            "required": true,
            "persistent": true,
            "title": "Logger",
            "remarks": "A logger records events about a system or application component. For example the workflow logger logs all workflow events.",
            "sameAsAttribute": "LOGGER",
            "sameAsObject": "MAXLOGGER"
        },
        {
            "attributeName": "LOGLEVEL",
            "required": false,
            "persistent": true,
            "title": "Log Level",
            "remarks": "The log level that is assigned to a logger controls the type of information that is logged. Any events with a severity greater than the specified level are logged, too. For example, if you assign a log level of INFO to a logger, events that are FATAL, ERROR and DEBUG events are also logged.",
            "sameAsAttribute": "LOGLEVEL",
            "sameAsObject": "MAXLOGGER"
        },
        {
            "attributeName": "MAXTHREADLOGGERID",
            "required": true,
            "persistent": true,
            "title": "MAXTHREADLOGGER Id",
            "remarks": "MAXTHREADLOGGER Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTHREADLOGGERDETID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXLOGGER",
            "target": "MAXLOGGER",
            "remarks": "TableDomain for Logger.",
            "whereClause": "parentloggerid is null and logkey!='log4j.logger.maximo'",
            "cardinality": null
        },
        {
            "name": "MAXUSER",
            "target": "MAXUSER",
            "remarks": "TableDomain for Person.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXTHREADLOGGERDET",
            "source": "MAXTHREADLOGGER",
            "remarks": "Thread logger details.",
            "whereClause": "contextname=:contextname and contextuser=:contextuser",
            "cardinality": null
        },
        {
            "name": "MAXTHREADLOGGERDETID",
            "source": "MAXTHREADLOGGER",
            "remarks": "Thread logger details.",
            "whereClause": "maxthreadloggerid=:maxthreadloggerid",
            "cardinality": null
        }
    ]
}