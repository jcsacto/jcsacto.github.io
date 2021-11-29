mos = {
    "objectName": "WMMATCH",
    "className": "psdi.app.workorder.virtual.WMMatchSet",
    "description": "Table to match Works and Labors",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WMMATCHID",
    "primaryKeyColumns": [
        "WMMATCHID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSONGROUP",
            "targetObject": "WMMATCH",
            "parentKeys": "PERSONGROUP",
            "targetKeys": "CREWWORKGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Group",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WMMATCHID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CRAFT",
            "required": false,
            "persistent": false,
            "title": "Craft",
            "remarks": "User-specified craft to filter work to match labor or filter labor to match work.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": false,
            "title": "Skill Level",
            "remarks": "User-specified skill level to filter work to match labor or filter labor to match work.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "User-specified vendor to filter work to match labor or filter labor to match work.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": false,
            "title": "Contract",
            "remarks": "User-specified contract to filter work to match labor or filter labor to match work.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "User-specified organization to filter work to match labor or filter labor to match work.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": true,
            "title": "Crew Work Group",
            "remarks": "Resource Pool",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WMMATCH",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the NP WMMatch table.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}