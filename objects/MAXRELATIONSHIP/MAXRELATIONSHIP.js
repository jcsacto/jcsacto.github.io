mos = {
    "objectName": "MAXRELATIONSHIP",
    "className": "psdi.app.configure.MaxRelationshipSet",
    "description": "Defines a relationship between tables in MAXIMO",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXRELATIONSHIPID",
    "primaryKeyColumns": [
        "PARENT",
        "NAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "NAME",
            "targetKeys": "REQRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relation to Request Object",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "NAME",
            "targetKeys": "RESPRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relation to Response Object",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "PARENT, NAME",
            "targetKeys": "INTMAINOBJECT, REQRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relation to Request Object",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTERACTION",
            "parentKeys": "PARENT, NAME",
            "targetKeys": "INTMAINOBJECT, RESPRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relation to Response Object",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXINTMAPPING",
            "parentKeys": "NAME",
            "targetKeys": "RELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Relationship",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "PARENT, NAME",
            "targetKeys": "MBONAME, RELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship to MBO with new value for the target field",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "OSLCINTERACTION",
            "parentKeys": "PARENT, NAME",
            "targetKeys": "APPOBJECT, LINKRELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "PARENT, NAME",
            "targetKeys": "APPOBJECT, RELATIONSHIP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Relationship",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "WFINTERACTION",
            "parentKeys": "NAME",
            "targetKeys": "RELATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "After the interaction is reached, the first record this relationship returns will be brought up.",
            "longDescription": "This for interactions before a stopping point (Stop, Wait, or Task node). With this you can design your interaction to bring up the Asset of the Work Order, in the Asset application, and even launch an Asset Workflow process on that record."
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXRELATIONSHIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "CHILD",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object target of a UI relationship.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXRELATIONSHIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object originator of a UI relationship.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NAME",
            "required": true,
            "persistent": true,
            "title": "Relationship",
            "remarks": "Identifier for the relationship.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENT",
            "required": true,
            "persistent": true,
            "title": "Parent",
            "remarks": "Owner of the relationship",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CHILD",
            "required": true,
            "persistent": true,
            "title": "Child Object",
            "remarks": "Table name of the related child.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "WHERECLAUSE",
            "required": false,
            "persistent": true,
            "title": "Where Clause",
            "remarks": "The clause used to set the condition for the join. If this condition is not met, the tables will not be joined.",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": true,
            "title": "Remarks",
            "remarks": "A clear description of the relationship.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXRELATIONSHIPID",
            "required": true,
            "persistent": true,
            "title": "MAXRELATIONSHIPID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CARDINALITY",
            "required": false,
            "persistent": true,
            "title": "Cardinality",
            "remarks": "Is the database relationship single or multiple?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DBJOINREQUIRED",
            "required": false,
            "persistent": true,
            "title": "Is Database Join Required",
            "remarks": "Does this relationship use a required database join",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXINTOBJDETAIL",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship to check if object exists in Object Structure Dateil table. It will return 0 or more rows.",
            "whereClause": "relation=:name",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXRELATIONSHIP",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relation to get all relations from this object",
            "whereClause": "parent=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXRELATIONSHIP_ROS",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship from MaxIntObjDetails to MaxRelationship, used to update CARDINALITY and DBJOINREQUIRED.",
            "whereClause": "name=:relation",
            "cardinality": null
        },
        {
            "name": "MAXRELATIONSHIPCARD",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship from MaxIntObjDetails to MaxRelationship, used to get Cardinality for QBR reports.",
            "whereClause": "name = :relation and parent in (select objectname from maxintobjdetail where objectid=:parentobjid and intobjectname=:intobjectname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXRELATIONSHIP",
            "source": "MAXOBJECTCFG",
            "remarks": "MaxObjectCfg to MaxRelationship",
            "whereClause": "parent = :objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXRELATIONSHIP",
            "source": "MAXTABLECFG",
            "remarks": "MaxTableCfg to MaxRelationship where this table is the parent. The result set will contain zero or more objects.",
            "whereClause": "parent = :tablename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXRELATIONSHIPCHILD",
            "source": "MAXTABLECFG",
            "remarks": "MaxTableCfg to MaxRelationship where this table is the child. The result set will contain zero or more objects.",
            "whereClause": "child = :tablename",
            "cardinality": "UNDEFINED"
        }
    ]
}