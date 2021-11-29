mos = {
    "objectName": "WARRANTYLINE",
    "className": "psdi.app.contract.warranty.WarrantyLineSet",
    "description": "Table containing warranty line specific informatio",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WARRANTYLINEID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID",
        "CONTRACTLINENUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "WARRANTYLINE",
            "targetObject": "WARRANTYVIEWLINE",
            "parentKeys": "WARRANTYLINEID",
            "targetKeys": "WARRANTYLINEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Warranty Line",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "WARRANTYLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "CONTRACTLINE",
            "targetObject": "WARRANTYLINE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID, CONTRACTLINENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Line",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WARRANTYLINE",
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
            "attributeName": "WARRANTYLINEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DURATION",
            "required": false,
            "persistent": true,
            "title": "Duration",
            "remarks": "Duration of the warranty",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEUNIT",
            "required": false,
            "persistent": true,
            "title": "Time Unit",
            "remarks": "Unit of time that the duration is specified in (days, months, years)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract Number",
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
            "attributeName": "PCTLABORCOVER",
            "required": false,
            "persistent": true,
            "title": "% Labor Coverage",
            "remarks": "Percentage of labor coverage.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCTMATCOVER",
            "required": false,
            "persistent": true,
            "title": "% Materials Coverage",
            "remarks": "Percentage of materials covered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PCTTOOLSCOVER",
            "required": false,
            "persistent": true,
            "title": "% Tools Coverage",
            "remarks": "Percentage of tools covered.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COVERSCHILDREN",
            "required": true,
            "persistent": true,
            "title": "Covers Children",
            "remarks": "Will the children of this asset be covered by the contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "AMTLABORCOVER",
            "required": false,
            "persistent": true,
            "title": "Labor",
            "remarks": "Amount of labor coverage",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMTMATCOVER",
            "required": false,
            "persistent": true,
            "title": "Materials",
            "remarks": "Amount of the material coverage.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMTTOOLCOVER",
            "required": false,
            "persistent": true,
            "title": "Tools",
            "remarks": "Amount of tool coverage",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}