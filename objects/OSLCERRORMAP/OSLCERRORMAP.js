mos = {
    "objectName": "OSLCERRORMAP",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OslcErrorMapSet",
    "description": "Map application errors to HTTP error codes",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "OSLCERRORMAPID",
    "primaryKeyColumns": [
        "ERRORGROUP",
        "ERRORKEY"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXMESSAGES",
            "targetObject": "OSLCERRORMAP",
            "parentKeys": "MSGKEY, MSGGROUP",
            "targetKeys": "ERRORKEY, ERRORGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Message",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ERRORGROUP",
            "required": true,
            "persistent": true,
            "title": "Error Group",
            "remarks": "The error group code.",
            "sameAsAttribute": "MSGGROUP",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "ERRORKEY",
            "required": false,
            "persistent": true,
            "title": "Error Key",
            "remarks": "The error key code.",
            "sameAsAttribute": "MSGKEY",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "HTTPERRORCODE",
            "required": true,
            "persistent": true,
            "title": "HTTP Error Code",
            "remarks": "The HTTP error code that can be mapped to the error message.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCERRORMAPID",
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
            "name": "MAXMESSAGES",
            "target": "MAXMESSAGES",
            "remarks": "Display Messsage description from maxMessages. THis relation will return 1 row.",
            "whereClause": "msggroup=:errorgroup and msgkey=:errorkey",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}