mos = {
    "objectName": "DMCOLLRELRULE",
    "className": "psdi.dm.collection.DMCollRelRuleSet",
    "description": "Migration Collections related data rule",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLRELRULEID",
    "primaryKeyColumns": [
        "RELRULE"
    ],
    "logicalRelationships": [
        {
            "objectName": "DMCOLLRELRULE",
            "targetObject": "DMCOLLPKGEXCEPTION",
            "parentKeys": "RELRULE",
            "targetKeys": "EXCEPTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Exception realating to this rule.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOLLRELRULE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PRIMARYOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Primary Object for this rule.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "DMCOLLRELRULE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "RELATEDOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Related Object for this rule.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RELRULE",
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
            "attributeName": "PRIMARYOBJECT",
            "required": false,
            "persistent": true,
            "title": "Primary Object",
            "remarks": "The primary object of an object structure for which a management application exists.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RELATEDOBJECT",
            "required": false,
            "persistent": true,
            "title": "Related Object",
            "remarks": "The related object, which is a primary object of an object structure for which no management application exists.",
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
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Rule type for migration",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DMCOLLRELRULEID",
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
            "name": "DMCOLLRELRULECOLS",
            "target": "DMCOLLRELRULECOLS",
            "remarks": "Relationship from DMCOLLRELRULE to DMCOLLRELRULECOLS",
            "whereClause": "dmcollrelruleid=:dmcollrelruleid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMCOLLRELRULE",
            "source": "DMCOLLPKGEXCEPTION",
            "remarks": "Relationship from DMCOLLPKGEXCEPTION to DMCOLLRELRULE.",
            "whereClause": "dmcollrelruleid=:dmcollrelruleid",
            "cardinality": null
        },
        {
            "name": "DMRELRULEEX",
            "source": "DMCOLLPKGEXCEPTION",
            "remarks": "Get split rule information",
            "whereClause": "relrule=:exception",
            "cardinality": null
        }
    ]
}