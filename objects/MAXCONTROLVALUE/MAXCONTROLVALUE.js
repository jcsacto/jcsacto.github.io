mos = {
    "objectName": "MAXCONTROLVALUE",
    "className": "psdi.iface.app.control.MaxControlValueSet",
    "description": "Control Value",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXCONTROLVALUEID",
    "primaryKeyColumns": [
        "IFACECONTROL",
        "VALUE",
        "NEWVALUE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "MAXCONTROLVALUE",
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
            "remarks": "IFACECONTROL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Default Value",
            "remarks": "In a cross-reference type interface control, the Maximo data value. This value corresponds to the external value supplied in the Default External Value field. In a list type interface control, a valid value.",
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
            "attributeName": "NEWVALUE",
            "required": false,
            "persistent": true,
            "title": "Default External Value",
            "remarks": "The external system data value. The MEA converts this to the corresponding Maximo value.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "MAXCONTROLVALUEID",
            "required": true,
            "persistent": true,
            "title": "MAXCONTROLVALUEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAXCONTROLVALUE",
            "source": "MAXIFACECONTROL",
            "remarks": "Relationship to the MaxControlValue table, used to find all details records for a given ifacetype and ifacecontrol. The resulting set will contain zero or more objects.",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        }
    ]
}