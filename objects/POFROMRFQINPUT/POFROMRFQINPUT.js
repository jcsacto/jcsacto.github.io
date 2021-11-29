mos = {
    "objectName": "POFROMRFQINPUT",
    "className": "psdi.app.rfq.virtual.POFromRFQInputSet",
    "description": "Non-persistent table for creating PO from RFQ",
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
            "attributeName": "PONUM",
            "required": false,
            "persistent": false,
            "title": "PO",
            "remarks": "Identifies the PO record that is being created.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the PO being created.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Vendor of the PO being created",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "POFROMRFQINPUT",
            "source": "RFQVENDOR",
            "remarks": "Relationship to the non-persistent CreatePOFromRFQ table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}