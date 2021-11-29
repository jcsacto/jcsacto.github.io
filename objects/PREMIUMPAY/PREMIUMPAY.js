mos = {
    "objectName": "PREMIUMPAY",
    "className": "psdi.app.craft.PremiumPaySet",
    "description": "Premium Pay",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PREMIUMPAYID",
    "primaryKeyColumns": [
        "PREMIUMPAYCODE",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "PREMIUMPAY",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "PREMIUMPAYCODE, ORGID",
            "targetKeys": "PREMIUMPAYCODE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Premium Pay",
            "longDescription": null
        },
        {
            "objectName": "PREMIUMPAY",
            "targetObject": "LABTRANS",
            "parentKeys": "PREMIUMPAYCODE, ORGID",
            "targetKeys": "PREMIUMPAYCODE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Premium Pay",
            "longDescription": null
        },
        {
            "objectName": "PREMIUMPAY",
            "targetObject": "PPCRAFTRATE",
            "parentKeys": "PREMIUMPAYCODE, ORGID",
            "targetKeys": "PREMIUMPAYCODE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Premium Pay",
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
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PREMIUMPAY",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PREMIUMPAY",
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
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The name of the organization associated with the premium pay code.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the premium pay code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTRATETYPE",
            "required": true,
            "persistent": true,
            "title": "Default Rate Type",
            "remarks": "The type of rate (multiplier, hourly, or increment) for the premium pay code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTRATE",
            "required": false,
            "persistent": true,
            "title": "Default Rate",
            "remarks": "The rate for the premium pay code.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLOBALPPCODE",
            "required": true,
            "persistent": true,
            "title": "Apply to New Crafts",
            "remarks": "Indicates that this premium pay code will automatically be applied to any newly created craft record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Description Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREMIUMPAYID",
            "required": true,
            "persistent": true,
            "title": "PREMIUMPAYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREMIUMPAYCODE",
            "required": true,
            "persistent": true,
            "title": "Premium Pay Code",
            "remarks": "Identifier of the premium pay code available for this craft.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LABTRANS_PREMIUMPAY",
            "source": "LABTRANS",
            "remarks": "Relationship from labtrans to premiumpay",
            "whereClause": "premiumpaycode=:premiumpaycode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PREMIUMPAY",
            "source": "PPCRAFTRATE",
            "remarks": "Relationship to the PremiumPay table where premiumpaycode and orgid match. (premiumpay.premiumpaycode=ppcraftrate.premiumpaycode and premiumpay.orgid=ppcraftrate..orgid.)  This will return 0 or more objects.",
            "whereClause": "premiumpaycode=:premiumpaycode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}