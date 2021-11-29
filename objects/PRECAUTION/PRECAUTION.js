mos = {
    "objectName": "PRECAUTION",
    "className": "psdi.app.safety.PrecautionSet",
    "description": "Work related safety precaution",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PRECAUTIONUID",
    "primaryKeyColumns": [
        "SITEID",
        "PRECAUTIONID"
    ],
    "logicalRelationships": [
        {
            "objectName": "PRECAUTION",
            "targetObject": "HAZARDPREC",
            "parentKeys": "SITEID, PRECAUTIONID",
            "targetKeys": "SITEID, PRECAUTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Precautions for Hazard",
            "longDescription": null
        },
        {
            "objectName": "PRECAUTION",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "SITEID, PRECAUTIONID",
            "targetKeys": "SITEID, PRECAUTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order Precautions",
            "longDescription": null
        },
        {
            "objectName": "PRECAUTION",
            "targetObject": "WOPRECAUTION",
            "parentKeys": "SITEID, PRECAUTIONID",
            "targetKeys": "SITEID, PRECAUTIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Precaution applied to the work order.",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PRECAUTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PRECAUTION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PRECAUTION",
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
            "attributeName": "PRECAUTIONID",
            "required": true,
            "persistent": true,
            "title": "Precaution",
            "remarks": "Identifies the precaution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the precaution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC01",
            "required": false,
            "persistent": true,
            "title": "Extra 1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC02",
            "required": false,
            "persistent": true,
            "title": "Extra 2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC03",
            "required": false,
            "persistent": true,
            "title": "Extra 3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC04",
            "required": false,
            "persistent": true,
            "title": "Extra 4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC05",
            "required": false,
            "persistent": true,
            "title": "Extra 5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC06",
            "required": false,
            "persistent": true,
            "title": "Extra 6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC07",
            "required": false,
            "persistent": true,
            "title": "Extra 7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC08",
            "required": false,
            "persistent": true,
            "title": "Extra 8",
            "remarks": "Extra Field 08",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC09",
            "required": false,
            "persistent": true,
            "title": "Extra 9",
            "remarks": "Extra Field 09",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC10",
            "required": true,
            "persistent": true,
            "title": "Extra 10",
            "remarks": "Extra Field 10",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for The description of the precaution",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRECAUTIONUID",
            "required": true,
            "persistent": true,
            "title": "PRECAUTIONUID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to Doclinks table. (doclinks.keytable = 'PRECAUTION' and doclinks.keycolumn = 'PRECAUTIONID' and doclinks.keyvalue = precaution.precautionid). Used to find associated linked documents. The result set will contain zero or more objects.",
            "whereClause": "ownertable = 'PRECAUTION' and ownerid = :precautionuid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARDPREC",
            "target": "HAZARDPREC",
            "remarks": "Relationship to HazardPrec table. (hazardprec.precautionid = precaution.precautionid). This is the cross-reference to the related hazards. The result set will contain zero or more objects.",
            "whereClause": "precautionid = :precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRECAUTION",
            "target": "WOPRECAUTION",
            "remarks": "Relationship to WoPrecaution table. (woprecaution.precautionid = precaution.precautionid). Used to find workorders having this precaution. The result set will contain zero or more objects.",
            "whereClause": "precautionid = :precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PRECAUTION",
            "source": "HAZARD",
            "remarks": "Relationship to psdi.app.safety.Precaution (precaution.precautionid in (select precautionid from hazardprec where hazardid = hazard.hazardid)). Used to directly access the related precautions. The result set will contain zero or more objects.",
            "whereClause": "precautionid in (select precautionid from hazardprec where hazardid = :hazardid) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRECAUTION",
            "source": "HAZARDPREC",
            "remarks": "Relationship to Precaution table, used to find the related Precaution (precaution.precautionid = hazardprec.precautionid). The result set will contain one object.",
            "whereClause": "precautionid = :precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRECAUTION",
            "source": "WOHAZARD",
            "remarks": "Relationship from wohazard to precaution ",
            "whereClause": "precautionid in (select precautionid from hazardprec where hazardid = :hazardid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRECAUTION",
            "source": "WOPRECAUTION",
            "remarks": "Relationship to psdi.app.safety.Precaution Precaution (precaution.precautionid = woprecaution.precautionid). The result set will contain one object.",
            "whereClause": "precautionid=:precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}