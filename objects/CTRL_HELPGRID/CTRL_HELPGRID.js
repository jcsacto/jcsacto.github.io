mos = {
    "objectName": "CTRL_HELPGRID",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Help Grid Control",
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
            "attributeName": "INNERHTML",
            "required": true,
            "persistent": false,
            "title": "HTML Content",
            "remarks": "HTML Content",
            "sameAsAttribute": "VALUE",
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
        },
        {
            "attributeName": "MOREHELP",
            "required": false,
            "persistent": false,
            "title": "More information",
            "remarks": "The path and filename containing the additional help information",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_helpgrid.app and ctrlgroup.optionname=ctrl_helpgrid.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_helpgrid.app and sigoption.optionname=ctrl_helpgrid.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}