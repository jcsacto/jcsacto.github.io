mos = {
    "objectName": "DAILYCREWREASSIGN",
    "className": "com.ibm.tivoli.maximo.amcrew.app.virtual.DailyCrewReassignSet",
    "description": "Daily Crew Reassignment",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "AMCREW",
            "required": false,
            "persistent": false,
            "title": "Crew",
            "remarks": "Identfies the crew.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization to which the crew belongs.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PERMTEMP",
            "required": false,
            "persistent": false,
            "title": "Permanently Temporarily",
            "remarks": "Permanent or Temporary",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDREPREM",
            "required": false,
            "persistent": false,
            "title": "Add Replace Remove",
            "remarks": "Add, replace or remove",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LABORTOOL",
            "required": false,
            "persistent": false,
            "title": "Labor Tool",
            "remarks": "Labor or Tool",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTEDDATE",
            "required": false,
            "persistent": false,
            "title": "Date",
            "remarks": "Assignment date for the crew",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENTDATE",
            "required": false,
            "persistent": false,
            "title": "Date",
            "remarks": "Assignment date for the crew",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "Shift end date",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship between DAILYCREWREASSIGN and AMCREW tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "AMCREWLABOR",
            "target": "AMCREWLABOR",
            "remarks": "Relationship between DAILYCREWREASSIGN and AMCREWLABOR tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and ((enddate is not null and ((enddate <= :enddate and enddate >= :currentdate) or (effectivedate <= :currentdate and enddate >= :enddate))) or (effectivedate <= :enddate and enddate >= :currentdate) or (effectivedate <= :currentdate and enddate is null))",
            "cardinality": null
        },
        {
            "name": "AMCREWLABUNRESTRICTED",
            "target": "AMCREWLABUNRESTRICTED",
            "remarks": "Realtionship to AMCREWLABUNRESTRICTED",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOL",
            "target": "AMCREWTOOL",
            "remarks": "Relationship between Relationship between AMCREW and AMCREWTOOL tables. and AMCREWTOOL tables.",
            "whereClause": "amcrew = :amcrew and orgid = :orgid and ((enddate is not null and ((enddate <= :enddate and enddate >= :currentdate) or (effectivedate <= :currentdate and enddate >= :enddate))) or (effectivedate <= :enddate and enddate >= :currentdate) or (effectivedate <= :currentdate and enddate is null))",
            "cardinality": null
        },
        {
            "name": "AMCREWTOOLUNRESTRICTED",
            "target": "AMCREWTOOLUNRESTRICTED",
            "remarks": "Realtionship to AMCREWTOOLUNRESTRICTED",
            "whereClause": "1=1",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "DAILYCREWREASSIGN",
            "source": "AMCREW",
            "remarks": "Relationship between AMCREW and DAILYCREWREASSIGN(virtual) tables.",
            "whereClause": "",
            "cardinality": null
        }
    ]
}