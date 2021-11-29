mos = {
    "objectName": "PMVIAROUTE",
    "className": "psdi.app.asset.virtual.PMViaRouteSet",
    "description": "Parameters of PM for display",
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
            "attributeName": "PMNUM",
            "required": true,
            "persistent": false,
            "title": "PM",
            "remarks": "Preventive Maintenance Identifier",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ROUTE",
            "required": true,
            "persistent": false,
            "title": "Route",
            "remarks": "Route Identifier",
            "sameAsAttribute": "ROUTE",
            "sameAsObject": "ROUTES"
        },
        {
            "attributeName": "JPNUM",
            "required": true,
            "persistent": false,
            "title": "Job Plan",
            "remarks": "Jobplan Identifier",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "NEXTDATE",
            "required": false,
            "persistent": false,
            "title": "Next Date",
            "remarks": "Next Due Date for the generation of work orders",
            "sameAsAttribute": "NEXTDATE",
            "sameAsObject": "PM"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PMVIAROUTE",
            "source": "ASSET",
            "remarks": "Relationship to the asset's non-persistent PMViaRoute records. (PMViaRoute is a non-persistent object, no where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMVIAROUTE",
            "source": "LOCATIONS",
            "remarks": "Relationship to the locations non-persistent PMViaRoute records. (PMViaRoute is a non-persistent object, no where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}