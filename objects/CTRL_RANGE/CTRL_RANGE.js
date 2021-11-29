mos = {
    "objectName": "CTRL_RANGE",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Range Control",
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
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": false,
            "title": "CSS Class Name",
            "remarks": "CSS Class Name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "CTRL_HYPERLINK"
        },
        {
            "attributeName": "LOWER",
            "required": false,
            "persistent": false,
            "title": "Lower",
            "remarks": "Lower",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "CTRL_DEFAULT"
        },
        {
            "attributeName": "UPPER",
            "required": false,
            "persistent": false,
            "title": "Upper",
            "remarks": "Upper",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "CTRL_DEFAULT"
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_range.app and ctrlgroup.optionname=ctrl_range.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_range.app and sigoption.optionname=ctrl_range.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}