mos = {
    "objectName": "RESTDATA",
    "className": "psdi.app.configure.virtual.RestDataSet",
    "description": "Virtual object for Restore Data from backup tables",
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
            "remarks": "Table name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXOBJECTCFG",
            "target": "MAXOBJECTCFG",
            "remarks": "RestData to MaxObjectCfg, will contain one object",
            "whereClause": "entityname = :tablename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RESTDATA",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship to RESTDATA virtual object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}