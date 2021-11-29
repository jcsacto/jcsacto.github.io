mos = {
    "objectName": "MAXLICPRODAPPS",
    "className": "psdi.app.lictrack.MaxProdAppSet",
    "description": "Table to keep applications for a product",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICPRODAPPSID",
    "primaryKeyColumns": [
        "PRODNAME",
        "APPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXLICPRODAPPS",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXLICPRODLST",
            "targetObject": "MAXLICPRODAPPS",
            "parentKeys": "PRODNAME",
            "targetKeys": "PRODNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Product License",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PRODNAME",
            "required": true,
            "persistent": true,
            "title": "Link to MAXLICPRODLST table",
            "remarks": "Link to MAXLICPRODLST table",
            "sameAsAttribute": "PRODNAME",
            "sameAsObject": "MAXLICPRODLST"
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application Name",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "CUSTOM",
            "required": true,
            "persistent": true,
            "title": "Is Custom App",
            "remarks": "This value will be true when customer have added this application to this table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICPRODAPPSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXPRODID",
            "required": true,
            "persistent": true,
            "title": "Product Identifier",
            "remarks": "Link to MAXLICPRODKEYLIST.",
            "sameAsAttribute": "MAXPRODID",
            "sameAsObject": "MAXLICPRDKEYLIST"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship from MAXLICPRODAPPS to MAXAPPS table.",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "MAXLICAPPACCESS",
            "target": "MAXLICAPPACCESS",
            "remarks": "Relationship from MAXLICPRODAPPS to MAXLICAPPACCESS table.",
            "whereClause": "appname=:appname",
            "cardinality": null
        },
        {
            "name": "MAXMODULES",
            "target": "MAXMODULES",
            "remarks": "Relationship from MAXLICPRODAPPS to MAXMODULES table.",
            "whereClause": "module = (select module from maxlicappaccess where  appname=:appname)",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXLICPRODAPPS",
            "source": "MAXLICENSE",
            "remarks": "Relationship from MAXLICENSE to MAXPRODAPP table.",
            "whereClause": "prodname=:PRDNAME ",
            "cardinality": "MULTIPLE"
        }
    ]
}