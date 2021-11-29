mos = {
    "objectName": "CHARPOINTACTION",
    "className": "psdi.app.measurement.CharPointActionSet",
    "description": "Actions for observations on GAUGE meter pointnums",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "CHARPOINTACTIONID",
    "primaryKeyColumns": [
        "POINTNUM",
        "VALUE",
        "SITEID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "MEASUREPOINT",
            "targetObject": "CHARPOINTACTION",
            "parentKeys": "POINTNUM, SITEID",
            "targetKeys": "POINTNUM, SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measure Point",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CHARPOINTACTION",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "CHARPOINTACTION",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "CHARPOINTACTION",
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
            "attributeName": "POINTNUM",
            "required": true,
            "persistent": true,
            "title": "Measurement Point",
            "remarks": "Pointnum of the MeasurePoint",
            "sameAsAttribute": "POINTNUM",
            "sameAsObject": "MEASUREPOINT"
        },
        {
            "attributeName": "VALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Observation requiring the PMNUM or JPNUM action.",
            "sameAsAttribute": "VALUE",
            "sameAsObject": "ALNDOMAIN"
        },
        {
            "attributeName": "PMNUM",
            "required": false,
            "persistent": true,
            "title": "PM",
            "remarks": "PM to be used for the observation value.",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "JPNUM",
            "required": false,
            "persistent": true,
            "title": "Job Plan",
            "remarks": "PM to be used for the observation value.",
            "sameAsAttribute": "JPNUM",
            "sameAsObject": "JOBPLAN"
        },
        {
            "attributeName": "PRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Priority of the PM or JOBPLAN when generating a work order for the given observation value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site identifier",
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
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "non-persistent attribute indicating the MeasurePoint's assetnum",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "non-persistent attribute indicating the MeasurePoint's location",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "DOMAINID",
            "required": false,
            "persistent": false,
            "title": "Domain",
            "remarks": "domain of valid observation values for a CHARACTERISTIC meter type's CharPointAction.",
            "sameAsAttribute": "DOMAINID",
            "sameAsObject": "MAXDOMAIN"
        },
        {
            "attributeName": "CHARPOINTACTIONID",
            "required": true,
            "persistent": true,
            "title": "CHARPOINTACTIONID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "CHAR_OBSERV_DESC",
            "target": "ALNDOMAIN",
            "remarks": "Relationship to alndomain table, used to find description for the CharPointAction's observation value.  (domainid=:domainid and value=:value and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) ).  The resulting set will contain one object",
            "whereClause": "domainid=:domainid and value=:value and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the jobplan records, used to find the jobplan records for a given jpnum and is system level.",
            "whereClause": "jpnum=:jpnum and siteid is null and orgid is null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JPFORSITEORGSYS",
            "target": "JOBPLAN",
            "remarks": "Relationship to the jobplan object, used to find the jobplan for a given CharPointAction's jpnum.  (jpnum=:jpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null))).  The resulting set will contain one object",
            "whereClause": "jpnum=:jpnum and (siteid=:siteid or (siteid is null and orgid=:orgid) or (siteid is null and orgid is null)) and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENT",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the MEASUREMENT table, used to find any Measurements associated with the CharPointAction. The WHERE clause is: charpointaction.pointnum = measurement.pointnum and charpointaction.siteid = measurement.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "pointnum = :pointnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "target": "PM",
            "remarks": "Relationship to the pm records, used to find the pms records for a given pmnum and has masterpm.",
            "whereClause": "pmnum=:pmnum and siteid=:siteid and masterpm is not null",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMSFORSITE",
            "target": "PM",
            "remarks": "Relationship to the pm records, used to find the pms records for a given CharPointAction's pmnum.  The resulting set will contain one object",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CHARPOINTACTION",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the CHARPOINTACTION table, used to find the CharPointAction associated with the MeasurePoint. The WHERE clause is: measurepoint.pointnum = charpointaction.pointnum and measurepoint.siteid = charpointaction.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "pointnum = :pointnum and siteid = :siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}