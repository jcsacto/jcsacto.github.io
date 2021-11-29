mos = {
    "objectName": "SHOWWFNODE",
    "className": "psdi.workflow.virtual.ShowWFNodeSet",
    "description": "Non-Persistent used table to edit a work flow node",
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
            "attributeName": "TITLE",
            "required": false,
            "persistent": false,
            "title": "Title",
            "remarks": "Name of the node.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the node",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Description of the node",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": false,
            "title": "Node ID",
            "remarks": "Unique ID for the node.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
        },
        {
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": false,
            "title": "Process",
            "remarks": "Name of the owning process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "PROCESSREV",
            "required": true,
            "persistent": false,
            "title": "Process Revision",
            "remarks": "Process Revision",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SHOWWFWAITLIST",
            "target": "WFWAITLIST",
            "remarks": "Relationship to the WFWaitlist table, used to edit the wait list.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHOWWFNODE",
            "source": "WFNODE",
            "remarks": "Relationship to the ShowWFNodet non-persistantobject, used to edit a WFNODE.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}