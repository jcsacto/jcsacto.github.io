mos = {
    "objectName": "MAXREPLACEPROC",
    "className": "psdi.iface.app.ifaceproc.MaxReplaceProcSet",
    "description": "Replacement processing rules",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXREPLACEPROCID",
    "primaryKeyColumns": [
        "IFACENAME",
        "PROCNAME",
        "INTOBJECTNAME",
        "USEWITH",
        "FIELDNAME",
        "REPLACENULL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, FIELDNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The target field.",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, RELATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
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
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXREPLACEPROC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
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
            "objectName": "PERSON",
            "targetObject": "MAXREPLACEPROC",
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
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "VALUE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELATION",
            "required": false,
            "persistent": true,
            "title": "Relationship",
            "remarks": "SET action: the where clause that defines the relationship between the parent MBO and the MBO that contains the new value for the target field.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "FIELDNAME",
            "required": true,
            "persistent": true,
            "title": "Field",
            "remarks": "The field to be set or replaced (the target field). This field must exist within the selected sub-record.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REPLACENULL",
            "required": true,
            "persistent": true,
            "title": "Replace When Null",
            "remarks": "In a Set action, specifies whether the replacement always sets the value of the target field (the default), or sets it only when the target field is null. A check indicates that the replacement sets the value only when the target field is null.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUETYPE",
            "required": true,
            "persistent": true,
            "title": "Value Type",
            "remarks": "Specifies the type of comparison data to be used in processing rule evaluation. Enter the data value in the corresponding field.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SYNONYMDOMAIN"
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
            "attributeName": "REPLACEVALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "In a Set action, the user-specified value to be written to the target field.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXREPLACEPROC"
        },
        {
            "attributeName": "REPLACECONTROL",
            "required": false,
            "persistent": false,
            "title": "Integration Control",
            "remarks": "The Value or Cross Reference type interface control that contains the new value of the target field.",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "COMPCOLUMNNAME",
            "required": false,
            "persistent": false,
            "title": "Field",
            "remarks": "In a Set action, the field that contains the new value for the target field. This field and the target field must be within the same MBO.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXVARNAME",
            "required": false,
            "persistent": false,
            "title": "MAXVAR",
            "remarks": "In a Set action, the system control (in the MAXVARS database table) that contains the new value for the target field.",
            "sameAsAttribute": "VARNAME",
            "sameAsObject": "MAXVARS"
        },
        {
            "attributeName": "MBOCOLUMNNAME",
            "required": false,
            "persistent": false,
            "title": "Object Field",
            "remarks": "In a Set action, the MBO field that contains the new value for the target field.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
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
            "persistent": true,
            "title": "Object",
            "remarks": "In a Set action, the MBO containing the field to be written to the target field. A set relationship must exist between this MBO and the MBO containing the target field.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXREPLACEPROCID",
            "required": true,
            "persistent": true,
            "title": "MAXREPLACEPROCID",
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
        },
        {
            "attributeName": "PROPNAME",
            "required": false,
            "persistent": false,
            "title": "Property Name",
            "remarks": "Property Name",
            "sameAsAttribute": "PROPNAME",
            "sameAsObject": "MAXPROP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SELECTMAPPEDATTRIBUTES",
            "target": "DMMAPDEF",
            "remarks": "Used to list valid attributes for mapped attributes in the select value dialog.",
            "whereClause": "cfgobject=:intobjectname",
            "cardinality": null
        },
        {
            "name": "PACKAGEDEPLOYINPROGRES",
            "target": "DMPACKAGE",
            "remarks": "Relationshipt to test for packages in DEPLOY_INPROGRESS.",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXREPLACEPROC",
            "source": "MAXIFACEPROC",
            "remarks": "Relationship to the MaxReplaceProc table, used to find all details records for a given intpoinname and procname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith",
            "cardinality": "UNDEFINED"
        }
    ]
}