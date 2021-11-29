mos = {
    "objectName": "SRVCOMMODRELREC",
    "className": "psdi.app.item.virtual.SrvCommodRelRecSet",
    "description": "Non-persistent table for view related recs dialog",
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
            "attributeName": "VIEWGRP",
            "required": true,
            "persistent": false,
            "title": "View for the Service Group",
            "remarks": "View related records for the service group",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SRVCOMMODRELREC",
            "source": "COMMODITIES",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRVCOMMODRELREC",
            "source": "TICKET",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRVCOMMODRELREC",
            "source": "TKTEMPLATE",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRVCOMMODRELREC",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}