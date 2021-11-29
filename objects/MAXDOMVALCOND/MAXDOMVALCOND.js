mos = {
    "objectName": "MAXDOMVALCOND",
    "className": "psdi.app.system.MaxDomValConditionSet",
    "description": "Domain value condition",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXDOMVALCONDID",
    "primaryKeyColumns": [
        "VALUEID",
        "DOMAINID",
        "CONDITIONNUM",
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONDITION",
            "targetObject": "MAXDOMVALCOND",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Condition for domain value.",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXDOMVALCOND",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Domain this condition value is for.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXDOMVALCOND",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "0 to many",
            "status": "VERIFIED",
            "description": "Object Condition value is applied to.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DOMAINID",
            "required": true,
            "persistent": true,
            "title": "Domain ID",
            "remarks": "Domain ID",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "VALUEID",
            "required": true,
            "persistent": true,
            "title": "Value ID",
            "remarks": "Identifier of the domain value. Foreign key to the domain value record that the condition applies to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUEDESC",
            "required": false,
            "persistent": false,
            "title": "Value Description",
            "remarks": "Description of the domain value.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": true,
            "persistent": true,
            "title": "Condition Number",
            "remarks": "Number of the condition that applies to the domain value.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Name",
            "remarks": "The name of object. The condition only applies to the domain value when the domain is associated to the object. If left empty, the condition applies to the domain value disregard the object that domain is associated to.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXDOMVALCONDID",
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
            "name": "CONDITION",
            "target": "CONDITION",
            "remarks": "Relationship from MAXDOMVALCOND to CONDITION",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECT",
            "target": "MAXOBJECT",
            "remarks": "Relationship from MAXDOMVALCOND to MAXOBJECT",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXDOMVALCOND",
            "source": "ALNDOMAIN",
            "remarks": "Relationship from ALNDOMAIN to MAXDOMVALCOND",
            "whereClause": "domainid = :domainid and valueid = :valueid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "source": "CONDITION",
            "remarks": "Relationship from CONDITION to MAXDOMVALCOND",
            "whereClause": "conditionnum = :conditionnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "source": "MAXDOMAIN",
            "remarks": "Relationship from MAXDOMAIN to MAXDOMVALCOND",
            "whereClause": "domainid = :domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship from MAXOBJECTCFG to MAXDOMVALCOND",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "source": "NUMERICDOMAIN",
            "remarks": "Relationship from NUMERICDOMAIN to MAXDOMVALCOND",
            "whereClause": "domainid = :domainid and valueid = :valueid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "source": "SYNONYMDOMAIN",
            "remarks": "Relationship from SYNONYMDOMAIN to MAXDOMVALCOND",
            "whereClause": "domainid = :domainid and valueid = :valueid",
            "cardinality": "UNDEFINED"
        }
    ]
}