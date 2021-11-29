mos = {
    "objectName": "PPLABORRATE",
    "className": "psdi.app.labor.PPLaborRateSet",
    "description": "Premium Pay exception table for Labors",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PPLABORRATEID",
    "primaryKeyColumns": [
        "ORGID",
        "LABORCODE",
        "CRAFT",
        "PREMIUMPAYCODE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CRAFT",
            "targetObject": "PPLABORRATE",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "PPLABORRATE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PPLABORRATE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PREMIUMPAY",
            "targetObject": "PPLABORRATE",
            "parentKeys": "PREMIUMPAYCODE, ORGID",
            "targetKeys": "PREMIUMPAYCODE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Premium Pay",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Laborcode",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CRAFT",
            "required": true,
            "persistent": true,
            "title": "Craft",
            "remarks": "Craft",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "RATE",
            "required": false,
            "persistent": true,
            "title": "Rate",
            "remarks": "Rate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PPLABORRATEID",
            "required": true,
            "persistent": true,
            "title": "PPLABORRATEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREMIUMPAYCODE",
            "required": true,
            "persistent": true,
            "title": "Premium Pay Code",
            "remarks": "Premium Pay Code for Labor",
            "sameAsAttribute": "PREMIUMPAYCODE",
            "sameAsObject": "PREMIUMPAY"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PPLABORRATE",
            "source": "LABOR",
            "remarks": "Relationship to the pplaborrate table to find the on laborcode, craft, and orgid.  Relationship will return 0 or more objects.",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PPLABORRATE",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the wplabor table where laborcode=laborcode, craft=:craft and orgid=:orgid.",
            "whereClause": "laborcode=:laborcode and craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}