mos = {
    "objectName": "MAXLICPURCHDET",
    "className": "psdi.app.lictrack.MaxLicPurchDetSet",
    "description": "Table for license purchase details",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICPURCHDETID",
    "primaryKeyColumns": [
        "MAXLICPURCHDETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXLICENSE",
            "targetObject": "MAXLICPURCHDET",
            "parentKeys": "LICENSENUM",
            "targetKeys": "LICENSENUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo License",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXLICPURCHDET",
            "parentKeys": "PERSONID",
            "targetKeys": "PURCHASEDBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchased by",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LICENSENUM",
            "required": true,
            "persistent": true,
            "title": "License Number",
            "remarks": "License Number.",
            "sameAsAttribute": "LICENSENUM",
            "sameAsObject": "MAXLICENSE"
        },
        {
            "attributeName": "PURCHASEDBY",
            "required": false,
            "persistent": true,
            "title": "Purchased By",
            "remarks": "Person purchased this license.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PURCHASEDDATE",
            "required": false,
            "persistent": true,
            "title": "Purchased Date",
            "remarks": "Date when the license is purchased",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINRENEWALDATE",
            "required": false,
            "persistent": true,
            "title": "Maintenance Renewal Date",
            "remarks": "Date of renewal",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QUANTITY",
            "required": false,
            "persistent": true,
            "title": "Quantity",
            "remarks": "Purchased Quantit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICPURCHDETID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship from MAXLICPURCHDET to PERSON table.",
            "whereClause": "personid=:purchasedby",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXLICPURCHDET",
            "source": "MAXLICENSE",
            "remarks": "Relationship from MAXLICENSE to ALNDOMAIN table.",
            "whereClause": "licensenum=:licensenum",
            "cardinality": null
        }
    ]
}