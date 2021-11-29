mos = {
    "objectName": "ASSETUSERCUST",
    "className": "psdi.app.asset.AssetUserCustSet",
    "description": "Stores info about users and custodians of assets",
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
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "All users and custodians for the current Asset.",
            "longDescription": null
        },
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
            "objectName": "LOCATIONS",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "ASSETUSERCUST",
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
        "viewwhere": "assetnum is not null and addperson=0"
    },
    "outgoingRelationships": [
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the asset table from assetusercust where assetusercust.assetnum=asset.assetnum",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "Relationship to the MULTIASSETLOCCI table",
            "whereClause": "assetnum=:assetnum and multiid=:multiid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find all people for a given personid. (assetusercust.personid = person.personid). This resulting set will contain zero or one object.",
            "whereClause": "personid = :personid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ASSETUSER",
            "source": "ASSET",
            "remarks": "Relationship to the assetusercust records, used to find the asset records for a given user.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and isuser=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSERCUST",
            "source": "ASSET",
            "remarks": "Relationship to the AssetUserCust table, used to find all users and custodians for a given asset. (assetusercust.assetnum = asset.assetnum and siteid = siteid). This resulting set will contain zero or more objects.",
            "whereClause": "assetnum = :assetnum and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETCUSTODIAN",
            "source": "ASSET",
            "remarks": "Relationship to the assetusercust records, used to find the asset records for a given custodian.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and iscustodian=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYASSETUSERCUST",
            "source": "ASSET",
            "remarks": "Relationship to the ASSETUSERCUST table to get the primary user of an asset.",
            "whereClause": "assetnum=:assetnum and siteid=:siteid and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETCUSTODIAN",
            "source": "CI",
            "remarks": "custodian record for the ci asset",
            "whereClause": "assetnum = :assetnum and siteid = :assetlocsiteid and iscustodian=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSER",
            "source": "CI",
            "remarks": "user record for the ci asset",
            "whereClause": "assetnum = :assetnum and siteid = :assetlocsiteid and isuser=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSER",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the AssetUserCust table, used to find all assetusercusts for a given contract asset. (assetusercust.assetnum=contractasset.assetnum and assetusercust.siteid=contractasset.siteid and assetusercust.orgid=contractasset.orgid)",
            "whereClause": "assetnum=:assetnum and orgid=:orgid and siteid=:siteid and iscustodian=:yes and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSERCUST",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the AssetUserCust table, used to find all assetusercusts for a given contract asset. (assetusercust.assetnum=contractasset.assetnum and assetusercust.siteid=contractasset.siteid and assetusercust.orgid=contractasset.orgid)",
            "whereClause": "assetnum=:assetnum and orgid=:orgid and siteid=:siteid and isuser=:yes and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSERCUST",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship to AssetUserCust",
            "whereClause": "assetnum=:assetnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETUSERCUST",
            "source": "PERSON",
            "remarks": "Relationship to the assetusercust table from person where assetusercust.personid=person.personid",
            "whereClause": "personid=:personid",
            "cardinality": "MULTIPLE"
        }
    ]
}