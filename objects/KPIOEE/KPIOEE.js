mos = {
    "objectName": "KPIOEE",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Table to hold OEE KPI data.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "KPIOEEID",
    "primaryKeyColumns": [
        "PARTNUM",
        "ASSETNUM",
        "OEEDATE",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "KPIOEE",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 66",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "KPIOEE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "KPIOEE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "KPIOEE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PARTNUM",
            "required": true,
            "persistent": true,
            "title": "Part",
            "remarks": "Identifies the part number.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the part.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Identifier of the asset where the part was produced.",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "Location of the asset.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SCHEDQTY",
            "required": true,
            "persistent": true,
            "title": "Scheduled Quantity",
            "remarks": "The number of units scheduled to be produced in a month.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODQTY",
            "required": true,
            "persistent": true,
            "title": "Produced Quantity",
            "remarks": "The number of units produced in a month.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFECTQTY",
            "required": true,
            "persistent": true,
            "title": "Defective Quantity",
            "remarks": "The number of defective units produced in a month.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OEEDATE",
            "required": true,
            "persistent": true,
            "title": "OEE Date",
            "remarks": "The date for the production data.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site where the parts were produced.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization ",
            "remarks": "Organization where the parts were produced.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "KPIOEEID",
            "required": true,
            "persistent": true,
            "title": "KPIOEEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the KPIOEE to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}