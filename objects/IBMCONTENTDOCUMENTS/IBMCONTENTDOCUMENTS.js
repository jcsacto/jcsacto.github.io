mos = {
    "objectName": "IBMCONTENTDOCUMENTS",
    "className": "psdi.mbo.custapp.NonPersistentCustomMboSet",
    "description": "Pointers to Content documentation",
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
            "attributeName": "FILE",
            "required": false,
            "persistent": false,
            "title": "File name",
            "remarks": "File",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIZE",
            "required": false,
            "persistent": false,
            "title": "Size (bytes)",
            "remarks": "Size",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": false,
            "title": "URL",
            "remarks": "URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URLTYPE",
            "required": false,
            "persistent": false,
            "title": "Urltype",
            "remarks": "Urltype",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DOCUMENTS",
            "source": "IBMCONTENTITEM",
            "remarks": null,
            "whereClause": null,
            "cardinality": null
        }
    ]
}