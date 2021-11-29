mos = {
    "objectName": "CONTRACTPURCH",
    "className": "psdi.app.contract.purch.ContractPurchSet",
    "description": "ContractPurch Table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTPURCHID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CONTRACTPURCH",
            "targetObject": "PURCHVIEW",
            "parentKeys": "CONTRACTPURCHID",
            "targetKeys": "CONTRACTPURCHID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Purchase Contract",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTPURCH",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTPURCH",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Unique Contract identifier.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ADDLINESONUSE",
            "required": true,
            "persistent": true,
            "title": "Add Lines on Use",
            "remarks": "Can additional lines be added to purchase document with contract reference.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHGPRICEONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Price on Use",
            "remarks": "Can price be changed on the line with contract reference.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHGQTYONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Quantity on Use",
            "remarks": "Can quantity be changed on line with contract reference.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXVOL",
            "required": false,
            "persistent": true,
            "title": "Maximum Volume",
            "remarks": "Maximum volume",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXRELVOL",
            "required": false,
            "persistent": true,
            "title": "Maximum Release Volume",
            "remarks": "Maximum Release Volume.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPPINGLOSS",
            "required": true,
            "persistent": true,
            "title": "Shipping Loss ",
            "remarks": "Liable for shipping loss?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELIVERYLOSS",
            "required": true,
            "persistent": true,
            "title": "Delivery Loss",
            "remarks": "Liable for delivery loss?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTANCELOSS",
            "required": true,
            "persistent": true,
            "title": "Acceptance Loss ",
            "remarks": "Liable for acceptance loss?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTPERIOD",
            "required": false,
            "persistent": true,
            "title": "Acceptance Period (Days)",
            "remarks": "Acceptance period in days.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENFORCEBUNDLE",
            "required": true,
            "persistent": true,
            "title": "Maintain Hierarchy",
            "remarks": "Bundle enforced?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMTREMAINING",
            "required": false,
            "persistent": true,
            "title": "Amount Remaining",
            "remarks": "Difference between the maximum volume and the commited cost for a volume specified contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CREATEREL",
            "required": true,
            "persistent": true,
            "title": "Create Release",
            "remarks": "Create Release from the Purchase Contract ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANEXCEEDVOLUME",
            "required": true,
            "persistent": true,
            "title": "Can Exceed Volume",
            "remarks": "Can the specified maximum volume be exceeded?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTPURCHID",
            "required": true,
            "persistent": true,
            "title": "CONTRACTPURCHID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "MAINTHIERCHY",
            "required": true,
            "persistent": true,
            "title": "Maintain Hierarchy",
            "remarks": "Maintain Hierarchy",
            "sameAsAttribute": "MAINTHIERCHY",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SWLICTYPE",
            "required": false,
            "persistent": true,
            "title": "License Type",
            "remarks": "Software License Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}