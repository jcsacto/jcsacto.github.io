mos = {
    "objectName": "CONTRACTDEFAULT",
    "className": "psdi.mbo.custapp.CustomMboSet",
    "description": "Contract Properties Default Template.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CONTRACTDEFAULTID",
    "primaryKeyColumns": [
        "MAXCONTRACTTYPE",
        "PROPERTYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXOBJECT",
            "targetObject": "CONTRACTDEFAULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROPERTYID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CONTRACTDEFAULTID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
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
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Value",
            "remarks": "Property ID default value",
            "sameAsAttribute": "DEFAULTVALUE",
            "sameAsObject": "PROPERTYDEFAULT"
        },
        {
            "attributeName": "EDITABLE",
            "required": true,
            "persistent": true,
            "title": "Editable",
            "remarks": "Could this property identifier be edited at the time of use?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}