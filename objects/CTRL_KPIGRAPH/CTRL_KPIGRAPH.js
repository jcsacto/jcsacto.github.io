mos = {
    "objectName": "CTRL_KPIGRAPH",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "KPI Graph Control",
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
            "attributeName": "BORDER",
            "required": true,
            "persistent": false,
            "title": "Show Border",
            "remarks": "Show Border",
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
            "attributeName": "SERVLET",
            "required": false,
            "persistent": false,
            "title": "Source Servlet",
            "remarks": "Source Servlet",
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
            "attributeName": "TYPE",
            "required": false,
            "persistent": false,
            "title": "Graph Type",
            "remarks": "Graph Type",
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
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_kpigraph.app and ctrlgroup.optionname=ctrl_kpigraph.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_kpigraph.app and sigoption.optionname=ctrl_kpigraph.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}