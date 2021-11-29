mos = {
    "objectName": "PLUSCSPOTCHECK",
    "className": "psdi.plusc.app.workorder.PlusCSpotCheckSet",
    "description": "Tool Spot Check Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PLUSCSPOTCHECKID",
    "primaryKeyColumns": [
        "PLUSCSPOTCHECKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 116",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, STDASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 117",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "PERSONID",
            "targetKeys": "CHECKBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PLUSCSPOTCHECK",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order Number",
            "remarks": "Work Order Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SPOTCHECKSTATUS",
            "required": true,
            "persistent": true,
            "title": "Spot Check Status",
            "remarks": "Spot Check Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LDKEY",
            "required": false,
            "persistent": true,
            "title": "Comments",
            "remarks": "Comments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHECKTYPE",
            "required": false,
            "persistent": true,
            "title": "Check Type",
            "remarks": "Check Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHECKDATE",
            "required": true,
            "persistent": true,
            "title": "Checked Date",
            "remarks": "Checked Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHECKBY",
            "required": true,
            "persistent": true,
            "title": "Checked By",
            "remarks": "Checked By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site ID",
            "remarks": "Site ID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Org ID",
            "remarks": "Org ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset Number",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STDASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Standard Asset Number",
            "remarks": "Standard Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item Number",
            "remarks": "Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "STDITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Standard Item Number",
            "remarks": "Standard Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "PLUSCSPOTCHECKID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
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
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum = :assetnum",
            "cardinality": null
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": null,
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCASPOTCHECK",
            "source": "ASSET",
            "remarks": "Relationship to the PLUSCSPOTCHECK table through the WORKORDER table for the View Spot Check History dialog",
            "whereClause": "siteid = :siteid and wonum in ( select wo.wonum from workorder wo, pluscspotcheck spotc where wo.wonum = spotc.wonum and spotc.siteid=:siteid and spotc.siteid = wo.siteid and spotc.assetnum = :assetnum )",
            "cardinality": null
        },
        {
            "name": "PLUSCSPOTCHECK",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ]
}