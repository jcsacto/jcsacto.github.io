mos = {
    "objectName": "LOGICALRELATIONSHIP",
    "className": "x",
    "description": "Logical Relationships for ERD",
    "longDescription": "The combination of object+keys+target+keys must be unique, however there's no way to create an index on that.",
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOGICALRELATIONSHIPID",
    "primaryKeyColumns": [
        "LOGICALRELATIONSHIPID"
    ],
    "logicalRelationships": [
        {
            "objectName": "LOGICALRELATIONSHIP",
            "targetObject": "LRKEYS",
            "parentKeys": "LOGICALRELATIONSHIPID",
            "targetKeys": "LOGICALRELATIONSHIPID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Keys making up the relationship.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "LOGICALRELATIONSHIP",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LOGICALRELATIONSHIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object where the relationship originates.",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LOGICALRELATIONSHIP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "TARGETOBJ",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Mbo Object target of the relationship.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Name of Parent Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Relationship description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETOBJ",
            "required": true,
            "persistent": true,
            "title": "Target",
            "remarks": "Name of Child Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RELNUM",
            "required": false,
            "persistent": true,
            "title": "Relationship Number",
            "remarks": "Number of relationship, i.e. 1-to-1 or 1-to-many",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": true,
            "persistent": true,
            "title": "Status",
            "remarks": "Status of this relationship",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOGICALRELATIONSHIPID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}