mos = {
    "objectName": "WORKZONE",
    "className": "com.ibm.tivoli.maximo.workzone.WorkZoneSet",
    "description": "Work Zone",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "WORKZONEID",
    "primaryKeyColumns": [
        "WORKZONE",
        "ORGID"
    ],
    "logicalRelationships": [
        {
            "objectName": "WORKZONE",
            "targetObject": "AMCREWWORKZONE",
            "parentKeys": "WORKZONE, ORGID",
            "targetKeys": "WORKZONE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Zone",
            "longDescription": null
        },
        {
            "objectName": "WORKZONE",
            "targetObject": "ASSETWORKZONE",
            "parentKeys": "WORKZONE, ORGID",
            "targetKeys": "WORKZONE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Work Zone",
            "longDescription": null
        },
        {
            "objectName": "WORKZONE",
            "targetObject": "LABORWORKZONE",
            "parentKeys": "WORKZONE, ORGID",
            "targetKeys": "WORKZONE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Work Zone",
            "longDescription": null
        },
        {
            "objectName": "WORKZONE",
            "targetObject": "LOCATIONWORKZONE",
            "parentKeys": "WORKZONE, ORGID",
            "targetKeys": "WORKZONE, ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location Work Zone",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "WORKZONE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "WORKZONE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WORKZONE",
            "required": true,
            "persistent": true,
            "title": "Work Zone",
            "remarks": "Identifies the area in which a labor record or crew performs work. You can define more than one work zone for a labor record or crew. This value must be unique within an organization.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the work zone.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Work Zone Type",
            "remarks": "The type of the work zone",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The name of the organization that is associated with this work zone.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "WORKZONEID",
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
    "outgoingRelationships": [
        {
            "name": "AMCREWWORKZONE",
            "target": "AMCREWWORKZONE",
            "remarks": "Relationship from workzone to AMCREWWORKZONE",
            "whereClause": "workzone=:workzone and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "DEFAULTCREWZONE",
            "target": "AMCREWWORKZONE",
            "remarks": "Relationship to find the default crew for the workzone",
            "whereClause": "workzone=:workzone and orgid=:orgid and defaultzone=:yes",
            "cardinality": null
        },
        {
            "name": "ASSETWORKZONE",
            "target": "ASSETWORKZONE",
            "remarks": "Relationship from workzone to assetworkzone",
            "whereClause": "workzone=:workzone and type=:type and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "DEFAULTLABORZONE",
            "target": "LABORWORKZONE",
            "remarks": "Relationship to find the default labor work zone",
            "whereClause": "workzone=:workzone and orgid=:orgid and defaultzone=:yes",
            "cardinality": null
        },
        {
            "name": "LABORWORKZONE",
            "target": "LABORWORKZONE",
            "remarks": "Relationship from workzone to laborworkzone",
            "whereClause": "workzone=:workzone and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LOCATIONWORKZONE",
            "target": "LOCATIONWORKZONE",
            "remarks": "Relationship from locationworkzone to workzone",
            "whereClause": "workzone=:workzone and type=:type and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "WORKZONE",
            "source": "AMCREWWORKZONE",
            "remarks": "Relationship from AMCREWWORKZONE to workzone",
            "whereClause": "workzone=:workzone and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WORKZONE",
            "source": "ASSETWORKZONE",
            "remarks": "Relationship from assetworkzone to workzone",
            "whereClause": "workzone=:workzone and type=:type and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WORKZONE",
            "source": "LABORWORKZONE",
            "remarks": "Relationship from laborworkzone to workzone",
            "whereClause": "workzone=:workzone and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WORKZONE",
            "source": "LOCATIONWORKZONE",
            "remarks": "Relationship from locationworkzone to workzone",
            "whereClause": "workzone=:workzone and type=:type and orgid=:orgid",
            "cardinality": null
        }
    ]
}