mos = {
    "objectName": "MAXEXTSYSCONTROL",
    "className": "psdi.iface.app.control.MaxSystemControlSet",
    "description": "MAXEXTSYSCONTROL",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXEXTSYSCONTROLID",
    "primaryKeyColumns": [
        "IFACECONTROL",
        "EXTSYSNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTSYSCONTROL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTSYSCONTROL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTSYSCONTROL",
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
            "attributeName": "IFACECONTROL",
            "required": true,
            "persistent": true,
            "title": "Integration Control",
            "remarks": "Identifies an interface control that can be configured for the external system. The combination of adapter name and control name must be unique.",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "EXTSYSNAME",
            "required": true,
            "persistent": true,
            "title": "EXTSYSNAME",
            "remarks": "EXTSYSNAME",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
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
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "External system-specific value for the corresponding Value type interface control.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISTRUE",
            "required": true,
            "persistent": true,
            "title": "True",
            "remarks": "Specifies whether the override value of the corresponding Boolean control is True or False. If the check box is selected, the value is True. This is an external system-specific value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACETYPE",
            "required": false,
            "persistent": false,
            "title": "Adapter",
            "remarks": "IFACETYPE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Describes the corresponding interface control.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": false,
            "title": "Domain",
            "remarks": "An existing Maximo domain that will validate the value(s) entered for the interface control. The control value must exist in the specified domain. Value and List type controls can reference domains. For more information about domains, refer to the Configuration module.",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "CONTROLTYPE",
            "required": true,
            "persistent": true,
            "title": "Control Type",
            "remarks": "CONTROLTYPE",
            "sameAsAttribute": "CONTROLTYPE",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "MAXEXTSYSCONTROLID",
            "required": true,
            "persistent": true,
            "title": "MAXEXTSYSCONTROLID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXEXTBOOLVAL",
            "target": "MAXEXTBOOLVAL",
            "remarks": "Relationship to the MaxExtBoolVal table, used to find all boolean type control values for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTCTLVAL",
            "target": "MAXEXTCTLVAL",
            "remarks": "Relationship to the MaxExtCtlVal table, used to find all value type control values for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTLISTVAL",
            "target": "MAXEXTLISTVAL",
            "remarks": "Relationship to the MaxExtListVal table, used to find all list type control values for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTOVER",
            "target": "MAXEXTOVER",
            "remarks": "Relationship to the MaxExtOver table, used to find all control overrides for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTOVERLIST",
            "target": "MAXEXTOVER",
            "remarks": "Relationship to the MaxExtOver table, used to find all control overrides for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTOVERXREF",
            "target": "MAXEXTOVER",
            "remarks": "Relationship to the MaxExtOver table, used to find all control overrides for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTXREFVAL",
            "target": "MAXEXTXREFVAL",
            "remarks": "Relationship to the MaxExtXrefVal table, used to find all xref type control values for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXEXTSYSINCNTL",
            "source": "MAXEXTIFACEIN",
            "remarks": "Relationship from maxextifacein to maxextsyscontrol table",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSOUTCNTL",
            "source": "MAXEXTIFACEOUT",
            "remarks": "Relationship from maxextifaceout to maxextsyscontrol table",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSCONTROL",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MaxExtsysControl table, used to find all control values for the given ext system. The resulting set will contain zero or more objects.",
            "whereClause": "extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXCONTROLVALUE",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MaxIfaceControl table, used to find all value type control records for a given ifacetype. The resulting set will contain zero or more objects.",
            "whereClause": "extsysname=:extsysname and controltype in (select value from synonymdomain where domainid='CONTROLTYPE' and maxvalue = 'VALUE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSCONTROL",
            "source": "MAXIFACECONTROL",
            "remarks": "Relationship to the MaxExtSysControl table, used to find all details records for a given ifacecontrol. (maxextsyscontrol.ifacecontrol = maxifacecontrol.ifacecontrol) The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSCNTL",
            "source": "MAXIFACEINCNTL",
            "remarks": "Relationship from maxifaceincntl to maxextsyscontrol table",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSCNTLOUT",
            "source": "MAXIFACEOUTCNTL",
            "remarks": "Relationship from maxifaceoutcntl to maxextsyscontrol table",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        }
    ]
}