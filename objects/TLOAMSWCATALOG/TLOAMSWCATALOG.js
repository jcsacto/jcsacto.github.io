mos = {
    "objectName": "TLOAMSWCATALOG",
    "className": "psdi.app.common.CommonMboSet",
    "description": "Software Catalog Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TLOAMSWCATALOGID",
    "primaryKeyColumns": [
        "TLOAMSWCATALOGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "TLOAMSWCATALOG",
            "targetObject": "TLOAMSOFTWARE",
            "parentKeys": "TLOAMSWCATALOGID",
            "targetKeys": "CATALOGSOURCEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "TLoam Software Catalog",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "TLOAMSWCATALOG",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "UNIQUEID",
            "required": false,
            "persistent": true,
            "title": "ID",
            "remarks": "ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Catalog Name",
            "remarks": "Software catalog name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEMAVERSION",
            "required": false,
            "persistent": true,
            "title": "Schema Version",
            "remarks": "Schema Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Created Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "READONLY",
            "required": true,
            "persistent": true,
            "title": "Read Only Catalog",
            "remarks": "Read Only Catalog",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTACTNAME",
            "required": false,
            "persistent": true,
            "title": "Contact Name",
            "remarks": "Contact Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATAVERSION",
            "required": false,
            "persistent": true,
            "title": "Data Version",
            "remarks": "Data Version from SwKBT",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTMODIFICATION",
            "required": false,
            "persistent": true,
            "title": "Last Modification",
            "remarks": "Last Modification timestamp",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMSWCATALOGID",
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
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "TLOAMSWCATALOG",
            "source": "TLOAMSOFTWARE",
            "remarks": "Relationship of software to catalog",
            "whereClause": "tloamswcatalogid=:catalogsourceid",
            "cardinality": null
        }
    ]
}