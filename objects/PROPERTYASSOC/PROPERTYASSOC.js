mos = {
    "objectName": "PROPERTYASSOC",
    "className": "psdi.app.contract.PropertyAssocSet",
    "description": "Contract Type and Property Association Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PROPERTYASSOCID",
    "primaryKeyColumns": [
        "MAXCONTRACTTYPE",
        "PROPERTYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "PROPERTYASSOC",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROPERTYID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 141",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MAXCONTRACTTYPE",
            "required": true,
            "persistent": true,
            "title": "Internal Contract Type",
            "remarks": "Internal contract type. Same as value list CONTRACTTYPE.",
            "sameAsAttribute": "MAXVALUE",
            "sameAsObject": "SYNONYMDOMAIN"
        },
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
            "attributeName": "PROPERTYASSOCID",
            "required": true,
            "persistent": true,
            "title": "PROPERTYASSOCID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CONTRACTPROPERTY",
            "target": "CONTRACTPROPERTY",
            "remarks": "Relationship to the ContractProperty table, used to find property records for a given property. (contractproperty.propertyid = propertyassoc.propertyid). The resulting set will contain zero or one object.",
            "whereClause": "propertyid = :propertyid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PROPERTYASSOC",
            "source": "CONTRACTTYPE",
            "remarks": "Relationship to the PropertyAssoc table, used to find property associate records for a given internal contract type. (propertyassoc.maxcontracttype = contracttype.maxcontracttype). The resulting set will contain more than one object.",
            "whereClause": "maxcontracttype = :maxcontracttype",
            "cardinality": "UNDEFINED"
        }
    ]
}