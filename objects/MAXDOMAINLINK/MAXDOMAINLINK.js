mos = {
    "objectName": "MAXDOMAINLINK",
    "className": "psdi.app.configure.MaxDomainLinkSet",
    "description": "The cross reference of attribute to domains",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXDOMAINLINKID",
    "primaryKeyColumns": [
        "DOMAINID",
        "ATTRIBUTENAME",
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXATTRIBUTE",
            "targetObject": "MAXDOMAINLINK",
            "parentKeys": "OBJECTNAME, ATTRIBUTENAME",
            "targetKeys": "OBJECTNAME, ATTRIBUTENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXDOMAINLINK",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXDOMAINLINK",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Name of the object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "ATTRIBUTENAME",
            "required": true,
            "persistent": true,
            "title": "Attribute Name",
            "remarks": "Name of the attribute",
            "sameAsAttribute": "ATTRIBUTENAME",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "DOMAINID",
            "required": true,
            "persistent": true,
            "title": "Domain ID",
            "remarks": "ID of the domain",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "MAXDOMAINLINKID",
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
            "name": "MAXATTRIBUTECFG",
            "target": "MAXATTRIBUTECFG",
            "remarks": "Relationship from MaxDomainLink to MaxAttributeCfg",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXATTRIBUTECFGEXACT",
            "target": "MAXATTRIBUTECFG",
            "remarks": "Relationship from MaxDomainLink to MaxAttributeCfg for an exact match including domainid",
            "whereClause": "objectname = :objectname and attributename = :attributename and domainid = :domainid and domainid is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAIN",
            "target": "MAXDOMAIN",
            "remarks": "Relationship from MaxDomainLink to MaxDomain",
            "whereClause": "domainid = :domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXOBJECTCFG",
            "target": "MAXOBJECTCFG",
            "remarks": "Relationship from MaxDomainLink to MaxObjectCfg",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXDOMAINLINK",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship from MaxAttributeCfg to MaxDomainLink",
            "whereClause": "objectname = :objectname and attributename = :attributename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAINLINKEXACT",
            "source": "MAXATTRIBUTECFG",
            "remarks": "Relationship from MaxAttributeCfg to MaxDomainLink for the domain specified on maxattributecfg (if any)",
            "whereClause": "objectname = :objectname and attributename = :attributename and domainid = :domainid and :domainid is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAINLINK",
            "source": "MAXDOMAIN",
            "remarks": "Relationship from MaxDomain to MaxDomainLink",
            "whereClause": "domainid = :domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAINLINK",
            "source": "MAXOBJECTCFG",
            "remarks": "Relationship from MaxObjectCfg to MaxDomainLink",
            "whereClause": "objectname = :objectname",
            "cardinality": "UNDEFINED"
        }
    ]
}