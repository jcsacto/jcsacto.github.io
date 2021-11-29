mos = {
    "objectName": "MAXEXTBOOLVAL",
    "className": "psdi.iface.app.control.MaxExtBoolValSet",
    "description": "Boolean Values",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXEXTBOOLVALID",
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
            "targetObject": "MAXEXTBOOLVAL",
            "parentKeys": "EXTSYSNAME",
            "targetKeys": "EXTSYSNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "External System",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXEXTBOOLVAL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MAXEXTBOOLVAL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXEXTBOOLVAL",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXEXTBOOLVAL",
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
            "remarks": "Organization for which you are overriding the value of a Boolean type control.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site for which you are overriding the value of a Boolean type control.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ISTRUE",
            "required": true,
            "persistent": true,
            "title": "True ",
            "remarks": "Specifies whether the override value of the corresponding Boolean control is True or False. If the check box is selected, the value is True. This is an organization- or site-level value.",
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
            "attributeName": "MAXEXTBOOLVALID",
            "required": true,
            "persistent": true,
            "title": "MAXEXTBOOLVALID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXEXTBOOLVAL",
            "source": "MAXEXTSYSCONTROL",
            "remarks": "Relationship to the MaxExtBoolVal table, used to find all boolean type control values for a given extsys and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol and extsysname=:extsysname",
            "cardinality": "UNDEFINED"
        }
    ]
}