mos = {
    "objectName": "MAXROWSTAMP",
    "className": "psdi.app.system.MaxRowStampSet",
    "description": "Table to keep track  the current maximo row stamps of the tables.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXROWSTAMPID",
    "primaryKeyColumns": [
        "TABLENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXROWSTAMP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 93",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TABLENAME",
            "required": true,
            "persistent": true,
            "title": "Table Name",
            "remarks": "Table name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CURMAXROWSTAMP",
            "required": true,
            "persistent": true,
            "title": "Maximum Rowstamp",
            "remarks": "Current maximo rowstamp of the table.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date when the data is collected",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXROWSTAMPID",
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