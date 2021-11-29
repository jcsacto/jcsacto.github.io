mos = {
    "objectName": "CTRL_DATASRC",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Data Source Control",
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
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_datasrc.app and ctrlgroup.optionname=ctrl_datasrc.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_datasrc.app and sigoption.optionname=ctrl_datasrc.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}