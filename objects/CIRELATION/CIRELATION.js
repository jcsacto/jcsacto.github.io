mos = {
    "objectName": "CIRELATION",
    "className": "psdi.app.ci.CIRelationSet",
    "description": "Related CIs table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CIRELATIONID",
    "primaryKeyColumns": [
        "SOURCECI",
        "TARGETCI",
        "RELATIONNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "ANCESTORCI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "PARENTCI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "SOURCECI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "ACTCI",
            "targetObject": "CIRELATION",
            "parentKeys": "ACTCINUM",
            "targetKeys": "TARGETCI",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "CIRELATION",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "RELATION",
            "targetObject": "CIRELATION",
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
            "attributeName": "CIRELATIONID",
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
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Last Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date of relationship between CIs",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ANCESTORCI",
            "required": false,
            "persistent": true,
            "title": "Ancestor CI",
            "remarks": "This will identify top level authorized CI in containment tree",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "PARENTCI",
            "required": false,
            "persistent": true,
            "title": "Parent CI",
            "remarks": "Parent Configuration Item",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PARENTCI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find ci for a given parentci",
            "whereClause": "cinum=:parentci",
            "cardinality": "UNDEFINED"
        },
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
            "name": "CIRELATIONHIS",
            "target": "CIRELATIONHIS",
            "remarks": "Relationship to the CIRELATIONHIS table, used to find CIRELATIONHIS records for a given CIRELATION",
            "whereClause": "sourceci=:sourceci and targetci=:targetci and relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETCICLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to get the classification for a given targetci.",
            "whereClause": "classstructureid in (select classstructureid from ci where cinum=:targetci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCECICLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the CLASSSTRUCTURE table, used to get the classification for a given sourceci.",
            "whereClause": "classstructureid in (select classstructureid from ci where cinum=:sourceci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATION",
            "target": "RELATION",
            "remarks": "Relationship to the Relation table, used to find relation for a given relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATIONRULES",
            "target": "RELATIONRULES",
            "remarks": "Relationship to the RelationRules table, used to find relationrules for a given CI relation",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONRELATIONRULE",
            "target": "RELATIONRULES",
            "remarks": "Relationship to the RelationRules table, used to find relationrule for a given relation and sourceci classstructureid and targetci classstructureid",
            "whereClause": "relationnum=:relationnum and sourceclass = (select classstructureid from ci where cinum=:sourceci) and targetclass = (select classstructureid from ci where cinum=:targetci)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "ting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CHILDCI",
            "source": "CI",
            "remarks": "Relationship to the CIRealtion table, used to find child CIs for a given CI.",
            "whereClause": "parentci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDCI",
            "source": "CI",
            "remarks": "Relationship to the CIRelation table, used to find related ci's for a given CI",
            "whereClause": "sourceci=:cinum or targetci=:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RELATEDPARENTCI",
            "source": "CI",
            "remarks": "Relationship to the CIRelation table, used to find parent ci  for a given CI",
            "whereClause": "parentci is not null and (sourceci=:cinum or targetci=:cinum) and parentci <>:cinum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATION",
            "source": "RELATION",
            "remarks": "Relationship to the cirelation table, used to find a CIRELATION record for a given relationship",
            "whereClause": "relationnum=:relationnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CIRELATIONRULE",
            "source": "RELATIONRULES",
            "remarks": "Relationship to the cirelation table, used to find a relation rule for a given relation number",
            "whereClause": "cirelationid in (select cirelationid from cirelation where targetci in ( select cinum from ci where classstructureid =:targetclass) and sourceci in ( select cinum from ci where classstructureid =:sourceclass) and relationnum =:relationnum)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTAINMENTANCESTOR",
            "source": "VIEWWOPMS",
            "remarks": "Relationship to the cirelation table, used to find the current configuration item's ancestor (  (cirelation.sourceci=:cinum or cirelation.targetci=:cinum) and exists (select 1 from relationrules where cirelation.relationnum=relationrules.relationnum and containment=1 and sourceclass = (select classstructureid from ci where cinum=cirelation.sourceci) and targetclass = (select classstructureid from ci where cinum=cirelation.targetci) )  ).  The resulting set will contain more than zero objects if the configuration item is in a containment relationship.",
            "whereClause": "(cirelation.sourceci=:cinum or cirelation.targetci=:cinum) and ancestorci is not null and exists (select 1 from relationrules where cirelation.relationnum=relationrules.relationnum and containment=1 and sourceclass = (select classstructureid from ci where cinum=cirelation.sourceci) and targetclass = (select classstructureid from ci where cinum=cirelation.targetci)  )",
            "cardinality": "UNDEFINED"
        }
    ]
}