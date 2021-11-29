mos = {
    "objectName": "CONTRACTLEASEEND",
    "className": "psdi.app.contract.lease.virtual.ContractLeaseEndSet",
    "description": "Contract Lease",
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
            "attributeName": "LEASEENDACT",
            "required": false,
            "persistent": false,
            "title": "Lease End Action",
            "remarks": "Lease end action: create PO or Invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINVNUMBER",
            "required": false,
            "persistent": false,
            "title": "Number",
            "remarks": "PO or Invoice Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETSTATUS",
            "required": false,
            "persistent": false,
            "title": "Target Status",
            "remarks": "Target status of PO or Invoice.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CONTRACTLEASEEND",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the non-persistent CONTRACTLEASEEND object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}