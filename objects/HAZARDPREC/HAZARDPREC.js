mos = {
    "objectName": "HAZARDPREC",
    "className": "psdi.app.safety.HazardPrecSet",
    "description": "A precaution to mitigate a specific hazard",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "HAZARDPRECID",
    "primaryKeyColumns": [
        "SITEID",
        "HAZARDID",
        "PRECAUTIONID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "HAZARD",
            "targetObject": "HAZARDPREC",
            "parentKeys": "ORGID, HAZARDID",
            "targetKeys": "ORGID, HAZARDID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Hazard",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "HAZARDPREC",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
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
            "objectName": "SITE",
            "targetObject": "HAZARDPREC",
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
            "attributeName": "HAZARDID",
            "required": true,
            "persistent": true,
            "title": "Associated Hazard",
            "remarks": "Identifies the hazard",
            "sameAsAttribute": "HAZARDID",
            "sameAsObject": "HAZARD"
        },
        {
            "attributeName": "PRECAUTIONID",
            "required": true,
            "persistent": true,
            "title": "Precaution",
            "remarks": "Identifies the associated precaution",
            "sameAsAttribute": "PRECAUTIONID",
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
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HAZARDPRECID",
            "required": true,
            "persistent": true,
            "title": "HAZARDPRECID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Precaution long description",
            "remarks": "precaution long description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "HAZARD",
            "target": "HAZARD",
            "remarks": "Relationship to psdi.app.safety.Hazard, used to find the related Hazard (hazard.hazardid = hazardprec.hazardid). The result set will contain one object.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRECAUTION",
            "target": "PRECAUTION",
            "remarks": "Relationship to Precaution table, used to find the related Precaution (precaution.precautionid = hazardprec.precautionid). The result set will contain one object.",
            "whereClause": "precautionid = :precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOHAZARDPREC",
            "target": "WOHAZARDPREC",
            "remarks": "Relationship to WoHazardPrec table, used to find any workorders having the same hazard and precaution combination (wohazardprec.hazardid = hazardprec.hazardid and wohazardprec.precautionid = hazardprec.precautionid). The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and precautionid = :precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "HAZARDPREC",
            "source": "HAZARD",
            "remarks": "Relationship to psdi.app.safety.HazardPrec (hazardprec.hazardid = hazard.hazardid). This is a cross-reference file to the related precautions. The result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARDPREC",
            "source": "PRECAUTION",
            "remarks": "Relationship to HazardPrec table. (hazardprec.precautionid = precaution.precautionid). This is the cross-reference to the related hazards. The result set will contain zero or more objects.",
            "whereClause": "precautionid = :precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARDPREC",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.safety.HazardPrec (hazardprec.hazardid = safetylexicon.hazardid). This is the cross-reference to the related precautions. If hazardid is not null, the result set will contain zero or more objects.",
            "whereClause": "hazardid = :hazardid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARDPREC",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship to HazardPrec table. The Sql is ( hazardprec.hazardid in ( select safetylexicon.hazardid from safetylexicon where safetylexicon.safetylexiconid = splexiconlink.safetylexiconid)). The result set will contain zero or more objects.",
            "whereClause": " hazardid in ( select hazardid from safetylexicon where safetylexiconid = :safetylexiconid and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "HAZARDPREC",
            "source": "WOHAZARDPREC",
            "remarks": "Relationship to HazardPrec table. (hazardprec.hazardid = wohazardprec.hazardid and hazardprec.precautionid = wohazardprec.precautionid). The result set will contain zero or one object.",
            "whereClause": "hazardid=:hazardid and precautionid=:precautionid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}