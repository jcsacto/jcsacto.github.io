mos = {
    "objectName": "MAXLICPRODLST",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "List of installed products",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXLICPRODLSTID",
    "primaryKeyColumns": [
        "PRODNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXLICPRODLST",
            "targetObject": "MAXLICPRODAPPS",
            "parentKeys": "PRODNAME",
            "targetKeys": "PRODNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Product License",
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
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PRODNAME",
            "required": true,
            "persistent": true,
            "title": "Product Name",
            "remarks": "Product Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODDESC",
            "required": false,
            "persistent": true,
            "title": "Product Description",
            "remarks": "Product Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXLICPRODLSTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}