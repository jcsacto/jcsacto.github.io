mos = {
    "objectName": "PMCHANGESTATUS",
    "className": "psdi.app.pm.virtual.PMChangeStatusSet",
    "description": "Parameters for Preventive Maintenance Change Statu",
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
            "attributeName": "STATUS",
            "required": true,
            "persistent": false,
            "title": "New Status",
            "remarks": "Status Change",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ROLLTOALLCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Roll New Status to All Child PMs",
            "remarks": "Roll New Status Down to all Child PMs",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PMCHANGESTATUS",
            "source": "PM",
            "remarks": "Relationship to the non-persistent PMChangeStatus object. The resulting set will contain zero or more objects. Note : PMChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}