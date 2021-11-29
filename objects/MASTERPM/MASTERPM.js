mos = {
    "objectName": "MASTERPM",
    "className": "psdi.app.masterpm.MasterPMSet",
    "description": "Master PM table. This is not site or org specific",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "MASTERPMID",
    "primaryKeyColumns": [
        "MASTERPMNUM"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ITEM",
            "targetObject": "MASTERPM",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "MASTERPM",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MASTERPM",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "MASTERPM",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MASTERPMNUM",
            "required": true,
            "persistent": true,
            "title": "Master PM",
            "remarks": "Unique Identifier for generic PM template",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Identifies the Item used when creating the Master PM",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "APPLYMPMTOASSET",
            "required": true,
            "persistent": true,
            "title": "Create Associated PMs for Item's Asset",
            "remarks": "Associate asset with the Master PM?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "APPLYMPMTOLOC",
            "required": true,
            "persistent": true,
            "title": "Create Associated PMs for Item's Location",
            "remarks": "Associate Location with the Master PM?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WOSTATUS",
            "required": true,
            "persistent": true,
            "title": "Work Order Status",
            "remarks": "Identifies the initial status of generated work orders",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "PRIORITY",
            "required": true,
            "persistent": true,
            "title": "Work Order Priority",
            "remarks": "Priority Of PM WO",
            "sameAsAttribute": "PRIORITY",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "WORKTYPE",
            "required": false,
            "persistent": true,
            "title": "Work Type",
            "remarks": "Type Of WO",
            "sameAsAttribute": "WORKTYPE",
            "sameAsObject": "WORKTYPE"
        },
        {
            "attributeName": "LEADTIME",
            "required": false,
            "persistent": true,
            "title": "Lead Time (Days)",
            "remarks": "Defines the lead time in days required for the PM.",
            "sameAsAttribute": "LEADTIME",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "USETARGETDATE",
            "required": true,
            "persistent": true,
            "title": "Use Last Work Order's Start Information to Calculate Next Due Frequency",
            "remarks": "Use Last Target Start Date",
            "sameAsAttribute": "USETARGETDATE",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ADJNEXTDUE",
            "required": true,
            "persistent": true,
            "title": "Adjust Next Due Date",
            "remarks": "Adjust the next due date after generation?",
            "sameAsAttribute": "ADJNEXTDUE",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "EXTDATE",
            "required": false,
            "persistent": true,
            "title": "Extended Date",
            "remarks": "If Extended Date supplied it overrides Next Due Date.",
            "sameAsAttribute": "EXTDATE",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ALERTLEAD",
            "required": false,
            "persistent": true,
            "title": "Alert Lead (Days)",
            "remarks": "Alert Lead",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FREQUENCY",
            "required": true,
            "persistent": true,
            "title": "Frequency",
            "remarks": "Frequency In Days",
            "sameAsAttribute": "FREQUENCY",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "FREQUNIT",
            "required": true,
            "persistent": true,
            "title": "Frequency Units",
            "remarks": "Frequency Units DAYS WEEKS MONTHS or YEARS",
            "sameAsAttribute": "FREQUNIT",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "NEXTDATE",
            "required": false,
            "persistent": true,
            "title": "Next Due Date (Used During PM Create Only)",
            "remarks": "Next WO Generation Date (Days)",
            "sameAsAttribute": "NEXTDATE",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "LEADTIMEACTIVE",
            "required": true,
            "persistent": false,
            "title": "Lead Time Active",
            "remarks": "Lead Time Active?",
            "sameAsAttribute": "LEADTIMEACTIVE",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "One Line Short Description Of PM",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for One Line Short Description Of MasterPM",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "UPDEXTDATE",
            "required": true,
            "persistent": true,
            "title": "Update Existing PMs",
            "remarks": "Will Master PM Update Extended Date on PMs associated with the Master PM?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDSEASONALDATES",
            "required": true,
            "persistent": true,
            "title": "Update Existing PMs Seasonal Dates",
            "remarks": "Will Master PM Update Seasonal Dates on PMs associated with the Master PM?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDTIMEBASEDFREQ",
            "required": true,
            "persistent": true,
            "title": "Update Time Based Information in Existing PMs",
            "remarks": "Will Master PM Update Time Based Frequency on PMs associated with the Master PM?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USEFREQUENCY",
            "required": true,
            "persistent": true,
            "title": "Use Frequency for Scheduling",
            "remarks": "Tells the Generate WO function that the frequency for a lower level PM should be checked when determining if all of the PMs in the hierarchy should be generated.",
            "sameAsAttribute": "USEFREQUENCY",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "UPDJPSEQUENCE",
            "required": true,
            "persistent": true,
            "title": "Update Job Plan Sequence in Existing PMs",
            "remarks": "Will Master PM Update Job Plan Sequence on PMs associated with the Master PM?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MASTERPMID",
            "required": true,
            "persistent": true,
            "title": "MASTERPMID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUNDAY",
            "required": true,
            "persistent": true,
            "title": "Sunday",
            "remarks": "is Active Day for a PM?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MONDAY",
            "required": true,
            "persistent": true,
            "title": "Monday",
            "remarks": "is Active day?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TUESDAY",
            "required": true,
            "persistent": true,
            "title": "Tuesday",
            "remarks": "is Active Day?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WEDNESDAY",
            "required": true,
            "persistent": true,
            "title": "Wednesday",
            "remarks": "is Active Day?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "THURSDAY",
            "required": true,
            "persistent": true,
            "title": "Thursday",
            "remarks": "is Active Day?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FRIDAY",
            "required": true,
            "persistent": true,
            "title": "Friday",
            "remarks": "is Active Day?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SATURDAY",
            "required": true,
            "persistent": true,
            "title": "Saturday",
            "remarks": "is Active Day?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "INTERRUPTIBLE",
            "required": true,
            "persistent": true,
            "title": "Interruptible",
            "remarks": "Is WO allowed to be stopped and restarted during resource scheduling",
            "sameAsAttribute": "INTERRUPTIBLE",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Last Modified Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Last  Modified By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCXTDTCMT",
            "required": false,
            "persistent": true,
            "title": "Comments",
            "remarks": "Associated Pms Extend Dates",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCXTDTCMT_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Comments Long description",
            "remarks": "Long Description for Comments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDWOINFO",
            "required": true,
            "persistent": true,
            "title": "Update Work Order Information on Existing PMs",
            "remarks": "Will Master PM update work order information (WORKTYPE,WOSTATUS,PRIORITY,INTERRUPTIBLE) on PMs associated with the Master PM?",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSOCASSET",
            "target": "ASSET",
            "remarks": "Relationship to MasterPMItem's asset records, used to find all the associated asset records for this rotating item on Master PM record. (:applymasterpmtoasset=:yes and itemnum =:masterpmitemnum and assetnum not in(select assetnum from pm where masterpm=:pmnum and assetnum is not null) and asset.itemsetid = pm.itemsetid). The resulting set will contain zero to many records.",
            "whereClause": ":applympmtoloc=:yes and itemnum =:itemnum and itemsetid = :itemsetid and :sitefiltering",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the MasterPM's DocLinks records, used to find documents for a given MasterPM. doclinks.keytable = 'MasterPM' and doclinks.keycolumn = 'MASTERPMNUM' and masterpm.masterpmnum = doclinks.keyvalue). The resulting set will contain zero or one record.",
            "whereClause": "ownertable = 'MASTERPM' and ownerid = :masterpmid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the MasterPM to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a itemnum",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the MasterPM's Item records, used to find the item records for a given MasterPM. (item.itemnum=masterpm.itemnum and item.itemsetid = masterpm.itemsetid). The resulting set will contain zero or one record.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the MasterPM's Jobplan records, used to find the jobplan records for a given MasterPM. (jobplan.jpnum = masterpm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum = :jpnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCJOBPLAN",
            "target": "JOBPLAN",
            "remarks": "Relationship to the Master PM's Jobplan records, used to find the jobplan records for a given Master PM, taking the status into account to filter out revised job plans. (jobplan.jpnum = pm.jpnum). The resulting set will contain zero or one record.",
            "whereClause": "jpnum = :jpnum and status in (select value from synonymdomain where domainid='JOBPLANSTATUS' and maxvalue ='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "ASSOCLOC",
            "target": "LOCOPER",
            "remarks": "Relationship to MasterPMItem's Location records, used to find all the associated location records for this rotating item on Master PM record. (:applymasterpmtoloc=:yes and itemnum =:masterpmitemnum and location not in(select location from pm where masterpm=:pmnum and location is not null) and locoper.itemsetid = pm.itemsetid). The resulting set will contain zero to many records.",
            "whereClause": ":applympmtoloc=:yes and itemnum =:itemnum and itemsetid = :itemsetid and :sitefiltering",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPMMETER",
            "target": "MASTERPMMETER",
            "remarks": "Relationsip to the MasterPMs PMMeter records,used to find all MasterPMMeter records for a given MasterPM",
            "whereClause": "masterpmnum=:masterpmnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UPDASSOPMMETER",
            "target": "MASTERPMMETER",
            "remarks": "Relationsip to the MasterPMs PMMeter records,used to find all MasterPMMeter (with updmeterbasedfree=true) records for a given MasterPM",
            "whereClause": "masterpmnum=:masterpmnum and updmeterbasedfreq=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPMSEASONS",
            "target": "MASTERPMSEASONS",
            "remarks": "Relationship to the MASTERPM's MASTERPMSEASONS records, used to find all the MASTERPMSEASONS DATES for a given MASTERPM. (MASTERPMSEASONS.masterpmnum = masterpm.masterpmnum). The resulting set will contain zero or more record.",
            "whereClause": "masterpmnum = :masterpmnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPMSEQ",
            "target": "MASTERPMSEQ",
            "remarks": "Relationship to the MasterPM's PMSequence records, used to find all the MasterPMSequence for a given MasterPM. (masterpmsequence.masterpmnum = masterpm.masterpmnum). The resulting set will contain zero or more record.",
            "whereClause": "masterpmnum = :masterpmnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCPMEXTDATE",
            "target": "PLUSCPMEXTDATE",
            "remarks": null,
            "whereClause": "masterpmnum=:masterpmnum and history = :no",
            "cardinality": null
        },
        {
            "name": "PM",
            "target": "PM",
            "remarks": "Relationship to the MasterPM's to PM records, used to find the PM record for a given MasterPM. (pm.pmnum = pm.masterpm). The resulting set will contain zero or one record.",
            "whereClause": "masterpm=:masterpmnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UPDASSOPM",
            "target": "PM",
            "remarks": "Relationship to the MasterPM's to PM records, used to find the PM record for a given MasterPM. (pm.pmnum = pm.masterpm). The resulting set will contain zero or one record.",
            "whereClause": "masterpm=:masterpmnum and overridemasterupd=:no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table, used to list down all the sites that the user has acces to. The resulting set will contain one or more records.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MASTERPM",
            "source": "ITEM",
            "remarks": "Relationship to the MASTERPM table, used to find all Master PM records for a given item. (masterpm.itemnum = item.itemnum and masterpm.itemsetid = item.itemsetid). The resulting set will contain zero or more objects.",
            "whereClause": "itemnum = :itemnum and  itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPM",
            "source": "PLUSCTPMASTERPM",
            "remarks": "relationship to the masterpm table (plusctpmasterpm.masterpmnum = masterpm.masterpmnum",
            "whereClause": "masterpmnum = :masterpmnum",
            "cardinality": null
        },
        {
            "name": "MASTERPM",
            "source": "PM",
            "remarks": "Relationship to the PM's MasterPM records, used to find the MasterPM record for a given PM. (pm.pmnum = pm.masterpm). The resulting set will contain zero or one record.",
            "whereClause": "masterpmnum=:masterpm",
            "cardinality": "UNDEFINED"
        }
    ]
}