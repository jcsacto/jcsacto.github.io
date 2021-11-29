mos = {
    "objectName": "PLUSCDSREVINPUT",
    "className": "psdi.plusc.app.pluscds.virtual.PlusCDSRevisionInputSet",
    "description": "revision control no persistent tbl for data sheet",
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
            "attributeName": "DSPLANNUM",
            "required": true,
            "persistent": false,
            "title": "Data Sheet",
            "remarks": "Data Sheet",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": false,
            "title": "Revision",
            "remarks": "Revision control numebr",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "REVDESCRIPTION",
            "required": true,
            "persistent": false,
            "title": "Revision Description",
            "remarks": "Revision Description",
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
            "attributeName": "REVDESCRIPTION_LONGDESCRIPTION",
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
            "name": "PLUSCDSREVISIONINPUT",
            "source": "PLUSDSPLAN",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}