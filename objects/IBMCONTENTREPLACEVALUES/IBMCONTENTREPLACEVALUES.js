mos = {
    "objectName": "IBMCONTENTREPLACEVALUES",
    "className": "psdi.mbo.custapp.NonPersistentCustomMboSet",
    "description": "Replacement values for MRIU attribute replacements",
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
            "attributeName": "VALUE",
            "required": false,
            "persistent": false,
            "title": "Value",
            "remarks": "Value",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "POSSIBLEVALUES",
            "source": "IBMCONTENTREPLACEMENTS",
            "remarks": "Set of value replacement values",
            "whereClause": null,
            "cardinality": null
        }
    ]
}