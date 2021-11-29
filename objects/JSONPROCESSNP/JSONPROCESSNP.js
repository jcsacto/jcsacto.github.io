mos = {
    "objectName": "JSONPROCESSNP",
    "className": "com.ibm.tivoli.maximo.fdmbo.app.createres.JSONProcessNPMboSet",
    "description": "Non-persistent Object for JSON processing",
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
            "attributeName": "RESOURCENAME",
            "required": true,
            "persistent": false,
            "title": "Resource",
            "remarks": "Resource.",
            "sameAsAttribute": "RESOURCENAME",
            "sameAsObject": "JSONRESOURCE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes resource",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JSONDATA",
            "required": true,
            "persistent": false,
            "title": "JSON Data",
            "remarks": "JSON XML or schema",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": false,
            "title": "URL",
            "remarks": "URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": false,
            "persistent": false,
            "title": "End Point",
            "remarks": "End Point",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
        },
        {
            "attributeName": "RESOURCETYPE",
            "required": true,
            "persistent": false,
            "title": "Resource Type",
            "remarks": "Resource Type",
            "sameAsAttribute": "RESOURCETYPE",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RELPROPNAME",
            "required": false,
            "persistent": false,
            "title": "Relation Property Name",
            "remarks": "Relation Property Name.",
            "sameAsAttribute": "RELPROPNAME",
            "sameAsObject": "JSONOBJECTMAP"
        },
        {
            "attributeName": "RELPROPPATH",
            "required": false,
            "persistent": false,
            "title": "Property Path",
            "remarks": "Property Path",
            "sameAsAttribute": "RELPROPPATH",
            "sameAsObject": "JSONOBJECTMAP"
        },
        {
            "attributeName": "PROPERTYNAME",
            "required": false,
            "persistent": false,
            "title": "Property Name",
            "remarks": "Property name.",
            "sameAsAttribute": "PROPERTYNAME",
            "sameAsObject": "JSONATTRIBUTEMAP"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Object Name.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": false,
            "title": "Attribute Name",
            "remarks": "Attribute Name.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "OPTIMIZE",
            "required": false,
            "persistent": false,
            "title": "Optimize resource",
            "remarks": "Optimize resource",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTYPE",
            "required": false,
            "persistent": false,
            "title": "Type",
            "remarks": "Specifies the data type of the attribute",
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
            "attributeName": "SCALE",
            "required": false,
            "persistent": false,
            "title": "Scale",
            "remarks": "Scale",
            "sameAsAttribute": "SCALE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": false,
            "title": "Default Value",
            "remarks": "Specify the default value of the attribute",
            "sameAsAttribute": "DEFAULTVALUE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": false,
            "title": "Domain",
            "remarks": "Domain",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Field Title",
            "remarks": "Specifies the description of the object or attribute.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "JSONATTRIBUTEMAP",
            "target": "JSONPROCESSNP",
            "remarks": "Relation to JSON Attributes Map. This relationship will return 1 or more rows",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "JSONOBJECTMAP",
            "target": "JSONPROCESSNP",
            "remarks": "Relation to JSON Object Map. This relationship will return 1 or more rows",
            "whereClause": "",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "JSONATTRIBUTEMAP",
            "source": "JSONPROCESSNP",
            "remarks": "Relation to JSON Attributes Map. This relationship will return 1 or more rows",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "JSONOBJECTMAP",
            "source": "JSONPROCESSNP",
            "remarks": "Relation to JSON Object Map. This relationship will return 1 or more rows",
            "whereClause": "",
            "cardinality": null
        }
    ]
}