mos = {
    "objectName": "LOCATIONUSERCUST",
    "className": "psdi.app.location.LocationUserCustSet",
    "description": "Stores info about users and custodians of location",
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
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
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
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "MULTIASSETLOCCI",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "MULTIID",
            "targetKeys": "MULTIID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "PERSONID",
            "targetKeys": "PERSONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONUSERCUST",
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
        "viewwhere": "location is not null and addperson=0"
    },
    "outgoingRelationships": [
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to the locations table where location, site, and org match.  This will return zero or one record.",
            "whereClause": "location=:location and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "Relationship to the MULTIASSETLOCCI table",
            "whereClause": "location=:location and multiid=:multiid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find all people for a given personid. (locationusercust.personid = person.personid). This resulting set will contain zero or one object.",
            "whereClause": "personid = :personid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LOCATIONUSER",
            "source": "LOCATIONS",
            "remarks": "user record for the location",
            "whereClause": "location = :location and siteid = :siteid and isuser=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONUSERCUST",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LocationUserCust table, used to find all users and custodians for a given location. (locationusercust.location = location.location and siteid = siteid). This resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LOCATIONCUSTODIAN",
            "source": "LOCATIONS",
            "remarks": "custodian record for the location",
            "whereClause": "location = :location and siteid = :siteid and iscustodian=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYLOCATIONUSERCUST",
            "source": "LOCATIONS",
            "remarks": "Relationship to the LOCATIONUSERCUST table to get the primary user of a location.",
            "whereClause": "location=:location and siteid=:siteid and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONUSERCUST",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship to LocationUserCust",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONUSERCUST",
            "source": "PERSON",
            "remarks": "Relationship to the locationusercust table from person where locationusercust.personid=person.personid",
            "whereClause": "personid=:personid",
            "cardinality": "UNDEFINED"
        }
    ]
}