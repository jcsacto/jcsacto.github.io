mos = {
    "objectName": "PROJECT",
    "className": "psdi.app.dbchange.ProjectSet",
    "description": "MAXIMO Project table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PROJECTID",
    "primaryKeyColumns": [
        "PROJECT"
    ],
    "logicalRelationships": [
        {
            "objectName": "PROJECT",
            "targetObject": "MSGPROJECT",
            "parentKeys": "PROJECT",
            "targetKeys": "PROJECT",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "PROJECT",
            "targetObject": "TRANSFERMSG",
            "parentKeys": "PROJECT",
            "targetKeys": "TOPROJECT",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "COMMTEMPLATE",
            "targetObject": "PROJECT",
            "parentKeys": "TEMPLATEID",
            "targetKeys": "SENDMSG",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PROJECT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 159",
            "longDescription": null
        },
        {
            "objectName": "PRODUCT",
            "targetObject": "PROJECT",
            "parentKeys": "PRODUCT",
            "targetKeys": "PRODUCT",
            "relNum": null,
            "status": "UNVERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROJECT",
            "required": true,
            "persistent": true,
            "title": "Project",
            "remarks": "Project ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Project Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCT",
            "required": true,
            "persistent": true,
            "title": "Product",
            "remarks": "Product this Project is a part of.",
            "sameAsAttribute": "PRODUCT",
            "sameAsObject": "PRODUCT"
        },
        {
            "attributeName": "DISABLED",
            "required": true,
            "persistent": true,
            "title": "Disabled",
            "remarks": "Is this project disabled for new messages and scripts?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOMSG",
            "required": true,
            "persistent": true,
            "title": "Automated Message Update",
            "remarks": "Automated Message Update",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGSOURCE",
            "required": false,
            "persistent": true,
            "title": "Message Source",
            "remarks": "Where in source is the message file to update?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGSOURCE2",
            "required": false,
            "persistent": true,
            "title": "2nd Msg Source",
            "remarks": "Where in Source is a 2nd file to update?",
            "sameAsAttribute": "MSGSOURCE",
            "sameAsObject": "PROJECT"
        },
        {
            "attributeName": "AUTOSCRIPT",
            "required": true,
            "persistent": true,
            "title": "Automated Script Testing",
            "remarks": "Is there automated testing of scripts?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FULLRELEASE",
            "required": true,
            "persistent": true,
            "title": "Full Release",
            "remarks": "Is this project a full Release, versus a patch?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROJECTPATH",
            "required": false,
            "persistent": true,
            "title": "Project Path",
            "remarks": "Path to the Project in PVCS",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGLOCKUSER",
            "required": false,
            "persistent": true,
            "title": "Message Lock User",
            "remarks": "email of the person that has the message file locked.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MSGUPDATED",
            "required": false,
            "persistent": true,
            "title": "Date of Last Message File Update",
            "remarks": "When was the message file last updated?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELEASE",
            "required": false,
            "persistent": true,
            "title": "Release",
            "remarks": "Release this project is related to",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDMSG",
            "required": false,
            "persistent": true,
            "title": "Send Message",
            "remarks": "Template used to send messages",
            "sameAsAttribute": "TEMPLATEID",
            "sameAsObject": "COMMTEMPLATE"
        },
        {
            "attributeName": "RELEASED",
            "required": true,
            "persistent": true,
            "title": "Released",
            "remarks": "Has this project been released?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROJECTID",
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
    "incomingRelationships": [
        {
            "name": "PROJECT",
            "source": "PRODUCT",
            "remarks": "Projects for this product",
            "whereClause": "product = :product",
            "cardinality": null
        }
    ]
}