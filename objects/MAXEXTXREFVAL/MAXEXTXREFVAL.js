mos = {
    "objectName": "MAXEXTXREFVAL",
    "className": "psdi.iface.app.control.MaxExtXrefValSet",
    "description": "External Cross Reference Values",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXEXTXREFVALID",
    "primaryKeyColumns": [
        "EXTSYSNAME",
        "IFACECONTROL",
        "VALUE",
        "NEWVALUE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTXREFVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTXREFVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTXREFVAL",
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
            "attributeName": "EXTSYSNAME",
            "required": true,
            "persistent": true,
            "title": "System",
            "remarks": "EXTSYSNAME",
            "sameAsAttribute": "EXTSYSNAME",
            "sameAsObject": "MAXEXTSYSTEM"
        },
        {
            "attributeName": "IFACECONTROL",
            "required": true,
            "persistent": true,
            "title": "Integration Control",
            "remarks": "IFACECONTROL",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "MAXIMO Value",
            "remarks": "In a Value type control, the default value of the control. In a Cross Reference type control, the Maximo value that corresponds to the external system value in the External Value field. In a inbound message, the MEA changes the external value to the Maximo value. In an outbound message, the MEA changes the Maximo value to the external value. This is the default, external system-specific value of the control.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "NEWVALUE",
            "required": false,
            "persistent": true,
            "title": "External Value",
            "remarks": "In a Cross Reference type interface control, the external system value that corresponds to the Maximo value in the MAXIMO Value field. In an inbound message, the MEA changes the external value to the Maximo value. In an outbound message, the MEA changes the Maximo value to the external value. These are external system-specific values.",
            "sameAsAttribute": "VALUE",
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
            "attributeName": "MAXEXTXREFVALID",
            "required": true,
            "persistent": true,
            "title": "MAXEXTXREFVALID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXEXTXREFVAL",
            "source": "MAXEXTSYSCONTROL",
            "remarks": "Relationship to the MaxExtXrefVal table, used to find all xref type control values for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        }
    ]
}