mos = {
    "objectName": "MAXINTOBJAPP",
    "className": "psdi.iface.app.intobject.MaxIntObjectAppSet",
    "description": "Object Structure Application Association",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXINTOBJAPPID",
    "primaryKeyColumns": [
        "APP",
        "INTOBJECTNAME",
        "USEWITH"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXAPPS",
            "targetObject": "MAXINTOBJAPP",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXINTOBJAPP",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXINTOBJAPP",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PRIMARYOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Primary Object",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXINTOBJAPP",
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
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Application",
            "remarks": "Application Name",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Structure",
            "remarks": "Object Structure",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "USEWITH",
            "required": true,
            "persistent": true,
            "title": "Use With",
            "remarks": "Use With",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDEFAULT",
            "required": true,
            "persistent": true,
            "title": "Is Default",
            "remarks": "is Default",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXCOUNT",
            "required": false,
            "persistent": true,
            "title": "Maximum Count",
            "remarks": "Maximum Count",
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
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "User Defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILETYPE",
            "required": true,
            "persistent": true,
            "title": "File Type",
            "remarks": "Valid file types are XML and Flat File. A flat file is a text representation of the corresponding Maximo interface table. If you select Flat File, enter a value in the Delimiter field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRIMARYOBJECT",
            "required": false,
            "persistent": true,
            "title": "Primary Object",
            "remarks": "Identifies Primary Object for the Object Structure for Application Export/Import",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "MAXINTOBJAPPID",
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
            "name": "MAXAPPS",
            "target": "MAXAPPS",
            "remarks": "Get Application description",
            "whereClause": "app=:app",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "Relationship to get Object Structure description. It will return one row.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXINTOBJAPP",
            "source": "MAXINTOBJECT",
            "remarks": "Get all applications for this Object Structure. This relationship will return zero or more rows.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJAPPEXPORT",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to Show all Applications Available for Data Export. It will return 0 or more rows",
            "whereClause": "intobjectname = :intobjectname and usewith in (select value from synonymdomain where domainid='APPINTUSEWITH' and maxvalue = 'APPEXPORT')",
            "cardinality": null
        },
        {
            "name": "MAXINTOBJAPPIMPORT",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to Show all Applications Available for Data Import. It will return 0 or more rows",
            "whereClause": "intobjectname = :intobjectname and usewith in (select value from synonymdomain where domainid='APPINTUSEWITH' and maxvalue = 'APPIMPORT')",
            "cardinality": null
        }
    ]
}