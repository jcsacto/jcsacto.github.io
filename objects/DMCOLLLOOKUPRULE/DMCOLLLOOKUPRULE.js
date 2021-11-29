mos = {
    "objectName": "DMCOLLLOOKUPRULE",
    "className": "psdi.dm.collection.DMCollLookupRuleSet",
    "description": "Migration Collections lookup related data rule",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLLOOKUPRULEID",
    "primaryKeyColumns": [
        "LOOKUPRULE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOLLLOOKUPRULE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "LOOKUPOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure main Object for the lookup rule.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LOOKUPRULE",
            "required": true,
            "persistent": true,
            "title": "Rule Name",
            "remarks": "The name of the rule that identifies the records that are related to the migration collection.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the rule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOOKUPOBJECT",
            "required": false,
            "persistent": true,
            "title": "Primary Object",
            "remarks": "The primary object of an object structure for which no management application and no relationship to any other object exist.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONDITION",
            "required": false,
            "persistent": true,
            "title": "SQL Where",
            "remarks": "Specify an SQL WHERE clause to select records that meet your criteria.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPOBJECT",
            "required": false,
            "persistent": false,
            "title": "Expression builder Object",
            "remarks": "Expression builder Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "Userdefined",
            "remarks": "Specifies whether a user created the rule. The provided rules cannot be marked as user defined.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENABLED",
            "required": true,
            "persistent": true,
            "title": "Enabled",
            "remarks": "Specifies whether the rule is enabled. The provided rules are enabled by default.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMCOLLLOOKUPRULEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "EXPBUILDER",
            "target": "EXPBUILDER",
            "remarks": "Relationship from DMCOLLLOOKUPRULE to EXPBUILDER",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}