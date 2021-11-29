mos = {
    "objectName": "OMPIMRLN",
    "className": "psdi.iface.app.im.OmpImRelSet",
    "description": "OMPs associated with an IM",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OMPIMRLNID",
    "primaryKeyColumns": [
        "OMPGUID",
        "IMNAME",
        "IMVERSION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "OMPIMRLN",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration End Point",
            "longDescription": null
        },
        {
            "objectName": "MAXIM",
            "targetObject": "OMPIMRLN",
            "parentKeys": "IMNAME, IMVERSION",
            "targetKeys": "IMNAME, IMVERSION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Module",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OMPIMRLN",
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
            "attributeName": "OMPIMRLNID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMPGUID",
            "required": true,
            "persistent": true,
            "title": "Operational Management Product GUID",
            "remarks": "Operational Management Product GUID.",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "IMNAME",
            "required": true,
            "persistent": true,
            "title": "Integration Module Name",
            "remarks": "Integration Module Name",
            "sameAsAttribute": "IMNAME",
            "sameAsObject": "MAXIM"
        },
        {
            "attributeName": "IMVERSION",
            "required": false,
            "persistent": true,
            "title": "Integration Module Version",
            "remarks": "Integration Module Version",
            "sameAsAttribute": "IMVERSION",
            "sameAsObject": "MAXIM"
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": false,
            "persistent": true,
            "title": "End Point",
            "remarks": "Endpoint name.",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
        },
        {
            "attributeName": "DISPLAYNAME",
            "required": false,
            "persistent": false,
            "title": "Operational Management Product",
            "remarks": "Operational Management Product display name",
            "sameAsAttribute": "DISPLAYLABEL",
            "sameAsObject": "OMP"
        },
        {
            "attributeName": "HOSTNAME",
            "required": false,
            "persistent": false,
            "title": "Hostname",
            "remarks": "Operational Management Product hostname.",
            "sameAsAttribute": "HOSTNAME",
            "sameAsObject": "OMP"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changeby",
            "remarks": "Changeby",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "CHANGEDATE",
            "remarks": "CHANGEDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXENDPOINT",
            "target": "MAXENDPOINT",
            "remarks": "Relationship to the MAXENDPOINT table, used to find the Endpoint for the current OMP and IM. The resulting set will contain zero or one rows.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIM",
            "target": "MAXIM",
            "remarks": "Relationship  to the IM table. The resulting set will contain one row.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMP",
            "target": "OMP",
            "remarks": "The OMP for the current OMP/IM. The resulting set will contain one row.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "target": "OMPIMLMORLN",
            "remarks": "All OmpImLmoRel relationships for the current OMP and IM. The resulting set will contain one or multiple rows.",
            "whereClause": "ompguid=:ompguid and imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "OMPIMLMORLN",
            "source": "MAXENDPOINT",
            "remarks": "Relationship to the OMP IM and LMO relation table . The resulting set will contain one or more row.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMRLN",
            "source": "MAXIM",
            "remarks": "Relationship to the OMP/IM relationship table. The resulting set will contain one zero or more rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMRLN",
            "source": "OMP",
            "remarks": "Relationship between OMP and OMPIMRLN table.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": null
        },
        {
            "name": "OMPIMRLN",
            "source": "OMPIMLMORLN",
            "remarks": "The OmpImRel relationship for the current OMP/IM/LMO. The resulting set will contain one row.",
            "whereClause": "ompguid=:ompguid and imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        }
    ]
}