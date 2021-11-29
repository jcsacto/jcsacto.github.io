mos = {
    "objectName": "MAXATTRIBUTESKIPCOPY",
    "className": "psdi.app.configure.MaxAttributeSkipCopySet",
    "description": "User defined attributes to be skipped during duplicate",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXATTRIBUTESKIPCOPYID",
    "primaryKeyColumns": [
        "OBJECTNAME",
        "ATTRIBUTENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONDITION",
            "targetObject": "MAXATTRIBUTESKIPCOPY",
            "parentKeys": "CONDITIONNUM",
            "targetKeys": "CONDITIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXATTRIBUTESKIPCOPY",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 21",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXATTRIBUTESKIPCOPY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "The name of the business object from which you  can exclude attribute data.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "The name of the attribute from which data is excluded.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "CONDITIONNUM",
            "required": false,
            "persistent": true,
            "title": "Condition",
            "remarks": "The condition that specifies when the attribute data is excluded from a duplicated object.",
            "sameAsAttribute": "CONDITIONNUM",
            "sameAsObject": "CONDITION"
        },
        {
            "attributeName": "MAXATTRIBUTESKIPCOPYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXATTRIBUTECFG",
            "target": "MAXATTRIBUTECFG",
            "remarks": "Used to display title.",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTESKIPCOPY",
            "target": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Self relationship, used to add related attributes.",
            "whereClause": "1=0",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTESKIPCOPYALL",
            "target": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Self relationship, used to delete extended attributes.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "ADDEDATTRIBUTES",
            "target": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Already added attributes.",
            "whereClause": "attributename = :attributename",
            "cardinality": null
        },
        {
            "name": "EXTENDS",
            "target": "MAXOBJECTCFG",
            "remarks": "Objects extending this object.",
            "whereClause": "extendsobject = :objectname",
            "cardinality": null
        },
        {
            "name": "JOINEDOBJECT",
            "target": "MAXVIEWCOLUMNCFG",
            "remarks": "Find out any columns that are joined to this object.",
            "whereClause": "tablename in (select entityname from maxobject where objectname = :objectname) and tablecolumnname = :attributename",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXATTRIBUTESKIPCOPY",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship for Migration Manager.",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTESKIPCOPY",
            "source": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Self relationship, used to add related attributes.",
            "whereClause": "1=0",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTESKIPCOPYALL",
            "source": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Self relationship, used to delete extended attributes.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "ADDEDATTRIBUTES",
            "source": "MAXATTRIBUTESKIPCOPY",
            "remarks": "Already added attributes.",
            "whereClause": "attributename = :attributename",
            "cardinality": null
        },
        {
            "name": "SKIPATT",
            "source": "MAXOBJECTCFG",
            "remarks": "List of User defined attributes to be skipped during duplicate.",
            "whereClause": "objectname = :objectname",
            "cardinality": null
        },
        {
            "name": "MAXATTRIBUTESKIPCOPY",
            "source": "MAXVIEWCOLUMNCFG",
            "remarks": "Relationship to MAXATTRIBUTESKIPCOPY, used to add related attributes.",
            "whereClause": "1=0",
            "cardinality": null
        },
        {
            "name": "JOINEDOBJECT",
            "source": "MAXVIEWCOLUMNCFG",
            "remarks": "Find out any columns that are joined from this object.",
            "whereClause": "objectname in (select objectname from maxobject where entityname = :tablename) and attributename = :tablecolumnname",
            "cardinality": null
        }
    ]
}