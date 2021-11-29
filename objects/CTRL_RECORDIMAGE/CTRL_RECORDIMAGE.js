mos = {
    "objectName": "CTRL_RECORDIMAGE",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Record Image Control",
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
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": false,
            "title": "CSS Class Name",
            "remarks": "CSS Class Name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "CTRL_HYPERLINK"
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
            "attributeName": "DATASRC",
            "required": false,
            "persistent": false,
            "title": "Data Source ID",
            "remarks": "Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "THUMBNAIL",
            "required": true,
            "persistent": false,
            "title": "Is Thumbnail",
            "remarks": "Is Thumbnail",
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
            "attributeName": "ALTTEXT",
            "required": false,
            "persistent": false,
            "title": "ALT Text on Image",
            "remarks": "ALT Text on Image",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "title": "Data Source Id",
            "remarks": "Data Source Id",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_recordimage.app and ctrlgroup.optionname=ctrl_dialog.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_recordimage.app and sigoption.optionname=ctrl_action.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}