mos = {
    "objectName": "PRICALC",
    "className": "psdi.app.workorder.PriCalcSet",
    "description": "Priority Calculations Table",
    "longDescription": "This table stores priority calculations, one of which is used to calcuate a priority based on the work order's and asset or locations priority.",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PRICALCID",
    "primaryKeyColumns": [
        "SITEID",
        "FINDEX"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PRICALC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRICALC",
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
            "attributeName": "FINDEX",
            "required": true,
            "persistent": true,
            "title": "Formula Index",
            "remarks": "Index of formula",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FORMULA",
            "required": true,
            "persistent": true,
            "title": "Formula",
            "remarks": "Formula used for the calculation of work priority.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTED",
            "required": true,
            "persistent": true,
            "title": "Selected",
            "remarks": "This check box indicates if the formula is selected.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "PRICALCID",
            "required": true,
            "persistent": true,
            "title": "PRICALCID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PRICALC",
            "source": "SITE",
            "remarks": "The relationship from Site to PriCalc; it fetches all the PriCalc rows for a given site.  The result set will contain zero or six rows.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}