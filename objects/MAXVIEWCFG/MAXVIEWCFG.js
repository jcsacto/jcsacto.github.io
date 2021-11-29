mos = {
    "objectName": "MAXVIEWCFG",
    "className": "psdi.app.configure.MaxViewCfgSet",
    "description": "Maximo View Configuration",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXVIEWID",
    "primaryKeyColumns": [
        "VIEWNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 119",
            "longDescription": null
        },
        {
            "objectName": "MAXVIEW",
            "targetObject": "MAXVIEWCFG",
            "parentKeys": "VIEWNAME",
            "targetKeys": "VIEWNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The configuration version of the MaxView",
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
            "sameAsAttribute": "VIEWSELECT",
            "sameAsObject": "MAXVIEW"
        },
        {
            "attributeName": "VIEWWHERE",
            "required": false,
            "persistent": true,
            "title": "View Where",
            "remarks": "Where Clause to be specified when creating the view",
            "sameAsAttribute": "VIEWWHERE",
            "sameAsObject": "MAXVIEW"
        },
        {
            "attributeName": "AUTOSELECT",
            "required": true,
            "persistent": true,
            "title": "Automatically Select",
            "remarks": "When selected, indicates a dynamic view, which automatically updates with any changes made to the data in the underlying tables.",
            "sameAsAttribute": "AUTOSELECT",
            "sameAsObject": "MAXVIEW"
        },
        {
            "attributeName": "MAXVIEWID",
            "required": true,
            "persistent": true,
            "title": "MAXVIEWCFGID",
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
            "sameAsAttribute": "VIEWFROM",
            "sameAsObject": "MAXVIEW"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXATTRIBUTECFG",
            "target": "MAXATTRIBUTECFG",
            "remarks": "Distinct set of attributes owned by this view.  The result set will contain one or more objects.",
            "whereClause": "objectname in (select maxobjectcfg.objectname from maxobjectcfg where isview = :yes and maxobjectcfg.entityname = :viewname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVIEWCOLUMNCFG",
            "target": "MAXVIEWCOLUMNCFG",
            "remarks": "MaxViewCfg to MaxViewColumnCfg.  This is the exploded set of attributes in this view.  The result set will contain one or more objects.",
            "whereClause": "viewname = :viewname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXVIEWCFG",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxViewCfg.  If this is a persistent view, the result set will contain one object.",
            "whereClause": ":isview = :yes and :persistent = :yes and viewname = :entityname",
            "cardinality": "UNDEFINED"
        }
    ]
}