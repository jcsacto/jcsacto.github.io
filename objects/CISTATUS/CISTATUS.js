mos = {
    "objectName": "CISTATUS",
    "className": "psdi.app.ci.CIStatusSet",
    "description": "CI Status table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CISTATUSID",
    "primaryKeyColumns": [
        "CISTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "CISTATUS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "CINUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CISTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CISTATUSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CINUM",
            "required": true,
            "persistent": true,
            "title": "Configuration Item",
            "remarks": "Identifier of the Authorized CI",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of the Authorized CI",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CI"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "The date status of the Authorized CI was changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Signature of the user who changed the status",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Memo",
            "remarks": "Status change memo",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CISTATUS",
            "source": "CI",
            "remarks": "Relationship to the CIStatus table, used to find cistatus records for a given CI",
            "whereClause": "cinum=:cinum",
            "cardinality": "UNDEFINED"
        }
    ]
}