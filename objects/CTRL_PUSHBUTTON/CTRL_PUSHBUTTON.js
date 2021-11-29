mos = {
    "objectName": "CTRL_PUSHBUTTON",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Push Button Control",
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
            "attributeName": "IMAGE",
            "required": false,
            "persistent": false,
            "title": "Image Filename",
            "remarks": "Image Filename",
            "sameAsAttribute": "IMAGENAME",
            "sameAsObject": "CTRL_IMAGE"
        },
        {
            "attributeName": "DEFAULT",
            "required": true,
            "persistent": false,
            "title": "Default Button",
            "remarks": "Default Button",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MENUTYPE",
            "required": false,
            "persistent": false,
            "title": "Menu Type",
            "remarks": "Menu Type",
            "sameAsAttribute": "MENUTYPE",
            "sameAsObject": "CTRL_TEXTBOX"
        },
        {
            "attributeName": "MXEVENT",
            "required": false,
            "persistent": false,
            "title": "Event",
            "remarks": "Event",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "TARGETID",
            "required": false,
            "persistent": false,
            "title": "Target ID",
            "remarks": "Target ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_pushbutton.app and ctrlgroup.optionname=ctrl_pushbutton.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_pushbutton.app and sigoption.optionname=ctrl_pushbutton.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}