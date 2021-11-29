mos = {
    "objectName": "LABORAUTH",
    "className": "psdi.app.signature.LaborAuthSet",
    "description": "The LABORAUTH Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LABORAUTHID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "ORGID",
        "LABORCODE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LABOR",
            "targetObject": "LABORAUTH",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "MAXGROUP",
            "targetObject": "LABORAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LABORAUTH",
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
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Labor Code",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Orgaization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Group",
            "remarks": "Group identifier",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "LABORAUTHID",
            "required": true,
            "persistent": true,
            "title": "LABORAUTHID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "LaborAuth to Labor, will be one record",
            "whereClause": "orgid = :orgid and laborcode = :laborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ORGANIZATION",
            "target": "ORGANIZATION",
            "remarks": "LaborAuth to Organization, will be one record",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "LaborAuth to Person, will be one record",
            "whereClause": "personid in (select personid from labor where orgid = :orgid and laborcode = :laborcode)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LABORAUTH",
            "source": "MAXGROUP",
            "remarks": "Labor authorizations for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        }
    ]
}