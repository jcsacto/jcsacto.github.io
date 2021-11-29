mos = {
    "objectName": "ASSETOPSKD",
    "className": "psdi.app.asset.AssetOpSKDSet",
    "description": "Asset Operational Schedule",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETOPSKDID",
    "primaryKeyColumns": [
        "ASSETNUM",
        "SITEID",
        "STARTDATETIME",
        "OPHRS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETOPSKD",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETOPSKD",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETOPSKD",
            "parentKeys": "PERSONID",
            "targetKeys": "ENTERBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Entered By",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETOPSKD",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ASSETNUM",
            "required": true,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset  number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site of the Asset",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "STARTDATETIME",
            "required": true,
            "persistent": true,
            "title": "Schedule Start",
            "remarks": "The date and time that the operating schedule for the asset starts.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATETIME",
            "required": false,
            "persistent": true,
            "title": "Schedule End",
            "remarks": "The date and time that the operating schedule for the asset ends.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OPHRS",
            "required": true,
            "persistent": true,
            "title": "Operating Hours",
            "remarks": "Duration of the operating schedule. The asset will be unavailable for maintenance during its operating schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "Comments about the operating schedule.",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "ENTERBY",
            "required": true,
            "persistent": true,
            "title": "Entered By",
            "remarks": "Name of user who entered the record.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ENTERDATE",
            "required": true,
            "persistent": true,
            "title": "Entered Date",
            "remarks": "The date the asset schedule was entered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
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
            "attributeName": "SKDTYPE",
            "required": true,
            "persistent": true,
            "title": "Schedule Type",
            "remarks": "Type of schedule. For example, choose daily, weekly, monthly, or custom.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETOPSKDID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASSETOPSKD",
            "source": "ASSET",
            "remarks": "Relationship to assetopskd table, used to find all the asset operational schedule dates for a asset.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "SINGLE"
        }
    ]
}