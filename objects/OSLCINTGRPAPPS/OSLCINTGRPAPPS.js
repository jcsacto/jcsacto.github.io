mos = {
    "objectName": "OSLCINTGRPAPPS",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.interaction.OslcInteractionGroupAppsSet",
    "description": "OSLC Interaction Group Application",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCINTGRPAPPSID",
    "primaryKeyColumns": [
        "INTGROUPNAME",
        "APPNAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "OSLCINTGRPAPPS",
            "targetObject": "OSLCINTGRPAPPMENU",
            "parentKeys": "INTGROUPNAME, APPNAME",
            "targetKeys": "INTGROUPNAME, APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Menu",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "APP",
            "targetKeys": "APPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "APPOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application Object",
            "longDescription": null
        },
        {
            "objectName": "MAXRELATIONSHIP",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "PARENT, NAME",
            "targetKeys": "APPOBJECT, RELATIONSHIP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Relationship",
            "longDescription": null
        },
        {
            "objectName": "OSLCINTGROUP",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "INTGROUPNAME",
            "targetKeys": "INTGROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Interaction Group Action",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Change By",
            "longDescription": null
        },
        {
            "objectName": "SIGOPTION",
            "targetObject": "OSLCINTGRPAPPS",
            "parentKeys": "APP, OPTIONNAME",
            "targetKeys": "APPNAME, SIGOPTION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Signature Security Option",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INTGROUPNAME",
            "required": true,
            "persistent": true,
            "title": "The name of the interaction group.",
            "remarks": "Identifies the OSLC interaction group, that is, the interaction between the consumer application and the OSLC provider application.",
            "sameAsAttribute": "INTGROUPNAME",
            "sameAsObject": "OSLCINTGROUP"
        },
        {
            "attributeName": "APPNAME",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "The application that the end user will start the interaction from. ",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "APPOBJECT",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "The main object of the specified application that the mapping can be configured from.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "RELATIONSHIP",
            "required": false,
            "persistent": true,
            "title": "Relationship",
            "remarks": "The object relationship that  associates the application main object with its related OSLC links.",
            "sameAsAttribute": "NAME",
            "sameAsObject": "MAXRELATIONSHIP"
        },
        {
            "attributeName": "SIGOPTION",
            "required": false,
            "persistent": true,
            "title": "Signature Option",
            "remarks": "The signature option that is associated with the push button that launches the interaction from the consumer application. The signature option enables security groups to be granted access to the interaction. The field value matches the interaction name. The value is generated during interaction creation.",
            "sameAsAttribute": "OPTIONNAME",
            "sameAsObject": "SIGOPTION"
        },
        {
            "attributeName": "MENULABEL",
            "required": false,
            "persistent": true,
            "title": "Menu Label",
            "remarks": "The name that is given to the field-level Detail Menu item in the consumer application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TABNAME",
            "required": false,
            "persistent": true,
            "title": "Application Tab",
            "remarks": "The tab that the user interface changes are implemented on. The end user starts the interaction from this tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUTTONLABEL",
            "required": false,
            "persistent": false,
            "title": "Push Button Label",
            "remarks": "The label for the button to be added to the consumer application. The end user clicks the button to start the interaction. You can edit the default label value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BUTTONID",
            "required": false,
            "persistent": true,
            "title": "Application Button",
            "remarks": "The button that the user interface changes are implemented on. The end user starts the interaction from this tab.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "OSLCINTGRPAPPSID",
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
            "name": "APPLICATIONAUTH",
            "target": "APPLICATIONAUTH",
            "remarks": "Display All Application Security Groups Authorized to Read",
            "whereClause": "app=:appname and optionname = 'READ'",
            "cardinality": null
        },
        {
            "name": "OSLCAPPLICATIONAUTH",
            "target": "APPLICATIONAUTH",
            "remarks": "Display All Application Security Groups Authorized to Launch Interaction Group",
            "whereClause": "app=:appname and optionname=:sigoption",
            "cardinality": null
        },
        {
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Relation to get Application Description Name. It will return one row.",
            "whereClause": "app=:appname",
            "cardinality": null
        },
        {
            "name": "MAXOBJECT",
            "target": "MAXOBJECT",
            "remarks": "Relation to get Object Description Name. It will return one row.",
            "whereClause": "objectname=:appobject",
            "cardinality": null
        },
        {
            "name": "ALLMENUTYPE",
            "target": "OSLCAPPLICATION",
            "remarks": "Display all menu types for an Applications",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "OSLCINTGRPAPPMENU",
            "target": "OSLCINTGRPAPPMENU",
            "remarks": "Display all menu types for an Applications",
            "whereClause": "intgroupname=:intgroupname and appname=:appname",
            "cardinality": null
        },
        {
            "name": "SIGOPTION",
            "target": "SIGOPTION",
            "remarks": "Display Signature Option. THis relationship will return one row",
            "whereClause": "optionname=:sigoption",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "OSLCINTGRPAPPS",
            "source": "OSLCINTGROUP",
            "remarks": "Relation to an Interaction Group Application. It will return 0 or more row.",
            "whereClause": "intgroupname=:intgroupname",
            "cardinality": null
        }
    ]
}