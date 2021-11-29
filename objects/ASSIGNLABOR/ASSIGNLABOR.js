mos = {
    "objectName": "ASSIGNLABOR",
    "className": "psdi.app.workorder.virtual.AssignLaborSet",
    "description": "Non-Persistent table to dispatch/plan labor",
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
            "attributeName": "CRAFT",
            "required": false,
            "persistent": false,
            "title": "Craft",
            "remarks": "The craft that is needed to meet this requirement",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Identifies the Work Location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SUPERVISOR",
            "required": false,
            "persistent": false,
            "title": "Supervisor",
            "remarks": "The person who is the direct supervisor of a labor person.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "WORKTYPE",
            "required": false,
            "persistent": false,
            "title": "Work Type",
            "remarks": "Work Order Type",
            "sameAsAttribute": "WORKTYPE",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": false,
            "title": "Shift",
            "remarks": "Shift For This Date Range",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "FROMDATE",
            "required": true,
            "persistent": false,
            "title": "From",
            "remarks": "Date Range Starting from",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TODATE",
            "required": true,
            "persistent": false,
            "title": "To",
            "remarks": "Date Range ending on",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNED",
            "required": true,
            "persistent": false,
            "title": "Include Fully Assigned",
            "remarks": "Select this check box to include labor, even if they are fully allocated to other assignments during the specified date range.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": false,
            "title": "Skill Level",
            "remarks": "Skill level assigned to the craft.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Vendor associated with this assigned labor.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": false,
            "title": "Contract",
            "remarks": "Contract number associated with this assigned labor.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASSIGNLABOR",
            "source": "ASSIGNMENT",
            "remarks": "Relationship to the nonpersistent parameter set for Dispatch Labor.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}