mos = {
    "objectName": "STRUCTRELATION",
    "className": "psdi.iface.app.common.StructureRelationSet",
    "description": "Structure Relation Non persistant MBO",
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
            "attributeName": "SOURCE",
            "required": false,
            "persistent": false,
            "title": "Source",
            "remarks": "source table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEST",
            "required": false,
            "persistent": false,
            "title": "Destination",
            "remarks": "destination table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATION",
            "required": false,
            "persistent": false,
            "title": "Relation",
            "remarks": "relations",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "RELSQLWHERE",
            "required": false,
            "persistent": false,
            "title": "RELSQLWHERE",
            "remarks": "where clause",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}