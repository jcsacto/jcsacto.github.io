mos = {
    "objectName": "MAXVIEW",
    "className": "psdi.app.configure.MaxViewSet",
    "description": "Maximo View",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXVIEWID",
    "primaryKeyColumns": [
        "VIEWNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXVIEW",
            "targetObject": "MAXVIEWCFG",
            "parentKeys": "VIEWNAME",
            "targetKeys": "VIEWNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The configuration version of the MaxView",
            "longDescription": null
        },
        {
            "objectName": "MAXVIEW",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "VIEWNAME",
            "targetKeys": "VIEWNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Columns of the View.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEW",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "For Mbo Objects that are stored as views.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "VIEWNAME",
            "required": true,
            "persistent": true,
            "title": "View",
            "remarks": "View name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "VIEWSELECT",
            "required": false,
            "persistent": true,
            "title": "View Select",
            "remarks": "User-enterable in Config UI when using a function to define this view",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWWHERE",
            "required": false,
            "persistent": true,
            "title": "View Where",
            "remarks": "Where Clause to be specified when creating the view",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOSELECT",
            "required": true,
            "persistent": true,
            "title": "Automatically Select",
            "remarks": "When selected, indicates a dynamic view, which automatically updates with any changes made to the data in the underlying tables.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXVIEWID",
            "required": true,
            "persistent": true,
            "title": "MAXVIEWID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWFROM",
            "required": false,
            "persistent": true,
            "title": "View From",
            "remarks": "The From clause to be used when Autoselect is False",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXVIEW",
            "source": "MAXOBJECT",
            "remarks": "MaxObject to MaxView.  If this is a persistent view, the result set will contain one object.",
            "whereClause": ":isview = :yes and :persistent = :yes and viewname = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVIEW",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxView.  If this is a persistent view that has been configured, the result set will contain one object.",
            "whereClause": ":isview = :yes and viewname = :entityname",
            "cardinality": "UNDEFINED"
        }
    ]
}