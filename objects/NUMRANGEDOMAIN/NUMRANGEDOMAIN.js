mos = {
    "objectName": "NUMRANGEDOMAIN",
    "className": "psdi.app.system.NumRangeDomainSet",
    "description": "Domain for number range",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "NUMRANGEDOMAINID",
    "primaryKeyColumns": [
        "DOMAINID",
        "RANGESEGMENT",
        "SITEID",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
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
            "objectName": "ORGANIZATION",
            "targetObject": "NUMRANGEDOMAIN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "NUMRANGEDOMAIN",
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
            "attributeName": "RANGESEGMENT",
            "required": true,
            "persistent": true,
            "title": "Range Segment",
            "remarks": "Identifies a segment within a range. A range may include one or more segments of values. Such as, 50 to 100, then 150 to 200.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
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
            "attributeName": "RANGEMINIMUM",
            "required": false,
            "persistent": true,
            "title": "Range Minimum",
            "remarks": "Minimum value of the segment",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RANGEMAXIMUM",
            "required": false,
            "persistent": true,
            "title": "Range Maximum",
            "remarks": "RANGEMAXIMUM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RANGEINTERVAL",
            "required": false,
            "persistent": true,
            "title": "Interval",
            "remarks": "Interval of the range",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "NUMRANGEDOMAINID",
            "required": true,
            "persistent": true,
            "title": "NUMRANGEDOMAINID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXDOMAIN",
            "target": "MAXDOMAIN",
            "remarks": "Relationship to MaxDomain table. (maxdomain.domainid = alndomainvalue.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'NUMRANGE')). The result set will contain one object.",
            "whereClause": "domainid = :domainid and domaintype in (select value from synonymdomain where domainid = 'DOMTYPE' and maxvalue = 'NUMRANGE')",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "RANGEDOMSEGMENT",
            "source": "MAXDOMAIN",
            "remarks": "Relationship to RangeDomSegment (rangedomsegment.domainid = maxdomain.domainid and maxdomain.domaintype in (select valuelist.value from valuelist where valuelist.listname = 'DOMTYPE' and valuelist.maxvalue = 'NUMRANGE')). If this is a numeric range domain, the result set will contain one or more objects.",
            "whereClause": "domainid=:domainid",
            "cardinality": "UNDEFINED"
        }
    ]
}