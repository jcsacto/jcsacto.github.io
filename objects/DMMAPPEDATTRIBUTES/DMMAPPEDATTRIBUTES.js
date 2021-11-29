mos = {
    "objectName": "DMMAPPEDATTRIBUTES",
    "className": "psdi.dm.virtual.DMMappedAttributesSet",
    "description": "Mapping attribute for Migration manager",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": false,
            "title": "Attribute",
            "remarks": "Mapped Attribute name",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "REMARKS",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Provide an explanation so that the deployment administrator knows what replacement rules or values to use.",
            "sameAsAttribute": "REMARKS",
            "sameAsObject": "DMMAPDEF"
        },
        {
            "attributeName": "PREVREMARKS",
            "required": false,
            "persistent": false,
            "title": "Remarks",
            "remarks": "Remarks for the Migration Mapping found in database",
            "sameAsAttribute": "REMARKS",
            "sameAsObject": "DMMAPDEF"
        },
        {
            "attributeName": "MAPPED",
            "required": true,
            "persistent": false,
            "title": "Replacement Required",
            "remarks": "Select this option to replace the attribute value when the package is deployed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREVMAPPED",
            "required": true,
            "persistent": false,
            "title": "Replacement Required",
            "remarks": "Field for previous mapped flag.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object name",
            "remarks": "Object name for attribute.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MAPPEDATTRIBUTES",
            "source": "DMPACKAGEDEF",
            "remarks": "Relationship to table that siplays mapped attributes.",
            "whereClause": null,
            "cardinality": null
        }
    ]
}