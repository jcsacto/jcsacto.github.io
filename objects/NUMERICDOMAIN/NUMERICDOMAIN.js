mos = {
    "objectName": "NUMERICDOMAIN",
    "className": "psdi.app.system.NUMValueSet",
    "description": "Numeric type domain",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "NUMERICDOMAINID",
    "primaryKeyColumns": [
        "DOMAINID",
        "VALUE",
        "SITEID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "NUMERICDOMAIN",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Numeric Domain Details",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "NUMERICDOMAIN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "NUMERICDOMAIN",
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
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Value of the domain",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Value description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Identifier of the site for which the value is specified",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Identifier of the organization for which the value is specified",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "NUMERICDOMAINID",
            "required": true,
            "persistent": true,
            "title": "NUMERICDOMAINID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUEID",
            "required": true,
            "persistent": true,
            "title": "Value ID",
            "remarks": "System generated unique identifier of the value in a domain, internal and cannot be modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXDOMAIN",
            "target": "MAXDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'NUMERIC')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'NUMERIC')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "target": "MAXDOMVALCOND",
            "remarks": "Relationship from NUMERICDOMAIN to MAXDOMVALCOND",
            "whereClause": "domainid = :domainid and valueid = :valueid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "NUMDOMAINVALUE",
            "source": "MAXDOMAIN",
            "remarks": "Relationship to NUMValue table. (numdomainvalue.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'NUMERIC')). If this is a numeric domain, the result set will contain one or more objects.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEVICECLASSDESC",
            "source": "PERSON",
            "remarks": "Relationship to the PERSON to Numericdomain to get the description of the Device Class",
            "whereClause": "domainid='MFMAILDEVICECLASS' and value=:deviceclass",
            "cardinality": null
        }
    ]
}