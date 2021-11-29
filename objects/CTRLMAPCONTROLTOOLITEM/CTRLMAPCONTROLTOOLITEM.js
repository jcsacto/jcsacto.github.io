mos = {
    "objectName": "CTRLMAPCONTROLTOOLITEM",
    "className": "psdi.app.designer.virtual.MapControlToolItemMboSet",
    "description": "Map Control Tool Item mbo.",
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
            "attributeName": "TOOLITEM",
            "required": false,
            "persistent": false,
            "title": "Tool Item",
            "remarks": "Name of the tool that will appear on a particular map.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROVIDER",
            "required": false,
            "persistent": false,
            "title": "Provider",
            "remarks": "Name of the provider that has developed this particular tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLMAPCONTROLGROUPS",
            "target": "CTRLMAPCONTROLGROUPS",
            "remarks": "Shows the groups associated with a specific Tool Item configuration.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "CTRLMAPCONTROLTOOLITEM",
            "source": "CTRL_MAPCONTROL",
            "remarks": "Shows the tool items configured for a specific map instance.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}