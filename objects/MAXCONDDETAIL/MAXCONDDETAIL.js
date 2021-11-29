mos = {
    "objectName": "MAXCONDDETAIL",
    "className": "psdi.iface.app.ifaceproc.MaxCondDetailSet",
    "description": "INTERFACE CONDTION DETAIL",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXCONDDETAILID",
    "primaryKeyColumns": [
        "IFACENAME",
        "PROCNAME",
        "INTOBJECTNAME",
        "USEWITH",
        "CONDITION",
        "CONDSEQUENCE",
        "CONDTYPE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, COLUMNNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, MBOCOLUMNNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "MBONAME, RELATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECOND",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH, CONDITION",
            "targetKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH, CONDITION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Rule Condition",
            "longDescription": null
        },
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
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "MBONAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXCONDDETAIL",
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
            "attributeName": "MBOCOLUMNNAME",
            "required": false,
            "persistent": true,
            "title": "Object Field",
            "remarks": "MBOCOLUMNNAME",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "CONDITION",
            "required": true,
            "persistent": true,
            "title": "Condition Code",
            "remarks": "CONDITION",
            "sameAsAttribute": "CONDITION",
            "sameAsObject": "MAXIFACECOND"
        },
        {
            "attributeName": "COLUMNNAME",
            "required": false,
            "persistent": true,
            "title": "Field",
            "remarks": "The XML field to be evaluated. This field must exist within the sub-record selected on the Inbound or Outbound Processing Rules subtab.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "EVALTYPE",
            "required": true,
            "persistent": true,
            "title": "Evaluation Type",
            "remarks": "In a XML Field, MBO Field, or Control evaluation: an operator that specifies the type of evaluation to be carried out on the field. If the evaluation type is NULL, ISNOTNULL, or NONE, you cannot compare the selected integration object field with another value. In a MBO Set evaluation: an operator that specifies the evaluation the set must meet in order for the evaluation to be true.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SYNONYMDOMAIN"
        },
        {
            "attributeName": "COMPARETYPE",
            "required": false,
            "persistent": true,
            "title": "Compare",
            "remarks": "Specifies the type of comparison data to be used in processing rule evaluation. Enter the data value in the corresponding field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGETYPE",
            "required": true,
            "persistent": true,
            "title": "Evaluate When",
            "remarks": "Specifies if the MEA performs the corresponding evaluation when the selected integration object field or MBO field is changed, not changed, or always. To use this evaluation for inbound transactions, the external system must set the value of the Changed attribute.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "SYNONYMDOMAIN"
        },
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
            "remarks": "RELATION",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "CONDTYPE",
            "required": true,
            "persistent": true,
            "title": "Condition Type",
            "remarks": "CONDTYPE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLORDER",
            "required": false,
            "persistent": true,
            "title": "GL Component",
            "remarks": "GLORDER",
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
            "attributeName": "COMPVALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "In an XML Field or MBO Field evaluation: the user-specified value to be evaluated against the selected integration object field. In a Control evaluation: the user-specified value to be compared to a system or interface control. If a Boolean type interface control is being evaluated, enter a value of 0 (false) or 1 (true).",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXCONDDETAIL"
        },
        {
            "attributeName": "COMPFIELD",
            "required": false,
            "persistent": false,
            "title": "Comparison Field",
            "remarks": "The MBO field to be compared to the selected integration object field. The MBO field must be within the same MBO as the integration object field.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "COMPCONTROL",
            "required": false,
            "persistent": false,
            "title": "Integration Control",
            "remarks": "In an XML Field or MBO Field evaluation, the value to be compared to the selected integration object field.",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "MAXVARNAME",
            "required": false,
            "persistent": false,
            "title": "MAXVAR",
            "remarks": "The system control (in the MAXVARS database table) to be evaluated against the selected integration object field or MBO field.",
            "sameAsAttribute": "VARNAME",
            "sameAsObject": "MAXVARS"
        },
        {
            "attributeName": "RELMAXVAR",
            "required": false,
            "persistent": false,
            "title": "MAXVAR",
            "remarks": "The system control (in the MAXVARS database table) to be evaluated.",
            "sameAsAttribute": "VARNAME",
            "sameAsObject": "MAXVARS"
        },
        {
            "attributeName": "COMPMBONAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "The MBO containing the MBO field to be compared to the selected integration object field.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "COMPRELATION",
            "required": false,
            "persistent": false,
            "title": "Relationship",
            "remarks": "The relationship between two MBOs, as defined in the MAXRELATIONSHIPS table. Enter a value only if the two fields being compared are in different MBOs.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "COMPCOLUMNNAME",
            "required": false,
            "persistent": false,
            "title": "Field",
            "remarks": "The MBO field to be compared to the selected integration object field.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "COLUMNTYPE",
            "required": false,
            "persistent": false,
            "title": "Data Type",
            "remarks": "Data type of the selected integration object field. The MEA populates this field.",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "RELRELATION",
            "required": false,
            "persistent": false,
            "title": "Object Relationship",
            "remarks": "The relationship between two MBOs, as defined in the MAXRELATIONSHIPS table. Enter a value only if the two fields being compared are in different MBOs.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "RELCOLUMNNAME",
            "required": false,
            "persistent": false,
            "title": "Field",
            "remarks": "In a MBO Field evaluation, the MBO field to be evaluated. This field must exist within the sub-record selected on the Inbound or Outbound Processing Rules subtab.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "RELCOLUMNTYPE",
            "required": false,
            "persistent": false,
            "title": "Data Type",
            "remarks": "Data type of the selected integration object field or MBO field. The MEA populates this field.",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "COMPONENTNAME",
            "required": false,
            "persistent": false,
            "title": "ComponentName",
            "remarks": "ComponentName",
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
            "attributeName": "COMPBOOLEAN",
            "required": false,
            "persistent": false,
            "title": "Boolean",
            "remarks": "In an XML Field, MBO Field, or Control evaluation, a Boolean value to be compared to the selected integration object field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELMBONAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "In a MBO Set evaluation, the MBO to be evaluated. In a MBO Field evaluation, the MBO containing the field to be compared to the selected MBO field. Enter a value only if the two MBO fields are in different MBOs.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "CONDSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Condition Sequence",
            "remarks": "CONDSEQUENCE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MBONAME",
            "required": false,
            "persistent": true,
            "title": "Object",
            "remarks": "MBONAME",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RELCONTROL",
            "required": false,
            "persistent": false,
            "title": "Integration Control",
            "remarks": "The interface control to be evaluated. The control must be a Value or Boolean type control.",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "MAXCONDDETAILID",
            "required": true,
            "persistent": true,
            "title": "MAXCONDDETAILID",
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
            "name": "MAXCONDDETAIL",
            "source": "MAXIFACECOND",
            "remarks": "Relationship to the MaxCondDetail table, used to find all details records for a given intpointname, procname and condition. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECONDFIELD",
            "source": "MAXIFACECOND",
            "remarks": "Relationship to the MaxCondDetail table, used to find all condition details records for a given intpointname, procname and condition for condtype FIELD. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition and condtype = 'FIELD'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECONDMBO",
            "source": "MAXIFACECOND",
            "remarks": "Relationship to the MaxCondDetail table, used to find all condition details records for a given intpointname, procname and condition for condtype MBO. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition and condtype = 'MBO'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECONDMBOSET",
            "source": "MAXIFACECOND",
            "remarks": "Relationship to the MaxCondDetail table, used to find all condition details records for a given intpointname, procname and condition for condtype MBOSET. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition and condtype = 'MBOSET'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECONDMV",
            "source": "MAXIFACECOND",
            "remarks": "Relationship to the MaxCondDetail table, used to find all condition details records for a given intpointname, procname and condition for condtype MAXVAR. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition and (condtype = 'MAXVAR' or condtype = 'IFACECONTROL')",
            "cardinality": "UNDEFINED"
        }
    ]
}