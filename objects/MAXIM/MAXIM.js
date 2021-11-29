mos = {
    "objectName": "MAXIM",
    "className": "psdi.iface.app.im.MaxIMSet",
    "description": "Integration Module",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIMID",
    "primaryKeyColumns": [
        "IMNAME",
        "IMVERSION"
    ],
    "logicalRelationships": [
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
            "objectName": "MAXIM",
            "targetObject": "MAXIMPROP",
            "parentKeys": "IMNAME, IMVERSION",
            "targetKeys": "IMNAME, IMVERSION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Module",
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
            "objectName": "MAXIM",
            "targetObject": "OMPIMRLN",
            "parentKeys": "IMNAME, IMVERSION",
            "targetKeys": "IMNAME, IMVERSION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Integration Module",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXIM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXHANDLER",
            "targetObject": "MAXIM",
            "parentKeys": "HANDLERNAME",
            "targetKeys": "HANDLERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Handler",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIM",
            "parentKeys": "IFACENAME",
            "targetKeys": "MAXCHANNELNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIM",
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
            "attributeName": "MAXIMID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMNAME",
            "required": true,
            "persistent": true,
            "title": "Name",
            "remarks": "IM Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IMVERSION",
            "required": true,
            "persistent": true,
            "title": "Version",
            "remarks": "IM Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Hasld",
            "remarks": "Hasld",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXCHANNELNAME",
            "required": false,
            "persistent": true,
            "title": "Invocation Channel Name",
            "remarks": "IM Invocation Channel name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSNAME",
            "required": false,
            "persistent": true,
            "title": "Class Name",
            "remarks": "IM classname",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMPPRODUCTNAME",
            "required": false,
            "persistent": true,
            "title": "Operational Management Product Name",
            "remarks": "OMP productname",
            "sameAsAttribute": "PRODUCTNAME",
            "sameAsObject": "OMP"
        },
        {
            "attributeName": "OMPVERSION",
            "required": false,
            "persistent": true,
            "title": "Operational Management Product Version",
            "remarks": "OMP version",
            "sameAsAttribute": "VERSION",
            "sameAsObject": "OMP"
        },
        {
            "attributeName": "HANDLERNAME",
            "required": false,
            "persistent": true,
            "title": "Handler Name",
            "remarks": "IM handler name",
            "sameAsAttribute": "HANDLERNAME",
            "sameAsObject": "MAXHANDLER"
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
            "title": "Change date",
            "remarks": "Change date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMPNAME",
            "required": false,
            "persistent": false,
            "title": "Operational Management Product Name",
            "remarks": "Operational Management Product name",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LMOIMRLN",
            "target": "LMOIMRLN",
            "remarks": "Relationship to the LMOIMRLN table, used to find all LMOs for an IM . The resulting set will contain one or multiple rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXHANDLER",
            "target": "MAXHANDLER",
            "remarks": "Relationship to the MAXHANDLER table, used to find the  handler for an IM . The resulting set will contain one or multiple rows.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEINVOKE",
            "target": "MAXIFACEINVOKE",
            "remarks": "Relationship to the MAXIFACEINVOKE table, used to find the Invocation Channel for an IM.",
            "whereClause": "ifacename=:maxchannelname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIMPROP",
            "target": "MAXIMPROP",
            "remarks": "Relationship to the MAXIMPROP table, used to find all properties for IM . The resulting set will contain one or multiple rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "target": "OMPIMLMORLN",
            "remarks": "Relationship to the OMPIMLMORLN table, used to find all OMPs for an IM . The resulting set will contain one or multiple rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMRLN",
            "target": "OMPIMRLN",
            "remarks": "Relationship to the OMP/IM relationship table. The resulting set will contain one zero or more rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LMOIMCHLINK",
            "source": "LMO",
            "remarks": "Relationship to the IM table and invocation Channels . ",
            "whereClause": "imname in (select imname from lmoimrln where lmoname=:lmoname and lmonamespace=:lmonamespace) and maxchannelname is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMLINK",
            "source": "LMO",
            "remarks": "Relationship to the IM table, used to relate LMO OIL and IM Tables . ",
            "whereClause": "imname in (select imname from ompimlmorln where lmoname=:lmoname and lmonamespace=:lmonamespace)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOIMLINK2",
            "source": "LMO",
            "remarks": "Relationship to the IM table, used to relate LMO and IM Tables . ",
            "whereClause": "imname in (select imname from lmoimrln where lmoname=:lmoname and lmonamespace=:lmonamespace)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIM",
            "source": "LMOIMRLN",
            "remarks": "The Integration Module associated with the LMO. The resulting set will contain zero or one rows.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIM",
            "source": "MAXHANDLER",
            "remarks": "Relationship to the Integration Module table . The resulting set will contain one or more row.",
            "whereClause": "handlername=:handlername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIM",
            "source": "MAXIMPROP",
            "remarks": "The Integration Module that the property belongs to. The resulting set will contain one row.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIM",
            "source": "OMPIMLMORLN",
            "remarks": "Relationship to the MAXIM table, used to find the IM. The resulting set will contain one row.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIM",
            "source": "OMPIMRLN",
            "remarks": "Relationship  to the IM table. The resulting set will contain one row.",
            "whereClause": "imname=:imname and imversion=:imversion",
            "cardinality": "UNDEFINED"
        }
    ]
}