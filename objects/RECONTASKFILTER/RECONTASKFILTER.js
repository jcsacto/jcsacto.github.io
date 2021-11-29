mos = {
    "objectName": "RECONTASKFILTER",
    "className": "psdi.app.rcntskfltr.ReconTaskFilterSet",
    "description": "Filter for Reconciliation Task",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "RECONTASKFILTERID",
    "primaryKeyColumns": [
        "FILTERNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "RECONTASKFILTER",
            "targetObject": "RECONTASK",
            "parentKeys": "FILTERNAME",
            "targetKeys": "FILTERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Task Filter",
            "longDescription": null
        },
        {
            "objectName": "RECONTASKFILTER",
            "targetObject": "RECONTASKFLTRVAL",
            "parentKeys": "FILTERNAME",
            "targetKeys": "FILTERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Task Filter",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "RECONTASKFILTER",
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
            "attributeName": "RECONTASKFILTERID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERNAME",
            "required": true,
            "persistent": true,
            "title": "Filter",
            "remarks": "Filter Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERTYPE",
            "required": true,
            "persistent": true,
            "title": "Filter Type",
            "remarks": "Displays the type for the selected task filter. The type specifies the data set the task filter applies to.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the task filter. To enter or view additional information, click the Long Description button.",
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
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to get long description table from RECONTASKFILTER.",
            "whereClause": "ldkey=:recontaskfilterid and ldownertable = 'RECONTASKFILTER'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONFILTER_RECONTASK",
            "target": "RECONTASK",
            "remarks": "ReconTaskFilter to ReconTask",
            "whereClause": "filtername=:filtername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECONTASKFILTER_RECONTASKFLTRVAL",
            "target": "RECONTASKFLTRVAL",
            "remarks": "Asset Filter for a Task",
            "whereClause": "filtername=:filtername",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RECONTASK_RECONTASKFILTER",
            "source": "RECONTASK",
            "remarks": "Filters for a Reconciliation Task",
            "whereClause": "filtername=:filtername",
            "cardinality": "UNDEFINED"
        }
    ]
}