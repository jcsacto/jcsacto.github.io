mos = {
    "objectName": "WOLOCUSERCUST",
    "className": "psdi.app.workorder.WOLocUserCustSet",
    "description": "WO modifications to users/cust of Location",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "PERSONID",
        "SITEID",
        "ASSETNUM",
        "LOCATION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Asset",
            "longDescription": null
        },
        {
            "objectName": "ASSETLOCUSERCUST",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "ASSETLOCUSERCUSTID",
            "targetKeys": "ASSETLOCUSERCUSTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Custodian Record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Location",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Custodian",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "WOLOCUSERCUST",
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
            "attributeName": "ASSETLOCUSERCUSTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "ASSETLOCUSERCUSTID",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "ASSETLOCUSERCUSTID",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "ASSETLOCUSERCUSTID"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Unique identifier of the asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET",
            "viewColumnName": "ASSETNUM",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "ASSETNUM"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Unique identifier of the location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS",
            "viewColumnName": "LOCATION",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "LOCATION"
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Identifier of the person",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "PERSONID",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "PERSONID"
        },
        {
            "attributeName": "ISPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Primary",
            "remarks": "Is this person a primary?",
            "sameAsAttribute": "ISPRIMARY",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "ISPRIMARY",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "ISPRIMARY"
        },
        {
            "attributeName": "ISCUSTODIAN",
            "required": true,
            "persistent": true,
            "title": "Custodian",
            "remarks": "Is this person a custodian?",
            "sameAsAttribute": "ISCUSTODIAN",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "ISCUSTODIAN",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "ISCUSTODIAN"
        },
        {
            "attributeName": "ISUSER",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "Is this person a user?",
            "sameAsAttribute": "ISUSER",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "ISUSER",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "ISUSER"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site ID of this record",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE",
            "viewColumnName": "SITEID",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "SITEID"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID of this record",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "WILLBEPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Will be Primary",
            "remarks": "Determines if the person will become the Primary for the selected record",
            "sameAsAttribute": "WILLBEPRIMARY",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "WILLBEPRIMARY",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "WILLBEPRIMARY"
        },
        {
            "attributeName": "WILLBECUSTODIAN",
            "required": true,
            "persistent": true,
            "title": "Will be Custodian",
            "remarks": "Determines if the person will become a Custodian for the selected record",
            "sameAsAttribute": "WILLBECUSTODIAN",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "WILLBECUSTODIAN",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "WILLBECUSTODIAN"
        },
        {
            "attributeName": "WILLBEUSER",
            "required": true,
            "persistent": true,
            "title": "Will be User",
            "remarks": "Determines if the person will become a User for the selected record",
            "sameAsAttribute": "WILLBEUSER",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "WILLBEUSER",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "WILLBEUSER"
        },
        {
            "attributeName": "REMOVEPERSON",
            "required": true,
            "persistent": true,
            "title": "Remove",
            "remarks": "Should this person be removed from the list of associated Users and Custodians?",
            "sameAsAttribute": "REMOVEPERSON",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "REMOVEPERSON",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "REMOVEPERSON"
        },
        {
            "attributeName": "ADDPERSON",
            "required": true,
            "persistent": true,
            "title": "Add",
            "remarks": "Should this person be added to the list of associated Users and Custodians?",
            "sameAsAttribute": "ADDPERSON",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "ADDPERSON",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "ADDPERSON"
        },
        {
            "attributeName": "MODIFYPERSON",
            "required": true,
            "persistent": true,
            "title": "Modify",
            "remarks": "Should this person's user and custodian information be modified?",
            "sameAsAttribute": "MODIFYPERSON",
            "sameAsObject": "ASSETLOCUSERCUST",
            "viewColumnName": "MODIFYPERSON",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "MODIFYPERSON"
        },
        {
            "attributeName": "MULTIID",
            "required": false,
            "persistent": true,
            "title": "Multi ID",
            "remarks": "Identifies the associated MULTIASSETLOCCI record",
            "sameAsAttribute": "MULTIID",
            "sameAsObject": "MULTIASSETLOCCI",
            "viewColumnName": "MULTIID",
            "tableName": "ASSETLOCUSERCUST",
            "tableColumnName": "MULTIID"
        }
    ],
    "viewinfo": {
        "autosect": true,
        "viewwhere": "location is not null"
    },
    "outgoingRelationships": [
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": null,
            "whereClause": "location=:location and multiid=:multiid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOLOCUSERCUST",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship to WOMODUSERCUST",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOALLLOCUSERCUST",
            "source": "WORKORDER",
            "remarks": "All location usercust  records for this work order",
            "whereClause": "exists ( select 1 from multiassetlocci where recordkey=:wonum and recordclass=:woclass and siteid=:siteid and multiid=wolocusercust.multiid)",
            "cardinality": "UNDEFINED"
        }
    ]
}