mos = {
    "objectName": "CTRL_PRESENTATIO",
    "className": "psdi.app.designer.virtual.ControlSet",
    "description": "Presentation Control",
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
            "attributeName": "MBONAME",
            "required": false,
            "persistent": false,
            "title": "Business Object",
            "remarks": "Business Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "attributeName": "RESULTSTABLEID",
            "required": false,
            "persistent": false,
            "title": "Results Table ID",
            "remarks": "Results Table ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BEANCLASS",
            "required": false,
            "persistent": false,
            "title": "App Bean Class",
            "remarks": "App Bean Class",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEBUG",
            "required": false,
            "persistent": false,
            "title": "Debug",
            "remarks": "Debug",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPRESTRICTIONS",
            "required": false,
            "persistent": false,
            "title": "Application Restrictions",
            "remarks": "Application Restrictions",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "ISMOBILE",
            "required": false,
            "persistent": false,
            "title": "Is Mobile",
            "remarks": "Is this a Mobile Presentation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWPORT",
            "required": false,
            "persistent": false,
            "title": "Viewport",
            "remarks": "Viewport Name (widthxheight)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPHELP",
            "required": false,
            "persistent": false,
            "title": "Application Help",
            "remarks": "The packagename and filename containing the application help information",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYNCHRONOUS",
            "required": false,
            "persistent": false,
            "title": "Always Synchronous",
            "remarks": "Always use synchronous requests",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CTRLGROUP",
            "target": "CTRLGROUP",
            "remarks": "Relationship to the CTRLGROUP table, used to find the security groups for a given sigoption. (ctrlgroup.app=ctrl_presentatio.app and ctrlgroup.optionname=ctrl_presentatio.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Relationship to the SIGOPTION table, used to find the sigoptions for a given control details. (sigoption.app=ctrl_presentatio.app and sigoption.optionname=ctrl_presentatio.sigoption). The resulting set will contain zero or more objects.",
            "whereClause": "app = :app and optionname = :sigoption",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}