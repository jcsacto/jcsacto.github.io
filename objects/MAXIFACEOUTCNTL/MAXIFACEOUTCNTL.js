mos = {
    "objectName": "MAXIFACEOUTCNTL",
    "className": "psdi.iface.app.control.MaxIfaceControlOutSet",
    "description": "Associate integration controls with publish chnl",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACEOUTCNTLID",
    "primaryKeyColumns": [
        "IFACENAME",
        "IFACECONTROL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXIFACEOUTCNTL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEOUTCNTL",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEOUT",
            "targetObject": "MAXIFACEOUTCNTL",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Maximo Outbound Inferface",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEOUTCNTL",
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
            "attributeName": "MAXIFACEOUTCNTLID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Enterprise service",
            "remarks": "Enterprise service",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACECONTROL",
            "required": true,
            "persistent": true,
            "title": "Integration Control",
            "remarks": "Integration Control",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "User Defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Changed By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXEXTIFACEOUTCNTL",
            "target": "MAXEXTIFACEOUT",
            "remarks": "Relationship from maxifaceoutcntl to maxextifaceout table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSCNTLOUT",
            "target": "MAXEXTSYSCONTROL",
            "remarks": "Relationship from maxifaceoutcntl to maxextsyscontrol table",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECNTOUTLOOKUP",
            "target": "MAXIFACECONTROL",
            "remarks": "Relationship from maxifaceoutcntl to maxifacecontrol table",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXEXTIFACEOUTCNTL",
            "source": "MAXEXTIFACEOUT",
            "remarks": "Relationship from maxextifaceout to maxifaceoutcntl table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEOUTCNTL",
            "source": "MAXIFACEOUT",
            "remarks": "relating maxifaceout to maxifaceproc",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEOUTCNTLDETAIL",
            "source": "MAXIFACEOUT",
            "remarks": "Relationship from maxifaceout to maxifaceoutcntl table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        }
    ]
}