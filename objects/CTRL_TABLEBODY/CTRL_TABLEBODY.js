mos = {
    "objectName": "CTRL_TABLEBODY",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Tablebody Control",
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
            "attributeName": "DISPLAYROWSPERPAGE",
            "required": false,
            "persistent": false,
            "title": "Display Rows Per Page",
            "remarks": "Display Rows Per Page",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERABLE",
            "required": false,
            "persistent": false,
            "title": "Filterable",
            "remarks": "Filterable",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTEREXPANDED",
            "required": false,
            "persistent": false,
            "title": "Filter Expanded",
            "remarks": "Filter Expanded",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": false,
            "title": "Signature Option Option Name",
            "remarks": "Signature Option Option Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SIGOPTIONDATASRC",
            "required": false,
            "persistent": false,
            "title": "Data Source ID",
            "remarks": "Data Source ID",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "CUSTOMIZABLE",
            "required": false,
            "persistent": false,
            "title": "Customizable",
            "remarks": "Customizable",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_tablebody.app and ctrlgroup.optionname=ctrl_tablebody.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_tablebody.app and sigoption.optionname=ctrl_tablebody.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}