mos = {
    "objectName": "IBMCONTENTITEMCOMPONENTS",
    "className": "psdi.mbo.custapp.NonPersistentCustomMboSet",
    "description": "MRIU package components",
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "IBMCONTENTITEM"
        },
        {
            "attributeName": "SELECTED",
            "required": true,
            "persistent": false,
            "title": "Selected",
            "remarks": "Selected",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ID",
            "required": false,
            "persistent": false,
            "title": "ID",
            "remarks": "Component Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MRIUCOMPONENTS",
            "source": "IBMCONTENTITEM",
            "remarks": null,
            "whereClause": null,
            "cardinality": null
        }
    ]
}