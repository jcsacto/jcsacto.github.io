mos = {
    "objectName": "CTRL_LISTBOX",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "List Box Control",
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
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "HEIGHT",
            "required": false,
            "persistent": false,
            "title": "Height",
            "remarks": "Height",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WIDTH",
            "required": false,
            "persistent": false,
            "title": "Width",
            "remarks": "Width",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BEANCLASS",
            "required": false,
            "persistent": false,
            "title": "Bean Class",
            "remarks": "Bean Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATAATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Attribute",
            "remarks": "Attribute",
            "sameAsAttribute": "DATAATTRIBUTE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "INPUTMODE",
            "required": false,
            "persistent": false,
            "title": "Input Mode",
            "remarks": "Input Mode",
            "sameAsAttribute": "INPUTMODE",
            "sameAsObject": "CTRL_TEXTBOX"
        },
        {
            "attributeName": "MBONAME",
            "required": false,
            "persistent": false,
            "title": "Business Object Name",
            "remarks": "Business Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PARENTDATASRC",
            "required": false,
            "persistent": false,
            "title": "Parent Data Source ID",
            "remarks": "Parent Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "ORDERBY",
            "required": false,
            "persistent": false,
            "title": "Order by",
            "remarks": "Order by",
            "sameAsAttribute": "ORDERBY",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": false,
            "persistent": false,
            "title": "Where Clause",
            "remarks": "Where Clause",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "AUTOREFRESH",
            "required": true,
            "persistent": false,
            "title": "Auto-Refresh",
            "remarks": "Auto-Refresh",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "KEYATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Key Attribute",
            "remarks": "Key Attribute",
            "sameAsAttribute": "DATAATTRIBUTE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "KEYVALUE",
            "required": false,
            "persistent": false,
            "title": "Key Value",
            "remarks": "Key Value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "DEFAULTLABEL",
            "required": false,
            "persistent": false,
            "title": "Default Label",
            "remarks": "Default Label Attribute.This will enable the user to see the value if the \"Label\" field is blank.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": false,
            "title": "Signature Option",
            "remarks": "Signature Option Option Name",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "SIGOPTIONDATASRC",
            "required": false,
            "persistent": false,
            "title": "data source id",
            "remarks": "data source id",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "SYNCHRONOUS",
            "required": false,
            "persistent": false,
            "title": "Always Synchronous",
            "remarks": "Always use synchronous requests",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_listbox.app and ctrlgroup.optionname=ctrl_listbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_listbox.app and sigoption.optionname=ctrl_listbox.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}