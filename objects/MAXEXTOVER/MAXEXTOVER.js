mos = {
    "objectName": "MAXEXTOVER",
    "className": "psdi.iface.app.control.MaxExtOverSet",
    "description": "External Overrides for Org / Site",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXEXTOVERID",
    "primaryKeyColumns": [
        "EXTSYSNAME",
        "IFACECONTROL",
        "ORGID",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXEXTSYSTEM",
            "targetObject": "MAXEXTOVER",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTOVER",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MAXEXTOVER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTOVER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXEXTOVER",
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
            "remarks": "Organization for which you are overriding the value of a List or Cross reference type control.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site for which you are overriding the value of a List type or Cross Reference type control.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
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
            "attributeName": "MAXEXTOVERID",
            "required": true,
            "persistent": true,
            "title": "MAXEXTOVERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXLISTOVERVAL",
            "target": "MAXLISTOVERVAL",
            "remarks": "Relationship to the MaxListOverVal table, used to find all list type control values for a given extsys, ifacecontrol, orgid and siteid. The resulting set will contain 1 or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname and orgid=:orgid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXXREFOVERVAL",
            "target": "MAXXREFOVERVAL",
            "remarks": "Relationship to the MaxListXrefVal table, used to find all list type control values for a given extsys, ifacecontrol, orgid and siteid. The resulting set will contain 1 or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname and orgid=:orgid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXEXTOVER",
            "source": "MAXEXTSYSCONTROL",
            "remarks": "Relationship to the MaxExtOver table, used to find all control overrides for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTOVERLIST",
            "source": "MAXEXTSYSCONTROL",
            "remarks": "Relationship to the MaxExtOver table, used to find all control overrides for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTOVERXREF",
            "source": "MAXEXTSYSCONTROL",
            "remarks": "Relationship to the MaxExtOver table, used to find all control overrides for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        }
    ]
}