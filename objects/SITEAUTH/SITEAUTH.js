mos = {
    "objectName": "SITEAUTH",
    "className": "psdi.app.signature.SiteAuthSet",
    "description": "Site authority for Security Groups",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SITEAUTHID",
    "primaryKeyColumns": [
        "GROUPNAME",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXGROUP",
            "targetObject": "SITEAUTH",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Group Name",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SITEAUTH",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "SITEAUTH",
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
            "attributeName": "GROUPNAME",
            "required": true,
            "persistent": true,
            "title": "Group",
            "remarks": "Group identifier",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "MAXGROUP"
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site to which this security group has access",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEAUTHID",
            "required": true,
            "persistent": true,
            "title": "SITEAUTHID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTHORIZED",
            "required": true,
            "persistent": false,
            "title": "Authorized",
            "remarks": "Indicates whether the logged-on user is allowed to delete this SiteAuth record",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXGROUP",
            "target": "MAXGROUP",
            "remarks": "Role that owns this SiteAuth",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Site associated with this SiteAuth",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITEAUTH",
            "target": "SITEAUTH",
            "remarks": "Mbo Framework relationship for building the Where clause for siteid.  The variable represents a list of security group names from the Profile method getGroupsString.",
            "whereClause": "siteid in (select siteid from siteauth where groupname in :1)",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SITEAUTH",
            "source": "MAXGROUP",
            "remarks": "Site authorizations for a specified role",
            "whereClause": "groupname = :groupname",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "SITEAUTH",
            "source": "SITEAUTH",
            "remarks": "Mbo Framework relationship for building the Where clause for siteid.  The variable represents a list of security group names from the Profile method getGroupsString.",
            "whereClause": "siteid in (select siteid from siteauth where groupname in :1)",
            "cardinality": "UNDEFINED"
        }
    ]
}