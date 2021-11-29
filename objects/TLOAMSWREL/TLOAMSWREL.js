mos = {
    "objectName": "TLOAMSWREL",
    "className": "psdi.app.swcatalog.SoftwareRelationshipSet",
    "description": "Software Catalog Relationship table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "TLOAMSWRELID",
    "primaryKeyColumns": [
        "TLOAMSWRELID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "TLOAMSWREL",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "CHILDSW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Child TLoam Software",
            "longDescription": null
        },
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "TLOAMSWREL",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "PARENTSW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent TLoam Software",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PARENTSW",
            "required": true,
            "persistent": true,
            "title": "Parent Unique ID",
            "remarks": "Parent Unique ID",
            "sameAsAttribute": "TLOAMSOFTWAREID",
            "sameAsObject": "TLOAMSOFTWARE"
        },
        {
            "attributeName": "CHILDSW",
            "required": true,
            "persistent": true,
            "title": "Child Unique ID",
            "remarks": "Child Unique ID",
            "sameAsAttribute": "TLOAMSOFTWAREID",
            "sameAsObject": "TLOAMSOFTWARE"
        },
        {
            "attributeName": "RELATIONSHIPTYPE",
            "required": true,
            "persistent": true,
            "title": "Relationship",
            "remarks": "Relationship",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDELETED",
            "required": true,
            "persistent": true,
            "title": "Deleted",
            "remarks": "Is this entry deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETEDATE",
            "required": false,
            "persistent": true,
            "title": "Delete Date",
            "remarks": "Date when the record was deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMSWRELID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TLOAMRELSWPARENT",
            "target": "TLOAMSOFTWARE",
            "remarks": "The parent in a SW Catalog relationship record",
            "whereClause": "tloamsoftwareid=:parentsw",
            "cardinality": null
        },
        {
            "name": "TLOAMSOFTWARE",
            "target": "TLOAMSOFTWARE",
            "remarks": "Return the children Software Catalog Relationship entries.  (1 or more)",
            "whereClause": "tloamsoftwareid=:childsw",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMSWRELCHILD",
            "source": "TLOAMSOFTWARE",
            "remarks": "Product Children Relationship (excludes deleted ones)",
            "whereClause": "childsw=:tloamsoftwareid and isdeleted=:no",
            "cardinality": null
        },
        {
            "name": "TLOAMSWRELPARENT",
            "source": "TLOAMSOFTWARE",
            "remarks": "Product Parent Relationship (excludes deleted ones)",
            "whereClause": "parentsw=:tloamsoftwareid and isdeleted=:no",
            "cardinality": null
        }
    ]
}