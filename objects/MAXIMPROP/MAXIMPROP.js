mos = {
    "objectName": "MAXIMPROP",
    "className": "psdi.iface.app.im.MaxIMPropSet",
    "description": "IM Properties",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIMPROPID",
    "primaryKeyColumns": [
        "IMNAME",
        "IMVERSION",
        "PROPERTY"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXIM",
            "targetObject": "MAXIMPROP",
            "parentKeys": "IMNAME, IMVERSION",
            "targetKeys": "IMNAME, IMVERSION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Module",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIMPROP",
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
            "attributeName": "MAXIMPROPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMNAME",
            "required": true,
            "persistent": true,
            "title": "Integration Module Name",
            "remarks": "IM name",
            "sameAsAttribute": "IMNAME",
            "sameAsObject": "MAXIM"
        },
        {
            "attributeName": "IMVERSION",
            "required": true,
            "persistent": true,
            "title": "Integration Module Version",
            "remarks": "IM Version",
            "sameAsAttribute": "IMVERSION",
            "sameAsObject": "MAXIM"
        },
        {
            "attributeName": "PROPERTY",
            "required": true,
            "persistent": true,
            "title": "Property Name",
            "remarks": "IM property name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Property Value",
            "remarks": "IM property value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changeby",
            "remarks": "Changeby",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change date",
            "remarks": "Change date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXIM",
            "target": "MAXIM",
            "remarks": "The Integration Module that the property belongs to. The resulting set will contain one row.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXIMPROP",
            "source": "MAXIM",
            "remarks": "Relationship to the MAXIMPROP table, used to find all properties for IM . The resulting set will contain one or multiple rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        }
    ]
}