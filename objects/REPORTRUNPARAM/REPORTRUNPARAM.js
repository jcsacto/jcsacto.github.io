mos = {
    "objectName": "REPORTRUNPARAM",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Report Run Parameters",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "REPORTRUNPARAMID",
    "primaryKeyColumns": [
        "REPORTRUNPARAMID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "REPORTRUNQUEUE",
            "targetObject": "REPORTRUNPARAM",
            "parentKeys": "REPORTRUNQUEUEID",
            "targetKeys": "REPORTRUNQUEUEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Report Run Queue",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REPORTRUNPARAMID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPORTRUNQUEUEID",
            "required": true,
            "persistent": true,
            "title": "Report Run Queue Id",
            "remarks": "Report Run Queue Id",
            "sameAsAttribute": "REPORTRUNQUEUEID",
            "sameAsObject": "REPORTRUNQUEUE"
        },
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
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "REPORTRUNPARAM",
            "source": "REPORTRUNQUEUE",
            "remarks": "Report Run Parameters",
            "whereClause": "reportrunqueueid=:reportrunqueueid",
            "cardinality": "UNDEFINED"
        }
    ]
}