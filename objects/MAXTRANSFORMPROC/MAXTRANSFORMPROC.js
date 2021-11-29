mos = {
    "objectName": "MAXTRANSFORMPROC",
    "className": "psdi.iface.app.ifaceproc.MaxTransformProcSet",
    "description": "Transformation processing rules",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXTRANSFORMPROCID",
    "primaryKeyColumns": [
        "PROCNAME",
        "IFACENAME",
        "INTOBJECTNAME",
        "USEWITH",
        "FIELDNAME",
        "TRANSSEQUENCE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXTRANSFORMPROC",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface controls",
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
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXTRANSFORMPROC",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 29",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXTRANSFORMPROC",
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
            "remarks": "FIELDNAME",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "TRANSSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Sequence",
            "remarks": "Sequence in which the MEA writes the corresponding value to the target field. The MEA generates this number, but you can change its value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TRANSFIELDNAME",
            "required": false,
            "persistent": true,
            "title": "Field",
            "remarks": "COMBINE: A field (source field) to be concatenated with other values. The field must have a data type of ALN and it must exist in the sub-record selected on the Inbound or Outbound Processing rules tab. SPLIT: A field (target field) to receive a segment of the source field for the Split action. The field must exist within the same MBO as the source field.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "FIELDLENGTH",
            "required": false,
            "persistent": true,
            "title": "Field Length",
            "remarks": "In a Split action, the length of the segment of the source field to be moved to the corresponding target field. You can enter a value in the Interface Control or the Field Length field, but not both.",
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
            "attributeName": "PROCNAME",
            "required": true,
            "persistent": true,
            "title": "Processing Rule",
            "remarks": "Processing Rule",
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
            "attributeName": "IFACECONTROL",
            "required": false,
            "persistent": true,
            "title": "Integration Control",
            "remarks": "In a Combine action, the interface control containing the delimiter to separate the concatenated values in the target field.",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "COMBINETYPE",
            "required": false,
            "persistent": true,
            "title": "Combine Type",
            "remarks": "Specifies the type of comparison data to be used in processing rule evaluation. Enter the data value in the corresponding field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTRANSFORMPROCID",
            "required": true,
            "persistent": true,
            "title": "MAXTRANSFORMPROCID",
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
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXTRANSFORMPROC",
            "source": "MAXPROCCOLS",
            "remarks": "Relationship to the MaxTransformProc table for all transforms, used to find all transform records for a given intpoinname, procname and fieldname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and fieldname=:fieldname",
            "cardinality": "UNDEFINED"
        }
    ]
}