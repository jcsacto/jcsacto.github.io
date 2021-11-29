mos = {
    "objectName": "GLAUTH",
    "className": "psdi.app.signature.GLAuthSet",
    "description": "GL Account authority for Security Groups",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "GLAUTHID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "GLACCOUNTFIELD",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXGROUP",
            "targetObject": "GLAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "GLAUTH",
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
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Group identifier",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "GLACCOUNTFIELD",
            "required": true,
            "persistent": true,
            "title": "GL Component",
            "remarks": "GL Account Field to which this security group has access",
            "sameAsAttribute": "GLACCOUNTFIELD",
            "sameAsObject": "GLCONFIGURE"
        },
        {
            "attributeName": "GLAUTHID",
            "required": true,
            "persistent": true,
            "title": "GLAUTHID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "GLCONFIGURE",
            "target": "GLCONFIGURE",
            "remarks": "GL segment related to this GLAuth",
            "whereClause": "glaccountfield = :glaccountfield",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Role that owns this GLAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "GLAUTH",
            "source": "GLCONFIGURE",
            "remarks": "GLAuths for the specified GL segment",
            "whereClause": "glaccountfield = :glaccountfield and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLAUTHUI",
            "source": "GLCONFIGURE",
            "remarks": "Relationship for GLConfigure to GLAuth when non-persistent attribute Groupname is not null",
            "whereClause": "groupname = :groupname and glaccountfield = :glaccountfield and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "GLAUTH",
            "source": "MAXGROUP",
            "remarks": "GL segment override authorities for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "GLAUTH",
            "source": "ORGANIZATION",
            "remarks": "Relationship to get glauth records for a given organization",
            "whereClause": "orgid = :orgid",
            "cardinality": null
        }
    ]
}