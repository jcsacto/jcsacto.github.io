mos = {
    "objectName": "MAXVIEWCOLUMNCFG",
    "className": "psdi.app.configure.MaxViewColumnCfgSet",
    "description": "Maximo View Column Configuration",
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
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "SAMESTORAGEAS",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 125",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLECOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 126",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TABLENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 127",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWCOLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 128",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXVIEWCOLUMNCFG",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "VIEWNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 129",
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
            "attributeName": "CHANGED",
            "required": true,
            "persistent": true,
            "title": "Changed",
            "remarks": "Indicates whether this view column has been changed via Configure",
            "sameAsAttribute": "CHANGED",
            "sameAsObject": "MAXOBJECTCFG"
        },
        {
            "attributeName": "VIEWCHANGED",
            "required": false,
            "persistent": false,
            "title": "Changed",
            "remarks": "Value of \"changed\" translated for readability.",
            "sameAsAttribute": "VIEWCHANGED",
            "sameAsObject": "MAXOBJECTCFG"
        },
        {
            "attributeName": "MAXVIEWCOLUMNID",
            "required": true,
            "persistent": true,
            "title": "MAXVIEWCOLUMNCFGID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXATTRIBUTECFG",
            "target": "MAXATTRIBUTECFG",
            "remarks": "MaxViewColumnCfg to MaxAttributeCfg",
            "whereClause": "objectname = (select objectname from maxobject where entityname = :viewname and isview = :yes) and((entityname = :viewname and columnname = :viewcolumnname) or (entityname = :viewname and columnname = :samestorageas))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTESKIPCOPY",
            "target": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Relationship to MAXATTRIBUTESKIPCOPY, used to add related attributes.",
            "whereClause": "1=0",
            "cardinality": null
        },
        {
            "name": "JOINEDOBJECT",
            "target": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Find out any columns that are joined from this object.",
            "whereClause": "objectname in (select objectname from maxobject where entityname = :tablename) and attributename = :tablecolumnname",
            "cardinality": null
        },
        {
            "name": "MAXVIEWCOLUMN",
            "target": "MAXVIEWCOLUMN",
            "remarks": "MaxViewColumnCfg to MaxViewColumn.  If this view has been configured, the result set will contain one object.",
            "whereClause": "viewname = :viewname and viewcolumnname = :viewcolumnname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXVIEWCOLUMNCFG",
            "source": "MAXATTRIBUTECFG",
            "remarks": "MaxAttributeCfg to MaxViewColumnCfg",
            "whereClause": "viewname = :entityname and viewcolumnname = :columnname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLMAXVIEWCOLUMNCF",
            "source": "MAXATTRIBUTECFG",
            "remarks": "MaxAttributeCfg to MaxViewColumnCfg including any with samestorageas",
            "whereClause": "viewname = :entityname and (viewcolumnname = :columnname or samestorageas = :columnname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOINEDOBJECT",
            "source": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Find out any columns that are joined to this object.",
            "whereClause": "tablename in (select entityname from maxobject where objectname = :objectname) and tablecolumnname = :attributename",
            "cardinality": null
        },
        {
            "name": "MAXVIEWCOLUMNCFG",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxViewColumnCfg.  If this is a persistent view that has been configured, the result set will contain one or more objects.",
            "whereClause": ":isview = :yes and viewname = :entityname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDVIEWATTRIBUTES",
            "source": "MAXTABLECFG",
            "remarks": "All view columns derived from this table.  The result set will contain zero or more objects.",
            "whereClause": "tablename = :tablename or (maxviewcolumncfg.tablename is null and maxviewcolumncfg.samestorageas is not null and exists (select * from maxviewcolumncfg c2 where c2.viewname = maxviewcolumncfg.viewname and c2.viewcolumnname = maxviewcolumncfg.samestorageas and c2.tablename = :tablename))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXVIEWCOLUMNCFG",
            "source": "MAXVIEWCFG",
            "remarks": "MaxViewCfg to MaxViewColumnCfg.  This is the exploded set of attributes in this view.  The result set will contain one or more objects.",
            "whereClause": "viewname = :viewname",
            "cardinality": "UNDEFINED"
        }
    ]
}