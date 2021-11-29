mos = {
    "objectName": "WOPRECAUTION",
    "className": "psdi.app.workorder.WoPrecautionSet",
    "description": "Work related safety precaution for a work order.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOPRECAUTIONID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "PRECAUTIONID",
        "WOSAFETYDATASOURCE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "WOPRECAUTION",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOPRECAUTION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
        },
        {
            "objectName": "SITE",
            "targetObject": "WOPRECAUTION",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOPRECAUTION",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "The Work Order''s safety precautions.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PRECAUTIONID",
            "required": true,
            "persistent": true,
            "title": "Precaution ID",
            "remarks": "Identifies a safety Precaution required for working on this Work Order.",
            "sameAsAttribute": "PRECAUTIONID",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the precaution. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOSAFETYDATASOURCE",
            "required": true,
            "persistent": true,
            "title": "Safety Data Source",
            "remarks": "Identifies the source of the safety information",
            "sameAsAttribute": "WOSAFETYDATASOURCE",
            "sameAsObject": "WOHAZARD"
        },
        {
            "attributeName": "PREC01",
            "required": false,
            "persistent": true,
            "title": "Extra 1",
            "remarks": "Extra Field 01",
            "sameAsAttribute": "PREC01",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "PREC02",
            "required": false,
            "persistent": true,
            "title": "Extra 2",
            "remarks": "Extra Field 02",
            "sameAsAttribute": "PREC02",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "PREC03",
            "required": false,
            "persistent": true,
            "title": "Extra 3",
            "remarks": "Extra Field 03",
            "sameAsAttribute": "PREC03",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "PREC04",
            "required": false,
            "persistent": true,
            "title": "Extra 4",
            "remarks": "Extra Field 04",
            "sameAsAttribute": "PREC04",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "PREC05",
            "required": false,
            "persistent": true,
            "title": "Extra 5",
            "remarks": "Extra Field 05",
            "sameAsAttribute": "PREC05",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "PREC06",
            "required": false,
            "persistent": true,
            "title": "Extra 6",
            "remarks": "Extra Field 06",
            "sameAsAttribute": "PREC06",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "PREC07",
            "required": false,
            "persistent": true,
            "title": "Extra 7",
            "remarks": "Extra Field 07",
            "sameAsAttribute": "PREC07",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "PREC08",
            "required": false,
            "persistent": true,
            "title": "Extra 8",
            "remarks": "Extra Field 08",
            "sameAsAttribute": "PREC08",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "PREC09",
            "required": false,
            "persistent": true,
            "title": "Extra 9",
            "remarks": "Extra Field 09",
            "sameAsAttribute": "PREC09",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "PREC10",
            "required": true,
            "persistent": true,
            "title": "Extra 10",
            "remarks": "Extra Field 10",
            "sameAsAttribute": "PREC10",
            "sameAsObject": "PRECAUTION"
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
            "attributeName": "WOPRECAUTIONID",
            "required": true,
            "persistent": true,
            "title": "WOPRECAUTIONID",
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
            "name": "PRECAUTION",
            "target": "PRECAUTION",
            "remarks": "Relationship to psdi.app.safety.Precaution Precaution (precaution.precautionid = woprecaution.precautionid). The result set will contain one object.",
            "whereClause": "precautionid=:precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARDPREC",
            "target": "WOHAZARDPREC",
            "remarks": "Relationship to psdi.app.workorder.WoHazardPrec (wohazardprec.wonum = woprecaution.wonum and wohazardprec.precautionid = woprecaution.precautionid and wohazardprec.wosafetydatasource = woprecaution.wosafetydatasource). The result set will contain one object.",
            "whereClause": "wonum = :wonum and precautionid=:precautionid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOPRECAUTION",
            "source": "PRECAUTION",
            "remarks": "Relationship to WoPrecaution table. (woprecaution.precautionid = precaution.precautionid). Used to find workorders having this precaution. The result set will contain zero or more objects.",
            "whereClause": "precautionid = :precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRECAUTION",
            "source": "WOHAZARD",
            "remarks": "Relationship to psdi.app.workorder.WoPrecaution WoPrecaution. (woprecaution.wonum = wohazard.wonum and precautionid in (select precautionid from wohazardprec where wonum = wohazard.wonum and hazardid = wohazard.hazardid and\twohazardprec.wosafetydatasource = woprecaution.wosafetydatasource and\t( (wohazardprec.wosafetydatasource = 'WP' and wohazard.wosafetydatasource = 'WP') or (wohazardprec.wosafetydatasource != 'WP' and wohazard.wosafetydatasource != 'WP')))). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and precautionid in (select precautionid from wohazardprec where wonum = :wonum and hazardid = :hazardid and siteid=:siteid and wohazardprec.wosafetydatasource = woprecaution.wosafetydatasource and  ( (wohazardprec.wosafetydatasource = 'WP' and :wosafetydatasource = 'WP') or  (wohazardprec.wosafetydatasource != 'WP' and :wosafetydatasource != 'WP') )) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRECAUTION",
            "source": "WOHAZARDPREC",
            "remarks": "Relationship to WoPrecaution table. (woprecaution.wonum = wohazardprec.wonum and woprecaution.precautionid = wohazardprec.precautionid and woprecaution.wosafetydatasource = wohazardprec.wosafetydatasource). The resulting set will contain one object.",
            "whereClause": "wonum = :wonum and precautionid=:precautionid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRECAUTION",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOPrecaution table, used to find all workorder precautions for a work order. (WOPrecaution.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRECAUTIONS",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.workorder.WoPrecaution where the owner is a hazard (woprecaution.wonum = wosafetylink.wonum and woprecaution.precautionid in (select wohazardprec.precautionid from wohazardprec where wohazardprec.wonum = wosafetylink.wonum and wohazardprec.hazardid = wosafetylink.hazardid)). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and precautionid in (select precautionid from wohazardprec where wonum = :wonum and hazardid = :hazardid and siteid=:siteid) and siteid=:siteid ",
            "cardinality": "UNDEFINED"
        }
    ]
}