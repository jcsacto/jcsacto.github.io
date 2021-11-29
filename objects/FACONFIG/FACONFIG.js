mos = {
    "objectName": "FACONFIG",
    "className": "psdi.app.faconfig.FAConfigSet",
    "description": "Favorite Applications Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "FACONFIGID",
    "primaryKeyColumns": [
        "FACONFIGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LAYOUT",
            "targetObject": "FACONFIG",
            "parentKeys": "LAYOUTID",
            "targetKeys": "LAYOUTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Favorite Applications Portlet Configuration to the Start Center Layout",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "FACONFIG",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship from the Favorite Applications Portlet to the Application",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "FACONFIGID",
            "required": true,
            "persistent": true,
            "title": "Config Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LAYOUTID",
            "required": false,
            "persistent": true,
            "title": "Layout",
            "remarks": "Layout Id",
            "sameAsAttribute": "LAYOUTID",
            "sameAsObject": "LAYOUT"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "Application",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORDERNUM",
            "required": false,
            "persistent": true,
            "title": "Order",
            "remarks": "Enter a number for the order the items are to be listed in.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "FA_APP",
            "target": "MAXAPPS",
            "remarks": "Relationship between FACONFIG and MAXAPPS table",
            "whereClause": "app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FA_MAXMENU",
            "target": "MAXMENU",
            "remarks": "Relationship between FACONFIG and MAXMENU table",
            "whereClause": "keyvalue = :app and elementtype='APP'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMENU",
            "target": "MAXMENU",
            "remarks": "Relationship of MAXMENU Object with FACONFIG Object",
            "whereClause": "keyvalue = :app and elementtype = 'APP'",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "FACONFIG",
            "source": "LAYOUT",
            "remarks": "Relationship between FACONFIG Object and LAYOUT object. Used to return favorite applications portlet configuration for a given portlet.",
            "whereClause": "layoutid = :layoutid",
            "cardinality": "UNDEFINED"
        }
    ]
}