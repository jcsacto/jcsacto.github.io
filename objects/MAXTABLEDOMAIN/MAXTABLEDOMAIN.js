mos = {
    "objectName": "MAXTABLEDOMAIN",
    "className": "psdi.app.system.MaxTableDomainSet",
    "description": "Defines a MAXIMO table type of value domain",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXTABLEDOMAINID",
    "primaryKeyColumns": [
        "DOMAINID",
        "SITEID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXTABLEDOMAIN",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Table Domain Details",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "MAXTABLEDOMAIN",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Object used for Domain",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "MAXTABLEDOMAIN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "MAXTABLEDOMAIN",
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
            "attributeName": "DOMAINID",
            "required": true,
            "persistent": true,
            "title": "Domain",
            "remarks": "Identifier of the domain",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "VALIDTNWHERECLAUSE",
            "required": false,
            "persistent": true,
            "title": "Validation Where Clause",
            "remarks": "Where clause used to validate values placed in fields linked to this domain.",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "LISTWHERECLAUSE",
            "required": false,
            "persistent": true,
            "title": "List Where Clause",
            "remarks": "Where clause used to get list members",
            "sameAsAttribute": "CLAUSE",
            "sameAsObject": "QUERY"
        },
        {
            "attributeName": "ERRORRESOURCBUNDLE",
            "required": false,
            "persistent": true,
            "title": "Error Message Group",
            "remarks": "Resource bundle of message to be returned if value fails to match domain",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ERRORACCESSKEY",
            "required": false,
            "persistent": true,
            "title": "Error Message Key",
            "remarks": "Key to access error message (displayed if value not in domain)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object",
            "remarks": "Object Name",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifier of the site for which the domain value is specified",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifier of the organization for which the domain value is specified",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "MAXTABLEDOMAINID",
            "required": true,
            "persistent": true,
            "title": "MAXTABLEDOMAINID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CROSSOVERDOMAIN",
            "target": "CROSSOVERDOMAIN",
            "remarks": null,
            "whereClause": "domainid = :domainid and ((siteid is null and (:siteid ='' or :siteid is null))or siteid=:siteid) and ((orgid is null and (:orgid ='' or :orgid is null)) or orgid=:orgid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAIN",
            "target": "MAXDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'MAXTABLE')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'MAXTABLE')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXTABLEDOMAIN",
            "source": "MAXDOMAIN",
            "remarks": "Relationship to MaxTableDomain table. (maxtabledomain.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'MAXTABLE')). If this is a table domain, the result set will contain one object.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXTABLEDOMAINFORCROSSOVER",
            "source": "MAXDOMAIN",
            "remarks": null,
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        }
    ]
}