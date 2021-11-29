mos = {
    "objectName": "CHANGECAPSTATUS",
    "className": "psdi.app.item.virtual.ChangeCapStatusSet",
    "description": "Parameters for Inventory Change Capitalized Status",
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
            "attributeName": "CURRENTSTATUS",
            "required": true,
            "persistent": false,
            "title": "Current Capitalized Status",
            "remarks": "Specifies whether the item is currently tracked as a capitalized or non-capitalized cost. If the check box is selected, the item is capitalized. If the check box is cleared, the item is not capitalized.",
            "sameAsAttribute": "CAPITALIZED",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "CAPITALACC",
            "required": false,
            "persistent": false,
            "title": "Capital GL Account",
            "remarks": "Capital GL Account number for the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": false,
            "title": "Memo",
            "remarks": "Comments about the change in capitalized status of the item.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CHANGECAPSTATUS",
            "source": "ITEM",
            "remarks": "Relationship to the nonpersistent parameter set for changing capitalized status.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}