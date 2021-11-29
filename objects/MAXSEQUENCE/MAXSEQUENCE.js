mos = {
    "objectName": "MAXSEQUENCE",
    "className": "psdi.app.system.MaxSequenceSet",
    "description": "Records UniqueID Sequence Reservations.",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXSEQUENCEID",
    "primaryKeyColumns": [
        "TBNAME",
        "NAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TBNAME, NAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The name of the table column where the sequence is used.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "NAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 94",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SEQUENCENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 95",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TBNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 96",
            "longDescription": null
        },
        {
            "objectName": "MAXTABLE",
            "targetObject": "MAXSEQUENCE",
            "parentKeys": "TABLENAME",
            "targetKeys": "TBNAME",
            "relNum": "many to many",
            "status": "VERIFIED",
            "description": "The name of the table where the sequence is used.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "TBNAME",
            "required": true,
            "persistent": true,
            "title": "Table",
            "remarks": "Name of Table for Reserved Sequence",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Column",
            "remarks": "Name of Column for Reserved Sequence",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXRESERVED",
            "required": true,
            "persistent": true,
            "title": "Maximum Reserved",
            "remarks": "Last Reserved ID in the sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXVALUE",
            "required": false,
            "persistent": true,
            "title": "Maximum Value",
            "remarks": "Maximum Value in Sequence",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RANGE",
            "required": false,
            "persistent": true,
            "title": "Sequence Range",
            "remarks": "Sequence Range",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SEQUENCENAME",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Name of the sequence",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXSEQUENCEID",
            "required": true,
            "persistent": true,
            "title": "Maxsequence Id",
            "remarks": "Unique Id column",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXSEQUENCE",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship from MaxAttributeCfg to MaxSequence, matching on tablename and columnname.  Will return zero or one row",
            "whereClause": "tbname = :entityname and name = :columnname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXSEQUENCE",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship from MaxObjectCfg to MaxSequence",
            "whereClause": "tbname = :entityname",
            "cardinality": "UNDEFINED"
        }
    ]
}