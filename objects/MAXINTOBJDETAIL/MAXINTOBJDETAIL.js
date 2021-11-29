mos = {
    "objectName": "MAXINTOBJDETAIL",
    "className": "psdi.iface.app.intobject.MaxIntObjectDetailSet",
    "description": "Integration Object Detail",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTOBJDETAILID",
    "primaryKeyColumns": [
        "INTOBJECTNAME",
        "OBJECTID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, FILTEROBJECTID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, FILTEROBJECTID2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, FILTEROBJECTID3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, GROUPOBJECTID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, GROUPOBJECTID2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, GROUPOBJECTID3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, OBJECTID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, SORTOBJECTID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, SORTOBJECTID2",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJDETAIL",
            "targetObject": "REPORTADHOC",
            "parentKeys": "INTOBJECTNAME, OBJECTID",
            "targetKeys": "REPORTOBJECT, SORTOBJECTID3",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTOBJDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTOBJDETAIL",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "ALTKEY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 79",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTOBJDETAIL",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "MAXSYSINDEXES",
            "targetObject": "MAXINTOBJDETAIL",
            "parentKeys": "NAME",
            "targetKeys": "ALTKEY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Alternative Index",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTOBJDETAIL",
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
            "remarks": "INtOBJECTNAME",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Identifies a Maximo Business Object (MBO).",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RELATION",
            "required": false,
            "persistent": true,
            "title": "Relationship",
            "remarks": "Where clause used to navigate from a parent MBO to a child MBO. Relationships are predefined in Maximo. Applies only to standard (non-merged) integration objects.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTORDER",
            "required": true,
            "persistent": true,
            "title": "Object Order",
            "remarks": "Sequence in which the MEA processes child MBOs with the same parent MBO. This number is assigned when a user adds a child MBO. You can change this value in user-defined, but not in predefined (MEA-supplied), integration objects. Applies only to standard (non-merged) integration objects.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSORDER",
            "required": true,
            "persistent": true,
            "title": "Processing Order",
            "remarks": "PROCESSORDER",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TABLELEVEL",
            "required": false,
            "persistent": false,
            "title": "Table Level",
            "remarks": "TABLELEVEL",
            "sameAsAttribute": "SITEORGTYPE",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Specifies whether the corresponding object was predefined (MEA-supplied) or added by a user. If the check box is selected, a user created the object.",
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
            "attributeName": "IFACENAME",
            "required": false,
            "persistent": false,
            "title": "IFACENAME",
            "remarks": "IFACENAME",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEPROC"
        },
        {
            "attributeName": "MAXINTOBJDETAILID",
            "required": true,
            "persistent": true,
            "title": "MAXINTOBJDETAILID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "PARENTOBJID",
            "required": false,
            "persistent": true,
            "title": "Parent Object Detail Id",
            "remarks": "Parent Object Detail Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": true,
            "persistent": true,
            "title": "Object Location Path",
            "remarks": "The parent object details of the current object detail node",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENTOBJNAME",
            "required": false,
            "persistent": false,
            "title": "Parent Object",
            "remarks": "Parent ObjectName",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Does this Object Detail have children?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has Parent",
            "remarks": "Does this Object Detail belong to a parent Object Deatil?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Reporting Description",
            "remarks": "Description of object. Used only with Reporting Object Structures.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALTKEY",
            "required": false,
            "persistent": true,
            "title": "Alternate Key",
            "remarks": "A unique index that the integration framework uses to find a record in the system in place of the primary key for the object. Use an alternate key if the primary key is not known by the external system. Define the alternate key as a MAXIMO index in the Database Configuration application.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RELATIONJOINREQUIRED",
            "required": true,
            "persistent": false,
            "title": "Database Join Required",
            "remarks": "Nonpersistent field used to populate maxrelationship.dbjoinrequired for Reporting Object Structures",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATIONCARDINALITY",
            "required": false,
            "persistent": false,
            "title": "Cardinality",
            "remarks": "Nonpersistent field used to populate maxrelationship.cardinality for Reporting Object Structures",
            "sameAsAttribute": "CARDINALITY",
            "sameAsObject": "MAXRELATIONSHIP"
        },
        {
            "attributeName": "EXCLUDEPARENTKEY",
            "required": true,
            "persistent": true,
            "title": "Exclude Parent Key Attributes",
            "remarks": "Exclude key field attributes of the parent object for the selected child object ",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETEONCREATE",
            "required": true,
            "persistent": true,
            "title": "Delete Auto-generated Data ",
            "remarks": "Delete auto-generated data for selected child object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROPAGATEEVENT",
            "required": true,
            "persistent": true,
            "title": "Propagate Event",
            "remarks": "Propagate Event",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOKEEXECUTE",
            "required": true,
            "persistent": true,
            "title": "Invoke Execute on Non-persistent Object",
            "remarks": "Invoke Execute on Non-persistent Object",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXATTRIBUTECOGNOS",
            "target": "MAXATTRIBUTE",
            "remarks": "Relationship with MaxAttribute",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "MAXIFACEPROCIN",
            "target": "MAXIFACEPROC",
            "remarks": "Relationship to the MaxIfaceProc table, used to find all generic inbound controls records for a given ifacename, ifacetype, intpointname and objectname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and intobjectname=:intobjectname and hierarchypath=:hierarchypath and (usewith = 'ESOBJECTSTRUCTURE' or usewith = 'ESOBJECT')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEPROCOUT",
            "target": "MAXIFACEPROC",
            "remarks": "Relationship to the MaxIfaceProc table, used to find all generic outbound controls records for a given ifacename, ifacetype, intpointname and objectname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and intobjectname=:intobjectname and hierarchypath=:hierarchypath and usewith='PUBLISHCHANNEL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTPROCIN",
            "target": "MAXIFACEPROC",
            "remarks": "Relationship to the MaxIfaceProc table, used to find all generic inbound controls records for a given ifacename, ifacetype, intpointname and objectname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and intobjectname=:intobjectname and hierarchypath=:hierarchypath and usewith = 'ESOBJECTSTRUCTURE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMBOPROCIN",
            "target": "MAXIFACEPROC",
            "remarks": "Relationship to the MaxIfaceProc table, used to find all generic inbound controls records for a given ifacename, ifacetype, intpointname and objectname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and intobjectname=:intobjectname and hierarchypath=:hierarchypath and usewith = 'ESOBJECT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJALIAS",
            "target": "MAXINTOBJALIAS",
            "remarks": "relationship to the alias details",
            "whereClause": "intobjectname=:intobjectname and objectid=:objectid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJCOLS",
            "target": "MAXINTOBJCOLS",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given object detail. (MAXINTOBJDETAIL.intobjectname=MAXINTOBJCOLS.intobjectname and MAXINTOBJDETAIL.tbname=MAXINTOBJCOLS.tbname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXCLUDE",
            "target": "MAXINTOBJCOLS",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type EXCLUDE. The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname=:objectname and intobjfldtype='EXCLUDE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONPERSISTENT",
            "target": "MAXINTOBJCOLS",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type NONPERSISTENT. The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname=:objectname and intobjfldtype='NONPERSISTENT'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RESSETTING",
            "target": "MAXINTOBJCOLS",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type RESTRICTED or NONRESTRICTED. The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname=:objectname and (intobjfldtype='RESTRICTED' or intobjfldtype='NONRESTRICTED')",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJDETAIL_CHILDRN",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Relationship for deployment group hier tree",
            "whereClause": "parentobjid =:objectid and intobjectname = :intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL_PARENT",
            "target": "MAXINTOBJDETAIL",
            "remarks": "Get MAXINTOBJDETAIL parent object",
            "whereClause": ":parentobjid =objectid and intobjectname = :intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXOBJECT",
            "target": "MAXOBJECT",
            "remarks": "relationship to the object details",
            "whereClause": "objectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTCOGNOS",
            "target": "MAXOBJECT",
            "remarks": "Relationship with MaxObject",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "MAXRELATIONSHIP",
            "target": "MAXRELATIONSHIP",
            "remarks": "Relation to get all relations from this object",
            "whereClause": "parent=:objectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXRELATIONSHIP_ROS",
            "target": "MAXRELATIONSHIP",
            "remarks": "Relationship from MaxIntObjDetails to MaxRelationship, used to update CARDINALITY and DBJOINREQUIRED.",
            "whereClause": "name=:relation",
            "cardinality": null
        },
        {
            "name": "MAXRELATIONSHIPCARD",
            "target": "MAXRELATIONSHIP",
            "remarks": "Relationship from MaxIntObjDetails to MaxRelationship, used to get Cardinality for QBR reports.",
            "whereClause": "name = :relation and parent in (select objectname from maxintobjdetail where objectid=:parentobjid and intobjectname=:intobjectname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OSLCRESOURCEDETAIL",
            "target": "OSLCRESOURCEDETAIL",
            "remarks": "Relation to OSLC Resource mapping. This relationship returns one row.",
            "whereClause": "intobjectname=:intobjectname and hierarchypath=:hierarchypath",
            "cardinality": null
        },
        {
            "name": "RESSETTINGNP",
            "target": "TABLECOLUMN",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type SETTING. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NONPERSISTENTNP",
            "target": "TABLECOLUMN",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type NONPERSISTENT. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "EXCLUDENP",
            "target": "TABLECOLUMN",
            "remarks": "Relationship to the MAXINTOBJCOLS table, used to find all columns for a given intobjectname and objectname which is of type EXCLUDE. The resulting set will contain zero or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALIASNP",
            "target": "TABLECOLUMN",
            "remarks": "Non persistent relationship to the alias details",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXINTOBJDETAIL",
            "source": "DMCFGOBJECT",
            "remarks": "Relationship to get the main object for config object.",
            "whereClause": "intobjectname=:cfgobject and processorder=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL_ROOT",
            "source": "DMCFGOBJECT",
            "remarks": "Relationship for deployment group hier tree",
            "whereClause": "intobjectname =:cfgobject and relation is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMMAXINTOBJDETAIL_MAP",
            "source": "DMCFGOBJECT",
            "remarks": "Mapping tree relationship...",
            "whereClause": "intobjectname=:cfgobject",
            "cardinality": null
        },
        {
            "name": "RESPOS",
            "source": "INTGENERATOR",
            "remarks": "Relation to get response Object Structure data. It will return 1 row.",
            "whereClause": "intobjectname=:resposname",
            "cardinality": null
        },
        {
            "name": "REQOS",
            "source": "INTGENERATOR",
            "remarks": "Relation to get request Object Structure data. It will return 1 row.",
            "whereClause": "intobjectname=:reqosname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJDETAIL",
            "source": "LAYOUT",
            "remarks": "Relationship from LAYOUT to MAXINTOBJDETAIL",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJDETAIL",
            "source": "MAXATTRIBUTE",
            "remarks": "Relationship from Maxattribute to Integration Object Details, used to get the Category value for the Create Report dialog",
            "whereClause": "objectname = :objectname and intobjectname in (select reportobject from maxapps where app =:&appname&)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL",
            "source": "MAXIFACEIN",
            "remarks": "Relationship to the MaxIntObjDetail table, used to find all object details records for a given intobectname. (maxitbobjdetail.intobectname = maxifacein.intobectname) The resulting set will contain one or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL",
            "source": "MAXIFACEOUT",
            "remarks": "Relationship to the MaxIntObjDetail table, used to find all object details records for a given intobectname. (maxitbobjdetail.intobectname = maxifaceout.intobectname) The resulting set will contain one or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL_CHILDRN",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship for deployment group hier tree",
            "whereClause": "parentobjid =:objectid and intobjectname = :intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL_PARENT",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Get MAXINTOBJDETAIL parent object",
            "whereClause": ":parentobjid =objectid and intobjectname = :intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJDETAIL",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the MAXINTOBJDETAIL table, used to find all MAXINTOBJDETAIL for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXINTOBJDETAIL.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DUPOBJDETAIL",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the MAXINTOBJDETAIL table, used to find all MAXINTOBJDETAIL for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXINTOBJDETAIL.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and objectname in (select objectname from maxintobjdetail where intobjectname=:intobjectname group by objectname having count(*) > 1)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DISTINCTOBJDETAIL",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the MAXINTOBJDETAIL table, used to find unique MAXINTOBJDETAIL records for a given MAXINTOBJECT. The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname and maxintobjdetailid in (select max(maxintobjdetailid) from maxintobjdetail where intobjectname=:intobjectname group by objectname)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJDETAIL",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship to check if object exists in Object Structure Dateil table. It will return 0 or more rows.",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJDETAIL",
            "source": "MAXRELATIONSHIP",
            "remarks": "Relationship to check if object exists in Object Structure Dateil table. It will return 0 or more rows.",
            "whereClause": "relation=:name",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJDETAIL",
            "source": "MAXSYSINDEXES",
            "remarks": "Relationship to check if index exists in Object Structure Detail table. It will return 0 or more rows.",
            "whereClause": "altkey=:name",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJDETAIL",
            "source": "REPORTADHOC",
            "remarks": "Relationship from REPORTADHOC to Integration Object Details, used to get the Category value for the Create Report dialog.",
            "whereClause": "objectname = :objectname and intobjectname in (select reportobject from maxapps where app = :appname)",
            "cardinality": null
        },
        {
            "name": "INTOBJ_TREE",
            "source": "REPORTADHOC",
            "remarks": "Relationship used to populate the Categories drilldown in the Create Report dialog.",
            "whereClause": "intobjectname=:reportobject",
            "cardinality": null
        }
    ]
}