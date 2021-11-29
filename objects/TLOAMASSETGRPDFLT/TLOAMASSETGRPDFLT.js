mos = {
    "objectName": "TLOAMASSETGRPDFLT",
    "className": "psdi.app.asset.virtual.AssetGrpDfltSet",
    "description": "Table to store default values for person group",
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
            "attributeName": "DFLTPERSONGROUP",
            "required": true,
            "persistent": false,
            "title": "Person Group",
            "remarks": "Identifier of the person group record.",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "DFLTISPRIMARY",
            "required": true,
            "persistent": false,
            "title": "Primary",
            "remarks": "Is this person group a primary?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANDELETE",
            "required": true,
            "persistent": false,
            "title": "Delete",
            "remarks": "can delete person from tloamassetgrp table",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TLOAMDEFLTPERSONGRP",
            "target": "PERSONGROUP",
            "remarks": "Relationship between the TLOAMASSETGRPDFLT and PERSONGROUP tables",
            "whereClause": "persongroup = :dfltpersongroup",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}