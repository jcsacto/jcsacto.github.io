mos = {
    "objectName": "DRPOLDTAB",
    "className": "psdi.app.configure.virtual.DrpOldTabSet",
    "description": "Virtual object for Drop Backup Tables",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "TABLENAME",
            "required": false,
            "persistent": false,
            "title": "Table",
            "remarks": "The table name.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXOBJECTCFG",
            "target": "MAXOBJECTCFG",
            "remarks": "DrpOldTab to MaxObjectCfg, will contain one object",
            "whereClause": "entityname = :tablename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DRPOLDTAB",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship to DRPOLDTAB virtual object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}