mos = {
    "objectName": "CONTRACTPROPERTY",
    "className": "psdi.app.contract.ContractPropertySet",
    "description": "Contract Property Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTPROPERTYID",
    "primaryKeyColumns": [
        "PROPERTYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CONTRACTPROPERTY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROPERTYID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROPERTYID",
            "required": true,
            "persistent": true,
            "title": "Property ID",
            "remarks": "Unique property identifier",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the property",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATATYPE",
            "required": true,
            "persistent": true,
            "title": "Data type",
            "remarks": "Data type for the value of this property (ALN, YORN)",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "CONTRACTPROPERTYID",
            "required": true,
            "persistent": true,
            "title": "CONTRACTPROPERTYID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "CONTRACTPROPERTY",
            "source": "PROPERTYASSOC",
            "remarks": "Relationship to the ContractProperty table, used to find property records for a given property. (contractproperty.propertyid = propertyassoc.propertyid). The resulting set will contain zero or one object.",
            "whereClause": "propertyid = :propertyid",
            "cardinality": "UNDEFINED"
        }
    ]
}