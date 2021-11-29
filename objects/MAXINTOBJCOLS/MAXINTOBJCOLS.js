mos = {
    "objectName": "MAXINTOBJCOLS",
    "className": "psdi.iface.app.intobject.MaxIntObjectColsSet",
    "description": "Integration Object Columns",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTOBJCOLSID",
    "primaryKeyColumns": [
        "INTOBJECTNAME",
        "OBJECTNAME",
        "NAME",
        "INTOBJFLDTYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXINTOBJCOLS",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, NAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "user defined data field",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTOBJCOLS",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTOBJCOLS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTOBJCOLS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Integration Object",
            "remarks": "INTOBJECTNAME",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "MBO",
            "remarks": "OBJECTNAME",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Field",
            "remarks": "Identifies a user defined data field. The name cannot be the same as that of any persistent or non-persistent field in the integration object, and it cannot be TRANSID. Within interface tables, user fields have a data type of ALN and a length of 50, and you cannot change those attributes. The field name must conform to XML field naming conventions.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "INTOBJFLDTYPE",
            "required": true,
            "persistent": true,
            "title": "INTOBJFLDTYPE",
            "remarks": "INTOBJFLDTYPE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "CHANGEBY",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "CHANGEDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXINTOBJCOLSID",
            "required": true,
            "persistent": true,
            "title": "MAXINTOBJCOLSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXINTOBJCOLS",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship to check if attribute exists in Object Structure Columns table. It will return 0 or more rows.",
            "whereClause": "name=:attributename and objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJCOLS",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given object detail. (MAXINTOBJDETAIL.intobjectname=MAXINTOBJCOLS.intobjectname and MAXINTOBJDETAIL.tbname=MAXINTOBJCOLS.tbname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXCLUDE",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type EXCLUDE. The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname=:objectname and intobjfldtype='EXCLUDE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONPERSISTENT",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type NONPERSISTENT. The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname=:objectname and intobjfldtype='NONPERSISTENT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RESSETTING",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type RESTRICTED or NONRESTRICTED. The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname=:objectname and (intobjfldtype='RESTRICTED' or intobjfldtype='NONRESTRICTED')",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJCOLS",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXINTOBJCOLS.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        }
    ]
}