mos = {
    "objectName": "JSONRESOURCE",
    "className": "com.ibm.tivoli.maximo.fdmbo.app.manageres.JSONResourceSet",
    "description": "JSON Resource",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JSONRESOURCEID",
    "primaryKeyColumns": [
        "RESOURCENAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "JSONRESOURCE",
            "targetObject": "JSONATTRIBUTEMAP",
            "parentKeys": "RESOURCENAME",
            "targetKeys": "RESOURCENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "JSON Resource",
            "longDescription": null
        },
        {
            "objectName": "JSONRESOURCE",
            "targetObject": "JSONOBJECTMAP",
            "parentKeys": "RESOURCENAME",
            "targetKeys": "RESOURCENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "JSON Resource",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "JSONRESOURCE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "JSONRESOURCE",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration End Point",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RESOURCENAME",
            "required": true,
            "persistent": true,
            "title": "Resource",
            "remarks": "Resource",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes resource",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": true,
            "persistent": true,
            "title": "End Point",
            "remarks": "End Point",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
        },
        {
            "attributeName": "RESOURCETYPE",
            "required": true,
            "persistent": true,
            "title": "Resource Type",
            "remarks": "Resource Type",
            "sameAsAttribute": "RESOURCETYPE",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MULTIPLE",
            "required": true,
            "persistent": true,
            "title": "Multiple",
            "remarks": "Multiple",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JSONRESOURCEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCENAME_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Resource Long description",
            "remarks": "Long Description for Resource",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "JSONOBJECTMAP",
            "target": "JSONOBJECTMAP",
            "remarks": "Relation to JSON Object Map. This relationship will return 1 or more rows",
            "whereClause": "resourcename=:resourcename",
            "cardinality": null
        },
        {
            "name": "JSONRESOURCETYPE",
            "target": "JSONRESOURCETYPE",
            "remarks": "Relation to Resource Type object. This relationship will return 1 row",
            "whereClause": "resourcetype=:resourcetype",
            "cardinality": null
        },
        {
            "name": "MAXENDPOINT",
            "target": "MAXENDPOINT",
            "remarks": "Relation to JSON Object Map. This relationship will return 1 or more rows",
            "whereClause": "endpointname=:endpointname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "JSONRESOURCE",
            "source": "JSONRESOURCETYPE",
            "remarks": "Relation to Resource object. This relationship will return 0 or more rows",
            "whereClause": "resourcetype=:resourcetype",
            "cardinality": null
        },
        {
            "name": "JSONRESOURCE",
            "source": "MAXENDPOINT",
            "remarks": "Relation to End Point object. This relationship will return 1 or more rows",
            "whereClause": "endpointname=:endpointname",
            "cardinality": null
        }
    ]
}