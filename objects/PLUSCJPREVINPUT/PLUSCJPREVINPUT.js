mos = {
    "objectName": "PLUSCJPREVINPUT",
    "className": "psdi.plusc.app.jobplan.virtual.PlusCJPRevisionInputSet",
    "description": "Job Plan Revision temporary object",
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
            "required": false,
            "persistent": false,
            "title": "Job Plan",
            "remarks": "Job Plan",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PLUSCREVNUM",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Revision",
            "sameAsAttribute": "PLUSCREVNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PLUSCREVCOM",
            "required": true,
            "persistent": false,
            "title": "Revision Description",
            "remarks": "Revision Description",
            "sameAsAttribute": "PLUSCREVCOM",
            "sameAsObject": "JOBPLAN"
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
            "attributeName": "PLUSCREVCOM_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Revision Description Long description",
            "remarks": "Long Description for Revision Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PLUSCJPREVISIONINPUT",
            "source": "JOBPLAN",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}