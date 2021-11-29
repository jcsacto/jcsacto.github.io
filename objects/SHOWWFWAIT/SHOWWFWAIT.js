mos = {
    "objectName": "SHOWWFWAIT",
    "className": "psdi.workflow.virtual.ShowWFWaitSet",
    "description": "Placeholder for editing Wait nodes.",
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
            "attributeName": "LANGCODE",
            "required": false,
            "persistent": false,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": false,
            "title": "NodeID",
            "remarks": "Unique ID for the node.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "sameAsAttribute": "PROCESSREV",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": false,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SHOWWFNOTIFICATIONS",
            "target": "WFNOTIFICATION",
            "remarks": "Relationship to the WFNotification table, used to edit the wait node notifications.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SHOWWFWAITLIST",
            "target": "WFWAITLIST",
            "remarks": "Relationship to the ShowWFWait nonpersistant object, used to edit a wait node.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHOWWFWAIT",
            "source": "WFNODE",
            "remarks": "Relationship to the ShowWFWait nonpersistant object, used to edit a wait node.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}