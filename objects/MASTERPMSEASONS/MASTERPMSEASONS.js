mos = {
    "objectName": "MASTERPMSEASONS",
    "className": "psdi.app.masterpm.MasterPMSeasonsSet",
    "description": "Active PM Seasonal dates",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MASTERPMSEASONSID",
    "primaryKeyColumns": [
        "MASTERPMNUM",
        "STARTDAY",
        "STARTMONTH",
        "ENDDAY",
        "ENDMONTH"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "MASTERPMSEASONSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MASTERPMNUM",
            "required": true,
            "persistent": true,
            "title": "Master PM",
            "remarks": "Unique Identifier For MasterPM",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "STARTMONTH",
            "required": true,
            "persistent": true,
            "title": "Start Month",
            "remarks": "Identifies the seasonal start month of a PM",
            "sameAsAttribute": "STARTMONTH",
            "sameAsObject": "PMSEASONS"
        },
        {
            "attributeName": "STARTDAY",
            "required": true,
            "persistent": true,
            "title": "Start Day",
            "remarks": "Identifies the seasonal start day of a PM",
            "sameAsAttribute": "STARTDAY",
            "sameAsObject": "PMSEASONS"
        },
        {
            "attributeName": "ENDMONTH",
            "required": true,
            "persistent": true,
            "title": "End Month",
            "remarks": "psdi.app.masterpm.FldMasterPMSeasonStrMonth",
            "sameAsAttribute": "ENDMONTH",
            "sameAsObject": "PMSEASONS"
        },
        {
            "attributeName": "ENDDAY",
            "required": true,
            "persistent": true,
            "title": "End Day",
            "remarks": "Identifies the season end day of a PM",
            "sameAsAttribute": "ENDDAY",
            "sameAsObject": "PMSEASONS"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "MASTERPMSEASONS",
            "source": "MASTERPM",
            "remarks": "Relationship to the MASTERPM's MASTERPMSEASONS records, used to find all the MASTERPMSEASONS DATES for a given MASTERPM. (MASTERPMSEASONS.masterpmnum = masterpm.masterpmnum). The resulting set will contain zero or more record.",
            "whereClause": "masterpmnum = :masterpmnum",
            "cardinality": "UNDEFINED"
        }
    ]
}