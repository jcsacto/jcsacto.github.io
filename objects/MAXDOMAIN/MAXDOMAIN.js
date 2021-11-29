mos = {
    "objectName": "MAXDOMAIN",
    "className": "psdi.app.system.MaxDomainSet",
    "description": "Definition of a domain or set of values.",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MAXDOMAINID",
    "primaryKeyColumns": [
        "DOMAINID"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "ALNDOMAIN",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "ALN Domain Details",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "ASSETATTRIBUTE",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "CLASSSPEC",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "CROSSOVERDOMAIN",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crossover Domain Details",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "LNKCLAUSEATRNAME",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID1",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXATTRIBUTE",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXATTRIBUTECFG",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 8",
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
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXDOMVALCOND",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Domain this condition value is for.",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXIFACECONTROL",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "MAXPROP",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 12",
            "longDescription": null
        },
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
            "objectName": "MAXDOMAIN",
            "targetObject": "METER",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 14",
            "longDescription": null
        },
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
            "objectName": "MAXDOMAIN",
            "targetObject": "NUMRANGEDOMAIN",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Numeric Range Domain Details",
            "longDescription": null
        },
        {
            "objectName": "MAXDOMAIN",
            "targetObject": "SYNONYMDOMAIN",
            "parentKeys": "DOMAINID",
            "targetKeys": "DOMAINID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Synonym Domain Details",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DOMAINID",
            "required": true,
            "persistent": true,
            "title": "Domain",
            "remarks": "Domain Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Domain Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DOMAINTYPE",
            "required": true,
            "persistent": true,
            "title": "Domain Type",
            "remarks": "Domain Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTYPE",
            "required": false,
            "persistent": true,
            "title": "Data Type",
            "remarks": "Maximo data type",
            "sameAsAttribute": "MAXTYPE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "LENGTH",
            "required": false,
            "persistent": true,
            "title": "Length",
            "remarks": "Maximum length of the domain value if used",
            "sameAsAttribute": "LENGTH",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "SCALE",
            "required": false,
            "persistent": true,
            "title": "Scale",
            "remarks": "Scale of the numeric domain value if used",
            "sameAsAttribute": "SCALE",
            "sameAsObject": "MAXATTRIBUTE"
        },
        {
            "attributeName": "MAXDOMAINID",
            "required": true,
            "persistent": true,
            "title": "MAXDOMAINID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTERNAL",
            "required": true,
            "persistent": true,
            "title": "Is Internal",
            "remarks": "Flag to indicate if the domain is internal and/or localizable. 0: localizable and not internal; 1: internal and not localizable; 2: not localizable but not internal.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEVERCACHE",
            "required": false,
            "persistent": true,
            "title": "Disable Caching",
            "remarks": "Boolean flag to indicate that the domain should never be cached on the client",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ALNDOMAINVALUE",
            "target": "ALNDOMAIN",
            "remarks": "Relationship to ALNValue (alndomainvalue.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'ALN')). If this is an ALN domain, the result set will contain one or more objects.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CROSSOVERDOMAIN",
            "target": "CROSSOVERDOMAIN",
            "remarks": "Relationship to CrossoverDomain table. (crossoverdomain.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'CROSSOVER')). If this is a crossover domain, the result set will contain one object.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAINCACHE",
            "target": "MAXDOMAIN",
            "remarks": "Relationship for domain caching",
            "whereClause": "domainid=:domainid",
            "cardinality": null
        },
        {
            "name": "MAXDOMAINLINK",
            "target": "MAXDOMAINLINK",
            "remarks": "Relationship from MaxDomain to MaxDomainLink",
            "whereClause": "domainid = :domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMVALCOND",
            "target": "MAXDOMVALCOND",
            "remarks": "Relationship from MAXDOMAIN to MAXDOMVALCOND",
            "whereClause": "domainid = :domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXLOOKUPMAP",
            "target": "MAXLOOKUPMAP",
            "remarks": null,
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXTABLEDOMAIN",
            "target": "MAXTABLEDOMAIN",
            "remarks": "Relationship to MaxTableDomain table. (maxtabledomain.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'MAXTABLE')). If this is a table domain, the result set will contain one object.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXTABLEDOMAINFORCROSSOVER",
            "target": "MAXTABLEDOMAIN",
            "remarks": null,
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NUMDOMAINVALUE",
            "target": "NUMERICDOMAIN",
            "remarks": "Relationship to NUMValue table. (numdomainvalue.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'NUMERIC')). If this is a numeric domain, the result set will contain one or more objects.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RANGEDOMSEGMENT",
            "target": "NUMRANGEDOMAIN",
            "remarks": "Relationship to RangeDomSegment (rangedomsegment.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'NUMRANGE')). If this is a numeric range domain, the result set will contain one or more objects.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SYNONYMDOMAIN",
            "target": "SYNONYMDOMAIN",
            "remarks": "SYNONYMDOMAIN record",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXDOMAIN",
            "source": "ALNDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'ALN')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'ALN')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAIN",
            "source": "CROSSOVERDOMAIN",
            "remarks": "Relationship to  MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'CROSSOVER')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid='DOMTYPE' and maxvalue = 'CROSSOVER')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAIN",
            "source": "MAXATTRIBUTECFG",
            "remarks": "MaxAttributeCfg to MaxDomain.  If domainid is not null, the result set will contain one object.",
            "whereClause": "domainid = :domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAINCACHE",
            "source": "MAXDOMAIN",
            "remarks": "Relationship for domain caching",
            "whereClause": "domainid=:domainid",
            "cardinality": null
        },
        {
            "name": "MAXDOMAIN",
            "source": "MAXDOMAINLINK",
            "remarks": "Relationship from MaxDomainLink to MaxDomain",
            "whereClause": "domainid = :domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAIN",
            "source": "MAXTABLEDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'MAXTABLE')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'MAXTABLE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOMAINID",
            "source": "METER",
            "remarks": "Relationship from Meter to MaxDomain to get the description for the meter's domainid",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAIN",
            "source": "NUMERICDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'NUMERIC')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'NUMERIC')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAIN",
            "source": "NUMRANGEDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'NUMRANGE')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'NUMRANGE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXDOMAIN",
            "source": "SYNONYMDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'VALUELIST')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'SYNONYM')",
            "cardinality": "UNDEFINED"
        }
    ]
}