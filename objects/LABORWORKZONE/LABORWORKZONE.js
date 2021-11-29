mos = {
    "objectName": "LABORWORKZONE",
    "className": "com.ibm.tivoli.maximo.workzone.LaborWorkZoneSet",
    "description": "Labors that belong to a workzone",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LABORWORKZONEID",
    "primaryKeyColumns": [
        "LABORCODE",
        "ORGID",
        "WORKZONE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LABOR",
            "targetObject": "LABORWORKZONE",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LABORWORKZONE",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
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
        }
    ],
    "columns": [
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identifies the labor record. This field must be unique within the work zone.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "WORKZONE",
            "required": true,
            "persistent": true,
            "title": "Work Zone",
            "remarks": "Identifies the area in which a labor record performs work. You can define more than one work zone for a labor record, but you cannot define the same work zone multiple times for a single labor record.",
            "sameAsAttribute": "WORKZONE",
            "sameAsObject": "WORKZONE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization the workzone is in",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "DEFAULTZONE",
            "required": false,
            "persistent": true,
            "title": "Default",
            "remarks": "Indicates that this is the default work zone for a labor record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORWORKZONEID",
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
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship to find the amcrew",
            "whereClause": "amcrew=:amcrew and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship from laborworkzone to labor",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "WORKZONE",
            "target": "WORKZONE",
            "remarks": "Relationship from laborworkzone to workzone",
            "whereClause": "workzone=:workzone and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABORWORKZONE",
            "source": "LABOR",
            "remarks": "Relationship for all the workzones the labor is a part of",
            "whereClause": "laborcode=:laborcode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "DEFLABORWORKZONE",
            "source": "LABOR",
            "remarks": "Relationship to the default workzone the labor is a part of",
            "whereClause": "laborcode=:laborcode and orgid=:orgid and defaultzone=1",
            "cardinality": null
        },
        {
            "name": "DEFAULTLABORZONE",
            "source": "WORKZONE",
            "remarks": "Relationship to find the default labor work zone",
            "whereClause": "workzone=:workzone and orgid=:orgid and defaultzone=:yes",
            "cardinality": null
        },
        {
            "name": "LABORWORKZONE",
            "source": "WORKZONE",
            "remarks": "Relationship from workzone to laborworkzone",
            "whereClause": "workzone=:workzone and orgid=:orgid",
            "cardinality": null
        }
    ]
}