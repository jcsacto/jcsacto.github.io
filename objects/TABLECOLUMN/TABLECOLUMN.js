mos = {
    "objectName": "TABLECOLUMN",
    "className": "psdi.iface.app.common.TableColumnSet",
    "description": "Table Column non persistent",
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
            "attributeName": "TBNAME",
            "required": false,
            "persistent": false,
            "title": "Table",
            "remarks": "tbname",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "COLUMNNAME",
            "required": false,
            "persistent": false,
            "title": "Field",
            "remarks": "A persistent or non-persistent field within the selected MBO.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "ISKEYCOL",
            "required": true,
            "persistent": false,
            "title": "Key Column",
            "remarks": "ISKEYCOL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISCHOSEN",
            "required": true,
            "persistent": false,
            "title": "Restricted",
            "remarks": "Indicates the status of the corresponding data field. If the check box is selected on the Persistent Fields subtab, the field is included in the integration object. If the check box is selected on the Non-Persistent Fields subtab, the field is excluded from the integration object. If the check box is selected in the Inbound Setting Restrictions window, inbound transactions do not update the restricted field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALIASNAME",
            "required": false,
            "persistent": false,
            "title": "ALIASNAME",
            "remarks": "the alias name",
            "sameAsAttribute": "ALIAS",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DUPLICATE",
            "required": true,
            "persistent": false,
            "title": "DUPLICATE",
            "remarks": "is duplicate",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORIGALIAS",
            "required": false,
            "persistent": false,
            "title": "Origalias",
            "remarks": "original alias",
            "sameAsAttribute": "ALIAS",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "OBJECTID",
            "required": false,
            "persistent": false,
            "title": "Object Detail Id",
            "remarks": "Object Detail Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OVERRIDE",
            "required": true,
            "persistent": false,
            "title": "Override",
            "remarks": "If selected, the Object Structure setting restriction overrides the setting restriction defined for the Business object.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "RESSETTINGNP",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type SETTING. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONPERSISTENTNP",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type NONPERSISTENT. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXCLUDENP",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type EXCLUDE. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALIASNP",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Non persistent relationship to the alias details",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}