mos = {
    "objectName": "PLUSCPMEXTDATE",
    "className": "psdi.plusc.app.pm.PlusCPMExtDateSet",
    "description": "Capture the PM number, the previous Extend Date.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCPMEXTDATEID",
    "primaryKeyColumns": [
        "PLUSCPMEXTDATEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, MASTERPMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSCPMEXTDATE",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PMNUM",
            "required": true,
            "persistent": true,
            "title": "PM",
            "remarks": "PM Number",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "MASTERPMNUM",
            "required": false,
            "persistent": true,
            "title": "Master PM",
            "remarks": "Master PM Number",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "EXTDATE",
            "required": true,
            "persistent": true,
            "title": "Extend Date",
            "remarks": "Extend Date",
            "sameAsAttribute": "EXTDATE",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "PREVEXTDATE",
            "required": true,
            "persistent": true,
            "title": "Previous Extend Date",
            "remarks": "Previous Extend Date",
            "sameAsAttribute": "EXTDATE",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "Displays the name of ther user signed in when the change was made.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Displays the date when the change was made.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "HISTORY",
            "required": true,
            "persistent": true,
            "title": "History Flag",
            "remarks": "History Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMMENTS",
            "required": false,
            "persistent": true,
            "title": "Extend Date Comment",
            "remarks": "Extend Date Comment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "SITE",
            "remarks": "Identifies the site.",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PLUSCPMEXTDATEID",
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
            "attributeName": "COMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Extend Date Comment Long description",
            "remarks": "Long Description for Extend Date Comment",
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
    "outgoingRelationships": [
        {
            "name": "PM",
            "target": "PM",
            "remarks": null,
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCPMEXTDATE",
            "source": "MASTERPM",
            "remarks": null,
            "whereClause": "masterpmnum=:masterpmnum and history = :no",
            "cardinality": null
        },
        {
            "name": "PLUSCPMEXTDATE",
            "source": "PM",
            "remarks": null,
            "whereClause": "pmnum=:pmnum and siteid=:siteid and history = :no",
            "cardinality": null
        },
        {
            "name": "PLUSCPMEXTDATEHISTORY",
            "source": "PM",
            "remarks": "Relationship to recover the extended date history",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": null
        }
    ]
}