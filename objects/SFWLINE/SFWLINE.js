mos = {
    "objectName": "SFWLINE",
    "className": "psdi.app.contract.software.SFWLineSet",
    "description": "Table containing software line specific information",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SFWLINEID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID",
        "CONTRACTLINENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "SFWLINE",
            "targetObject": "SFWVIEWLINE",
            "parentKeys": "SFWLINEID",
            "targetKeys": "SFWLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software Line",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "SFWLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "SFWLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SFWLINE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SFWLINEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SFWLICENSED",
            "required": true,
            "persistent": true,
            "title": "Licensed",
            "remarks": "Licensed",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the line. This number indicates the number of times the line has been revised. A line that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CONTRACTLINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Contract Line Number",
            "sameAsAttribute": "CONTRACTLINENUM",
            "sameAsObject": "CONTRACTLINE"
        },
        {
            "attributeName": "MAINT",
            "required": true,
            "persistent": true,
            "title": "Maintenance",
            "remarks": "Specifies whether or not the contract line item is for maintenance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINTTERM",
            "required": false,
            "persistent": true,
            "title": "Maintenance Term",
            "remarks": "The number that specifies the duration of the maintenance contract line item. Use this number in combination with the value in the Term Unit field to determine the duration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TERMUNIT",
            "required": false,
            "persistent": true,
            "title": "Term Unit",
            "remarks": "Unit of measurement for the term of the maintenance contract line item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RENEWALDATE",
            "required": false,
            "persistent": true,
            "title": "Maintenance Renewal Date",
            "remarks": "Date that the contract line item can be or must be renewed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}