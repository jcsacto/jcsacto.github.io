mos = {
    "objectName": "OSLCRESOURCETYPES",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.resource.OslcResourceTypesSet",
    "description": "OSLC Well known resource Types",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCRESOURCETYPESID",
    "primaryKeyColumns": [
        "RESOURCETYPE"
    ],
    "logicalRelationships": [
        {
            "objectName": "OSLCRESOURCETYPES",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "RESOURCETYPE",
            "targetKeys": "RESOURCETYPE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Resource Type",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "OSLCRESOURCETYPES",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCRESOURCETYPES",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RESOURCETYPE",
            "required": true,
            "persistent": true,
            "title": "Resource Type",
            "remarks": "The resource type or record type, such as  defect or ticket.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESOURCETYPEURI",
            "required": true,
            "persistent": true,
            "title": "Resource Type URI",
            "remarks": "The URI of the resource type that is shared between applications.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the resource type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHAPEDOC",
            "required": false,
            "persistent": true,
            "title": "Shape Document",
            "remarks": "The RDF or XML document that describes the resource data types that can be used when enabling a creation interaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCRESOURCETYPESID",
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
            "name": "OSLCINTERACTION",
            "target": "OSLCINTERACTION",
            "remarks": "Relation to get all interactions for resource Type",
            "whereClause": "resourcetype=:resourcetype",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCRESOURCETYPES",
            "source": "OSLCINTERACTION",
            "remarks": "Relation to get all Resource Types for an interaction",
            "whereClause": "resourcetype=:resourcetype",
            "cardinality": null
        }
    ]
}