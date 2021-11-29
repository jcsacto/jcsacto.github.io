mos = {
    "objectName": "MODDOWNTIMEHIST",
    "className": "psdi.app.asset.virtual.ModDowntimeHistSet",
    "description": "Modify Downtime History",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "STARTDATE",
        "ENDDATE",
        "ASSETNUM",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "NP date time field representing the start date.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "End Date",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "STARTWONUM",
            "required": false,
            "persistent": false,
            "title": "Start Work Order",
            "remarks": "NP field for starting work order number.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ENDWONUM",
            "required": false,
            "persistent": false,
            "title": "End Work Order",
            "remarks": "End Workorder Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DOWNTIME",
            "required": false,
            "persistent": false,
            "title": "Downtime",
            "remarks": "Downtime Hours",
            "sameAsAttribute": "DOWNTIME",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "STARTCODE",
            "required": false,
            "persistent": false,
            "title": "Start Code",
            "remarks": "Start Code",
            "sameAsAttribute": "CODE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "ENDCODE",
            "required": false,
            "persistent": false,
            "title": "End Code",
            "remarks": "End Code",
            "sameAsAttribute": "CODE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "STARTOPERATIONAL",
            "required": false,
            "persistent": false,
            "title": "Start Operational Type",
            "remarks": "Start Operational",
            "sameAsAttribute": "OPERATIONAL",
            "sameAsObject": "DOWNTIMEREPORT"
        },
        {
            "attributeName": "ENDOPERATIONAL",
            "required": false,
            "persistent": false,
            "title": "End Operational Type",
            "remarks": "End Operational",
            "sameAsAttribute": "OPERATIONAL",
            "sameAsObject": "DOWNTIMEREPORT"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Assetnum",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": false,
            "title": "Site",
            "remarks": "Siteid",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to ASSET object",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the MODDOWNTIMEHIST to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MODDOWNTIMEHIST",
            "source": "ASSET",
            "remarks": "Relationship to non-persistent MODDOWNTIMEHIST object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MODDOWNTIMEHIST",
            "source": "WORKORDER",
            "remarks": "Relationship to non-persistent MODDOWNTIMEHIST object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}