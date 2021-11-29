mos = {
    "objectName": "CTRL_DEFAULT",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Default Control",
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
            "attributeName": "VALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FROMDATASRC",
            "required": false,
            "persistent": false,
            "title": "From Data Source ID",
            "remarks": "From Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "FROMATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "From Attribute",
            "remarks": "From Attribute",
            "sameAsAttribute": "DATAATTRIBUTE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "DEFAULTTYPE",
            "required": false,
            "persistent": false,
            "title": "Default Type",
            "remarks": "Default Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATAATTRIBUTE",
            "required": false,
            "persistent": false,
            "title": "Attribute",
            "remarks": "Attribute",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULTLABEL",
            "required": false,
            "persistent": false,
            "title": "Default Label",
            "remarks": "Default Label Attribute.This will enable the user to see the value if the \"Label\" field is blank.",
            "sameAsAttribute": "TITLE",
            "sameAsObject": "MAXATTRIBUTE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_default.app and ctrlgroup.optionname=ctrl_default.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_default.app and sigoption.optionname=ctrl_default.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}