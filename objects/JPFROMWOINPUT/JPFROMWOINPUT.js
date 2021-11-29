mos = {
    "objectName": "JPFROMWOINPUT",
    "className": "psdi.app.workorder.virtual.JPFromWOInputSet",
    "description": "Non-Persistent table for creating JP from WO",
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
            "attributeName": "JPNUM",
            "required": true,
            "persistent": false,
            "title": "Job Plan",
            "remarks": "Identifies the job plan that you are creating from the work plan of the current work order.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the job plan you are creating.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Constraint Identifier of the organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "The unique identifier of a site",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "persistent": false,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "JPFROMWOINPUT",
            "source": "WORKORDER",
            "remarks": "Relationship to the non-persistent WOInput table. (No where clause). The resulting set will contain zero or more objects. Note: This relationship is used to create a Job Plan from A Work Order Work Plan.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}