mos = {
    "objectName": "LMOIMRLN",
    "className": "psdi.iface.app.im.LmoImRelSet",
    "description": "This table holds LMO IM relationship",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LMOIMRLNID",
    "primaryKeyColumns": [
        "LMONAME",
        "LMONAMESPACE",
        "IMNAME",
        "IMVERSION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LMO",
            "targetObject": "LMOIMRLN",
            "parentKeys": "LMONAME, LMONAMESPACE",
            "targetKeys": "LMONAME, LMONAMESPACE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "LMO",
            "longDescription": null
        },
        {
            "objectName": "MAXIM",
            "targetObject": "LMOIMRLN",
            "parentKeys": "IMNAME, IMVERSION",
            "targetKeys": "IMNAME, IMVERSION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Module",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LMOIMRLN",
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
            "attributeName": "LMOIMRLNID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LMONAME",
            "required": true,
            "persistent": true,
            "title": "Logical Management Operation Name",
            "remarks": "NAME + Namespace is unique identifier",
            "sameAsAttribute": "LMONAME",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "LMONAMESPACE",
            "required": true,
            "persistent": true,
            "title": "Namespace",
            "remarks": "Name + Namespace is unique identifier",
            "sameAsAttribute": "LMONAMESPACE",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "IMNAME",
            "required": true,
            "persistent": true,
            "title": "Integration Module Name",
            "remarks": "IM Name + IM version + LMO Name + LMO Namespace is unique identifier",
            "sameAsAttribute": "IMNAME",
            "sameAsObject": "MAXIM"
        },
        {
            "attributeName": "IMVERSION",
            "required": true,
            "persistent": true,
            "title": "Integration Module Version",
            "remarks": "IM version",
            "sameAsAttribute": "IMVERSION",
            "sameAsObject": "MAXIM"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "change by field",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "change date for row",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LMO",
            "target": "LMO",
            "remarks": "The Logical Management Operation associated with the IM. The resulting set will contain zero or one rows.",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMNP",
            "target": "LMOIMTABLE",
            "remarks": "Relationship to the non-persistent LMO/IM relationship table, used to populate the list of LMOs not already associated with an IM.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIM",
            "target": "MAXIM",
            "remarks": "The Integration Module associated with the LMO. The resulting set will contain zero or one rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "target": "OMPIMLMORLN",
            "remarks": "Relationship to the OMPIMLMORLN table, used to find all OMPs for the current IM and LMO. The resulting set will contain zero or more rows.",
            "whereClause": "imname=:imname and imversion=:imversion and lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LMOIMRLN",
            "source": "LMO",
            "remarks": "Relationship to the LMOIMRLN table, used to find all IMs that implement the LMO. The resulting set will contain zero or more rows.",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMRLN",
            "source": "MAXIM",
            "remarks": "Relationship to the LMOIMRLN table, used to find all LMOs for an IM . The resulting set will contain one or multiple rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMRLN",
            "source": "OMPIMLMORLN",
            "remarks": "Relationship to the LMOIMRLN table, used to find the relationship for the current IM and LMO. The resulting set will contain zero or one rows.",
            "whereClause": "imname=:imname and imversion=:imversion and lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMRLNS",
            "source": "OMPIMLMORLN",
            "remarks": "The set of all LMOs that are implemented by the IM for the OMP in this OmpImLmoRel.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        }
    ]
}