mos = {
    "objectName": "CONTRACTMASTER",
    "className": "psdi.app.contract.master.ContractMasterSet",
    "description": "Master Contract Table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTMASTERID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CONTRACTMASTER",
            "targetObject": "MASTERVIEW",
            "parentKeys": "CONTRACTMASTERID",
            "targetKeys": "CONTRACTMASTERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Master Contract",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTMASTER",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTMASTER",
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
            "attributeName": "CONTRACTMASTERID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Contract Number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ACCEPTPERIOD",
            "required": false,
            "persistent": true,
            "title": "Acceptance Period",
            "remarks": "Amount of time in days that can pass before the buyer must either accept the received items or return them.",
            "sameAsAttribute": "ACCEPTPERIOD",
            "sameAsObject": "CONTRACTPURCH"
        },
        {
            "attributeName": "MAXVOL",
            "required": false,
            "persistent": true,
            "title": "Maximum Amount",
            "remarks": "Maximum Amount",
            "sameAsAttribute": "MAXVOL",
            "sameAsObject": "CONTRACTPURCH"
        },
        {
            "attributeName": "CANEXCEEDVOLUME",
            "required": true,
            "persistent": true,
            "title": "Can Exceed Value ",
            "remarks": "Can Exceed Value",
            "sameAsAttribute": "CANEXCEEDVOLUME",
            "sameAsObject": "CONTRACTPURCH"
        },
        {
            "attributeName": "LASTASSOCDATE",
            "required": false,
            "persistent": true,
            "title": "Last Associate Date",
            "remarks": "The last date that a new contract can be associated with the current master contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPPINGLOSS",
            "required": true,
            "persistent": true,
            "title": "Shipping Loss",
            "remarks": "Is the Buyer liable for losses incurred during shipment?",
            "sameAsAttribute": "SHIPPINGLOSS",
            "sameAsObject": "CONTRACTLEASE"
        },
        {
            "attributeName": "ACCEPTANCELOSS",
            "required": true,
            "persistent": true,
            "title": "Acceptance Loss",
            "remarks": "Liable for acceptance loss?",
            "sameAsAttribute": "ACCEPTANCELOSS",
            "sameAsObject": "CONTRACTPURCH"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}