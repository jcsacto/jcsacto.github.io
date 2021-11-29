mos = {
    "objectName": "OMP",
    "className": "psdi.iface.app.omp.OmpSet",
    "description": "Operational Management Products",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OMPID",
    "primaryKeyColumns": [
        "OMPGUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "OMP",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OMP",
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
            "attributeName": "OMPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OMPGUID",
            "required": false,
            "persistent": true,
            "title": "GUID",
            "remarks": "A globally unique OMP ID that is generated from the OMP name field.",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "OMP Name",
            "remarks": "Name of the OMP server",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTNAME",
            "required": false,
            "persistent": true,
            "title": "Product Name",
            "remarks": "Name of the Operational Management Product.  Required if name is not specified.  Change not allowed after insert.  If name is not specified, the combination of hostname/productname/manufacturer must be unique across all OMPs.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "OMP Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HOSTNAME",
            "required": false,
            "persistent": true,
            "title": "Host Name",
            "remarks": "OMP hostname",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of OMP server",
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
            "attributeName": "DISPLAYLABEL",
            "required": false,
            "persistent": true,
            "title": "Display Label",
            "remarks": "OMP Display Label",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUFACTURER",
            "required": false,
            "persistent": true,
            "title": "Manufacturer Name",
            "remarks": "OMP Manufacturer Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has long description",
            "remarks": "Long description",
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
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISPLAYNAME",
            "required": false,
            "persistent": false,
            "title": "OMP Display Name",
            "remarks": "OMP Display Name (non-persistent)",
            "sameAsAttribute": "DISPLAYLABEL",
            "sameAsObject": "OMP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "OMPCIRLN",
            "target": "OMPCIRLN",
            "remarks": "Relationship between OMPs and CIs, that shows all of the CIs that an OMP manages.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMLMORLN",
            "target": "OMPIMLMORLN",
            "remarks": "Relationship to OMP table, finds the corresponding OMP",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPIMRLN",
            "target": "OMPIMRLN",
            "remarks": "Relationship between OMP and OMPIMRLN table.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OMP",
            "source": "ACTCI",
            "remarks": "Relationship between Actual CIs and OMPs, that shows OMPs that manage the CI.",
            "whereClause": "ompguid in (select distinct ompguid from ompcirln where ciguid=:guid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDOMP",
            "source": "ACTCI",
            "remarks": "Relationship to the OMP table used to find the OMP linked to the actual CI",
            "whereClause": "ompguid in (select ompguid from ompcirln where ompcirln.ciguid=:guid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LMOOMPLINK",
            "source": "LMO",
            "remarks": "Relationship to the OMPtable, used to relate LMO OIL and OMP Tables . ",
            "whereClause": "ompguid in (select ompguid from ompimlmorln where lmoname=:lmoname and lmonamespace=:lmonamespace)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMP",
            "source": "OMPCIRLN",
            "remarks": "Relationship between OMPs and CIs, that shows all of the OMPs that manage a CI.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPCIRLN",
            "source": "OMPCIRLN",
            "remarks": "Relationship to OMP table, finds the corresponding OMP",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMP",
            "source": "OMPIMLMORLN",
            "remarks": "Relationship to the OMP table, used to find the OMP for an IM/LMO.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMP",
            "source": "OMPIMRLN",
            "remarks": "The OMP for the current OMP/IM. The resulting set will contain one row.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        }
    ]
}