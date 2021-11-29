mos = {
    "objectName": "SKDCOMPLIANCE",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDComplianceSet",
    "description": "Schedule Compliance",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDCOMPLIANCEID",
    "primaryKeyColumns": [
        "SKDPROJECTID",
        "STARTDATE",
        "ENDDATE"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SKDPROJECTID",
            "required": false,
            "persistent": true,
            "title": "Schedule Project Id",
            "remarks": "Project Id",
            "sameAsAttribute": "SKDPROJECTID",
            "sameAsObject": "SKDPROJECT"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": true,
            "title": "Schedule Compliance Start",
            "remarks": "The start date of the schedule compliance period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": true,
            "title": "Schedule Compliance End",
            "remarks": "The end date of the schedule compliance period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLANSTARTHRS",
            "required": false,
            "persistent": true,
            "title": "Plan Hours",
            "remarks": "Total labor hours planned at the beginning of the schedule compliance period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTUALENDHRS",
            "required": false,
            "persistent": true,
            "title": "Actual Hours",
            "remarks": "The actual labor hours spent on the original work planned at the beginning of the schedule compliance period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPLIANCEFACTOR",
            "required": false,
            "persistent": true,
            "title": "Compliance Factor",
            "remarks": "The actual labor hours spent divided by the planned hours.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDCOMPACTIVE",
            "required": true,
            "persistent": true,
            "title": "Schedule Compliance Active",
            "remarks": "Is Schedule Compliance Active for this Schedule.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDCOMPLIANCEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMAPPRWO",
            "required": false,
            "persistent": true,
            "title": "Plan Work Records",
            "remarks": "Identifies the total number of approved work records in the schedule that fall between the Schedule Compliance Start and Schedule Compliance End dates.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMCOMPWO",
            "required": false,
            "persistent": true,
            "title": "Actual Work Records",
            "remarks": "Identifies the total number of completed, closed, and cancelled work records in the schedule that fall between the Schedule Compliance Start and Schedule Compliance End dates.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOCOMPLIANCEFACTOR",
            "required": false,
            "persistent": true,
            "title": "Workorder Compliance Factor",
            "remarks": "Identifies the number of completed, closed, and cancelled work records divided by the number of approved work records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMBREAKINWO",
            "required": false,
            "persistent": true,
            "title": "Break-in Work Records",
            "remarks": "Identifies the number of work records that were added to the schedule during the compliance period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NUMBREAKOUTWO",
            "required": false,
            "persistent": true,
            "title": "Break-out Work Records",
            "remarks": "Identifies the number of work records that were removed from the schedule during the compliance period.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNPLANHRS",
            "required": false,
            "persistent": true,
            "title": "Unplanned Hours",
            "remarks": "Identifies the number of labor hours that were used on unplanned work during the schedule compliance period.",
            "sameAsAttribute": "PLANSTARTHRS",
            "sameAsObject": "SKDCOMPLIANCE"
        },
        {
            "attributeName": "NUMUNCOMPWO",
            "required": false,
            "persistent": false,
            "title": "Uncompleted Work Records",
            "remarks": "Identifies the total number of uncompleted work records in the schedule that fall between the Schedule Compliance Start and Schedule Compliance End dates.  This field is calculated based on total, less the completed Work Orders.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLANHRS",
            "required": false,
            "persistent": false,
            "title": "Planned Hours",
            "remarks": "Identifies the number of labor hours that were fully planned less the unplanned hours.  It is a calculated field.",
            "sameAsAttribute": "PLANSTARTHRS",
            "sameAsObject": "SKDCOMPLIANCE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SKDCOMPLIANCE",
            "source": "SKDPROJECT",
            "remarks": "Compliance WO List defined for a project WO's in SKDActivity table",
            "whereClause": "skdprojectid=:skdprojectid",
            "cardinality": null
        },
        {
            "name": "SKDCOMPLIANCECOMP",
            "source": "SKDPROJECT",
            "remarks": "Relationship to the SKDCompliance table, used to find the completed compliance period for the schedule.",
            "whereClause": "skdprojectid=:skdprojectid and skdcompactive=0",
            "cardinality": null
        }
    ]
}