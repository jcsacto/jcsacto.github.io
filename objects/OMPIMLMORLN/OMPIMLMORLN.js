mos = {
    "objectName": "OMPIMLMORLN",
    "className": "psdi.iface.app.im.OmpImLmoRelSet",
    "description": "Relation between LMO, IM, OMP and ENDPOINTS",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OMPIMLMORLNID",
    "primaryKeyColumns": [
        "IMNAME",
        "IMVERSION",
        "LMONAME",
        "LMONAMESPACE",
        "OMPGUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LMO",
            "targetObject": "OMPIMLMORLN",
            "parentKeys": "LMONAME, LMONAMESPACE",
            "targetKeys": "LMONAME, LMONAMESPACE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "LMO",
            "longDescription": null
        },
        {
            "objectName": "MAXIM",
            "targetObject": "OMPIMLMORLN",
            "parentKeys": "IMNAME, IMVERSION",
            "targetKeys": "IMNAME, IMVERSION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Module",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OMPIMLMORLN",
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
            "attributeName": "OMPIMLMORLNID",
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
            "title": "OMP GUID",
            "remarks": "LMO Name + LMO Namespace +  IM Name + IM Version + OMPGUID is unique identifier",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "LMONAME",
            "required": true,
            "persistent": true,
            "title": "Logical Management Operation Name",
            "remarks": "LMO Name + LMO Namespace + IM Name + IM Version + OMP GUID is unique",
            "sameAsAttribute": "LMONAME",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "LMONAMESPACE",
            "required": true,
            "persistent": true,
            "title": "Namespace",
            "remarks": "LMO Name + LMO Namespace + IM Name + IM Version + OMP GUID is unique",
            "sameAsAttribute": "LMONAMESPACE",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "IMNAME",
            "required": true,
            "persistent": true,
            "title": "Integration Module Name",
            "remarks": "LMO Name + LMO Namespace + IM Name + IM Version + OMP GUID is unique",
            "sameAsAttribute": "IMNAME",
            "sameAsObject": "MAXIM"
        },
        {
            "attributeName": "IMVERSION",
            "required": true,
            "persistent": true,
            "title": "Integration Module Version",
            "remarks": "LMO Name + LMO Namespace + IM Name + IM Version + OMP GUID is unique",
            "sameAsAttribute": "IMVERSION",
            "sameAsObject": "MAXIM"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By field",
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
        },
        {
            "attributeName": "ISPRIMARY",
            "required": true,
            "persistent": true,
            "title": "Is Primary",
            "remarks": "The preferred Integration Module for the given Logical Management Operation and Operational Management Product.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYNAME",
            "required": false,
            "persistent": false,
            "title": "Operational Management Product Name",
            "remarks": "OMP Display Name (non-persistent)",
            "sameAsAttribute": "DISPLAYLABEL",
            "sameAsObject": "OMP"
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": false,
            "persistent": false,
            "title": "End Point",
            "remarks": "Endpoint name",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LMO",
            "target": "LMO",
            "remarks": "Relationship to the LMO table, used to find the LMO. The resulting set will contain one row.",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMRLN",
            "target": "LMOIMRLN",
            "remarks": "Relationship to the LMOIMRLN table, used to find the relationship for the current IM and LMO. The resulting set will contain zero or one rows.",
            "whereClause": "imname=:imname and imversion=:imversion and lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMRLNS",
            "target": "LMOIMRLN",
            "remarks": "The set of all LMOs that are implemented by the IM for the OMP in this OmpImLmoRel.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIM",
            "target": "MAXIM",
            "remarks": "Relationship to the MAXIM table, used to find the IM. The resulting set will contain one row.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMP",
            "target": "OMP",
            "remarks": "Relationship to the OMP table, used to find the OMP for an IM/LMO.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEOMPIM",
            "target": "OMPIMLMORLN",
            "remarks": "All OMP relationships for the current OMP and IM. The resulting set will contain one or multiple rows.",
            "whereClause": "ompguid=:ompguid and imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEOMPLMO",
            "target": "OMPIMLMORLN",
            "remarks": "All OMP relationships for the current OMP and LMO . The resulting set will contain one or multiple rows.",
            "whereClause": "ompguid=:ompguid and lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEOMPLMOPRIM",
            "target": "OMPIMLMORLN",
            "remarks": "The primary OMP relationship for the current OMP and LMO. The resulting set will contain zero or one rows.",
            "whereClause": "ompguid=:ompguid and lmoname=:lmoname and lmonamespace=:lmonamespace and isprimary=1 and (imname!=:imname or imversion!=:imversion)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMRLN",
            "target": "OMPIMRLN",
            "remarks": "The OmpImRel relationship for the current OMP/IM/LMO. The resulting set will contain one row.",
            "whereClause": "ompguid=:ompguid and imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "OMPIMLMORLN",
            "source": "LMO",
            "remarks": "OmpImLmoRel objects for the LMO",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOOILLINK",
            "source": "LMO",
            "remarks": "Relationship to the OIL Table . ",
            "whereClause": "name=:lmoname and namespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "source": "LMOIMRLN",
            "remarks": "Relationship to the OMPIMLMORLN table, used to find all OMPs for the current IM and LMO. The resulting set will contain zero or more rows.",
            "whereClause": "imname=:imname and imversion=:imversion and lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "source": "MAXIM",
            "remarks": "Relationship to the OMPIMLMORLN table, used to find all OMPs for an IM . The resulting set will contain one or multiple rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "source": "OMP",
            "remarks": "Relationship to OMP table, finds the corresponding OMP",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEOMPIM",
            "source": "OMPIMLMORLN",
            "remarks": "All OMP relationships for the current OMP and IM. The resulting set will contain one or multiple rows.",
            "whereClause": "ompguid=:ompguid and imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEOMPLMO",
            "source": "OMPIMLMORLN",
            "remarks": "All OMP relationships for the current OMP and LMO . The resulting set will contain one or multiple rows.",
            "whereClause": "ompguid=:ompguid and lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAMEOMPLMOPRIM",
            "source": "OMPIMLMORLN",
            "remarks": "The primary OMP relationship for the current OMP and LMO. The resulting set will contain zero or one rows.",
            "whereClause": "ompguid=:ompguid and lmoname=:lmoname and lmonamespace=:lmonamespace and isprimary=1 and (imname!=:imname or imversion!=:imversion)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "source": "OMPIMRLN",
            "remarks": "All OmpImLmoRel relationships for the current OMP and IM. The resulting set will contain one or multiple rows.",
            "whereClause": "ompguid=:ompguid and imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        }
    ]
}