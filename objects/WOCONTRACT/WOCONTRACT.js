mos = {
    "objectName": "WOCONTRACT",
    "className": "psdi.app.workorder.WOContractSet",
    "description": "Table for Warranty Contracts associated with a WO",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOCONTRACTID",
    "primaryKeyColumns": [
        "WOCONTRACTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSET",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 167",
            "longDescription": null
        },
        {
            "objectName": "ASSET",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset covered by contract work.",
            "longDescription": null
        },
        {
            "objectName": "CONTRACT",
            "targetObject": "WOCONTRACT",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link Work Order and Contract",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of contract work.",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOCONTRACT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link to Contract covering Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WOCONTRACTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Work Order Number",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Warranty Contract Number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Contract Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Org Id",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site Id",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ASSET",
            "required": false,
            "persistent": true,
            "title": "Asset/Location",
            "remarks": "Assetnum or location",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ASSETDESC",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Asset or Location description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "target": "CONTRACT",
            "remarks": null,
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum  and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the WOCONTRACT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOCONTRACT",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the WOCONTRACT table; necessary for validation of the WarrantyExist field.",
            "whereClause": "wonum=:wonum  and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCONTRACT",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum=:wonum  and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACT",
            "source": "WORKORDER",
            "remarks": "Contract relationship for Comm Template.",
            "whereClause": "wonum=:wonum and siteid=:siteid",
            "cardinality": null
        }
    ]
}