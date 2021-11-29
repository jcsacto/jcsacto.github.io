mos = {
    "objectName": "QUALCRAFTSKILL",
    "className": "psdi.app.qual.QualCraftSkillSet",
    "description": "Qualification Crafts and Skills",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "QUALCRAFTSKILLID",
    "primaryKeyColumns": [
        "ORGID",
        "QUALIFICATIONID",
        "CRAFT",
        "SKILLLEVEL"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CRAFT",
            "targetObject": "QUALCRAFTSKILL",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "QUALCRAFTSKILL",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "QUALCRAFTSKILL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "QUALCRAFTSKILL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "QUALIFICATION",
            "targetObject": "QUALCRAFTSKILL",
            "parentKeys": "ORGID, QUALIFICATIONID",
            "targetKeys": "ORGID, QUALIFICATIONID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Qualification",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "QUALIFICATIONID",
            "required": true,
            "persistent": true,
            "title": "Qualification",
            "remarks": "Qualification",
            "sameAsAttribute": "QUALIFICATIONID",
            "sameAsObject": "QUALIFICATION"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CRAFT",
            "required": true,
            "persistent": true,
            "title": "Craft",
            "remarks": "Identifier of the craft. Entering a craft code in this field associates the qualification record with this craft.",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "The level of skill of this particular craft.",
            "sameAsAttribute": "SKILLLEVEL",
            "sameAsObject": "CRAFTSKILL"
        },
        {
            "attributeName": "QUALCRAFTSKILLID",
            "required": true,
            "persistent": true,
            "title": "QUALCRAFTSKILLID",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship to the CraftSkill table where laborcode, skilllevel, and orgid match. (laborcraftrates.laborcode=labor.laborcode and laborcraftrates.orgid = labor.orgid.)  This will return 0 or more objects.",
            "whereClause": "craft=:craft and orgid=:orgid and (skilllevel=:skilllevel or (skilllevel is null and (:skilllevel is null or :skilllevel='')))",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "QUALCRAFTSKILL",
            "source": "AMCREWQUAL",
            "remarks": "Relationship between AMCREWQUAL and QUALCRAFTSKILL tables.",
            "whereClause": "qualificationid = :qualificationid and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "QUALCRAFTSKILL",
            "source": "AMCTQUAL",
            "remarks": "Relationship to the QualCraftSkill table.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "QUALCRAFT",
            "source": "QUALIFICATION",
            "remarks": "Relationship to the QualCraftSkill table where qualificationid and orgid match. (qualcraftskill.qualificationid=qualification.qualificationid and qualcraftskill.orgid=qualification.orgid.)  This will return 0 or more objects.",
            "whereClause": "qualificationid=:qualificationid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}