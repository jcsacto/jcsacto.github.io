mos = {
    "objectName": "MAXVIEWCOLUMN",
    "className": "psdi.app.configure.MaxViewColumnSet",
    "description": "Maximo View Column",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXVIEWCOLUMNID",
    "primaryKeyColumns": [
        "VIEWNAME",
        "VIEWCOLUMNNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXVIEWCOLUMN",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "VIEWNAME, VIEWCOLUMNNAME",
            "targetKeys": "VIEWNAME, SAMESTORAGEAS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "View column where this column gets its value from.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "TABLENAME, TABLECOLUMNNAME",
            "relNum": "1 to 1",
            "status": "VERIFIED",
            "description": "Attribute this view attribute is based upon.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "VIEWNAME, VIEWCOLUMNNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Attribute information for view attribute.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SAMESTORAGEAS",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLECOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 121",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 122",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWCOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 123",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 124",
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
        },
        {
            "objectName": "MAXVIEWCOLUMN",
            "targetObject": "MAXVIEWCOLUMN",
            "parentKeys": "VIEWNAME, VIEWCOLUMNNAME",
            "targetKeys": "VIEWNAME, SAMESTORAGEAS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "View column where this column gets its value from.",
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
            "attributeName": "VIEWCOLUMNNAME",
            "required": true,
            "persistent": true,
            "title": "View Column",
            "remarks": "View column name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SAMESTORAGEAS",
            "required": false,
            "persistent": true,
            "title": "Same Storage As",
            "remarks": "Master viewcolumnname.  Will be non-null if this column's value is always equivalent to the value of another column in this view, and this is to be treated as secondary.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TABLENAME",
            "required": false,
            "persistent": true,
            "title": "Table ",
            "remarks": "Table ultimately responsible for providing the value of this attribute -- will be null if samestorageas is non-null or this is a calculated field",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "TABLECOLUMNNAME",
            "required": false,
            "persistent": true,
            "title": "Table Column",
            "remarks": "Table Column ultimately responsible for providing the value of this attribute -- will be null if samestorageas is non-null or this is a calculated field",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXVIEWCOLUMNID",
            "required": true,
            "persistent": true,
            "title": "MAXVIEWCOLUMNID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXVIEWCOLUMN",
            "source": "MAXVIEWCOLUMNCFG",
            "remarks": "MaxViewColumnCfg to MaxViewColumn.  If this view has been configured, the result set will contain one object.",
            "whereClause": "viewname = :viewname and viewcolumnname = :viewcolumnname",
            "cardinality": "UNDEFINED"
        }
    ]
}