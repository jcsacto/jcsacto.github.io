mos = {
    "objectName": "WFTOOLBAR",
    "className": "psdi.workflow.virtual.WFToolBarSet",
    "description": "Workflow Toolbar Calculation",
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
            "attributeName": "PROCESSNAME",
            "required": false,
            "persistent": false,
            "title": "Process Name",
            "remarks": "Name of the process to go.",
            "sameAsAttribute": "PROCESSNAME",
            "sameAsObject": "WFPROCESS"
        },
        {
            "attributeName": "TOOLBARLOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "Which tabs the icon shows up on",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLBARICON",
            "required": false,
            "persistent": false,
            "title": "Icon",
            "remarks": "Icon for the Go button",
            "sameAsAttribute": "IMAGE",
            "sameAsObject": "MAXMENU"
        },
        {
            "attributeName": "TOOLBARSEQUENCE",
            "required": false,
            "persistent": false,
            "title": "Sequence",
            "remarks": "Ordering of Go buttons.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Text to describe the Toolbar button",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": false,
            "title": "Active",
            "remarks": "Should this workflow toolbar icon be active?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ICON",
            "required": false,
            "persistent": false,
            "title": "Icon",
            "remarks": "Normal Icon for Toolbar button",
            "sameAsAttribute": "IMAGE",
            "sameAsObject": "MAXMENU"
        },
        {
            "attributeName": "ACTIVEICON",
            "required": false,
            "persistent": false,
            "title": "Active Icon",
            "remarks": "Icon for Toolbar button when active",
            "sameAsAttribute": "IMAGE",
            "sameAsObject": "MAXMENU"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "WFTOOLBAR",
            "source": "INCIDENT",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "INVOICE",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "MAXUSER",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "MR",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "PO",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "PR",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "RFQ",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "SOLUTION",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "SR",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "WOACTIVITY",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "WOCHANGE",
            "remarks": "Get the virutal set that manages the toolbar buttons.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WFTOOLBAR",
            "source": "WORKORDER",
            "remarks": "Relationship to virutal set that manages the toolbar buttons. (empty). Any number member set.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}