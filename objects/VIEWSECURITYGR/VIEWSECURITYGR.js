mos = {
    "objectName": "VIEWSECURITYGR",
    "className": "psdi.app.report.virtual.ViewSecurityGrSet",
    "description": "Non Persistent object to view report security",
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
            "required": false,
            "persistent": false,
            "title": "Group",
            "remarks": "Group identifier",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Relationship to MAXGROUP from VIEWSECURITYGR",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWSECURITYDET",
            "target": "VIEWSECURITYDET",
            "remarks": "Relationship from VIEWSECURITYGR to VIEWSECURITYDET",
            "whereClause": "groupname=:groupname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}