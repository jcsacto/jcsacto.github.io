mos = {
    "objectName": "OMPCIRLN",
    "className": "psdi.iface.app.omp.OmpCiRelSet",
    "description": "OMP-CI Relationship",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OMPCIRLNID",
    "primaryKeyColumns": [
        "OMPGUID",
        "CIGUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "OMPCIRLN",
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
            "attributeName": "OMPCIRLNID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CIGUID",
            "required": true,
            "persistent": true,
            "title": "CI GUID",
            "remarks": "CI GUID",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "OMPGUID",
            "required": true,
            "persistent": true,
            "title": "OMP GUID",
            "remarks": "OMP GUID",
            "sameAsAttribute": "GUID",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "CISOURCETOKEN",
            "required": false,
            "persistent": true,
            "title": "CI Source Token",
            "remarks": "CI Source Token from this OMP",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Changed by",
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
            "attributeName": "HOSTNAME",
            "required": false,
            "persistent": false,
            "title": "HOSTNAME",
            "remarks": "Hostname",
            "sameAsAttribute": "HOSTNAME",
            "sameAsObject": "OMP"
        },
        {
            "attributeName": "PRODUCTNAME",
            "required": false,
            "persistent": false,
            "title": "PRODUCTNAME",
            "remarks": "Productname",
            "sameAsAttribute": "PRODUCTNAME",
            "sameAsObject": "OMP"
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": false,
            "title": "VERSION",
            "remarks": "Version",
            "sameAsAttribute": "VERSION",
            "sameAsObject": "OMP"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ACTCI",
            "target": "ACTCI",
            "remarks": "Relationship to ACTCI table, finds the corresponding CI",
            "whereClause": "guid=:ciguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship between OMPs and CIs, that shows all of the CIs that an OMP manages.",
            "whereClause": "ciguid=:ciguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMP",
            "target": "OMP",
            "remarks": "Relationship between OMPs and CIs, that shows all of the OMPs that manage a CI.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPCIRLN",
            "target": "OMP",
            "remarks": "Relationship to OMP table, finds the corresponding OMP",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "OMPCIRLN",
            "source": "ACTCI",
            "remarks": "Relationship between actual CIs and OMPs, that shows all of the OMPs that manage a CI.",
            "whereClause": "ciguid=:guid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPCIRLN",
            "source": "CI",
            "remarks": "Relationship between CIs and OMPs, that shows all of the OMPs that manage a CI.",
            "whereClause": "ciguid=:ciguid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OMPCIRLN",
            "source": "OMP",
            "remarks": "Relationship between OMPs and CIs, that shows all of the CIs that an OMP manages.",
            "whereClause": "ompguid=:ompguid",
            "cardinality": "UNDEFINED"
        }
    ]
}