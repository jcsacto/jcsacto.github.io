mos = {
    "objectName": "DOWNTIMEREPORT",
    "className": "psdi.app.asset.virtual.DowntimeReportSet",
    "description": "Parameters for Asset Downtime Reporting",
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
            "attributeName": "CODE",
            "required": false,
            "persistent": false,
            "title": "Downtime Code",
            "remarks": "Downtime code for this transaction",
            "sameAsAttribute": "CODE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "OPERATIONAL",
            "required": true,
            "persistent": false,
            "title": "Operational",
            "remarks": "Is downtime occurring when asset normally in use?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Start of the down time interval. Can be from workorder.enterdate,workorder.actstart or the most recent assetstatus.changedate for the assetnum on the owning work order object",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "end of the down time interval",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "DOWNTIME",
            "required": false,
            "persistent": false,
            "title": "Hours",
            "remarks": "interval between start date and end date. Value can be also be affected by Asset's calendar or UI override.",
            "sameAsAttribute": "DOWNTIME",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "STARTDATESOURCE",
            "required": true,
            "persistent": false,
            "title": "Start Date Source",
            "remarks": "Specifies origin of startdate for downtime reporting. Value will be from the ReportDate or ActStart attribute of the workorder. Valid values are REPORTDATE ACTSTART or NONE.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSCHANGEDATE",
            "required": false,
            "persistent": false,
            "title": "Status Date",
            "remarks": "date of asset status change from IsRunning to not IsRunning. When going from IsRunning to not IsRunning back to IsRunning in one action that is, downtime reporting, the StartDate and EndDate attributes are used, and this attribute is read-only.",
            "sameAsAttribute": "CHANGEDATE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "STATUSCHANGECODE",
            "required": false,
            "persistent": false,
            "title": "Downtime Code",
            "remarks": "reason for asset status change from IsRunning to not IsRunning. When going from IsRunning to not IsRunning back to IsRunning in one action (that is, downtime reporting), the Code attribute is used, and this attribute is read-only.",
            "sameAsAttribute": "CODE",
            "sameAsObject": "ASSETSTATUS"
        },
        {
            "attributeName": "ISDOWNTIMEREPORT",
            "required": true,
            "persistent": false,
            "title": "Down Time Report",
            "remarks": "if true, full-cycle downtime reporting is being performed, that is, when going from IsRunning to -(IsRunning) back to IsRunning in one action. Downtime reporting will insert two AssetStatus records, or update one and insert another AssetStatus record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURRENTSTATUS",
            "required": false,
            "persistent": false,
            "title": "Current Status",
            "remarks": "Asset's current IsRunning status, that is, is the asset up or down?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Asset to report down time",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site of the asset",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Long Description",
            "remarks": "Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISRUNNING",
            "required": true,
            "persistent": false,
            "title": "Asset Up",
            "remarks": "Asset Up or Down",
            "sameAsAttribute": "ISRUNNING",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DOWNTIMEREPORT",
            "source": "ASSET",
            "remarks": "Relationship to non-persistent MODDOWNTIMEHIST object",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOWNTIMEREPORT",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship to the nonpersistent parameter set for reporting downtime.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOWNTIMEREPORT",
            "source": "WORKORDER",
            "remarks": "Relationship to the nonpersistent parameter set for reporting downtime.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}