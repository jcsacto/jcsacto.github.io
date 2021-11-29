mos = {
    "objectName": "CTRL_HYPERLINK",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Hyperlink Control",
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
            "required": true,
            "persistent": false,
            "title": "Label",
            "remarks": "Label",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXLABELS"
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
            "attributeName": "COLUMN",
            "required": false,
            "persistent": false,
            "title": "Column",
            "remarks": "Column",
            "sameAsAttribute": "COLUMN",
            "sameAsObject": "CTRL_STATICTEXT"
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
            "attributeName": "IMAGEALIGN",
            "required": false,
            "persistent": false,
            "title": "Image Alignment",
            "remarks": "Image Alignment",
            "sameAsAttribute": "ALIGN",
            "sameAsObject": "CTRL_STATICTEXT"
        },
        {
            "attributeName": "SEPARATOR",
            "required": true,
            "persistent": false,
            "title": "Separator",
            "remarks": "Separator",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": false,
            "title": "CSS Classname",
            "remarks": "CSS Classname",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCESSKEY",
            "required": false,
            "persistent": false,
            "title": "Access key",
            "remarks": "Access key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETID",
            "required": false,
            "persistent": false,
            "title": "Control Target ID",
            "remarks": "Control Target ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "MXEVENT",
            "required": false,
            "persistent": false,
            "title": "Event Type",
            "remarks": "Event Type",
            "sameAsAttribute": "MXEVENT",
            "sameAsObject": "CTRL_PUSHBUTTON"
        },
        {
            "attributeName": "EVENTVALUE",
            "required": false,
            "persistent": false,
            "title": "Event Value",
            "remarks": "Event Value",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "CTRL_PUSHBUTTON"
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": false,
            "title": "URL",
            "remarks": "Link attribute for the Hyperlink control. User can specify a URL here",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_hyperlink.app and ctrlgroup.optionname=ctrl_hyperlink.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_hyperlink.app and sigoption.optionname=ctrl_hyperlink.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}