mos = {
    "objectName": "CTRL_MENUBAR",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Menubar Control",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ID",
            "required": true,
            "persistent": false,
            "title": "Control ID",
            "remarks": "Control ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "LABEL",
            "required": false,
            "persistent": false,
            "title": "Label",
            "remarks": "Label",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "SOURCEMETHOD",
            "required": false,
            "persistent": false,
            "title": "Source Method",
            "remarks": "Source Method",
            "sameAsAttribute": "METHOD",
            "sameAsObject": "CTRL_ACTION"
        },
        {
            "attributeName": "EVENT",
            "required": false,
            "persistent": false,
            "title": "Event Value",
            "remarks": "Event Value",
            "sameAsAttribute": "MXEVENT",
            "sameAsObject": "CTRL_PUSHBUTTON"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_menubar.app and ctrlgroup.optionname=ctrl_menubar.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_menubar.app and sigoption.optionname=ctrl_menubar.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}