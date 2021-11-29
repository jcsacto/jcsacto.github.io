mos = {
    "objectName": "REPORTBROSPARAM",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "BROS report parameter virtual object",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTBROSPARAMID",
    "primaryKeyColumns": [
        "REPORTBROSID",
        "PARAMNAME",
        "QPIX"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "PARAMNAME",
            "required": true,
            "persistent": true,
            "title": "Parameter Name",
            "remarks": "Parameter Name",
            "sameAsAttribute": "PARAMNAME",
            "sameAsObject": "REPORTPARAM"
        },
        {
            "attributeName": "PARAMVALUE",
            "required": false,
            "persistent": true,
            "title": "Parameter Value",
            "remarks": "Parameter Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QPIX",
            "required": false,
            "persistent": true,
            "title": "DP Index",
            "remarks": "Direct Print Index",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SESSIONPARAM",
            "required": true,
            "persistent": true,
            "title": "Session Parameter",
            "remarks": "Session Parameter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTBROSID",
            "required": true,
            "persistent": true,
            "title": "Report BROS Queue Id",
            "remarks": "Report BROS Queue Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTBROSPARAMID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORTBROSPARAM",
            "source": "REPORTBROS",
            "remarks": "Relationship to the set for BROS transient reporting parameter tables",
            "whereClause": "reportbrosid=:reportbrosid",
            "cardinality": null
        }
    ]
}