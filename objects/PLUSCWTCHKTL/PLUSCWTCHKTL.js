mos = {
    "objectName": "PLUSCWTCHKTL",
    "className": "psdi.plusc.app.workorder.virtual.PlusCWTCheckToolStatusSet",
    "description": "check tool  statu no persistent tbl for data sheet",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": true,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "ITEMNUM",
            "remarks": "Identifies the item record. This value must be unique for all item records. Click the Detail Menu button to view items by classification or availability.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION",
            "remarks": "Names or describes the item. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERIALNUM",
            "required": false,
            "persistent": false,
            "title": "SERIALNUM",
            "remarks": "Asset Serial Number",
            "sameAsAttribute": "SERIALNUM",
            "sameAsObject": "ASSET"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}