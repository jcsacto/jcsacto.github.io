mos = {
    "objectName": "CIRELATIONHIS",
    "className": "psdi.app.ci.CIRelationHisSet",
    "description": "CI Reletionship History Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CIRELATIONHISID",
    "primaryKeyColumns": [
        "SOURCECI",
        "TARGETCI",
        "RELATIONNUM",
        "STARTDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATIONHIS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "SOURCECI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 12",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATIONHIS",
            "parentKeys": "ACTCINUM",
            "targetKeys": "TARGETCI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 13",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CIRELATIONHIS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "CIRELATIONHIS",
            "parentKeys": "RELATIONNUM",
            "targetKeys": "RELATIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship Information",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "CIRELATIONHISID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCECI",
            "required": true,
            "persistent": true,
            "title": "Source CI",
            "remarks": "Identifier of the source CI that has a relation with the target CI",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "TARGETCI",
            "required": true,
            "persistent": true,
            "title": "Target CI",
            "remarks": "Identifier of the target CI that has a relation with the source CI",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "RELATIONNUM",
            "required": true,
            "persistent": true,
            "title": "Relation",
            "remarks": "Identifier of the relationship that exists between the source CI and target CI",
            "sameAsAttribute": "RELATIONNUM",
            "sameAsObject": "RELATION"
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": true,
            "title": "Start Date",
            "remarks": "The Date when the relation between the two CIs were established",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "End Date",
            "remarks": "The Date when the relation between the two CIs were terminated",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Last Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "SOURCECI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find ci for a given sourceci",
            "whereClause": "cinum=:sourceci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETCI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find ci for a given targetci",
            "whereClause": "cinum=:targetci",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "target": "RELATION",
            "remarks": "Relationship to the RELATION table, used to find relation for a given CIRELATIONHIS relation ",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CIRELATIONHIS",
            "source": "CI",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find cirelationhis records for a given CI",
            "whereClause": "sourceci=:cinum or targetci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHISSOURCE",
            "source": "CI",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find sourceci's for a given CI ",
            "whereClause": "targetci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHISSOURCEASOF",
            "source": "CI",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find sourceci's for a given CI with asofdate",
            "whereClause": "targetci=:cinum and ((enddate is not null and :asofdate between startdate and enddate) or (enddate is null and startdate <=:asofdate))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHISTARGET",
            "source": "CI",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find targetci's for a given CI ",
            "whereClause": "sourceci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHISTARGETASOF",
            "source": "CI",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find targetci's for a given CI with asofdate",
            "whereClause": "sourceci=:cinum and ((enddate is not null and :asofdate between startdate and enddate) or (enddate is null and startdate <=:asofdate))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHIS",
            "source": "CIRELATION",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find CIRELATIONHIS records for a given CIRELATION",
            "whereClause": "sourceci=:sourceci and targetci=:targetci and relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONHIS",
            "source": "RELATION",
            "remarks": "Relationship to the cirelationhis table, used to find CIRELATIONHIS record for a given relationship",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        }
    ]
}