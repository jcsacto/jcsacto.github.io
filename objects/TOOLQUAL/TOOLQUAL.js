mos = {
    "objectName": "TOOLQUAL",
    "className": "psdi.app.qual.ToolQualSet",
    "description": "ToolQual table for tools related qualifications",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TOOLQUALID",
    "primaryKeyColumns": [
        "ORGID",
        "QUALIFICATIONID",
        "ITEMNUM",
        "ITEMSETID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "TOOLQUAL",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "TOOLQUAL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "TOOLQUAL",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Qualification",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "TOOLQUAL",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "ITEMNUM",
            "required": true,
            "persistent": true,
            "title": "Tool",
            "remarks": "Identifier of the tool. Entering a tool code in this field associates this tool to be used for the qualification.",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "ITEMSETID",
            "required": true,
            "persistent": true,
            "title": "Item Set",
            "remarks": "ItemSet Id",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "QUALIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Qualification",
            "remarks": "Qualification Id",
            "sameAsAttribute": "QUALIFICATIONID",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TOOLQUALID",
            "required": true,
            "persistent": true,
            "title": "TOOLQUALID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table on itemnum and itemsetid. (item.itemnum=toolqual.itemnum and item.itemsetid=toolqual.itemsetid.)  This set returns 0 or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "QUALIFICATION",
            "target": "QUALIFICATION",
            "remarks": "Relationship to the TOOLQUAL table. This set returns 1 object.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "TOOLQUAL",
            "source": "AMCREWTOOLSQ",
            "remarks": "Relationship between AMCREWTOOLSQ and TOOLQUAL tables.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": null
        },
        {
            "name": "TOOLQUAL",
            "source": "AMCTQUAL",
            "remarks": "Relationship to the TOOLQUAL table.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "TOOLQUAL",
            "source": "AMCTTOOL",
            "remarks": "Relationship to the ToolQual table.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": null
        },
        {
            "name": "TOOLQUAL",
            "source": "ITEM",
            "remarks": "Relationship to the TOOLQUAL table. This set returns 0 or more objects.",
            "whereClause": "itemnum=:itemnum and itemsetid=:itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLQUAL",
            "source": "QUALIFICATION",
            "remarks": "Relationship to the ToolQual table on qualificationid. (toolqual.qualificationid=qualification.qualificationid and toolqual.orgid=:qualification.orgid.)  This set returns 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOOLQUAL",
            "source": "TOOLITEM",
            "remarks": "Tool Report Object Structure",
            "whereClause": "itemsetid=:itemsetid and itemnum=:itemnum",
            "cardinality": "MULTIPLE"
        }
    ]
}