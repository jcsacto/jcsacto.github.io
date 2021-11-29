mos = {
    "objectName": "COMMLOGDOCS",
    "className": "psdi.common.commlog.CommLogDocSet",
    "description": "Attached document for a logged communication.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "COMMLOGDOCSID",
    "primaryKeyColumns": [
        "COMMLOGDOCSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMLOG",
            "targetObject": "COMMLOGDOCS",
            "parentKeys": "COMMLOGID",
            "targetKeys": "COMMLOGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Logs",
            "longDescription": null
        },
        {
            "objectName": "DOCINFO",
            "targetObject": "COMMLOGDOCS",
            "parentKeys": "DOCINFOID",
            "targetKeys": "DOCINFOID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Communication Log Documents",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "COMMLOGID",
            "required": true,
            "persistent": true,
            "title": "Comm Log",
            "remarks": "Identifier of the communication log entry.",
            "sameAsAttribute": "COMMLOGID",
            "sameAsObject": "COMMLOG"
        },
        {
            "attributeName": "COMMLOGDOCSID",
            "required": true,
            "persistent": true,
            "title": "COMMLOGDOCSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOCINFOID",
            "required": false,
            "persistent": true,
            "title": "DocInfo ID",
            "remarks": "Unique id of docinfo that this commlog doc refers to.",
            "sameAsAttribute": "DOCINFOID",
            "sameAsObject": "DOCINFO"
        },
        {
            "attributeName": "URLNAME",
            "required": false,
            "persistent": true,
            "title": "Url Name",
            "remarks": "Path to the saved document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WEBURL",
            "required": false,
            "persistent": false,
            "title": "Web URL",
            "remarks": "Non-persistent column to hold translated url for document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to get the original doclink record for a commlog attachment.",
            "whereClause": "docinfoid=:docinfoid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "COMMLOGDOCS",
            "source": "COMMLOG",
            "remarks": "Relationship to get attached documents of a commLog record.",
            "whereClause": "commlogid=:commlogid",
            "cardinality": "UNDEFINED"
        }
    ]
}