mos = {
    "objectName": "MAXTHREADLOGGER",
    "className": "com.ibm.tivoli.maximo.log.ThreadLoggerSet",
    "description": "Thread Logger",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXTHREADLOGGERID",
    "primaryKeyColumns": [
        "CONTEXTNAME",
        "CONTEXTUSER"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXTHREADLOGGER",
            "targetObject": "MAXTHREADLOGGERDET",
            "parentKeys": "CONTEXTNAME, CONTEXTUSER",
            "targetKeys": "CONTEXTNAME, CONTEXTUSER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Max Thread Logger",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "MAXTHREADLOGGER",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTEXTUSER",
            "required": false,
            "persistent": true,
            "title": "User Name",
            "remarks": "User Name.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENABLED",
            "required": true,
            "persistent": true,
            "title": "Is Enabled",
            "remarks": "Is Enabled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENABLEALLLOGGERS",
            "required": true,
            "persistent": true,
            "title": "Is All Loggers Enabled",
            "remarks": "Is All Loggers Enabled",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTHREADLOGGERID",
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
            "name": "MAXTHREADLOGGERDET",
            "target": "MAXTHREADLOGGERDET",
            "remarks": "Thread logger details.",
            "whereClause": "contextname=:contextname and contextuser=:contextuser",
            "cardinality": null
        },
        {
            "name": "MAXTHREADLOGGERDETID",
            "target": "MAXTHREADLOGGERDET",
            "remarks": "Thread logger details.",
            "whereClause": "maxthreadloggerid=:maxthreadloggerid",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}