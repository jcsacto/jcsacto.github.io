mos = {
    "objectName": "COMPANYSETFILTER",
    "className": "psdi.app.common.CommonMboSet",
    "description": "CompanySet Restriction Filter View",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "SETID",
        "USERID",
        "APP"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "COMPANYSETFILTER",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXUSER",
            "targetObject": "COMPANYSETFILTER",
            "parentKeys": "USERID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "User Restricted",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "COMPANYSETFILTER",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "COMPANYSETFILTER",
            "parentKeys": "SETID",
            "targetKeys": "SETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Company Set",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SETID",
            "required": true,
            "persistent": true,
            "title": "Set",
            "remarks": "Identifies the set. This value must be unique for all sets. You cannot use the same identifier for a company set and an item set.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS",
            "viewColumnName": "SETID",
            "tableName": "SETS",
            "tableColumnName": "SETID"
        },
        {
            "attributeName": "USERID",
            "required": true,
            "persistent": true,
            "title": "User",
            "remarks": "User identifier",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON",
            "viewColumnName": "USERID",
            "tableName": "GROUPUSER",
            "tableColumnName": "USERID"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS",
            "viewColumnName": "APP",
            "tableName": "APPLICATIONAUTH",
            "tableColumnName": "APP"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "sets.setid = organization.companysetid\nand settype in (select value from synonymdomain where domainid='SETTYPE' and maxvalue = 'COMPANY')\nand organization.orgid in (select orgid from orgfilter where userid = groupuser.userid and app = applicationauth.app)",
        "viewselect": "select distinct sets.setid, groupuser.userid, applicationauth.app ",
        "viewfrom": "sets, organization, groupuser, applicationauth "
    },
    "outgoingRelationships": [],
    "incomingRelationships": []
}