mos = {
    "objectName": "SLACHANGESTATUS",
    "className": "psdi.app.sla.virtual.SLAChangeStatusSet",
    "description": "Parameters for SLA Change Status dialog",
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
            "remarks": "New status of the service level agreement (SLA). Maximo sets a new SLA to DRAFT status. You can change the SLA to ACTIVE or INACTIVE. Only SLAs that you mark as ACTIVE can be applied by other Maximo user to a record. When an SLA is in ACTIVE status, Maximo sets the associated escalation to ACTIVE status as well. When you inactivate an SLA, Maximo displays a message asking whether you want to inactivate the associated escalation too.",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "SLA"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SLACHANGESTATUS",
            "source": "SLA",
            "remarks": "Relationship to the non-persistent SLAChangeStatus table. The resulting set will contain zero or more objects. Note : SLAChangeStatus is a non-persistent MBO with whose help the dialog box binds with the object.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}