mos = {
    "objectName": "PPCRAFTRATE",
    "className": "psdi.app.craft.PPCraftRateSet",
    "description": "Premium Pay Craft Rates",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PPCRAFTRATEID",
    "primaryKeyColumns": [
        "CRAFT",
        "PREMIUMPAYCODE",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CRAFT",
            "targetObject": "PPCRAFTRATE",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PPCRAFTRATE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
        }
    ],
    "columns": [
        {
            "attributeName": "CRAFT",
            "required": true,
            "persistent": true,
            "title": "Craft",
            "remarks": "Identifies the craft record.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The organization that is associated with the craft.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "RATETYPE",
            "required": false,
            "persistent": true,
            "title": "Rate Type",
            "remarks": "The type of rate that applies to the labor or craft record.",
            "sameAsAttribute": "DEFAULTRATETYPE",
            "sameAsObject": "PREMIUMPAY"
        },
        {
            "attributeName": "RATE",
            "required": false,
            "persistent": true,
            "title": "Rate",
            "remarks": "The rate that applies to the labor or craft record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INHERIT",
            "required": true,
            "persistent": true,
            "title": "Inherit Rate from Premium Pay Code",
            "remarks": "Indicates whether the standard rate from a premium pay record applies to this craft.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYRATE",
            "required": false,
            "persistent": false,
            "title": "Rate",
            "remarks": "The rate that applies to the labor or craft record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORINHERIT",
            "required": true,
            "persistent": false,
            "title": "Inherit Rate from Craft",
            "remarks": "Indicates whether the rate is inherited from a craft record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYRATETYPE",
            "required": false,
            "persistent": false,
            "title": "Rate Type",
            "remarks": "The type of rate that applies to the record. The premium pay rate can be calculated in one of three ways: By multiplying the premium pay rate, the base rate for the labor's rate, and the hours reported (MULTIPLIER); by adding the premium pay rate and the base rate for the labor's craft, and multiplying by the premium hours reported (INCREMENT); or by multiplying the premium pay rate by the premium hours reported (HOURLY).",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PPCRAFTRATEID",
            "required": true,
            "persistent": true,
            "title": "PPCRAFTRATEID",
            "remarks": "Identifies the PPCraftRate record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREMIUMPAYCODE",
            "required": true,
            "persistent": true,
            "title": "Premium Pay Code",
            "remarks": "The premium pay code for the craft.",
            "sameAsAttribute": "PREMIUMPAYCODE",
            "sameAsObject": "PREMIUMPAY"
        },
        {
            "attributeName": "DISPLAYLABOR",
            "required": false,
            "persistent": false,
            "title": "Labor",
            "remarks": "Identifies the current labor record.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "DELIMITER",
            "required": false,
            "persistent": false,
            "title": "Delimiter",
            "remarks": "Separates the Labor and Craft in the Premium Pay Code table title",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PREMIUMPAY",
            "target": "PREMIUMPAY",
            "remarks": "Relationship to the PremiumPay table where premiumpaycode and orgid match. (premiumpay.premiumpaycode=ppcraftrate.premiumpaycode and premiumpay.orgid=ppcraftrate..orgid.)  This will return 0 or more objects.",
            "whereClause": "premiumpaycode=:premiumpaycode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PPCRAFTRATE",
            "source": "CRAFT",
            "remarks": "Relationship to the PPCRAFTRATE table on craft. (ppcraftrate.craft=craft.craft and ppcraftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PPCRAFTRATE",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the PPCraftRate table where craft and orgid match. (laborcraftrate.craft=ppcraftrate.craft and laborcraftrate.orgid = ppcraftrate.orgid.)  This will return 0 or more objects.",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PPCRAFTRATE",
            "source": "LABTRANS",
            "remarks": "Relationship to the ppcraftrate table on labtrans. (ppcraftrate.premiumpaycode=labtrans.premiumpaycode and ppcraftrate.craft=labtrans.craft and ppcraftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "premiumpaycode=:premiumpaycode and craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}