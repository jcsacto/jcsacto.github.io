mos = {
    "objectName": "WOHAZARDPREC",
    "className": "psdi.app.workorder.WoHazardPrecSet",
    "description": "Precaution mitigating a specific hazard for a WO.",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WOHAZARDPRECID",
    "primaryKeyColumns": [
        "SITEID",
        "WONUM",
        "HAZARDID",
        "PRECAUTIONID",
        "WOSAFETYDATASOURCE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "HAZARD",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "ORGID, HAZARDID",
            "targetKeys": "ORGID, HAZARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Hazard applied to Work Order",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "SITE",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WOHAZARD",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "SITEID, WONUM, HAZARDID, WOSAFETYDATASOURCE",
            "targetKeys": "SITEID, WONUM, HAZARDID, WOSAFETYDATASOURCE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Link between Hazards and Precautions on the Work Order.",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "WOHAZARDPREC",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Safety Hazards and Precautions",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order",
            "remarks": "Identifies the Work Order.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "HAZARDID",
            "required": true,
            "persistent": true,
            "title": "Hazard",
            "remarks": "Identifies a Hazard to working on this Work Order.",
            "sameAsAttribute": "HAZARDID",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "PRECAUTIONID",
            "required": true,
            "persistent": true,
            "title": "Precaution",
            "remarks": "Identifies a precaution required to mitigate the selected hazard on the work order.You can edit this field until the work order is in the status specified in the Edit Rules dialog box of Work Order Options in the Organizations application.",
            "sameAsAttribute": "PRECAUTIONID",
            "sameAsObject": "PRECAUTION"
        },
        {
            "attributeName": "WOSAFETYDATASOURCE",
            "required": true,
            "persistent": true,
            "title": "Source of Safety",
            "remarks": "Identifies the source of the safety information",
            "sameAsAttribute": "WOSAFETYDATASOURCE",
            "sameAsObject": "WOHAZARD"
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
            "attributeName": "PREC10",
            "required": true,
            "persistent": false,
            "title": "Extra 10",
            "remarks": "PREC10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC09",
            "required": false,
            "persistent": false,
            "title": "Extra 9",
            "remarks": "PREC09",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC08",
            "required": false,
            "persistent": false,
            "title": "Extra 8",
            "remarks": "PREC08",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC07",
            "required": false,
            "persistent": false,
            "title": "Extra 7",
            "remarks": "PREC07",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC06",
            "required": false,
            "persistent": false,
            "title": "Extra 6",
            "remarks": "PREC06",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC05",
            "required": false,
            "persistent": false,
            "title": "Extra 5",
            "remarks": "PREC05",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC04",
            "required": false,
            "persistent": false,
            "title": "Extra 4",
            "remarks": "PREC04",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC03",
            "required": false,
            "persistent": false,
            "title": "Extra 3",
            "remarks": "PREC03",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC02",
            "required": false,
            "persistent": false,
            "title": "Extra 2",
            "remarks": "PREC02",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PREC01",
            "required": false,
            "persistent": false,
            "title": "Extra 1",
            "remarks": "PREC01",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOHAZARDPRECID",
            "required": true,
            "persistent": true,
            "title": "WOHAZARDPRECID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Precaution long description",
            "remarks": "The long description of precaution",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "HAZARDPREC",
            "target": "HAZARDPREC",
            "remarks": "Relationship to HazardPrec table. (hazardprec.hazardid = wohazardprec.hazardid and hazardprec.precautionid = wohazardprec.precautionid). The result set will contain zero or one object.",
            "whereClause": "hazardid=:hazardid and precautionid=:precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARD",
            "target": "WOHAZARD",
            "remarks": "Relationship to WoHazard table. (wohazard.wonum = wohazardprec.wonum and wohazard.hazardid = wohazardprec.hazardid). The result set will contain one object.",
            "whereClause": "wonum = :wonum and hazardid = :hazardid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOPRECAUTION",
            "target": "WOPRECAUTION",
            "remarks": "Relationship to WoPrecaution table. (woprecaution.wonum = wohazardprec.wonum and woprecaution.precautionid = wohazardprec.precautionid and woprecaution.wosafetydatasource = wohazardprec.wosafetydatasource). The resulting set will contain one object.",
            "whereClause": "wonum = :wonum and precautionid=:precautionid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "WOHAZARDPREC",
            "source": "HAZARDPREC",
            "remarks": "Relationship to WoHazardPrec table, used to find any workorders having the same hazard and precaution combination (wohazardprec.hazardid = hazardprec.hazardid and wohazardprec.precautionid = hazardprec.precautionid). The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and precautionid = :precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARDPREC",
            "source": "WOHAZARD",
            "remarks": "Relationship to psdi.app.workorder.WoHazardPrec wohazardprec.wonum = wohazard.wonum and hazardid = wohazard.hazardid and ( (wohazardprec.wosafetydatasource = 'WP' and wohazard.wosafetydatasource = 'WP') or (wohazardprec.wosafetydatasource != 'WP' and wohazard.wosafetydatasource != 'WP') ) ). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and hazardid = :hazardid and( (wosafetydatasource = 'WP' and :wosafetydatasource = 'WP') or    (wosafetydatasource != 'WP' and :wosafetydatasource != 'WP') ) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARDPREC",
            "source": "WOPRECAUTION",
            "remarks": "Relationship to psdi.app.workorder.WoHazardPrec (wohazardprec.wonum = woprecaution.wonum and wohazardprec.precautionid = woprecaution.precautionid and wohazardprec.wosafetydatasource = woprecaution.wosafetydatasource). The result set will contain one object.",
            "whereClause": "wonum = :wonum and precautionid=:precautionid and wosafetydatasource = :wosafetydatasource and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARDPREC",
            "source": "WORKORDER",
            "remarks": "Relationship to the WOHazardPrec table, used to find all work order hazard Precautions for a work order. (WOHazardPrec.wonum = workorder.wonum). This resulting set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARDPREC",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to psdi.app.workorder.WoHazardPrec WoHazardPrec} where the owner is a hazard ( wohazardprec.wonum = wosafetylink.wonum and wohazardprec.hazardid = wosafetylink.hazardid and ( (wohazardprec.wosafetydatasource = 'WP' and wosafetylink.wosafetydatasource = 'WP') or (wohazardprec.wosafetydatasource != 'WP' and wosafetylink.wosafetydatasource != 'WP') ) ). The result set will contain zero or more objects. If the owner of this mbo is Workorder and the relationship name is WOSLHAZPRECENABLED with the parent as workorder,\tthen getting this WoHazardPrec set is overridden and the Sql is actually NOT used. See psdi.app.workorder.WoSafetyLink#getMboSet(String).",
            "whereClause": "wonum = :wonum and hazardid = :hazardid and   ( (wosafetydatasource = 'WP' and :wosafetydatasource = 'WP') or (wosafetydatasource != 'WP' and :wosafetydatasource != 'WP') ) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOALLHAZARDPREC",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to WoAllHazardPrec table where the owner is a hazard ( wohazardprec.wonum = wosafetylink.wonum and ( (wohazardprec.wosafetydatasource = 'WP' and wosafetylink.wosafetydatasource = 'WP') or (wohazardprec.wosafetydatasource != 'WP' and wosafetylink.wosafetydatasource != 'WP') ) ). The result set will contain zero or more objects.",
            "whereClause": "wonum = :wonum and   ( (wosafetydatasource = 'WP' and :wosafetydatasource = 'WP') or (wosafetydatasource != 'WP' and :wosafetydatasource != 'WP') ) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}