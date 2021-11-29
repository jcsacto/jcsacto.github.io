mos = {
    "objectName": "MAXINTMAPPINGDETAIL",
    "className": "com.ibm.tivoli.maximo.interaction.app.manageint.MaxIntMappingDetailSet",
    "description": "Interaction Mapping Details",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTMAPPINGDETAILID",
    "primaryKeyColumns": [
        "INTERACTION",
        "HIERARCHYPATH",
        "ATTRIBUTENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTMAPPINGDETAIL",
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
            "attributeName": "INTERACTION",
            "required": true,
            "persistent": true,
            "title": "Interaction Name",
            "remarks": "Specifies a unique name for the interaction",
            "sameAsAttribute": "INTERACTION",
            "sameAsObject": "INTGENERATOR"
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": true,
            "persistent": true,
            "title": "Hierarchypath",
            "remarks": "Hierarchypath",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "MAXINTOBJDETAIL"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Specify the target attribute that should be mapped from a source attribute",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": true,
            "title": "Value",
            "remarks": "Specify the source attribute from which a target attribute will be mapped",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "MAPOBJECT",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SOURCEELEMENT",
            "required": false,
            "persistent": false,
            "title": "Source Element",
            "remarks": "Source Element",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXINTMAPPINGDETAILID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PASSWORD",
            "required": false,
            "persistent": true,
            "title": "Encrypted Value",
            "remarks": "For a filed marked as a password, this field allows maintenance of the password in an encrypted manner.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENCRYPTVALUE",
            "required": true,
            "persistent": true,
            "title": "Encrypt Value",
            "remarks": "Encrypt Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "RELATIONSHIPTREE",
            "target": "EXPBUILDTREE",
            "remarks": "Relationship to get relationship tree for object name",
            "whereClause": "objectname=:objectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXINTMAPPINGDETAIL",
            "source": "MAXINTMAPPING",
            "remarks": "Relationship to get all mapping details for an interaction object",
            "whereClause": "interaction=:interaction and hierarchypath=:hierarchypath",
            "cardinality": null
        }
    ]
}