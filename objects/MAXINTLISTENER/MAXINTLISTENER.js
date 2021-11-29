mos = {
    "objectName": "MAXINTLISTENER",
    "className": "psdi.iface.app.listener.MaxIntListenerSet",
    "description": "Integration Listener Object",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTLISTENERID",
    "primaryKeyColumns": [
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXINTLISTENER",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXINTLISTENER",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTLISTENER",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTLISTENER",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTLISTENER",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "LISTENERCLASSNAME",
            "required": true,
            "persistent": true,
            "title": "Listener Class Name",
            "remarks": "Listener Class Name",
            "sameAsAttribute": "CLASSNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "User Defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EVENTNAME",
            "required": true,
            "persistent": true,
            "title": "Event",
            "remarks": "Event",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": false,
            "persistent": true,
            "title": "Channel Name",
            "remarks": "Channel Name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": false,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Object Structure",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISINSERT",
            "required": true,
            "persistent": true,
            "title": "Insert",
            "remarks": "Insert",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISUPDATE",
            "required": true,
            "persistent": true,
            "title": "Update",
            "remarks": "Update",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDELETE",
            "required": true,
            "persistent": true,
            "title": "Delete",
            "remarks": "Delete",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXINTLISTENERID",
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