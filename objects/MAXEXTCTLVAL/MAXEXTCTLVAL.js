mos = {
    "objectName": "MAXEXTCTLVAL",
    "className": "psdi.iface.app.control.MaxExtCtlValSet",
    "description": "External Control Values",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXEXTCTLVALID",
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
            "targetObject": "MAXEXTCTLVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTCTLVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MAXEXTCTLVAL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTCTLVAL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXEXTCTLVAL",
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
            "remarks": "Organization for which you are overriding the value of a Value type control.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site for which you are overriding the value of a Value type control.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Organization or site override value for the corresponding Value type control.",
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
            "attributeName": "MAXEXTCTLVALID",
            "required": true,
            "persistent": true,
            "title": "MAXEXTCTLVALID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXEXTCTLVAL",
            "source": "MAXEXTSYSCONTROL",
            "remarks": "Relationship to the MaxExtCtlVal table, used to find all value type control values for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        }
    ]
}