mos = {
    "objectName": "JPTOTAL",
    "className": "psdi.app.jobplan.virtual.JPTotalSet",
    "description": "Non-Persistent table to display JobPlan totals",
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
            "attributeName": "LABORHRS",
            "required": false,
            "persistent": false,
            "title": "Labor Hours",
            "remarks": "Total Labor Hours",
            "sameAsAttribute": "LABORHRS",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "LABORCOST",
            "required": false,
            "persistent": false,
            "title": "Labor Cost",
            "remarks": "Labor Cost",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBLABOR"
        },
        {
            "attributeName": "MATERIALCOST",
            "required": false,
            "persistent": false,
            "title": "Material Cost",
            "remarks": "Material Cost",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "SERVICECOST",
            "required": false,
            "persistent": false,
            "title": "Service Cost",
            "remarks": "Service Cost",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBITEM"
        },
        {
            "attributeName": "TOOLCOST",
            "required": false,
            "persistent": false,
            "title": "Tool Cost",
            "remarks": "Tool Cost",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBTOOL"
        },
        {
            "attributeName": "TOTALCOST",
            "required": false,
            "persistent": false,
            "title": "Total Cost",
            "remarks": "Total Cost",
            "sameAsAttribute": "LINECOST",
            "sameAsObject": "JOBLABOR"
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "JPTOTAL",
            "source": "JOBPLAN",
            "remarks": "Relationship to the nonpersistent set used to display job plan totals.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}