mos = {
    "objectName": "ASSOCCONTINPUT",
    "className": "psdi.app.contract.virtual.AssocContInputSet",
    "description": "Non-Persistent object to show the contract detail.",
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
            "title": "Contract",
            "remarks": "Contract Number of the newly created child contract.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": true,
            "persistent": false,
            "title": "Type",
            "remarks": "Type of the Contract that is to be created.",
            "sameAsAttribute": "CONTRACTTYPE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the new Contract.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": false,
            "title": "OrgID",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASSOCCONTINPUT",
            "source": "MASTERVIEW",
            "remarks": "Relationship to the non-persistent AssocContInput object. (No where clause). The resulting set will contain one or zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}