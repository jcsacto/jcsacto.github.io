mos = {
    "objectName": "MAXIFACEINDETAIL",
    "className": "psdi.iface.app.intsrv.MaxIfaceInDetailSet",
    "description": "Enterprise Service Details",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACEINDETAILID",
    "primaryKeyColumns": [
        "IFACENAME",
        "INTOBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXIFACECONTROL",
            "targetObject": "MAXIFACEINDETAIL",
            "parentKeys": "IFACECONTROL",
            "targetKeys": "IFACECONTROL",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "iface control",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEINDETAIL",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Service Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEINDETAIL",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEINDETAIL",
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
            "attributeName": "MAXIFACEINDETAILID",
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
            "remarks": "Integration Service Name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "intobjectname",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "IFACEEXITCLASS",
            "required": false,
            "persistent": true,
            "title": "Processing Class",
            "remarks": "IFACEEXITCLASS",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "IFACEUSEREXITCLASS",
            "required": false,
            "persistent": true,
            "title": "User Exit Class",
            "remarks": "ifaceuseeitclas",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "IFACEMAPNAME",
            "required": false,
            "persistent": true,
            "title": "XSL Map",
            "remarks": "ifacemapname",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "IFACEMAPORDER",
            "required": true,
            "persistent": true,
            "title": "Processing Order",
            "remarks": "ifacemaporder",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACECONTROL",
            "required": false,
            "persistent": true,
            "title": "Multiplication Control",
            "remarks": "ifacecontrol",
            "sameAsAttribute": "IFACECONTROL",
            "sameAsObject": "MAXIFACECONTROL"
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "Userdefined",
            "remarks": "userdefined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changeby",
            "remarks": "changeby",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changedate",
            "remarks": "changedate",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "Relationship to the MaxIntObject table, used to find object records for a given intobjectname . The resulting set will contain one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXIFACEINDETAIL",
            "source": "MAXIFACEIN",
            "remarks": "Relationship to the MAXIFACEINDETAIL table, used to find addition object structure . The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacename",
            "cardinality": "UNDEFINED"
        }
    ]
}