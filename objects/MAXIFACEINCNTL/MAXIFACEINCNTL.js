mos = {
    "objectName": "MAXIFACEINCNTL",
    "className": "psdi.iface.app.control.MaxIfaceControlInSet",
    "description": "Associating iface controls with services",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACEINCNTLID",
    "primaryKeyColumns": [
        "IFACENAME",
        "IFACECONTROL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXIFACEINCNTL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEINCNTL",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Service Interface",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEINCNTL",
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
            "attributeName": "MAXIFACEINCNTLID",
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
            "title": "Enterprise Service",
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
            "remarks": "user defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "changed by",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "changed Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXEXTIFACEINCNTL",
            "target": "MAXEXTIFACEIN",
            "remarks": "Relationship from maxifaceincntl to maxextifacein table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXEXTSYSCNTL",
            "target": "MAXEXTSYSCONTROL",
            "remarks": "Relationship from maxifaceincntl to maxextsyscontrol table",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACECNTLOOKUP",
            "target": "MAXIFACECONTROL",
            "remarks": "Relationship from maxifaceincntl to maxifacecontrol table",
            "whereClause": "ifacecontrol=:ifacecontrol",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXEXTIFACEINCNTL",
            "source": "MAXEXTIFACEIN",
            "remarks": "Relationship from maxextifacein to maxifaceincnt table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEINCNTLDETAIL",
            "source": "MAXIFACEIN",
            "remarks": "Relationship from maxifacein to maxifaceincntl table",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        }
    ]
}