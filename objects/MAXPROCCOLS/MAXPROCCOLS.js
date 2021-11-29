mos = {
    "objectName": "MAXPROCCOLS",
    "className": "psdi.iface.app.ifaceproc.MaxProcColsSet",
    "description": "PROCESSING COLUMNS",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXPROCCOLSID",
    "primaryKeyColumns": [
        "IFACENAME",
        "PROCNAME",
        "INTOBJECTNAME",
        "USEWITH",
        "FIELDNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXPROCCOLS",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface controls",
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
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXPROCCOLS",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXPROCCOLS",
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
            "attributeName": "FIELDNAME",
            "required": true,
            "persistent": true,
            "title": "Field",
            "remarks": "COMBINE: The field (target field) to contain the concatenated values. The field must exist in the sub-record selected on the Inbound or Outbound Processing Rules tab. SPLIT: The field (the source field) to be split into multiple fields (the target fields). The source and target fields must exist in the same MBO.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "IFACECONTROL",
            "required": false,
            "persistent": true,
            "title": "Separator Integration Control",
            "remarks": "COMBINE: Interface control that identifies the delimiter that will separate segments of the combined (target) field. SPLIT: Interface control that identifies the delimiter that separates segments of the source field. You can enter a value in the Interface Control or the Field Length field, but not both.",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
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
            "attributeName": "PROCNAME",
            "required": true,
            "persistent": true,
            "title": "Processing Rule",
            "remarks": "PROCNAME",
            "sameAsAttribute": "PROCNAME",
            "sameAsObject": "MAXIFACEPROC"
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Integration Service",
            "remarks": "IFACENAME",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEPROC"
        },
        {
            "attributeName": "MBONAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "MBONAME",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXPROCCOLSID",
            "required": true,
            "persistent": true,
            "title": "MAXPROCCOLSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Object Structure",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "Use With",
            "remarks": "Use With",
            "sameAsAttribute": "USEWITH",
            "sameAsObject": "MAXIFACEPROC"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXTRANSFORMPROC",
            "target": "MAXTRANSFORMPROC",
            "remarks": "Relationship to the MaxTransformProc table for all transforms, used to find all transform records for a given intpoinname, procname and fieldname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and fieldname=:fieldname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXPROCCOLS",
            "source": "MAXIFACEPROC",
            "remarks": "Relationship to the MaxProcCols table, used to find all details records for a given intpoinname and procname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith",
            "cardinality": "UNDEFINED"
        }
    ]
}