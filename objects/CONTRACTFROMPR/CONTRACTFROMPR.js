mos = {
    "objectName": "CONTRACTFROMPR",
    "className": "psdi.app.pr.virtual.ContractFromPRSet",
    "description": "Create Contract from PR",
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
            "required": false,
            "persistent": false,
            "title": "Contract",
            "remarks": "Contract number of the contract being created",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the contract being created.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": true,
            "persistent": false,
            "title": "Contract Type",
            "remarks": "Type of contract being created.",
            "sameAsAttribute": "CONTRACTTYPEID",
            "sameAsObject": "CONTRACTTYPE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization ID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CREATECONTRACT",
            "source": "PR",
            "remarks": "Relationship to the non-persistent ContractFromPR table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}