mos = {
    "objectName": "MAXIFACEPROC",
    "className": "psdi.iface.app.ifaceproc.MaxIfaceProcSet",
    "description": "Interface Processing Rules",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACEPROCID",
    "primaryKeyColumns": [
        "IFACENAME",
        "PROCNAME",
        "INTOBJECTNAME",
        "USEWITH"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXIFACEPROC",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "targetKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEPROC",
            "targetObject": "MAXIFACECOND",
            "parentKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "targetKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Rule Condition",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEPROC",
            "targetObject": "MAXPROCCOLS",
            "parentKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "targetKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Processing Rule",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEPROC",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "targetKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Processing Rule",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEPROC",
            "targetObject": "MAXTRANSFORMPROC",
            "parentKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "targetKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Processing Rule",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXIFACEPROC",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEPROC",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXIFACEPROC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEPROC",
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
            "attributeName": "PROCNAME",
            "required": true,
            "persistent": true,
            "title": "Rule",
            "remarks": "Identifies a processing rule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the rule. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCTYPE",
            "required": true,
            "persistent": true,
            "title": "Action",
            "remarks": "Action that the processing rule applies to the interface transaction.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISINBOUND",
            "required": true,
            "persistent": true,
            "title": "ISINBOUND",
            "remarks": "ISINBOUND",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYONUPDATE",
            "required": true,
            "persistent": true,
            "title": "Apply on Primary Object Update",
            "remarks": "Specifies whether the MEA applies the processing rule when the primary MBO in the selected integration object is updated. If the check box is selected (the default), the MEA applies the rule. The Data Export feature applies the rule regardless of this setting.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYONINSERT",
            "required": true,
            "persistent": true,
            "title": "Apply on Primary Object Insert",
            "remarks": "Specifies whether the MEA applies the processing rule when a new row is inserted for the primary MBO in the integration object. If the check box is selected (the default), the MEA applies the rule. The Data Export feature applies the rule regardless of this setting.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYONDELETE",
            "required": true,
            "persistent": true,
            "title": "Apply on Primary Object Delete",
            "remarks": "Specifies whether the MEA applies the processing rule when the primary MBO in the selected integration object is deleted. If the check box is selected (the default), the MEA applies the rule. The Data Export feature applies the rule regardless of this setting.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENABLED",
            "required": true,
            "persistent": true,
            "title": "Enabled",
            "remarks": "Specifies whether the processing rule is enabled. If the check box is sleeted (the default), the rule is enabled.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence in which the rule is applied during processing of the interface transaction.",
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
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Specifies whether the corresponding processing rule was predefined (MEA-supplied) or added by a user. If the check box is selected, a user added the rule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "DESCRIPTION_LONGDESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Enterprise Service",
            "remarks": "IFACENAME",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Sub-Record",
            "remarks": "OBJECTNAME",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "PROCMESSAGE",
            "required": false,
            "persistent": true,
            "title": "Message Key",
            "remarks": "Key that identifies a record in the MAXMESSAGES table that displays if an error occurs while executing the processing rule. Define the message in MAXMESSAGES before you enter its key in this field.",
            "sameAsAttribute": "MSGKEY",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "ISOBJECTPROC",
            "required": true,
            "persistent": true,
            "title": "Is Object Process Rule",
            "remarks": "ISOBJECTPROC",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXIFACEPROCID",
            "required": true,
            "persistent": true,
            "title": "MAXIFACEPROCID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "PROCMSGVALUE",
            "required": false,
            "persistent": false,
            "title": "Message",
            "remarks": "Text that corresponds to the key in the Message Key field. The MEA populates this field after you enter or select a message key.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXMESSAGES"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Integration Object",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": true,
            "title": "Hierarchypath",
            "remarks": "HIERARCHYPATH",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "Use With",
            "remarks": "Use With",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Class Name",
            "remarks": "Class Name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DMMAXIFPROCLONGDESC",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for maxifaceproc",
            "whereClause": "ldkey=:maxifaceprocid and ldownertable = 'MAXIFACEPROC'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECOND",
            "target": "MAXIFACECOND",
            "remarks": "Relationship to the MaxIfaceCond table, used to find all details records for a given intpoinname and procname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXPROCCOLS",
            "target": "MAXPROCCOLS",
            "remarks": "Relationship to the MaxProcCols table, used to find all details records for a given intpoinname and procname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXREPLACEPROC",
            "target": "MAXREPLACEPROC",
            "remarks": "Relationship to the MaxReplaceProc table, used to find all details records for a given intpoinname and procname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMMAPDEFPROC",
            "source": "DMMAPDEF",
            "remarks": "Get all the rules for a dmmapdef",
            "whereClause": "ifacename=:cfgobject and intobjectname=:cfgobject  and usewith='MIGRATIONOBJECT' and objectname=:objectname",
            "cardinality": null
        },
        {
            "name": "DMMAPRULEDET",
            "source": "DMMAPRULES",
            "remarks": "Relationship for Mapping Rules tree to mapping detail",
            "whereClause": "ifacename=:intobjectname and intobjectname=:intobjectname and hierarchypath=:hierarchypath and usewith='MIGRATIONOBJECT'",
            "cardinality": null
        },
        {
            "name": "MAXIFACEPROC",
            "source": "MAXIFACEIN",
            "remarks": "Relationship to get all rules for a Enterprise Service.",
            "whereClause": "ifacename=:ifacename and (usewith = 'ESOBJECTSTRUCTURE' or usewith = 'ESOBJECT')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEPROC",
            "source": "MAXIFACEOUT",
            "remarks": "relating maxifaceout to maxifaceproc",
            "whereClause": "ifacename=:ifacename and usewith = 'PUBLISHCHANNEL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEPROCIN",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MaxIfaceProc table, used to find all generic inbound controls records for a given ifacename, ifacetype, intpointname and objectname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and intobjectname=:intobjectname and hierarchypath=:hierarchypath and (usewith = 'ESOBJECTSTRUCTURE' or usewith = 'ESOBJECT')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEPROCOUT",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MaxIfaceProc table, used to find all generic outbound controls records for a given ifacename, ifacetype, intpointname and objectname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and intobjectname=:intobjectname and hierarchypath=:hierarchypath and usewith='PUBLISHCHANNEL'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTPROCIN",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MaxIfaceProc table, used to find all generic inbound controls records for a given ifacename, ifacetype, intpointname and objectname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and intobjectname=:intobjectname and hierarchypath=:hierarchypath and usewith = 'ESOBJECTSTRUCTURE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXMBOPROCIN",
            "source": "MAXINTOBJDETAIL",
            "remarks": "Relationship to the MaxIfaceProc table, used to find all generic inbound controls records for a given ifacename, ifacetype, intpointname and objectname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and intobjectname=:intobjectname and hierarchypath=:hierarchypath and usewith = 'ESOBJECT'",
            "cardinality": "UNDEFINED"
        }
    ]
}