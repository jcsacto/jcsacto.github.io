mos = {
    "objectName": "JSONRESOURCETYPE",
    "className": "com.ibm.tivoli.maximo.fdmbo.app.manageres.JSONResourceTypeSet",
    "description": "JSON Resource Type",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "JSONRESOURCETYPEID",
    "primaryKeyColumns": [
        "RESOURCETYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "JSONRESOURCETYPE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        }
    ],
    "columns": [
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes resource",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ANALYZERCLASS",
            "required": false,
            "persistent": true,
            "title": "Analyzer class",
            "remarks": "Analyzer class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSINGCLASS",
            "required": false,
            "persistent": true,
            "title": "Processing class",
            "remarks": "Processing class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COLLECTIONPROP",
            "required": false,
            "persistent": true,
            "title": "Collection property",
            "remarks": "Collection property",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATEFORMATTYPE",
            "required": true,
            "persistent": true,
            "title": "Date Format",
            "remarks": "How a date field is presented in JSON",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATEFORMAT",
            "required": false,
            "persistent": true,
            "title": "Date Pattern",
            "remarks": "The date pattern if the date format is PATTERN",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "JSONRESOURCETYPEID",
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
            "attributeName": "RESOURCETYPE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Resource Type Long description",
            "remarks": "Long Description for Resource Type",
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
            "name": "JSONRESOURCE",
            "target": "JSONRESOURCE",
            "remarks": "Relation to Resource object. This relationship will return 0 or more rows",
            "whereClause": "resourcetype=:resourcetype",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "JSONRESOURCETYPE",
            "source": "JSONRESOURCE",
            "remarks": "Relation to Resource Type object. This relationship will return 1 row",
            "whereClause": "resourcetype=:resourcetype",
            "cardinality": null
        }
    ]
}