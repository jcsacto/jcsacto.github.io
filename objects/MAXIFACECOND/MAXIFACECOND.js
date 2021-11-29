mos = {
    "objectName": "MAXIFACECOND",
    "className": "psdi.iface.app.ifaceproc.MaxIfaceConditionSet",
    "description": "iNTERFACE RULE CONDITION",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACECONDID",
    "primaryKeyColumns": [
        "IFACENAME",
        "PROCNAME",
        "INTOBJECTNAME",
        "USEWITH",
        "CONDITION"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXIFACECOND",
            "targetObject": "MAXCONDDETAIL",
            "parentKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH, CONDITION",
            "targetKeys": "IFACENAME, PROCNAME, INTOBJECTNAME, USEWITH, CONDITION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interface Rule Condition",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
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
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACECOND",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACECOND",
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
            "attributeName": "CONDITION",
            "required": true,
            "persistent": true,
            "title": "Condition",
            "remarks": "Sequence number that indicates the order in which the MEA evaluates conditions. The MEA generates this number, in multiples of 10 (10, 20, 30, and so on). You can change the value in this field.",
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
            "attributeName": "HASMBOEVAL",
            "required": true,
            "persistent": false,
            "title": "Object Field Evaluation",
            "remarks": "Specifies whether the corresponding processing rule condition evaluates a MBO field. If the check box is selected, the rule evaluates a MBO field. You can see the evaluation on the MBO Field subtab.",
            "sameAsAttribute": "ENABLED",
            "sameAsObject": "MAXIFACEPROC"
        },
        {
            "attributeName": "HASXMLEVAL",
            "required": true,
            "persistent": false,
            "title": "XML Field Evaluation",
            "remarks": "Specifies whether the corresponding processing rule condition evaluates an XML field. If the check box is selected, the rule evaluates an XML field. You can see the evaluation on the XML Field subtab.",
            "sameAsAttribute": "ENABLED",
            "sameAsObject": "MAXIFACEPROC"
        },
        {
            "attributeName": "HASMAXVAREVAL",
            "required": true,
            "persistent": false,
            "title": "Control Evaluation",
            "remarks": "Specifies whether the corresponding processing rule condition evaluates a system control or interface control. If the check box is selected, the rule evaluates a system or interface control. You can see the evaluation on the Control subtab.",
            "sameAsAttribute": "ENABLED",
            "sameAsObject": "MAXIFACEPROC"
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
            "attributeName": "HASMBOSETEVAL",
            "required": true,
            "persistent": false,
            "title": "Object Set Evaluation",
            "remarks": "Specifies whether the corresponding processing rule condition evaluates a MBO set. If the check box is selected, the rule evaluates a MBO set. You can see the evaluation on the MBO Set subtab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXIFACECONDID",
            "required": true,
            "persistent": true,
            "title": "MAXIFACECONDID",
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
            "name": "MAXCONDDETAIL",
            "target": "MAXCONDDETAIL",
            "remarks": "Relationship to the MaxCondDetail table, used to find all details records for a given intpointname, procname and condition. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECONDFIELD",
            "target": "MAXCONDDETAIL",
            "remarks": "Relationship to the MaxCondDetail table, used to find all condition details records for a given intpointname, procname and condition for condtype FIELD. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition and condtype = 'FIELD'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECONDMBO",
            "target": "MAXCONDDETAIL",
            "remarks": "Relationship to the MaxCondDetail table, used to find all condition details records for a given intpointname, procname and condition for condtype MBO. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition and condtype = 'MBO'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECONDMBOSET",
            "target": "MAXCONDDETAIL",
            "remarks": "Relationship to the MaxCondDetail table, used to find all condition details records for a given intpointname, procname and condition for condtype MBOSET. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition and condtype = 'MBOSET'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECONDMV",
            "target": "MAXCONDDETAIL",
            "remarks": "Relationship to the MaxCondDetail table, used to find all condition details records for a given intpointname, procname and condition for condtype MAXVAR. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith and condition=:condition and (condtype = 'MAXVAR' or condtype = 'IFACECONTROL')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXIFACECOND",
            "source": "MAXIFACEPROC",
            "remarks": "Relationship to the MaxIfaceCond table, used to find all details records for a given intpoinname and procname. The resulting set will contain zero or more objects.",
            "whereClause": "ifacename=:ifacename and procname=:procname and intobjectname=:intobjectname and usewith=:usewith",
            "cardinality": "UNDEFINED"
        }
    ]
}