mos = {
    "objectName": "PLUSDSPLAN",
    "className": "psdi.plusc.app.pluscds.PlusCDSSet",
    "description": "Data Sheet",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "PLUSDSPLANID",
    "primaryKeyColumns": [
        "DSPLANNUM",
        "REVISIONNUM"
    ],
    "logicalRelationships": [
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSASSETLINK",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSCONFIG",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSINSTR",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSPOINT",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCDSSTATUS",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCTPDATASHEET",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCWODS",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        },
        {
            "objectName": "PLUSDSPLAN",
            "targetObject": "PLUSCWODSPOINT",
            "parentKeys": "DSPLANNUM, REVISIONNUM",
            "targetKeys": "DSPLANNUM, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSDSPLAN",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSDSPLAN",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "PLUSDSPLAN",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PLUSDSPLAN",
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
            "attributeName": "DSPLANNUM",
            "required": true,
            "persistent": true,
            "title": "Data Sheet",
            "remarks": "Data Sheet Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Org Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Last Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "STATUSDATE",
            "required": false,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Data Sheet Status Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Last Change Date",
            "sameAsAttribute": "STATUSDATE",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "DS1",
            "required": false,
            "persistent": true,
            "title": "Extra Field 1",
            "remarks": "DS1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DS2",
            "required": false,
            "persistent": true,
            "title": "Extra Field 2",
            "remarks": "DS2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DS3",
            "required": false,
            "persistent": true,
            "title": "Extra Field 3",
            "remarks": "DS3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DS4",
            "required": false,
            "persistent": true,
            "title": "Extra Field 4",
            "remarks": "DS4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DS5",
            "required": false,
            "persistent": true,
            "title": "Extra Field 5",
            "remarks": "DS5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DS6",
            "required": false,
            "persistent": true,
            "title": "Extra Field 6",
            "remarks": "DS6",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DS7",
            "required": false,
            "persistent": true,
            "title": "Extra Field 7",
            "remarks": "DS7",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DS8",
            "required": false,
            "persistent": true,
            "title": "Extra Field 8",
            "remarks": "DS8",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DS9",
            "required": false,
            "persistent": true,
            "title": "Extra Field 9",
            "remarks": "DS9",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DS10",
            "required": false,
            "persistent": true,
            "title": "Extra Field 10",
            "remarks": "DS10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "The status of a data sheet indicates whether the data sheet is in draft status, approved, inactive, or waiting for approval. To change the status of a data sheet, select Change Status from the Select Action menu. The default status of a data sheet is the draft status when it is created. You can edit the data sheet only when it is in draft status. You can add a data sheet to a work order only when the data sheet is approved.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HISTORYFLAG",
            "required": true,
            "persistent": true,
            "title": "History Flag",
            "remarks": "History Flag",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWASLOOP",
            "required": true,
            "persistent": true,
            "title": "All Points Shown",
            "remarks": "View Point as on loop",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOSITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "NP_STATUSMEMO",
            "required": false,
            "persistent": false,
            "title": "Chnage Status Memo",
            "remarks": "Status Change memo, temporary non-persistent field used by MEA",
            "sameAsAttribute": "MEMO",
            "sameAsObject": "WFTRANSACTION"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the data sheet. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revision Number of the current datasheet",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "Comments",
            "remarks": "Revision Comments of the current datasheet",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSDSPLANID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "REVCOMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Comments Long description",
            "remarks": "Long Description for Comments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONFIDLEVEL",
            "required": false,
            "persistent": true,
            "title": "Confidence Level",
            "remarks": "Indicates the level of confidence in the uncertainty data. Certified calibration standards typically apply a confidence level of 95% to a coverage factor of 2. Specify a value from the Select Value menu.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBMETHOD",
            "required": false,
            "persistent": true,
            "title": "Guardband Method",
            "remarks": "A method that calculates the reliability of the calibration. Enter a value or specify a value from the Select Value menu.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GUARDBAND",
            "required": false,
            "persistent": true,
            "title": "Guardband Factor",
            "remarks": "Safety factors subtracted from or added to the tolerance limits. The safety factor depends on the relative importance of the product failing and costing money to correct.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GUARDBAND_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Factor",
            "remarks": "Safety factors subtracted from or added to the tolerance limits. The safety factor depends on the relative importance of the product failing and costing money to correct.",
            "sameAsAttribute": "GUARDBAND",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "KFACTOR",
            "required": false,
            "persistent": true,
            "title": "k-Factor",
            "remarks": "The uncertainty coverage factor of the asset. The value k is based on the required level of confidence to be associated with the interval level that is defined. Typically, k is in the range 2 - 3.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEMID",
            "required": false,
            "persistent": true,
            "title": "System ID",
            "remarks": "Enter the name of the external measurement system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEMIDDESC",
            "required": false,
            "persistent": true,
            "title": "System Description",
            "remarks": "Enter a description of the external measurement system.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNCERTFREQ",
            "required": false,
            "persistent": true,
            "title": "Certification Interval",
            "remarks": "The frequency of the uncertainty interval. Enter a value and specify the unit. For example, the Certification Interval is 1 and Units is MONTHS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNCERTUNITS",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "The unit of time of the uncertainty interval. Specify the value from the Select Value menu.  For example, the Certification Interval is 1 and Units is MONTHS.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SYSTEMIDDESC_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "System Description Long description",
            "remarks": "Long Description for System Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCDSALASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum in (select assetnum from pluscdsassetlink where dsplannum = :dsplannum) and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "ALLASSETS",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": null,
            "whereClause": "ownertable='PLUSDSPLAN' and ownerid=:plusdsplanid",
            "cardinality": null
        },
        {
            "name": "PLUSCDSALITEM",
            "target": "ITEM",
            "remarks": null,
            "whereClause": "itemnum in (select itemnum from pluscdsassetlink where dsplannum = :dsplannum) and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "PLUSCDSALLOCATION",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "location in (select location from pluscdsassetlink where dsplannum = :dsplannum) and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "ALLLOCATIONS",
            "target": "LOCATIONS",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCDSASSETSLINK",
            "target": "PLUSCDSASSETLINK",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSCHGSTATUS",
            "target": "PLUSCDSCHGSTATUS",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSCONFIG",
            "target": "PLUSCDSCONFIG",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSINSTR",
            "target": "PLUSCDSINSTR",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSLOOPDYNAMIC",
            "target": "PLUSCDSPOINT",
            "remarks": "Loop relationship for the presentation of dynamic checks",
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum and caldynamic = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSLOOPFUNCTION",
            "target": "PLUSCDSPOINT",
            "remarks": "Loop relationship for the presentation of function checks",
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum and calfunction = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSLOOPPOINTS",
            "target": "PLUSCDSPOINT",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum and calpoint = :yes",
            "cardinality": null
        },
        {
            "name": "PLUSCDSPOINT",
            "target": "PLUSCDSPOINT",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum  and siteid= :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCDSREVISIONINPUT",
            "target": "PLUSCDSREVINPUT",
            "remarks": "Relationship to the non-persistent RevisionInput object. (No where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "PLUSCDSSTAHISTORY",
            "target": "PLUSCDSSTATUS",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum= :revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSSTATUS",
            "target": "PLUSCDSSTATUS",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        },
        {
            "name": "PLUSCDSREVISIONHIST",
            "target": "PLUSCDSSTATUS",
            "remarks": "Revision history",
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        },
        {
            "name": "PLUSCJPDATASHEET",
            "target": "PLUSCJPDATASHEET",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODS",
            "target": "PLUSCWODS",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSDSPLAN",
            "target": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        },
        {
            "name": "WFASSIGNMENT",
            "target": "WFASSIGNMENT",
            "remarks": null,
            "whereClause": "ownertable = 'PLUSDSPLAN' and wfassignment.ownerid = :plusdsplanid and assignstatus in (select value from synonymdomain where domainid='WFASGNSTATUS' and maxvalue='ACTIVE')",
            "cardinality": null
        },
        {
            "name": "WFTRANSACTION",
            "target": "WFTRANSACTION",
            "remarks": null,
            "whereClause": "ownertable = 'PLUSDSPLAN' and ownerid = :plusdsplanid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCASSETSLINK",
            "source": "PLUSCDSASSETLINK",
            "remarks": "Relationship to PLUSDSPLAN",
            "whereClause": "dsplannum =:dsplannum",
            "cardinality": null
        },
        {
            "name": "PLUSDSPLAN",
            "source": "PLUSCDSASSETLINK",
            "remarks": "Relationship from plusdsassetlink to pludsplan",
            "whereClause": "dsplannum=:dsplannum and revisionnum in (select revisionnum from plusdsplan where dsplannum=:dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR')) and ((orgid =:orgid and siteid=:siteid) or (orgid is null and siteid is null) or (orgid=:orgid and siteid is null))",
            "cardinality": null
        },
        {
            "name": "PLUSDSPLAN",
            "source": "PLUSCDSINSTR",
            "remarks": "DS for each DSINSTR",
            "whereClause": "dsplannum=:dsplannum and revisionnum=:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCPLUSDSPLAN",
            "source": "PLUSCDSSTATUS",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCJPDATASHEET",
            "source": "PLUSCJPDATASHEET",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum in (select revisionnum from plusdsplan where dsplannum=:dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR')) and ((orgid =:orgid and siteid=:siteid) or (orgid is null and siteid is null) or (orgid=:orgid and siteid is null))",
            "cardinality": null
        },
        {
            "name": "PLUSDSPLAN",
            "source": "PLUSCTPDATASHEET",
            "remarks": "Relationship from PLUSCTPDATASHEET to pludsplan",
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSDSPLAN",
            "source": "PLUSCWODS",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum =:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSDSPLAN",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum",
            "cardinality": null
        }
    ]
}