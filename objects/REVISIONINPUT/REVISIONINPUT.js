mos = {
    "objectName": "REVISIONINPUT",
    "className": "psdi.app.contract.virtual.RevisionInputSet",
    "description": "Non-Persistent object to show the revision detail.",
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
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": false,
            "title": "Contract Reference",
            "remarks": "Number of the contract to revise.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": false,
            "title": "Revision",
            "remarks": "The Revision number of the new contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVDESCRIPTION",
            "required": true,
            "persistent": false,
            "title": "Revision Description",
            "remarks": "Description for the new revision.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "REVDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Long Description",
            "remarks": "Detailed description for the revision description field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REVISIONINPUT",
            "source": "LABORVIEW",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONINPUT",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONINPUT",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONINPUT",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONINPUT",
            "source": "SFWVIEW",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REVISIONINPUT",
            "source": "WARRANTYVIEW",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}