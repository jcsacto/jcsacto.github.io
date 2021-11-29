mos = {
    "objectName": "CTRL_RADIOBTNGRP",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Radio Button Group",
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
            "attributeName": "HIDELABEL",
            "required": true,
            "persistent": false,
            "title": "Hidel Label",
            "remarks": "Hidel Label",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIENTATION",
            "required": false,
            "persistent": false,
            "title": "Button Orientation",
            "remarks": "Button Orientation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALIGN",
            "required": false,
            "persistent": false,
            "title": "Text Alignment",
            "remarks": "Text Alignment",
            "sameAsAttribute": "ALIGN",
            "sameAsObject": "CTRL_STATICTEXT"
        },
        {
            "attributeName": "BORDER",
            "required": true,
            "persistent": false,
            "title": "Show Border",
            "remarks": "Show Border",
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
            "attributeName": "UPDATEONCHANGE",
            "required": false,
            "persistent": false,
            "title": "Change Event",
            "remarks": "Change Event",
            "sameAsAttribute": "ONDATACHANGE",
            "sameAsObject": "CTRL_TEXTBOX"
        },
        {
            "attributeName": "VALUEATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Value Attribute",
            "remarks": "Value Attribute",
            "sameAsAttribute": "DATAATTRIBUTE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "DESCATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Description Attribute",
            "remarks": "Description Attribute",
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
            "remarks": "signature option option name",
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
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_radiobtngrp.app and ctrlgroup.optionname=ctrl_radiobtngrp.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_radiobtngrp.app and sigoption.optionname=ctrl_radiobtngrp.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}