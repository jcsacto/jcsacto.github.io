mos = {
    "objectName": "MAXLICSELFSRVAPPS",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Shows the applications user used",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICSELFSRVAPPSID",
    "primaryKeyColumns": [
        "PRDNAME",
        "APPNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXLICSELFSRVAPPS",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXLICPRODLST",
            "targetObject": "MAXLICSELFSRVAPPS",
            "parentKeys": "PRODNAME",
            "targetKeys": "PRDNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Product License",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PRDNAME",
            "required": true,
            "persistent": true,
            "title": "Product Name",
            "remarks": "Product Name",
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
            "attributeName": "MAXLICSELFSRVAPPSID",
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
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relationship from MAXLICSELFSRVAPPS to MAXAPPS table.",
            "whereClause": "app=:appname",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}