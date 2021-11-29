mos = {
    "objectName": "CRAFTSKILL",
    "className": "psdi.app.craft.CraftSkillSet",
    "description": "Crafts Skill Level Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CRAFTSKILLID",
    "primaryKeyColumns": [
        "CRAFT",
        "SKILLLEVEL",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "AMCREWLABPOS",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "AMCTCRAFT",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Skill",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "CRAFTRATE",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "JOBLABOR",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "LABORCRAFTRATE",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "LABTRANS",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
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
            "objectName": "CRAFTSKILL",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Extra Capacity Craft Skill Level",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL1, ORGID",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL1, ORGID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 14",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill",
            "longDescription": null
        },
        {
            "objectName": "CRAFTSKILL",
            "targetObject": "WPLABOR",
            "parentKeys": "CRAFT, SKILLLEVEL, ORGID",
            "targetKeys": "CRAFT, SKILLLEVEL, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft Skill Level",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "CRAFT",
            "targetObject": "CRAFTSKILL",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "CRAFTSKILL",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CRAFTSKILL",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CRAFT",
            "required": true,
            "persistent": true,
            "title": "Craft",
            "remarks": "Craft",
            "sameAsAttribute": "CRAFT",
            "sameAsObject": "CRAFT"
        },
        {
            "attributeName": "SKILLLEVEL",
            "required": false,
            "persistent": true,
            "title": "Skill Level",
            "remarks": "The level of skill or expertise in a particular craft.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "RANK",
            "required": true,
            "persistent": true,
            "title": "Skill Level Rank",
            "remarks": "The rank ascribed to a craft's skill level; 1 being the lowest and 5 being the highest.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the craft's skill level.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description Field",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STANDARDRATE",
            "required": false,
            "persistent": false,
            "title": "Standard Rate",
            "remarks": "The standard rate established for a particular skill level.",
            "sameAsAttribute": "STANDARDRATE",
            "sameAsObject": "CRAFTRATE"
        },
        {
            "attributeName": "CRAFTSKILLID",
            "required": true,
            "persistent": true,
            "title": "CRAFTSKILLID",
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
            "name": "CRAFTRATE",
            "target": "CRAFTRATE",
            "remarks": "Relationship to the CraftRate table on craft and skilllevel. (craftrate.craft=craftskill.craft and craftrate.skilllevel=craftskill.skilllevel and craftrate.orgid=craftskill.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and skilllevel=:skilllevel and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTRATESKILL",
            "target": "CRAFTRATE",
            "remarks": "Relationship to the CraftRate table on craftskill. (craftrate.craft=craftskill.craft and craftrate.vendor is null and and craftrate.skilllevel = craftskill.skilllevel and craftrate.orgid=craftskill.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and vendor is null and skilllevel = :skilllevel and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CRAFTSKILL",
            "source": "AMCREWLABOR",
            "remarks": "Relationship between AMCREWLABOR and CRAFTSKILL tables.",
            "whereClause": "craft = :craft and orgid = :orgid and (skilllevel = :skilllevel or skilllevel is null)",
            "cardinality": null
        },
        {
            "name": "AMCREWCRAFTSKILL",
            "source": "AMCREWLABPOS",
            "remarks": "Relationship between AMCREWLABPOS and CRAFTSKILL tables to return only records having CRAFT.ISCREW marked as true.",
            "whereClause": "craft = :craft and craft in (select craft from craft where iscrew = :yes) and orgid = :orgid and (skilllevel = :skilllevel or skilllevel is null)",
            "cardinality": null
        },
        {
            "name": "CRAFTSKILL",
            "source": "AMCREWLABPOS",
            "remarks": "Relationship between AMCREWLABPOS and CRAFTSKILL tables.",
            "whereClause": "craft = :craft and orgid = :orgid and (skilllevel = :skilllevel or skilllevel is null)",
            "cardinality": null
        },
        {
            "name": "CRAFTSKILL",
            "source": "AMCTCRAFT",
            "remarks": "Relationship from AMCTCRAFT to the CRAFTSKILL table.",
            "whereClause": "craft = :craft and orgid=:orgid and ((:skilllevel is null and skilllevel is null) or (:skilllevel is not null and skilllevel=:skilllevel))",
            "cardinality": null
        },
        {
            "name": "CRAFTSKILL",
            "source": "AMCTQUAL",
            "remarks": "Relationship to the CraftSkill table.",
            "whereClause": "craft = :craft and orgid = :orgid and (skilllevel = :skilllevel or (:skilllevel is null and skilllevel is null))",
            "cardinality": null
        },
        {
            "name": "CRAFTSKILL",
            "source": "ASSIGNMENT",
            "remarks": "Relationship to the CRAFTSKILL table for retrieving information about an  assignment's craft.  The resulting set will contain zero or one objects.",
            "whereClause": "craft=:craft and orgid=:orgid and (skilllevel=:skilllevel or (:skilllevel is null and skilllevel is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWCRAFTSKILL",
            "source": "CRAFT",
            "remarks": "Relationship to the craftskill table on craft. (craftskill.craft=craft.craft and craftskill.orgid=craft.orgid and skilllevel is null.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid and skilllevel is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILL",
            "source": "CRAFT",
            "remarks": "Relationship to the CRAFTSKILL table",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILLNOTNULL",
            "source": "CRAFT",
            "remarks": "Relationship to the CraftSkill table on craft. (craftskill.craft=craft.craft and craftskill.skilllevel is not null and craftskill.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and skilllevel is not null and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILL",
            "source": "JOBLABOR",
            "remarks": "Relationship to the Job Labors craftskill record, used to find the craft skill for a given Job Labor.",
            "whereClause": "craft = :craft and orgid=:orgid and (skilllevel=:skilllevel or ((skilllevel is null or skilllevel = '') and (:skilllevel is null or :skilllevel = '')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILL",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the craftskill table to find the description.",
            "whereClause": "craft=:craft and orgid=:orgid and (skilllevel=:skilllevel or ((:skilllevel is null or :skilllevel='') and skilllevel is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILL",
            "source": "LABTRANS",
            "remarks": "Relationship between LABTRANS and CRAFTSKILL tables.",
            "whereClause": "craft = :craft and orgid = :orgid and (skilllevel = :skilllevel or skilllevel is null)",
            "cardinality": null
        },
        {
            "name": "CRAFTSKILL",
            "source": "QUALCRAFTSKILL",
            "remarks": "Relationship to the CraftSkill table where laborcode, skilllevel, and orgid match. (laborcraftrates.laborcode=labor.laborcode and laborcraftrates.orgid = labor.orgid.)  This will return 0 or more objects.",
            "whereClause": "craft=:craft and orgid=:orgid and (skilllevel=:skilllevel or (skilllevel is null and (:skilllevel is null or :skilllevel='')))",
            "cardinality": "UNDEFINED"
        }
    ]
}