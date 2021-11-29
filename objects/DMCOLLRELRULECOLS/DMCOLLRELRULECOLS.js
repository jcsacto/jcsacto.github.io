mos = {
    "objectName": "DMCOLLRELRULECOLS",
    "className": "psdi.dm.collection.DMCollRelRuleColSet",
    "description": "Migration Collections related data rule column",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMCOLLRELRULECOLSID",
    "primaryKeyColumns": [
        "DMCOLLRELRULECOLSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DMCOLLRELRULEID",
            "required": true,
            "persistent": true,
            "title": "DMCOLLRELRULEID",
            "remarks": "DMCOLLRELRULEID.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIMARYOBJECTCOL",
            "required": true,
            "persistent": true,
            "title": "Primary column",
            "remarks": "The attribute of the primary object that is used to find related records.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "RELATEDOBJECTCOL",
            "required": true,
            "persistent": true,
            "title": "Related column",
            "remarks": "The attribute of the related object that is used to find related records.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DMCOLLRELRULECOLSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYREC",
            "required": false,
            "persistent": false,
            "title": "Display in tablewindow",
            "remarks": "Non persistant field used to see if record is to be display in tablewindow",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DMCOLLRELRULECOLS",
            "source": "DMCOLLPKGEXCEPTION",
            "remarks": "Relationship from DMCOLLPKGEXCEPTION to DMCOLLRELRULECOLS.",
            "whereClause": "dmcollrelruleid=:dmcollrelruleid",
            "cardinality": null
        },
        {
            "name": "DMCOLLRELRULECOLS",
            "source": "DMCOLLRELRULE",
            "remarks": "Relationship from DMCOLLRELRULE to DMCOLLRELRULECOLS",
            "whereClause": "dmcollrelruleid=:dmcollrelruleid",
            "cardinality": null
        }
    ]
}