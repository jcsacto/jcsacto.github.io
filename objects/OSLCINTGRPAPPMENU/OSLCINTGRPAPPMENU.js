mos = {
    "objectName": "OSLCINTGRPAPPMENU",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcInteractionGroupAppMenuSet",
    "description": "OSLC Interaction Group Application Menus",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCINTGRPAPPMENUID",
    "primaryKeyColumns": [
        "INTGROUPNAME",
        "APPNAME",
        "ATTRIBUTEID",
        "MENUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "OSLCINTGRPAPPMENU",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Starting Application",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTGROUP",
            "targetObject": "OSLCINTGRPAPPMENU",
            "parentKeys": "INTGROUPNAME",
            "targetKeys": "INTGROUPNAME",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTGRPAPPS",
            "targetObject": "OSLCINTGRPAPPMENU",
            "parentKeys": "INTGROUPNAME, APPNAME",
            "targetKeys": "INTGROUPNAME, APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Menu",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTGRPAPPMENU",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Last Changed By",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTGROUPNAME",
            "required": true,
            "persistent": true,
            "title": "The name of the interaction group.",
            "remarks": "The name of the interaction group.",
            "sameAsAttribute": "INTGROUPNAME",
            "sameAsObject": "OSLCINTGROUP"
        },
        {
            "attributeName": "APPNAME",
            "required": false,
            "persistent": true,
            "title": "Application",
            "remarks": "The application that the end user will start the interaction from. ",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "MENUID",
            "required": false,
            "persistent": true,
            "title": "Menu ID",
            "remarks": "The field-level Detail Menu ID that is modified in the consumer application to support the execution of a query for an interaction group.",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "ORIGMENUID",
            "required": false,
            "persistent": true,
            "title": "Original Menu ID",
            "remarks": "The ID for the field-level Detail Menu item in the consumer application before support for the execution of an interaction group query is added.",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "ATTRIBUTEID",
            "required": false,
            "persistent": true,
            "title": "Attribute ID",
            "remarks": "The attribute ID in the consumer application for the field-level Detail Menu item that is modified.",
            "sameAsAttribute": "ID",
            "sameAsObject": "MAXLABELS"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": false,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "The attribute name in the consumer application for the field-level Detail Menu item that is modified.",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCINTGRPAPPMENUID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "OSLCINTGRPAPPMENU",
            "source": "OSLCINTGRPAPPS",
            "remarks": "Display all menu types for an Applications",
            "whereClause": "intgroupname=:intgroupname and appname=:appname",
            "cardinality": null
        }
    ]
}