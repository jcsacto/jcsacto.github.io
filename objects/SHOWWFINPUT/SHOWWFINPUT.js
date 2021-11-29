mos = {
    "objectName": "SHOWWFINPUT",
    "className": "psdi.workflow.virtual.ShowWFInputSet",
    "description": "Non-Persistent used table to edit a WFINPUT",
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
            "remarks": "The node that this manual input information is related to.",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "WFNODE"
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
            "attributeName": "PROCESSNAME",
            "required": true,
            "persistent": false,
            "title": "Process",
            "remarks": "Name of the owning process.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "DISPLAYONE",
            "required": true,
            "persistent": false,
            "title": "Display One",
            "remarks": "Do we display a single manual input or simply take it",
            "sameAsAttribute": "DISPLAYONE",
            "sameAsObject": "WFINPUT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SHOWWFACTIONS",
            "target": "SHOWWFACTION",
            "remarks": "Relationship to the ShowWFAction table, used to edit the input actions.",
            "whereClause": "1=2",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SHOWWFINPUT",
            "source": "WFNODE",
            "remarks": "Relationship to the ShowWFInput non-persistantobject, used to edit a WFINPUT.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}