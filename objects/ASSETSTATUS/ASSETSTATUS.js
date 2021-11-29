mos = {
    "objectName": "ASSETSTATUS",
    "className": "psdi.app.asset.AssetStatusSet",
    "description": "The ASSETSTATUS Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETSTATUSID",
    "primaryKeyColumns": [
        "ASSETSTATUSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "CALENDAR",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Calendar when the Asset''s status was changed.",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Status History",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order that caused the Asset''s status to change.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Order Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ISRUNNING",
            "required": true,
            "persistent": true,
            "title": "Up",
            "remarks": "Asset Status",
            "sameAsAttribute": "ISRUNNING",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Asset Status Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "User Signature",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DOWNTIME",
            "required": true,
            "persistent": true,
            "title": "Downtime",
            "remarks": "Standing Time",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Calendar Code",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "CODE",
            "required": false,
            "persistent": true,
            "title": "Code",
            "remarks": "The downtime code for this transaction",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPERATIONAL",
            "required": true,
            "persistent": true,
            "title": "Operational",
            "remarks": "Is this downtime Operational or Nonoperational?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Asset Location when asset status changed.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ASSETSTATUSID",
            "required": true,
            "persistent": true,
            "title": "ASSETSTATUSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASSETSTATUS",
            "source": "ASSET",
            "remarks": "Relationship to the AssetStatus table, used to find all status for a given asset. (assetstatus.assetnum = asset.assetnum). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "UPDOWNSTATUSDATE",
            "source": "ASSET",
            "remarks": "Relationship to the AssetStatus table, used to find the most recent asset up/down status date.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and changedate=(select max(changedate) from assetstatus where assetnum=:assetnum and siteid=:siteid and isrunning=:isrunning)",
            "cardinality": null
        }
    ]
}