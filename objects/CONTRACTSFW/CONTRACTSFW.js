mos = {
    "objectName": "CONTRACTSFW",
    "className": "psdi.app.contract.software.ContractSFWSet",
    "description": "Software Contracts",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTSFWID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CONTRACTSFW",
            "targetObject": "SFWVIEW",
            "parentKeys": "CONTRACTSFWID",
            "targetKeys": "CONTRACTSFWID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software Contracts",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTSFW",
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
            "attributeName": "CONTRACTSFWID",
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
            "title": "ContractNum",
            "remarks": "Contractnum field from CONTRACT table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDLINESONUSE",
            "required": true,
            "persistent": true,
            "title": "Adds Lines On Use",
            "remarks": "Can additional lines be added to software document with contract reference",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHGPRICEONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Price On Use",
            "remarks": "Can price be changed on the line with contract reference",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHGQTYONUSE",
            "required": true,
            "persistent": true,
            "title": "Change Quantity On Use",
            "remarks": "Can quantity be changed on line with contract reference",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXVOL",
            "required": false,
            "persistent": true,
            "title": "Maximium Amount",
            "remarks": "Maximum Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXRELVOL",
            "required": false,
            "persistent": true,
            "title": "Maximum Release Amount",
            "remarks": "Maximum Release Amount",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPPINGLOSS",
            "required": true,
            "persistent": true,
            "title": "Shipping Loss",
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
            "title": "Acceptance Loss",
            "remarks": "Liable for acceptance loss?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SFWLICTYPE",
            "required": false,
            "persistent": true,
            "title": "License Type",
            "remarks": "Software License Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FULLYLIC",
            "required": false,
            "persistent": true,
            "title": "License Status",
            "remarks": "Current license status of this contract.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WEBSUPPORT",
            "required": true,
            "persistent": true,
            "title": "Web Support",
            "remarks": "Web Support",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GENCOVERAGE",
            "required": false,
            "persistent": true,
            "title": "General Coverage",
            "remarks": "General Coverage",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODCOVERAGE",
            "required": false,
            "persistent": true,
            "title": "Production Coverage",
            "remarks": "Production Coverage",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSUPPORT",
            "required": false,
            "persistent": true,
            "title": "Version Support",
            "remarks": "Version Support",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPPTEAM",
            "required": false,
            "persistent": true,
            "title": "Support Team",
            "remarks": "Support Team",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEDICSUPPTEAM",
            "required": true,
            "persistent": true,
            "title": "Dedicated Support Team",
            "remarks": "Dedicated Support Team",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVCOVERAGE",
            "required": false,
            "persistent": true,
            "title": "Service Coverage",
            "remarks": "Service Coverage",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPPLEVELS",
            "required": false,
            "persistent": true,
            "title": "Support Levels",
            "remarks": "Support Levels",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPPSITES",
            "required": false,
            "persistent": true,
            "title": "Support Sites",
            "remarks": "Support Sites",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUPPSERVERS",
            "required": false,
            "persistent": true,
            "title": "Support Servers",
            "remarks": "Support Servers",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "End Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REINSTATDATE",
            "required": false,
            "persistent": true,
            "title": "Reinstatement Date",
            "remarks": "Reinstatement Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANCELNOTICE",
            "required": false,
            "persistent": true,
            "title": "Cancellation Notice",
            "remarks": "Cancellation Notice",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CAPRATIO",
            "required": false,
            "persistent": true,
            "title": "Cap (%)",
            "remarks": "Cap (%)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDSERVCOST",
            "required": false,
            "persistent": true,
            "title": "Additional Server Cost",
            "remarks": "Additional Server Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDSITECOST",
            "required": false,
            "persistent": true,
            "title": "Additional Site Cost",
            "remarks": "Additional Site Cost",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDATES",
            "required": true,
            "persistent": true,
            "title": "Updates",
            "remarks": "Updates",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWVERSION",
            "required": true,
            "persistent": true,
            "title": "New Versions",
            "remarks": "New Versions",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEWRELEASE",
            "required": true,
            "persistent": true,
            "title": "New Release",
            "remarks": "New release",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FIXES",
            "required": true,
            "persistent": true,
            "title": "Fixes",
            "remarks": "Fixes",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENHANCEMENT",
            "required": true,
            "persistent": true,
            "title": "Enhancements",
            "remarks": "Enhancements",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINTFEE",
            "required": false,
            "persistent": true,
            "title": "Maintenance Fee",
            "remarks": "Maintenance Fee",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINT",
            "required": true,
            "persistent": true,
            "title": "Maintenance",
            "remarks": "Includes maintenance?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PORTABILITY",
            "required": true,
            "persistent": true,
            "title": "Portability",
            "remarks": "Portability",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LATEPMTPENALTY",
            "required": false,
            "persistent": true,
            "title": "Late Payment Penalty",
            "remarks": "Late payment penalty",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISASTERRECOV",
            "required": true,
            "persistent": true,
            "title": "Disaster Recovery",
            "remarks": "Disaster Recovery",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIVESTRIGHT",
            "required": true,
            "persistent": true,
            "title": "Divestiture Rights",
            "remarks": "Divestiture Rights",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DIVPERIOD",
            "required": false,
            "persistent": true,
            "title": "Divestiture Period",
            "remarks": "Divestiture Period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDPRODDISCOUNT",
            "required": false,
            "persistent": true,
            "title": "Additional Product Discounts (%)",
            "remarks": "Additional product discounts (%)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDTRAINDISCOUNT",
            "required": false,
            "persistent": true,
            "title": "Additional Training Discount (%)",
            "remarks": "Additional Training Discount (%)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLOBAL",
            "required": true,
            "persistent": true,
            "title": "Global Usage",
            "remarks": "Global Usage ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICKEY",
            "required": true,
            "persistent": true,
            "title": "License Key",
            "remarks": "License Key Used ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSFER",
            "required": true,
            "persistent": true,
            "title": "Transferable",
            "remarks": "Transferable?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNABILITY",
            "required": true,
            "persistent": true,
            "title": "Assignability",
            "remarks": "Assignability",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAINTHIERARCHY",
            "required": true,
            "persistent": true,
            "title": "Maintain hierarchy",
            "remarks": "Maintain hierarchy",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision number of the contract. This number indicates the number of times a contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANEXCEEDVOLUME",
            "required": true,
            "persistent": true,
            "title": "Can exceed amount",
            "remarks": "Can the specified maximum amount be exceeded?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEREL",
            "required": true,
            "persistent": true,
            "title": "Create Release",
            "remarks": "Create release from the software contracts?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AMTREMAINING",
            "required": false,
            "persistent": true,
            "title": "Amount Remaining",
            "remarks": "Difference between the maximum volume and the commited cost for a volume specified contract",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTPERIOD",
            "required": false,
            "persistent": true,
            "title": "Acceptance Period (Days)",
            "remarks": "Acceptance period in days",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENFORCEBUNDLE",
            "required": true,
            "persistent": true,
            "title": "Enforce Bundle",
            "remarks": "Bundle enforced?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTANCE",
            "required": true,
            "persistent": true,
            "title": "Acceptance",
            "remarks": "Is there an acceptance period?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERPETUITY",
            "required": true,
            "persistent": true,
            "title": "Perpetuity",
            "remarks": "Does the contract extend indefinitely?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTORENEWAL",
            "required": true,
            "persistent": true,
            "title": "Automatic Renewal",
            "remarks": "Does this contract automatically renew?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONFIDENTIALITY",
            "required": true,
            "persistent": true,
            "title": "Confidentiality",
            "remarks": "Confidentiality",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WARRANTYPERIOD",
            "required": false,
            "persistent": true,
            "title": "Warranty Period",
            "remarks": "Warranty period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}