mos = {
    "objectName": "CTRL_DIALOG",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Dialog Control",
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
            "attributeName": "ICON",
            "required": false,
            "persistent": false,
            "title": "Icon",
            "remarks": "Icon",
            "sameAsAttribute": "IMAGENAME",
            "sameAsObject": "CTRL_IMAGE"
        },
        {
            "attributeName": "HIDEHELP",
            "required": true,
            "persistent": false,
            "title": "Hide Help",
            "remarks": "Hide Help",
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
            "attributeName": "LISTACTION",
            "required": true,
            "persistent": false,
            "title": "List Tab Action",
            "remarks": "List Tab Action",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALLOWCANCEL",
            "required": true,
            "persistent": false,
            "title": "Allow Cancel",
            "remarks": "Allow Cancel",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "DATASRC",
            "required": false,
            "persistent": false,
            "title": "Data Source ID",
            "remarks": "Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "MBONAME",
            "required": false,
            "persistent": false,
            "title": "Business Object",
            "remarks": "Business Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PARENTDATASRC",
            "required": false,
            "persistent": false,
            "title": "Parent Data Source ID",
            "remarks": "Parent Data Source ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONSHIP",
            "required": false,
            "persistent": false,
            "title": "Relationship",
            "remarks": "Relationship",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ORDERBY",
            "required": false,
            "persistent": false,
            "title": "Order By",
            "remarks": "Order By",
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
            "attributeName": "LISTENERS",
            "required": false,
            "persistent": false,
            "title": "Listeners",
            "remarks": "Listeners",
            "sameAsAttribute": "LISTENERS",
            "sameAsObject": "CTRL_DATASRC"
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
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_dialog.app and ctrlgroup.optionname=ctrl_dialog.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_dialog.app and sigoption.optionname=ctrl_dialog.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}