mos = {
    "objectName": "LMOATT",
    "className": "psdi.iface.app.lmo.LMOAttSet",
    "description": "LMO Attributes Tables",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LMOATTID",
    "primaryKeyColumns": [
        "LMONAME",
        "LMONAMESPACE",
        "NAME",
        "INPUT"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LMO",
            "targetObject": "LMOATT",
            "parentKeys": "LMONAME, LMONAMESPACE",
            "targetKeys": "LMONAME, LMONAMESPACE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "LMO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LMOATT",
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
            "attributeName": "LMOATTID",
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
            "title": "Name",
            "remarks": "name + namespace is unique identifier",
            "sameAsAttribute": "LMONAME",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "LMONAMESPACE",
            "required": false,
            "persistent": true,
            "title": "Namespace",
            "remarks": "Name + Namespace is unique identifer",
            "sameAsAttribute": "LMONAMESPACE",
            "sameAsObject": "LMO"
        },
        {
            "attributeName": "NAME",
            "required": false,
            "persistent": true,
            "title": "Name",
            "remarks": "LMO Attribute name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DATATYPE",
            "required": false,
            "persistent": true,
            "title": "Data Type",
            "remarks": "Attribute Data Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
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
            "attributeName": "INPUT",
            "required": true,
            "persistent": true,
            "title": "Input",
            "remarks": "Input",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": true,
            "title": "Required",
            "remarks": "Reuired",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXATTRIB",
            "target": "MAXATTRIBUTE",
            "remarks": "Self Relationship Of Maxattribute with itself. ",
            "whereClause": "attributename=:name",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LMOATT",
            "source": "LMO",
            "remarks": "Relationship to the LMOATT table, used to find all attributes for a LMO . The resulting set will contain one or multiple rows.",
            "whereClause": "lmoname=:lmoname and lmonamespace=:lmonamespace",
            "cardinality": "UNDEFINED"
        }
    ]
}