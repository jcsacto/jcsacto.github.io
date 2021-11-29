mos = {
    "objectName": "ASSETLOCUSERCUST",
    "className": "psdi.app.asset.AssetLocUserCustSet",
    "description": "Stores asset/location users and custodians",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "ASSETLOCUSERCUSTID",
    "primaryKeyColumns": [
        "PERSONID",
        "SITEID",
        "ASSETNUM",
        "LOCATION"
    ],
    "logicalRelationships": [
        {
            "objectName": "ASSETLOCUSERCUST",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "ASSETLOCUSERCUSTID",
            "targetKeys": "ASSETLOCUSERCUSTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Custodian Record",
            "longDescription": null
        },
        {
            "objectName": "ASSETLOCUSERCUST",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "ASSETLOCUSERCUSTID",
            "targetKeys": "ASSETLOCUSERCUSTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Custodian Record",
            "longDescription": null
        },
        {
            "objectName": "ASSETLOCUSERCUST",
            "targetObject": "WOASSETUSERCUST",
            "parentKeys": "ASSETLOCUSERCUSTID",
            "targetKeys": "ASSETLOCUSERCUSTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Base Custodian Record",
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
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Current Asset''s AssetLocUserCust records.",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETLOCUSERCUST",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Unique identifier of the asset",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Unique identifier of the location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "PERSONID",
            "required": true,
            "persistent": true,
            "title": "Person",
            "remarks": "Identifier of the person",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ISPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Primary",
            "remarks": "Is this person a primary?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISCUSTODIAN",
            "required": true,
            "persistent": true,
            "title": "Custodian",
            "remarks": "Is this person a custodian?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISUSER",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "Is this person a user?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site ID of this record",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization ID of this record",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "WILLBEPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Will be Primary",
            "remarks": "Determines if the person will become the Primary for the selected record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WILLBECUSTODIAN",
            "required": true,
            "persistent": true,
            "title": "Will be Custodian",
            "remarks": "Determines if the person will become a Custodian for the selected record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WILLBEUSER",
            "required": true,
            "persistent": true,
            "title": "Will be User",
            "remarks": "Determines if the person will become a User for the selected record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REMOVEPERSON",
            "required": true,
            "persistent": true,
            "title": "Remove",
            "remarks": "Should this person be removed from the list of associated Users and Custodians?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDPERSON",
            "required": true,
            "persistent": true,
            "title": "Add",
            "remarks": "Should this person be added to the list of associated Users and Custodians?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MODIFYPERSON",
            "required": true,
            "persistent": true,
            "title": "Modify",
            "remarks": "Should this person's user and custodian information be modified?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MULTIID",
            "required": false,
            "persistent": true,
            "title": "Multi ID",
            "remarks": "Identifies the associated MULTIASSETLOCCI record",
            "sameAsAttribute": "MULTIID",
            "sameAsObject": "MULTIASSETLOCCI"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "Relationship to the MULTIASSETLOCCI table",
            "whereClause": "multiid=:multiid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MULTIASSET",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship to the WOMODUSERCUST table, used to find all multi records for a given WOModUserCust. (multiassetlocci.multiid=womodusercust.multiid). The resulting set will contain zero or one object.",
            "whereClause": "multiid=:multiid and (addperson=1 or modifyperson=1 or removeperson=1)",
            "cardinality": "UNDEFINED"
        }
    ]
}