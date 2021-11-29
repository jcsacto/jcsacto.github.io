mos = {
    "objectName": "OSLCKEYMAP",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OslcKeyMapSet",
    "description": "OSLC Key Map",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SOURCEATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Source Attribute Name",
            "remarks": "Source Attribute name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Target Attribute Name",
            "remarks": "Target Attribute name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": false,
            "title": "Search Attribute",
            "remarks": "Search Attribute.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "Title",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISLITERAL",
            "required": true,
            "persistent": false,
            "title": "Is Literal",
            "remarks": "Identifies whether the value in Source Attribute column is an attribute or a simple value that is set in the WHERE clause.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": false,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TITLE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Title Long description",
            "remarks": "Long Description for Title",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "OSLCKEYMAP",
            "source": "OSLCRESOURCE",
            "remarks": "Relation to OSLC Key Map Non-persistent Object.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "OSLCKEYMAP",
            "source": "OSOSLCMAP",
            "remarks": "Relation to OSLC Key Map Non-persistent Object.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}