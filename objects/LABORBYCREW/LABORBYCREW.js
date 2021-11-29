mos = {
    "objectName": "LABORBYCREW",
    "className": "com.ibm.tivoli.maximo.fwm.app.virtual.LaborByCrewSet",
    "description": "Labor By Crew",
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
            "attributeName": "ACTUALSTASKID",
            "required": false,
            "persistent": false,
            "title": "Task",
            "remarks": "Identifies the task for which you are reporting labor.",
            "sameAsAttribute": "ACTUALSTASKID",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "REGULARHRS",
            "required": true,
            "persistent": false,
            "title": "Regular Hours",
            "remarks": "Number of regular hours (not overtime, holiday, weekend, etc.) worked.",
            "sameAsAttribute": "REGULARHRS",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "TRANSTYPE",
            "required": true,
            "persistent": false,
            "title": "Type",
            "remarks": "The type of time being entered (work, travel, vacation, etc.). If you use WORK, TRAV, or WMATL as the type, you must enter a work order, GL account, asset, or location.",
            "sameAsAttribute": "TRANSTYPE",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "STARTDATE",
            "required": true,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Date on which the reported work began.",
            "sameAsAttribute": "STARTDATEENTERED",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Time",
            "remarks": "Time at which work began. If you enter a Start Time and a Finish Time, Maximo calculates values for the Hours field, but will not write over a value you have already entered in the field. You can only enter a value if the work order has a status of Approve. You can modify the field until you save the record.",
            "sameAsAttribute": "STARTTIMEENTERED",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "FINISHDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "Date on which the labor finished the work. If you have entered a Start Date, Start Time, and Finish Time, Maximo calculates a value for the Finish Date field using this formula: (start date) + (finish time - start time). The work order must be approved before you can insert a value. You can modify the field until you save the record. Maximo then updates the Line Cost field.",
            "sameAsAttribute": "FINISHDATEENTERED",
            "sameAsObject": "LABTRANS"
        },
        {
            "attributeName": "FINISHTIME",
            "required": false,
            "persistent": false,
            "title": "End Time",
            "remarks": "Time at which the work was finished.",
            "sameAsAttribute": "FINISHTIMEENTERED",
            "sameAsObject": "LABTRANS"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "LABORBYCREW",
            "source": "WORKORDER",
            "remarks": "Relationship between non-persistent LABORBYCREW and WORKORDER, used by Enter by Crew dialog. (No where clause).",
            "whereClause": "",
            "cardinality": null
        }
    ]
}