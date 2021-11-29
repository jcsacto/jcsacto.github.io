mos = {
    "objectName": "CRAFT",
    "className": "psdi.app.craft.CraftSet",
    "description": "Craft",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "CRAFTID",
    "primaryKeyColumns": [
        "CRAFT",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "CRAFT",
            "targetObject": "AMCREWLABOR",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "AMCREWLABPOS",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "AMCREWWOLAB",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "AMCTCRAFT",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Type Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "ASSIGNMENT",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "CRAFTRATE",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
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
            "objectName": "CRAFT",
            "targetObject": "JOBLABOR",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "LABORCRAFTRATE",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "LABTRANS",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "PPCRAFTRATE",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "PPLABORRATE",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
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
            "objectName": "CRAFT",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Scheduler Extra Capacity Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "SKDEXTRACAPCRAFTVIEW",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID1",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 15",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        },
        {
            "objectName": "CRAFT",
            "targetObject": "WPLABOR",
            "parentKeys": "CRAFT, ORGID",
            "targetKeys": "CRAFT, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Craft",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "CRAFT",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CRAFT",
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
            "remarks": "Identifier of the craft record. This field must be unique within an organization. When you save a craft record, this field becomes read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The name of the organization associated with this craft record.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Name or description of the craft.",
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
            "attributeName": "CRAFTID",
            "required": true,
            "persistent": true,
            "title": "CRAFTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STANDARDRATE",
            "required": false,
            "persistent": false,
            "title": "Standard Rate",
            "remarks": "The standard rate established for a craft irrespective of the skill level.",
            "sameAsAttribute": "STANDARDRATE",
            "sameAsObject": "CRAFTRATE"
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
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Ref ID",
            "remarks": "External Ref ID",
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
            "attributeName": "ISCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Specifies whether the craft can be used in Crew applications and Work Order Tracking applications. If the check box is selected, the craft can be used. If the check box is cleared, the craft cannot be used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WORKZONETYPE",
            "required": false,
            "persistent": true,
            "title": "Work Zone Type",
            "remarks": "The type of the work zone",
            "sameAsAttribute": "TYPE",
            "sameAsObject": "WORKZONE"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREWLABPOS",
            "target": "AMCREWLABPOS",
            "remarks": "Relationship between CRAFT and AMCREWLABPOS tables.",
            "whereClause": "craft = :craft and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCTCRAFT",
            "target": "AMCTCRAFT",
            "remarks": "Relationship between CRAFT and AMCTCRAFT tables.",
            "whereClause": "craft = :craft and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "CRAFTRATE",
            "target": "CRAFTRATE",
            "remarks": "Relationship to the CraftRate table on craft. (craftrate.craft=craft.craft and craftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTRATENOTNULL",
            "target": "CRAFTRATE",
            "remarks": "Relationship to the CraftRate table on craft. (craftrate.craft=craft.craft and craftrate.vendor is not null and craftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid and vendor  is not null and (contractnum is null or (contractnum is not null and contractnum in (select contractnum from contract where revisionnum = craftrate.revisionnum and historyflag = :no)))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWCRAFTRATE",
            "target": "CRAFTRATE",
            "remarks": "Relationship to the craftrate table on craft. (craftrate.craft=craft.craft and craftrate.orgid=craft.orgid and skilllevel is null and vendor is null.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid and skilllevel is null and vendor is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWCRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship to the craftskill table on craft. (craftskill.craft=craft.craft and craftskill.orgid=craft.orgid and skilllevel is null.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid and skilllevel is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship to the CRAFTSKILL table",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFTSKILLNOTNULL",
            "target": "CRAFTSKILL",
            "remarks": "Relationship to the CraftSkill table on craft. (craftskill.craft=craft.craft and craftskill.skilllevel is not null and craftskill.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and skilllevel is not null and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the Doclink table, used to find all document records for a given craft) This will return 0 or more objects",
            "whereClause": "ownertable = 'CRAFT' and ownerid = :craftid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORCRAFTRATE",
            "target": "LABORCRAFTRATE",
            "remarks": "Relationship to the LaborCraftRate table on craft. (laborcraftrate.craft = craft.craft and laborcraftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PPCRAFTRATE",
            "target": "PPCRAFTRATE",
            "remarks": "Relationship to the PPCRAFTRATE table on craft. (ppcraftrate.craft=craft.craft and ppcraftrate.orgid=craft.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CRAFT",
            "source": "AMCREWLABOR",
            "remarks": "Relationship to CRAFT table to allow subsequent retrieval of craft related data such as craftrate",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "CRAFTENABLECREW",
            "source": "AMCREWLABOR",
            "remarks": "Relationship to find crew enabled crafts",
            "whereClause": "craft=:craft and orgid=:orgid and iscrew=:yes",
            "cardinality": null
        },
        {
            "name": "CRAFT",
            "source": "ASSIGNMENT",
            "remarks": "Relationship to CRAFT table to allow subsequent retrieval of craft related data such as craftrate",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "AMCTCRAFT",
            "source": "CRAFTRATE",
            "remarks": "Relationship to Craft.",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "CRAFT",
            "source": "JOBLABOR",
            "remarks": "Relationship to the Job Labors craft record, used to find the craft set for a given Job Labor.",
            "whereClause": "craft = :craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFT",
            "source": "LABORCRAFTRATE",
            "remarks": "Relationship to the Craft table on LaborCraftRate. (craft.craft = :laborcraftrate.craft  and craft.orgid=laborcraftrate.orgid.)  This will return 0 or more objects ",
            "whereClause": "craft=:craft and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CRAFT",
            "source": "LABTRANS",
            "remarks": "Relationship from Labtrans to Craft",
            "whereClause": "craft = :craft and orgid = :orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}