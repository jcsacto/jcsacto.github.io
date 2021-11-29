mos = {
    "objectName": "ASSIGNCREW",
    "className": "com.ibm.tivoli.maximo.amcrew.app.workorder.virtual.AssignCrewSet",
    "description": "Non-persistent table to dispatch/plan crew",
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
            "attributeName": "FROMDATE",
            "required": true,
            "persistent": false,
            "title": "From",
            "remarks": "Date range starting from",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TODATE",
            "required": true,
            "persistent": false,
            "title": "To",
            "remarks": "Date range ending on",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNED",
            "required": true,
            "persistent": false,
            "title": "Include Fully Assigned",
            "remarks": "Select this check box to include crew, even if they are fully allocated to other assignments during the specified date range.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "CREWWORKGROUP",
            "required": false,
            "persistent": false,
            "title": "Crew Work Group",
            "remarks": "The resource pool that supplies the crew's members",
            "sameAsAttribute": "PERSONGROUP",
            "sameAsObject": "PERSONGROUP"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Vendor",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": false,
            "title": "Crew",
            "remarks": "Identifies the crew.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "AMCREWTYPE",
            "required": false,
            "persistent": false,
            "title": "Crew Type",
            "remarks": "Identifies the crew type.",
            "sameAsAttribute": "AMCREWTYPE",
            "sameAsObject": "AMCREWT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "ASSIGNCREW",
            "source": "ASSIGNMENT",
            "remarks": "Relationship to the non-persistent parameter set for dispatch Crew.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}