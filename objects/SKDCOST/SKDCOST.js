mos = {
    "objectName": "SKDCOST",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDCostSet",
    "description": "SKD Cost",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "CONTENTUID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SKDPROJECTID",
            "required": false,
            "persistent": true,
            "title": "Project ID",
            "remarks": "Project ID",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "TIMEPERIOD",
            "required": false,
            "persistent": true,
            "title": "Time Period",
            "remarks": "The month that the costs are displayed for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PERIOD",
            "required": false,
            "persistent": true,
            "title": "Period No",
            "remarks": "Period",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "YEAR",
            "required": false,
            "persistent": true,
            "title": "Year",
            "remarks": "The year that the costs are displayed for.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CESTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Est. Labor",
            "remarks": "The total cost of labor scheduled during the time period that has been committed, and saved to the work record applications.",
            "sameAsAttribute": "ESTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SESTLABCOST",
            "required": false,
            "persistent": true,
            "title": "Saved Est. Labor",
            "remarks": "The total cost of labor scheduled during the time period that has been committed, and saved to the work record applications.",
            "sameAsAttribute": "ESTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ALABCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Labor",
            "remarks": "The total cost of labor incurred during the time period.",
            "sameAsAttribute": "ACTLABCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CESTMATCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Est. Material",
            "remarks": "The total cost of material scheduled during the time period that has been committed, and saved to the work record applications.",
            "sameAsAttribute": "ESTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SESTMATCOST",
            "required": false,
            "persistent": true,
            "title": "Saved Est. Material",
            "remarks": "The total cost of materials scheduled during the time period that has been saved to the schedule, but not saved to the work record applications.",
            "sameAsAttribute": "ESTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "AMATCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Material",
            "remarks": "The total cost of materials incurred during the time period.",
            "sameAsAttribute": "ACTMATCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CESTSERVCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Est. Service",
            "remarks": "The total cost of services scheduled during the time period that has been committed, and saved to the work record applications.",
            "sameAsAttribute": "ESTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SESTSERVCOST",
            "required": false,
            "persistent": true,
            "title": "Saved Est. Service",
            "remarks": "The total cost of services scheduled during the time period that has been saved to the schedule, but not saved to the work record applications.",
            "sameAsAttribute": "ESTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASERVCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Service",
            "remarks": "The total cost of services incurred during the time period.",
            "sameAsAttribute": "ACTSERVCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CESTTOOLCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Est. Tool",
            "remarks": "The total cost of tools scheduled during the time period that has been committed, and saved to the work record applications.",
            "sameAsAttribute": "ESTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SESTTOOLCOST",
            "required": false,
            "persistent": true,
            "title": "Saved Est. Tool",
            "remarks": "The total cost of tools scheduled during the time period that has been saved to the schedule, but not saved to the work record applications.",
            "sameAsAttribute": "ESTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ATOOLCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Tool",
            "remarks": "The total cost of tools incurred during the time period.",
            "sameAsAttribute": "ACTTOOLCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CESTTOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Committed Est. Total",
            "remarks": "The total cost of the work scheduled during the time period that has been committed, and saved to the work record applications.",
            "sameAsAttribute": "ESTTOTALCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "SESTTOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Saved Est. Total",
            "remarks": "The total cost of the work scheduled during the time period that has been saved to the schedule, but not saved to the work record applications.",
            "sameAsAttribute": "ESTTOTALCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ATOTALCOST",
            "required": false,
            "persistent": true,
            "title": "Actual Total",
            "remarks": "The total cost of the scheduled work incurred during the time period.",
            "sameAsAttribute": "ACTTOTALCOST",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "CREATEDATE",
            "required": false,
            "persistent": true,
            "title": "Created Date",
            "remarks": "The date and time when the wo cost was created.",
            "sameAsAttribute": "CREATEDATE",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "CONTENTUID",
            "required": false,
            "persistent": true,
            "title": "Content Unique ID",
            "remarks": "Content Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTWEEKDATE",
            "required": false,
            "persistent": true,
            "title": "Start Week Date",
            "remarks": "The date when week starts for cost calculation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDWEEKDATE",
            "required": false,
            "persistent": true,
            "title": "End Week Date",
            "remarks": "The date when week ends for cost calculation",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDCOST",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find all WO cost",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDCOST1",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find all WO cost",
            "whereClause": "skdprojectid = :skdid1",
            "cardinality": null
        },
        {
            "name": "SKDCOST2",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find all WO cost",
            "whereClause": "skdprojectid = :skdid2",
            "cardinality": null
        },
        {
            "name": "SKDCOSTMONTH",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find monthly WO cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod not in (select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue in ('13','14') and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTMONTH1",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find monthly WO cost",
            "whereClause": "skdprojectid = :skdid1 and timeperiod not in (select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue in ('13','14') and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTMONTH2",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find monthly WO cost",
            "whereClause": "skdprojectid = :skdid2 and timeperiod not in (select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue in ('13','14') and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTWEEK",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find weekly WO cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='13' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTWEEK1",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find weekly WO cost",
            "whereClause": "skdprojectid = :skdid1 and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='13' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTWEEK2",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find weekly WO cost",
            "whereClause": "skdprojectid = :skdid2 and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='13' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTYEAR",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find yearly WO cost",
            "whereClause": "skdprojectid=:skdprojectid and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='14' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTYEAR1",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find yearly WO cost",
            "whereClause": "skdprojectid = :skdid1 and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='14' and defaults=1)",
            "cardinality": null
        },
        {
            "name": "SKDCOSTYEAR2",
            "source": "SKDPROJECT",
            "remarks": "Relationship from SKDPROJECT to SKDCOST to find yearly WO cost",
            "whereClause": "skdprojectid = :skdid2 and timeperiod=(select value from synonymdomain where domainid='TIMEPERIOD' and maxvalue='14' and defaults=1)",
            "cardinality": null
        }
    ]
}