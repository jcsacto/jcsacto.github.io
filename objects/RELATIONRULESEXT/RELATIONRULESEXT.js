mos = {
    "objectName": "RELATIONRULESEXT",
    "className": "psdi.app.relation.RelationRulesExtSet",
    "description": "Relation Rules Extension for building complex relations",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RELATIONRULESEXTID",
    "primaryKeyColumns": [
        "RELATIONRULESEXTID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATIONRULESEXT",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "SOURCECLASS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Class Structure",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "RELATIONRULESEXT",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "TARGETCLASS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Class Structure",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "RELATIONRULESEXT",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "RELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RELATIONNUM",
            "required": true,
            "persistent": true,
            "title": "Relation Number",
            "remarks": "Relation Id",
            "sameAsAttribute": "RELATIONNUM",
            "sameAsObject": "RELATION"
        },
        {
            "attributeName": "SOURCECLASS",
            "required": true,
            "persistent": true,
            "title": "Source Classification",
            "remarks": "Source Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "TARGETCLASS",
            "required": true,
            "persistent": true,
            "title": "Target Classification",
            "remarks": "Target Classification",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "LINENUM",
            "required": true,
            "persistent": true,
            "title": "Line",
            "remarks": "Each line in a relationship rule group must contain a source classification and a target classification. The rule group can contain multiple lines which are either inclusive (AND) or exclusive (OR), based on the option specified in the Within Group field. Click the New Line icon or the New Row button to add a new line to a rule group.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GROUPNUM",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Asset relationship rules are organized in rule groups. A rule group contains one or more lines and the Within Group field indicates whether all lines in the group are inclusive or exclusive. You can associate multiple rule groups with a relationship. Rule groups are validated in order until the first valid rule group is identified. Click the New Group icon to add a new group of rules to the relationship.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WITHINANDOR",
            "required": false,
            "persistent": true,
            "title": "Within Group",
            "remarks": "If you select AND, all lines (sub-rules) in a group must be satisfied. If you select OR, any of the lines in the group can be satisfied.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Source Attribute",
            "remarks": "The name of an attribute defined for the classification specified for this asset. Create and manage classifications in the Classifications application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETATTRIBUTE",
            "required": false,
            "persistent": true,
            "title": "Target Attribute",
            "remarks": "The name of an attribute defined for the classification specified for this asset. Create and manage classifications in the Classifications application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEVALCOND",
            "required": false,
            "persistent": true,
            "title": "Condition",
            "remarks": "Select the source condition to use with the source attribute value. The value is related to the condition. For example, using the ROAD classification and SURFACE attribute, you can specify an EQUALS condition and enter a value of TARMACADAM. See the Specifications tab in the Assets application to review the complete list of configured attribute types.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETVALCOND",
            "required": false,
            "persistent": true,
            "title": "Condition",
            "remarks": "Select the target condition to use with the target attribute value. The value is related to the condition. For example, using the ROAD classification and SURFACE attribute, you can specify an EQUALS condition and enter a value of TARMACADAM. See the Specifications tab in the Assets application to review the complete list of configured attribute types.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCEVALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Enter the source attribute value to use in conjunction with the condition. For example, a SURFACE attribute can have the value TARMACADAM or a WIDTH attribute can have the value 10.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETVALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Enter the target attribute value to use in conjunction with the condition. This entry can be numeric or alphanumeric depending on the attribute type. For example, the SURFACE attribute can have the value TARMACADAM, and the WIDTH attribute can have the value 10.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONRULESEXTID",
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
            "name": "SOURCECLASS",
            "target": "CLASSSTRUCTURE",
            "remarks": "Class structure relationship",
            "whereClause": "classstructureid=:sourceclass",
            "cardinality": null
        },
        {
            "name": "TARGETCLASS",
            "target": "CLASSSTRUCTURE",
            "remarks": "Class structure relationship",
            "whereClause": "classstructureid=:targetclass",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "RELATIONRULESEXT",
            "source": "RELATION",
            "remarks": "Extended Relationship Rules",
            "whereClause": "relationnum=:relationnum",
            "cardinality": null
        }
    ]
}