mos = {
    "objectName": "POREVISIONINPUT",
    "className": "psdi.app.po.virtual.PORevisionInputSet",
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
            "attributeName": "PONUM",
            "required": true,
            "persistent": false,
            "title": "PO",
            "remarks": "Number of the purchase order to revise.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": false,
            "title": "Revision",
            "remarks": "Revision number of the purchase order. Indicates how many times a purchase order has been revised.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVDESCRIPTION",
            "required": true,
            "persistent": false,
            "title": "Revision Description",
            "remarks": "Description of the changes to the purchase order.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "INTERNALCHANGE",
            "required": true,
            "persistent": false,
            "title": "Internal Change",
            "remarks": "Click the Internal Change check box if the purchase order contains information that you do not want to show to the vendor. This option applies to purchase orders with a revision number that is greater than 0.",
            "sameAsAttribute": "INTERNALCHANGE",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "ALLOWRECEIPT",
            "required": true,
            "persistent": false,
            "title": "Allow Receipts and Invoices",
            "remarks": "The default for this option is that receipts and invoices are processed against a purchase order while the purchase order is being revised. The previous revision of the purchase order stays in APPR (Approved) status until the new revision of the purchase order is approved. If this check box is cleared, receipts and invoices are not processed for purchase orders that are being revised. The previous revision of the purchase order goes into HOLD status until the new revision of the purchase order is approved.",
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
            "name": "POREVISIONINPUT",
            "source": "PO",
            "remarks": "Relationship to the non-persistent PORevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}