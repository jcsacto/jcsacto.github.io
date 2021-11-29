mos = {
    "objectName": "EXPBUILDATTR",
    "className": "psdi.common.expbuilder.ExpressionBuilderAttsSet",
    "description": "Expression Builder Attribute Table",
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
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": false,
            "title": "Attribute",
            "remarks": "Attribute Name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Remarks",
            "sameAsAttribute": "REMARKS",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MAXTYPE",
            "required": false,
            "persistent": false,
            "title": "maxtype",
            "remarks": "maxtype",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LENGTH",
            "required": false,
            "persistent": false,
            "title": "Length",
            "remarks": "Length",
            "sameAsAttribute": "LENGTH",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Does this node have children",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has Parent ",
            "remarks": "Does This node have a parent",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHILD",
            "required": false,
            "persistent": false,
            "title": "Child",
            "remarks": "Chile - Atttributes",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MAXATTRIBUTEID",
            "required": false,
            "persistent": false,
            "title": "maxatt",
            "remarks": "Attribute ID Unique",
            "sameAsAttribute": "MAXATTRIBUTEID",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Column for Attributename",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}