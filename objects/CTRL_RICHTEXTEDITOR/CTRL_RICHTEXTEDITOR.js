mos = {
    "objectName": "CTRL_RICHTEXTEDITOR",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Rich Text Editor Control",
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
            "attributeName": "ID",
            "required": true,
            "persistent": false,
            "title": "Control ID",
            "remarks": "Control ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "APP",
            "required": false,
            "persistent": false,
            "title": "Application",
            "remarks": "Application",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
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
            "attributeName": "DATASRC",
            "required": false,
            "persistent": false,
            "title": "Data Source ID",
            "remarks": "Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "HIDELABEL",
            "required": true,
            "persistent": false,
            "title": "Hide Label",
            "remarks": "Hide Label",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "LOOKUP",
            "required": false,
            "persistent": false,
            "title": "Lookup",
            "remarks": "Lookup",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MENUTYPE",
            "required": false,
            "persistent": false,
            "title": "Menu Type",
            "remarks": "Menu Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": false,
            "title": "Signature Option",
            "remarks": "Signature option option name",
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
            "attributeName": "INPUTMODE",
            "required": false,
            "persistent": false,
            "title": "Input Mode",
            "remarks": "Input Mode",
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
            "attributeName": "HEIGHT",
            "required": false,
            "persistent": false,
            "title": "Height",
            "remarks": "Height",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUGINS",
            "required": false,
            "persistent": false,
            "title": "Plugins",
            "remarks": "List of plugins so that customers can customize the toolbar",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_richtexteditor.app and ctrlgroup.optionname=ctrl_richtexteditor.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_richtexteditor.app and sigoption.optionname=ctrl_richtexteditor.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}