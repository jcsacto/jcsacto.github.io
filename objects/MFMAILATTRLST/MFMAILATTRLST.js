mos = {
    "objectName": "MFMAILATTRLST",
    "className": "com.ibm.tivoli.maximo.mfmail.util.virtual.AttributeListSet",
    "description": "Maximo for E-mail Configuration Attribute List Table",
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
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": false,
            "title": "Object",
            "remarks": "MBO Object name. It is inherited from MFMAILCFG MBO.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": false,
            "title": "Attribute Name",
            "remarks": "Attribute",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "Attribute title",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ORDER",
            "required": true,
            "persistent": false,
            "title": "Order",
            "remarks": "Order number for using sorting the attribute list",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISKEY",
            "required": true,
            "persistent": false,
            "title": "Is Key",
            "remarks": "Key attribute or not",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXATTRIBUTE",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship to the MAXOBJECT table, used to find description for MBO name",
            "whereClause": "objectname = :objectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}