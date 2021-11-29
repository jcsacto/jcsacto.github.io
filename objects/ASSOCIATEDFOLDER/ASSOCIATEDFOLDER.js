mos = {
    "objectName": "ASSOCIATEDFOLDER",
    "className": "psdi.app.doclink.virtual.AssociatedFolderSet",
    "description": "The list of folders(doctypes) associated",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "APP",
            "required": true,
            "persistent": false,
            "title": "App Name",
            "remarks": "App Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "DOCTYPE",
            "required": true,
            "persistent": false,
            "title": "DocType",
            "remarks": "Document type",
            "sameAsAttribute": "DOCTYPE",
            "sameAsObject": "DOCTYPES"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}