mos = {
    "objectName": "MAXINTOBJALIAS",
    "className": "psdi.iface.app.intobject.MaxIntObjAliasSet",
    "description": "stores alias for columns",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTOBJALIASID",
    "primaryKeyColumns": [
        "MAXINTOBJALIASID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTOBJALIAS",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXINTOBJALIASID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "INTOBJECTNAME",
            "remarks": "the integration object name",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "NAME",
            "remarks": "the column name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ALIASNAME",
            "required": false,
            "persistent": true,
            "title": "ALIASNAME",
            "remarks": "the alias name",
            "sameAsAttribute": "ALIAS",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "OBJECTID",
            "required": true,
            "persistent": true,
            "title": "Object Detail ID",
            "remarks": "Object Detail Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": true,
            "persistent": true,
            "title": "Object Location Path",
            "remarks": "The parent object details of the current object detail node",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "MAXINTOBJDETAIL"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXINTOBJALIAS",
            "source": "MAXINTOBJDETAIL",
            "remarks": "relationship to the alias details",
            "whereClause": "intobjectname=:intobjectname and objectid=:objectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJALIAS",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the MAXINTOBJALIAS table, used to find all alias columns for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXINTOBJLAIAS.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        }
    ]
}