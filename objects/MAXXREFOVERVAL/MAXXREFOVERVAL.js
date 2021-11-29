mos = {
    "objectName": "MAXXREFOVERVAL",
    "className": "psdi.iface.app.control.MaxXrefOverValSet",
    "description": "Cross Reference Override Value",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXXREFOVERVALID",
    "primaryKeyColumns": [
        "EXTSYSNAME",
        "IFACECONTROL",
        "ORGID",
        "SITEID",
        "VALUE",
        "NEWVALUE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXXREFOVERVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXXREFOVERVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MAXXREFOVERVAL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXXREFOVERVAL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXXREFOVERVAL",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "EXTSYSNAME",
            "required": true,
            "persistent": true,
            "title": "System ",
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
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "ORGID",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "SITEID",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "MAXIMO Value",
            "remarks": "In a Cross Reference type interface control, the Maximo value that corresponds to the value in the External Value field. In an inbound message, the MEA changes the external value to the Maximo value. In an outbound message, the MEA changes the Maximo value to the external value. This is an organization or site override value for the control.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "NEWVALUE",
            "required": false,
            "persistent": true,
            "title": "External Value",
            "remarks": "In a Cross Reference type interface control, the external system value that corresponds to the value in the MAXIMO Value field. In an inbound message, the MEA changes the external value to the Maximo value. In an outbound message, the MEA changes the Maximo value to the external value. This is an override to the default, external system-specific values.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXIFACECONTROL"
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
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "CHANGEBY",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MAXXREFOVERVALID",
            "required": true,
            "persistent": true,
            "title": "MAXXREFOVERVALID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXXREFOVERVAL",
            "source": "MAXEXTOVER",
            "remarks": "Relationship to the MaxListXrefVal table, used to find all list type control values for a given extsys, ifacecontrol, orgid and siteid. The resulting set will contain 1 or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname and orgid=:orgid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}