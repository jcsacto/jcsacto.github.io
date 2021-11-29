mos = {
    "objectName": "CTRL_TAB",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Tab Control",
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
            "attributeName": "TYPE",
            "required": false,
            "persistent": false,
            "title": "Type",
            "remarks": "Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEFAULT",
            "required": true,
            "persistent": false,
            "title": "Default",
            "remarks": "Default",
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
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
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
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_statictext.app and ctrlgroup.optionname=ctrl_statictext.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_statictext.app and sigoption.optionname=ctrl_statictext.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}