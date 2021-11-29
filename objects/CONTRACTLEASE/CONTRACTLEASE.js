mos = {
    "objectName": "CONTRACTLEASE",
    "className": "psdi.app.contract.lease.ContractLeaseSet",
    "description": "ContractLease Table.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTLEASEID",
    "primaryKeyColumns": [
        "CONTRACTNUM",
        "REVISIONNUM",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CONTRACTLEASE",
            "targetObject": "LEASEVIEW",
            "parentKeys": "CONTRACTLEASEID",
            "targetKeys": "CONTRACTLEASEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lease Contract",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACT",
            "targetObject": "CONTRACTLEASE",
            "parentKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "targetKeys": "CONTRACTNUM, REVISIONNUM, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CONTRACTLEASE",
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
            "attributeName": "SHIPPINGLOSS",
            "required": true,
            "persistent": true,
            "title": "Shipping Loss",
            "remarks": "Is the Buyer liable for losses incurred during shipment?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TECHREFRESH",
            "required": true,
            "persistent": true,
            "title": "Technical Refresh",
            "remarks": "Does the buyer have an option to update the technology on the leased or rented asset?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTSIDEMAINT",
            "required": true,
            "persistent": true,
            "title": "Outside Maintenance",
            "remarks": "Is third party maintenance allowed on leased or rented assets?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERIMCHG",
            "required": false,
            "persistent": true,
            "title": "Interim Charge",
            "remarks": "Partial first month charge for this lease or rental.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSURANCEREQ",
            "required": true,
            "persistent": true,
            "title": "Insurance Required",
            "remarks": "Is Insurance required for these leased or rented assets?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELFINSURED",
            "required": true,
            "persistent": true,
            "title": "Self Insured",
            "remarks": "Can the buyer carry insurance for loss of  the leased or rented asset?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUYOUT",
            "required": true,
            "persistent": true,
            "title": "Buy Out",
            "remarks": "Does the buyer have an option to purchase the asset at the end of the lease?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CASUALTYBUYOUT",
            "required": true,
            "persistent": true,
            "title": "Casualty Buyout",
            "remarks": "Is the buyer required to purchase the asset when it has been damaged beyond repair.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUBONRETURN",
            "required": true,
            "persistent": true,
            "title": "Sub on Return",
            "remarks": "Can the buyer substitute a like or better asset at the time of return?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSFERWARRANTY",
            "required": true,
            "persistent": true,
            "title": "Transfer Warranty",
            "remarks": "Is the asset warranty transferred to the lessee?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WARRANTYSTART",
            "required": false,
            "persistent": true,
            "title": "Warranty Start",
            "remarks": "Unit of time that the duration is specified in. (days, months, years)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOTIFYONMOVE",
            "required": true,
            "persistent": true,
            "title": "Notify on Move  ",
            "remarks": "Is the buyer required to notify the lessor when the leased or rented asset is moved to a new tax jurisdiction?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CASUALTYNOTIFY",
            "required": true,
            "persistent": true,
            "title": "Casualty Notify",
            "remarks": "Is the buyer required to notify the lessor when the leased or rented asset is damaged beyond repair?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONFIGURENOTIFY",
            "required": true,
            "persistent": true,
            "title": "Configure Notify",
            "remarks": "Should the contract manager be notified when a configuration change occurs?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANAUDIT",
            "required": true,
            "persistent": true,
            "title": "Can Audit",
            "remarks": "Does the vendor have the right to audit usage of the leased or rented asset.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENFORCEBUNDLE",
            "required": true,
            "persistent": true,
            "title": "Maintain Hierarchy",
            "remarks": "When receiving this rotating asset will the bundle be kept in tact.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTSCHEDULEDATE",
            "required": false,
            "persistent": true,
            "title": "Last Scheduled Date",
            "remarks": "Last date that a new payment schedule can be created.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TERM",
            "required": false,
            "persistent": true,
            "title": "Term",
            "remarks": "Length of contract in months.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEASERATEFACTOR",
            "required": false,
            "persistent": true,
            "title": "Lease Rate Factor.",
            "remarks": "Lessor pre-determined percentage used to calculate the periodic payment.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOTIFYCONTACT",
            "required": false,
            "persistent": true,
            "title": "Notify Contact",
            "remarks": "Whom to contact at the leasing company if a move or casualty notification is required.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DAYSTONOTIFY",
            "required": false,
            "persistent": true,
            "title": "Days to Notify",
            "remarks": "Damaged notification period in days",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTANCELOSS",
            "required": true,
            "persistent": true,
            "title": "Acceptance Loss ",
            "remarks": "Is the Buyer liable for losses between receipt and acceptance?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCEPTPERIOD",
            "required": false,
            "persistent": true,
            "title": "Accept Period",
            "remarks": "Amount of time in days that can pass before the buyer must either accept the received items or return them.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WARRANTYDURATION",
            "required": false,
            "persistent": true,
            "title": "Duration of Warranty",
            "remarks": "Duration of the warranty.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LEASESUSPACCT",
            "required": false,
            "persistent": true,
            "title": "Lease Suspense Account",
            "remarks": "Lease Suspense Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCLUDESMAINT",
            "required": true,
            "persistent": true,
            "title": "Includes Maintenance  ",
            "remarks": "Is maintenance included ?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TIMEUNIT",
            "required": false,
            "persistent": true,
            "title": "Time Unit",
            "remarks": "Unit of time that the duration is specified in (days, months, years)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FINANCETYPE",
            "required": false,
            "persistent": true,
            "title": "Finance Type",
            "remarks": "What type of financing is used for this lease, capital or operating.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": true,
            "persistent": true,
            "title": "Contract",
            "remarks": "Unique ID Number for the current contract.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CONTRACTLEASEID",
            "required": true,
            "persistent": true,
            "title": "CONTRACTLEASEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": true,
            "persistent": true,
            "title": "Revision ",
            "remarks": "Revision number of the contract. This number indicates the number of times the contract has been revised. A contract that has been created and not revised will show a number of 0.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "PERIODICPAYMNT",
            "required": false,
            "persistent": true,
            "title": "Periodic Payment.",
            "remarks": "The amount paid per period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SCHEDULE",
            "required": false,
            "persistent": true,
            "title": "Schedule",
            "remarks": "How often the payment is made either monthly or weekly or yearly.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "NUMOFPAYMENTS",
            "required": false,
            "persistent": true,
            "title": "Number of Payments",
            "remarks": "Number of Payments",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}