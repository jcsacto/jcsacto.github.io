mos = {
    "objectName": "PROPERTYINPUT",
    "className": "psdi.app.contract.virtual.PropertyInputSet",
    "description": "Non-persistent table for associating properties",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "CONTRACTTYPEID",
            "required": false,
            "persistent": false,
            "title": "Contract Type",
            "remarks": "Identifies the contract type",
            "sameAsAttribute": "CONTRACTTYPEID",
            "sameAsObject": "CONTRACTTYPE"
        },
        {
            "attributeName": "PROPERTYID",
            "required": true,
            "persistent": false,
            "title": "Property ID",
            "remarks": "Unique property identifier",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the property",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "CONTRACTPROPERTY"
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": false,
            "title": "Default Value",
            "remarks": "Property ID default value",
            "sameAsAttribute": "DEFAULTVALUE",
            "sameAsObject": "PROPERTYDEFAULT"
        },
        {
            "attributeName": "EDITABLE",
            "required": true,
            "persistent": false,
            "title": "Editable",
            "remarks": "Could this property identifier be edited at the time of use?",
            "sameAsAttribute": "EDITABLE",
            "sameAsObject": "PROPERTYDEFAULT"
        },
        {
            "attributeName": "DATATYPE",
            "required": false,
            "persistent": false,
            "title": "Data Type",
            "remarks": "Data type for the value of this property (ALN, YORN)",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "PROPERTYINPUT",
            "source": "CONTRACTTYPE",
            "remarks": "Relationship to the non-persistent PropertyInput table. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}