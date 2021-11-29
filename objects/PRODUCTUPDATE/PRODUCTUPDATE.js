mos = {
    "objectName": "PRODUCTUPDATE",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Table to store product information for updatedb",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PRODUCTUPDATEID",
    "primaryKeyColumns": [
        "PRODUCTUPDATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SOURCEPRODUCT",
            "required": false,
            "persistent": true,
            "title": "Source Product",
            "remarks": "Source product name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETPRODUCT",
            "required": false,
            "persistent": true,
            "title": "Target Product",
            "remarks": "Target product name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTENDATTR",
            "required": false,
            "persistent": true,
            "title": "Extend Attribute",
            "remarks": "Extend Attribute Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BASEATTR",
            "required": false,
            "persistent": true,
            "title": "Base Attribute",
            "remarks": "Base Attribute Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLVALUE",
            "required": false,
            "persistent": true,
            "title": "Install Value",
            "remarks": "Install Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTUPDATEID",
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