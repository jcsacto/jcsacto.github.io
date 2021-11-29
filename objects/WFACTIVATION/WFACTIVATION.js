mos = {
    "objectName": "WFACTIVATION",
    "className": "psdi.workflow.WFActivationSet",
    "description": "WFActivation     table holds AutoInit reservations.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WFACTIVATIONID",
    "primaryKeyColumns": [
        "PROCESSNAME",
        "OWNERTABLE",
        "OWNERID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "WFACTIVATION",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OWNERTABLE",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "The type of Mbo Object this activation is for.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WFACTIVATION",
            "parentKeys": "PERSONID",
            "targetKeys": "CREATEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who created the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": true,
            "title": "Process",
            "remarks": "Name     of the process to AutoInit",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "OWNERTABLE",
            "required": true,
            "persistent": true,
            "title": "Owner Table",
            "remarks": "Table name of the controlled record",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OWNERID",
            "required": true,
            "persistent": true,
            "title": "Owner ID",
            "remarks": "Unique ID of the controlled record",
            "sameAsAttribute": "OWNERID",
            "sameAsObject": "WFINSTANCE"
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Create Date",
            "remarks": "Date when this record was created",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEBY",
            "required": false,
            "persistent": true,
            "title": "Created By",
            "remarks": "Logged in user when this record was created",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "WFACTIVATIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}