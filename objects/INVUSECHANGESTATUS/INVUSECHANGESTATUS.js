mos = {
    "objectName": "INVUSECHANGESTATUS",
    "className": "psdi.app.inventory.virtual.InvUseChangeStatusSet",
    "description": "Parameters for Inventory Status Change",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "Change to Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "ASOFDATE",
            "required": true,
            "persistent": false,
            "title": "Status Date",
            "remarks": "Date of the status change",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Memo for status change",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVUSENUM",
            "required": false,
            "persistent": false,
            "title": "Usage",
            "remarks": "Inventory Usage Number",
            "sameAsAttribute": "INVUSENUM",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "INVUSESTATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Inventory Usage Status",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "INVUSE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "BINFLAG",
            "required": false,
            "persistent": false,
            "title": "Stage bin flag",
            "remarks": "Sets the stagebin",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STAGEBIN",
            "required": false,
            "persistent": false,
            "title": "Stage Bin",
            "remarks": "Stage Bin",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GENSTATUSACTION",
            "required": true,
            "persistent": false,
            "title": "From general change status action",
            "remarks": "From general change status action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SINGLEINVUSE",
            "required": false,
            "persistent": false,
            "title": "Single Inventory Usage Document.",
            "remarks": "Used by the application to tell the set that there is a single InvUse document.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": false,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INVUSECHANGESTATUS",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='INVUSESTATUS' and value=:invusestatus",
            "cardinality": null
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='INVUSESTATUS' and value=:invusestatus",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "INVUSECHANGESTATUS",
            "source": "INVUSE",
            "remarks": "Relationship to the non-persistent INVUSECHANGESTATUS table for changing status. (No where clause).",
            "whereClause": null,
            "cardinality": null
        }
    ]
}