mos = {
    "objectName": "CTRLMAPCONTROLGROUPS",
    "className": "psdi.app.designer.virtual.MapControlSecurityGroupMboSet",
    "description": "Map Control security group that will be associated to a particular Tool Item configuration",
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
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": false,
            "title": "Group",
            "remarks": "Name of the security group associated with a specific Tool Item configuration.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship to MAXGROUP from CTRLMAPCONTROLGROUPS.",
            "whereClause": "groupname = :groupname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "CTRLMAPCONTROLGROUPS",
            "source": "CTRLMAPCONTROLTOOLITEM",
            "remarks": "Shows the groups associated with a specific Tool Item configuration.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}