mos = {
    "objectName": "PLUSCWODS",
    "className": "psdi.plusc.app.pluscds.PlusCWODSSet",
    "description": "Maximo Plus - WO Data Sheet Header",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCWODSID",
    "primaryKeyColumns": [
        "PLUSCWODSID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCWODS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TAGLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 145",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCWODS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
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
            "objectName": "SITE",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID, WONUM",
            "targetKeys": "SITEID, WONUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "WONUM",
            "required": true,
            "persistent": true,
            "title": "Work Order Number",
            "remarks": "Work Order",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASFOUNDCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "Comments",
            "remarks": "Additional comments for the As Found status. Click Long Description if you need to enter more details.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LDKEY",
            "required": false,
            "persistent": true,
            "title": "Long Description ID",
            "remarks": "Long Description Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "Comments",
            "remarks": "Additional comments for the As Left status. Click Long Description if you need to enter more details.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Id",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Org Id",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ASFOUNDCALSTATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "The As Found status for the associated data sheet.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTCALSTATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "The As Left status for the associated data sheet.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSPLANNUM",
            "required": false,
            "persistent": true,
            "title": "Data Sheet",
            "remarks": "Identifier of the selected data sheet.",
            "sameAsAttribute": "DSPLANNUM",
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
            "attributeName": "DSAL1",
            "required": false,
            "persistent": true,
            "title": "Extra Field 1",
            "remarks": "DSAL1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL2",
            "required": false,
            "persistent": true,
            "title": "Extra Field 2",
            "remarks": "DSAL2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL3",
            "required": false,
            "persistent": true,
            "title": "Extra Field 3",
            "remarks": "DSAL3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL4",
            "required": false,
            "persistent": true,
            "title": "Extra Field 4",
            "remarks": "DSAL4",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL5",
            "required": false,
            "persistent": true,
            "title": "Extra Field 5",
            "remarks": "DSAL5",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL6",
            "required": false,
            "persistent": true,
            "title": "Extra Field 6",
            "remarks": "DSAL6",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL7",
            "required": false,
            "persistent": true,
            "title": "Extra Field 7",
            "remarks": "DSAL7",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL8",
            "required": false,
            "persistent": true,
            "title": "Extra Field 8",
            "remarks": "DSAL8",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL9",
            "required": false,
            "persistent": true,
            "title": "Extra Field 9",
            "remarks": "DSAL9",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DSAL10",
            "required": false,
            "persistent": true,
            "title": "Extra Field 10",
            "remarks": "DSAL10",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOADJMADE",
            "required": true,
            "persistent": true,
            "title": "No Adjustment Made",
            "remarks": "No Adjuste Made",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPERATURE",
            "required": false,
            "persistent": true,
            "title": "Temperature",
            "remarks": "The environmental temperature at the time of calibration. Temperature consists of a numeric value field and a units field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HUMIDITY",
            "required": false,
            "persistent": true,
            "title": "Humidity",
            "remarks": "The environmental humidity at the time of calibration. Humidity consists of a numeric value field and a units field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPERATUREEU",
            "required": false,
            "persistent": true,
            "title": "Temperature Engineering Units",
            "remarks": "The environmental temperature at the time of calibration. Temperature consists of a numeric value field and a units field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HUMIDITYEU",
            "required": false,
            "persistent": true,
            "title": "Humidity Engineering Units",
            "remarks": "The environmental humidity at the time of calibration. Humidity consists of a numeric value field and a units field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BAROPRESSUREEU",
            "required": false,
            "persistent": true,
            "title": "Barometric Pressure Engineering Units",
            "remarks": "Environmental Condition - Barometric Pressure EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BAROPRESSURE",
            "required": false,
            "persistent": true,
            "title": "Baropressure",
            "remarks": "The environmental barometric pressure at the time of calibration. Barometric Pressure consists of a numeric value field and a units field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VIEWASLOOP",
            "required": true,
            "persistent": true,
            "title": "Viewasloop",
            "remarks": "Is a read-only check box that indicates how Maximo displays calibration points for this data sheet. If the check box is cleared, Maximo displays the calibration points for the selected asset function. If the check box is selected, Maximo displays the calibration point for all asset functions on the data sheet.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISADDED",
            "required": true,
            "persistent": true,
            "title": "Isadded",
            "remarks": "Is this added data sheet?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVIEWDATE",
            "required": false,
            "persistent": true,
            "title": "REVIEWDATE",
            "remarks": "Data when the datasheet was reviewed on the workorder",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVIEWER",
            "required": false,
            "persistent": true,
            "title": "REVIEWER",
            "remarks": "The person reviewing the datasheet",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset Number",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "DSPLANNAME",
            "required": false,
            "persistent": true,
            "title": "Data Sheet Name",
            "remarks": "Enter an optional name for the data sheet If you enter an existing data sheet name, then all pertinent information from that data sheet is copied to the work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision Number",
            "remarks": "Revision number of the current datasheet.",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDINGTOWO",
            "required": true,
            "persistent": true,
            "title": "Adding Instr/Point to WO",
            "remarks": "Adding Instr/Point to WO",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CERTIFICATENUM",
            "required": false,
            "persistent": true,
            "title": "Certificate Number",
            "remarks": "Enter the certificate number received when an instrument was calibrated off-site.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Enter or select the location this data sheet is associated with. This is used for loop calibrations.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "SEQUENCE",
            "required": false,
            "persistent": true,
            "title": "Sequence Number",
            "remarks": "Sequence Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": true,
            "title": "Required",
            "remarks": "When selected, all as found and as left data must be entered before the work order can be set to CLOSED or COMPLETE.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WODSNUM",
            "required": false,
            "persistent": true,
            "title": "Workorder data sheet number",
            "remarks": "Sequencial number that identifies a data sheet in a workorder, along with the WONUM, DSPLANNUM and REVISION.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCWODSID",
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
            "attributeName": "ASFOUNDCOMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTCOMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "As Left Comments Long description",
            "remarks": "Long Description for As Left Comments",
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
            "attributeName": "TAGLOCATION",
            "required": false,
            "persistent": true,
            "title": "Tag Location",
            "remarks": "Defines the location number of the associated Tag ID Location record.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "REQUIREDALWAYS",
            "required": true,
            "persistent": true,
            "title": "Always Required",
            "remarks": "Defines if the data sheet is always required on the Work Order, based on the required flag in Job Plan.",
            "sameAsAttribute": "REQUIRED",
            "sameAsObject": "PLUSCJPDATASHEET"
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
            "sameAsAttribute": "GBMETHOD",
            "sameAsObject": "PLUSDSPLAN"
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
            "sameAsObject": "PLUSCWODS"
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
            "sameAsAttribute": "UNCERTFREQ",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "UNCERTUNITS",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "The unit of time of the uncertainty interval. Specify the value from the Select Value menu.  For example, the Certification Interval is 1 and Units is MONTHS.",
            "sameAsAttribute": "UNCERTUNITS",
            "sameAsObject": "PLUSDSPLAN"
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
            "name": "PLUSCDSASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum=:assetnum and orgid=:orgid and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship between Work Order Data Sheets and Locations",
            "whereClause": "location =:location and orgid =:orgid and siteid =:siteid",
            "cardinality": null
        },
        {
            "name": "TAGLOCATION",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Location table, used to find the location associated with the WO datasheet tag location. This resulting set will contain zero or one object.",
            "whereClause": "location = :taglocation and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTR",
            "target": "PLUSCWODSINSTR",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSLOOPDYNAMIC",
            "target": "PLUSCWODSPOINT",
            "remarks": "Loop relationship for the presentation of dynamic checks",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and instrseq in (select instrseq from pluscwodsinstr where wonum=:wonum and siteid=:siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and caldynamic=:yes)",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSLOOPFUNCTION",
            "target": "PLUSCWODSPOINT",
            "remarks": "Loop relationship for the presentation of function checks",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and instrseq in (select instrseq from pluscwodsinstr where wonum=:wonum and siteid=:siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and calfunction=:yes)",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSLOOPPOINTS",
            "target": "PLUSCWODSPOINT",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and instrseq in (select instrseq from pluscwodsinstr where wonum=:wonum and siteid=:siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum and calpoint=:yes)",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSPOINT",
            "target": "PLUSCWODSPOINT",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSDSPLAN",
            "target": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum =:revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSWO",
            "target": "WORKORDER",
            "remarks": "Required workorder for pluscwods",
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCAWODS",
            "source": "ASSET",
            "remarks": "Relationship to the PLUSCWODS table through its related assetnum used on View Calibration History dialog",
            "whereClause": "siteid = :siteid and assetnum = :assetnum",
            "cardinality": null
        },
        {
            "name": "PLUSCLOCATIONWODS",
            "source": "LOCATIONS",
            "remarks": "Relationship to the PLUSCWODS table through its related location used on View Calibration History dialog",
            "whereClause": "siteid = :siteid and location = :location",
            "cardinality": null
        },
        {
            "name": "PLUSCPLUSCWODS",
            "source": "PLUSCWODSINSTR",
            "remarks": "WODS for each WODSINSTR",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODS",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "dsplannum=:dsplannum and revisionnum = :revisionnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODS",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ]
}