mos = {
    "objectName": "SCRATTRTREE",
    "className": "com.ibm.ism.script.autoscript.ScriptAttributeTreeSet",
    "description": "Attribute Tree Control Non Persistent object",
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
            "attributeName": "SCRATTRTREEID",
            "required": false,
            "persistent": false,
            "title": "Attribute Tree Id",
            "remarks": "Attribute Tree Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "HASCHILDREN",
            "required": false,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Has Children",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": false,
            "persistent": false,
            "title": "Has Parent",
            "remarks": "Has Parent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "Title",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ELEMENTPATH",
            "required": false,
            "persistent": false,
            "title": "Element Path",
            "remarks": "Element Path",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TREENODE",
            "target": "SCRATTRTREE",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "SCRATTRTREE",
            "source": "AUTOSCRIPTVARS",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SCRATTRTREE",
            "source": "LAUNCHPOINTVARS",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "TREENODE",
            "source": "SCRATTRTREE",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SCRATTRTREE",
            "source": "SCRIPTLAUNCHPOINT",
            "remarks": "Relationship to get expression builder for object type.",
            "whereClause": "1=1",
            "cardinality": null
        }
    ]
}