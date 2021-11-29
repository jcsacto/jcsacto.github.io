mos = {
    "objectName": "IBMCONTENTREPLACEMENTS",
    "className": "com.ibm.ism.content.virtual.ContentReplacementSet",
    "description": "MRIU attribute replacements",
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
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": false,
            "title": "Attribute name",
            "remarks": "Attribute name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "Value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "IBMCONTENTREPLACEVALUES"
        },
        {
            "attributeName": "ID",
            "required": true,
            "persistent": false,
            "title": "ID",
            "remarks": "ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "POSSIBLEVALUES",
            "target": "IBMCONTENTREPLACEVALUES",
            "remarks": "Set of value replacement values",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MRIUREPLACEMENTS",
            "source": "IBMCONTENTITEM",
            "remarks": null,
            "whereClause": null,
            "cardinality": null
        }
    ]
}