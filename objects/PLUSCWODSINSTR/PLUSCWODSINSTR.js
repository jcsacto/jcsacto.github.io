mos = {
    "objectName": "PLUSCWODSINSTR",
    "className": "psdi.plusc.app.pluscds.PlusCWODSInstrSet",
    "description": "Maximo Plus - WO Data Sheet - Instrument",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PLUSCWODSINSTRID",
    "primaryKeyColumns": [
        "PLUSCWODSINSTRID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 121",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PLUSCDSINSTR",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "DSPLANNUM, ASSETFUNCTION, REVISIONNUM",
            "targetKeys": "DSPLANNUM, ASSETFUNCTION, REVISIONNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Data Sheet - Instruments",
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
            "objectName": "SITE",
            "targetObject": "PLUSCWODSINSTR",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        },
        {
            "objectName": "WORKORDER",
            "targetObject": "PLUSCWODSINSTR",
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
            "attributeName": "ALLOWPOINTINSERTS",
            "required": true,
            "persistent": true,
            "title": "Allowpointinserts",
            "remarks": "Indicates if the field technician can insert calibration point row(s) to a asset function while performing a calibration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDCALSTATUS",
            "required": false,
            "persistent": true,
            "title": "As Found  Calibration  Status",
            "remarks": "As Found Calibration Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "As Found Comments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTCALSTATUS",
            "required": false,
            "persistent": true,
            "title": "As Left  Calibration  Status",
            "remarks": "As Left Calibration Status",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTCOMMENTS",
            "required": false,
            "persistent": true,
            "title": "As Left comments",
            "remarks": "As Left Comments",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSETFUNCTION",
            "required": false,
            "persistent": true,
            "title": "Function",
            "remarks": "Asset Function Number",
            "sameAsAttribute": "ASSETFUNCTION",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "BAROPRESSURE",
            "required": false,
            "persistent": true,
            "title": "Baropressure",
            "remarks": "Environmental Conditon - Barometric Pressure",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BAROPRESSUREEU",
            "required": false,
            "persistent": true,
            "title": "Baropressure Engineering Units",
            "remarks": "Environmental Conditon - Barometric Pressure EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLIPLIMITS",
            "required": true,
            "persistent": true,
            "title": "Cliplimits",
            "remarks": "This check box indicates if range on nominal and tolerance upper and lower limit values for analog functions are clipped (limited) to the lower and upper input and output calibrated range of the asset function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the asset function for this data sheet.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "DSPLANNUM",
            "required": false,
            "persistent": true,
            "title": "Data Sheet",
            "remarks": "Data Sheet",
            "sameAsAttribute": "DSPLANNUM",
            "sameAsObject": "PLUSDSPLAN"
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
            "attributeName": "HUMIDITY",
            "required": false,
            "persistent": true,
            "title": "Humidity",
            "remarks": "Environmental Conditon - Humidity",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HUMIDITYEU",
            "required": false,
            "persistent": true,
            "title": "Humidity Engineering Units",
            "remarks": "Environmental Conditon - Humidity EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INPUTPRECISION",
            "required": false,
            "persistent": true,
            "title": "Input Precision",
            "remarks": "Indicates the minimum number of decimal places required for a numeric field value. Calculations performed in Maximo for input and output functions will be performed to the specified resolution. Note: Minimum field resolution is not applied to all fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRCALRANGEEU",
            "required": false,
            "persistent": true,
            "title": "Asset Function  Calibration  Range  Engineering Units",
            "remarks": "The units used to express the value of the input range. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRCALRANGEFROM",
            "required": false,
            "persistent": true,
            "title": "Asset Function  Calibration  Range From",
            "remarks": "The minimum specified input value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRCALRANGETO",
            "required": false,
            "persistent": true,
            "title": "Asset Function  Calibration  Range To",
            "remarks": "The maximum specified input value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTROUTRANGEEU",
            "required": false,
            "persistent": true,
            "title": "Asset Function Output Range  Engineering Units",
            "remarks": "The units used to express the value of the output range. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTROUTRANGEFROM",
            "required": false,
            "persistent": true,
            "title": "Asset Function Output Range From",
            "remarks": "The minimum specified output value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTROUTRANGETO",
            "required": false,
            "persistent": true,
            "title": "Asset Function Output Range To",
            "remarks": "The maximum specified output value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRSEQ",
            "required": false,
            "persistent": true,
            "title": "Asset Function seq",
            "remarks": "The user entered reference number for the asset function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LDKEY",
            "required": false,
            "persistent": true,
            "title": "Long Description Key",
            "remarks": "Long Description Key",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NEXTDATE",
            "required": false,
            "persistent": true,
            "title": "Next Date",
            "remarks": "Assets Next Due Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOADJMADE",
            "required": true,
            "persistent": true,
            "title": "No Adjustment Made",
            "remarks": "No Adjust Made",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NOADJMADECHOICE",
            "required": false,
            "persistent": true,
            "title": "No Adjustment Made Choice",
            "remarks": "The No Adjustment Made Option saves the technician time. When you create a data sheet, you can specify that Maximo use one tolerance (Tolerance 1, Tolerance 2, Tolerance 3, or Tolerance 4) for the No Adjustment Made option. If all As-Found values are within the acceptable user-specified tolerance, the technician can check the No Adjustment Made check box on the work order data sheet. When the technician selects the No Adjustment Made check box, Maximo copies the As Found values  to the As Left fields on the work order data sheet and both fields become read-only.",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "OUTPUTPRECISION",
            "required": false,
            "persistent": true,
            "title": "Output Precision",
            "remarks": "Indicates the minimum number of decimal places required for a numeric field value. Calculations performed in Maximo for input and output functions will be performed to the specified resolution. Note: Minimum field resolution is not applied to all fields.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLANTYPE",
            "required": true,
            "persistent": true,
            "title": "Plan Type",
            "remarks": "Indicates if the asset function type is ANALOG or DISCRETE. Dependent upon the asset function type being ANALOG or DISCRETE, the appropriate fields in the Asset Functions table window are either enabled or disabled for the type of asset specified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSEU",
            "required": false,
            "persistent": true,
            "title": "Process Engineering Units",
            "remarks": "Defines the engineering units used for reporting calibration error. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSEUFACTOR",
            "required": false,
            "persistent": true,
            "title": "Process Engineering Unitsfactor",
            "remarks": "Defines the conversion factor from output engineering units to user specified units.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Range On Nominal 1 Lower value",
            "remarks": "The minimum specified nominal value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1TYPE",
            "required": false,
            "persistent": true,
            "title": "Range On Nominal 1 Type",
            "remarks": "Indicates the range on nominal's tolerance type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RON1UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Range On Nominal 1 Upper Value",
            "remarks": "The maximum specified nominal value for the asset being calibrated.",
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
            "attributeName": "SQUAREROOT",
            "required": true,
            "persistent": true,
            "title": "Square Root of Input",
            "remarks": "When selected, analog asset functions that measure differential pressure are calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPERATURE",
            "required": false,
            "persistent": true,
            "title": "Temperature",
            "remarks": "Environmental Conditon - Temperature",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TEMPERATUREEU",
            "required": false,
            "persistent": true,
            "title": "Temperature Engineering Units",
            "remarks": "Environmental Conditon - Temperature EU",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Lower Value",
            "remarks": "The minimum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1NOADJLIMIT",
            "required": true,
            "persistent": true,
            "title": "Tolerance 1 No Adjustment Limit",
            "remarks": "A check box that designates which tolerance level that if not exceeded will enable the 'No Adjustment Made' option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1STATUS",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Status",
            "remarks": "Indicates the user specified calibration status when a tolerance is exceeded.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed Direction",
            "remarks": "Indicates how you want to apply the summed tolerance range on either side of the specified value. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMEU",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed  Engineering Units",
            "remarks": "The acceptable value or range of values expressed in engineering units for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMREAD",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed Reading",
            "remarks": "The acceptable value or range of values expressed in percentage of the actual reading for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMSPAN",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed Span",
            "remarks": "The acceptable value or range of values expressed in percentage of input span for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1SUMURV",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Summed Upper Range Value",
            "remarks": "The acceptable value or range of values expressed in percentage of the instrument's upper range value for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1TYPE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Type",
            "remarks": "Indicates the tolerance's tolerance type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 1 Upper Value",
            "remarks": "The maximum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Lower Value",
            "remarks": "The minimum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2NOADJLIMIT",
            "required": true,
            "persistent": true,
            "title": "Tolerance 2 No Adjustment Limit",
            "remarks": "A check box that designates which tolerance level that if not exceeded will enable the 'No Adjustment Made' option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2STATUS",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Status",
            "remarks": "Indicates the user specified calibration status when a tolerance is exceeded.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed Direction",
            "remarks": "Indicates how you want to apply the summed tolerance range on either side of the specified value. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMEU",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed  Engineering Units",
            "remarks": "The acceptable value or range of values expressed in engineering units for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMREAD",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed Reading",
            "remarks": "The acceptable value or range of values expressed in percentage of the actual reading for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMSPAN",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed Span",
            "remarks": "The acceptable value or range of values expressed in percentage of input span for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2SUMURV",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Summed Upper Range Value",
            "remarks": "The acceptable value or range of values expressed in percentage of the instrument's upper range value for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2TYPE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Type",
            "remarks": "Indicates the tolerance's tolerance type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 2 Upper Value",
            "remarks": "The maximum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Lower Value",
            "remarks": "The minimum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3NOADJLIMIT",
            "required": true,
            "persistent": true,
            "title": "Tolerance 3 No Adjustment Limit",
            "remarks": "A check box that designates which tolerance level that if not exceeded will enable the 'No Adjustment Made' option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3STATUS",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Status",
            "remarks": "Indicates the user specified calibration status when a tolerance is exceeded.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Summed Direction",
            "remarks": "Indicates how you want to apply the summed tolerance range on either side of the specified value. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMEU",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Summed  Engineering Units",
            "remarks": "The acceptable value or range of values expressed in engineering units for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMREAD",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Summed Reading",
            "remarks": "The acceptable value or range of values expressed in percentage of the actual reading for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMSPAN",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Summed Span",
            "remarks": "The acceptable value or range of values expressed in percentage of input span for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3SUMURV",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Summed Upper Range Value",
            "remarks": "The acceptable value or range of values expressed in percentage of the instrument's upper range value for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3TYPE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Type",
            "remarks": "Indicates the tolerance's tolerance type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 3 Upper Value",
            "remarks": "The maximum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4LOWERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Lower Value",
            "remarks": "The minimum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4NOADJLIMIT",
            "required": true,
            "persistent": true,
            "title": "Tolerance 4 No Adjustment Limit",
            "remarks": "A check box that designates which tolerance level that if not exceeded will enable the 'No Adjustment Made' option.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4STATUS",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Status",
            "remarks": "Indicates the user specified calibration status when a tolerance is exceeded.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMDIRECTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed Direction",
            "remarks": "Indicates how you want to apply the summed tolerance range on either side of the specified value. Click Select Value to select a value from the list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMEU",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed  Engineering Units",
            "remarks": "The acceptable value or range of values expressed in engineering units for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMREAD",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed Reading",
            "remarks": "The acceptable value or range of values expressed in percentage of the actual reading for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMSPAN",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed Span",
            "remarks": "The acceptable value or range of values expressed in percentage of input span for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4SUMURV",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Summed Upper Range Value",
            "remarks": "The acceptable value or range of values expressed in percentage of the instrument's upper range value for the specified output value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4TYPE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Type",
            "remarks": "Indicates the tolerance's tolerance type.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4UPPERVALUE",
            "required": false,
            "persistent": true,
            "title": "Tolerance 4 Upper Value",
            "remarks": "The maximum specified tolerance value for the asset being calibrated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": true,
            "title": "Work Order Number",
            "remarks": "Work Oorder",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "INPUTRANGE",
            "required": true,
            "persistent": true,
            "title": "Tolerance on Input Range Checkbox",
            "remarks": "When selected, (default) indicates that the tolerance calculations are based on the input range. When cleared, the tolerance calculations are based on the output range.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OUTPUTRANGE",
            "required": true,
            "persistent": true,
            "title": "Tolerance on Output",
            "remarks": "When selected, indicates that the tolerance calculations are based on the output range. When cleared (default), the tolerance calculations are based on the input range.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL1DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance Level 1 Description",
            "remarks": "Enter a description or comment about the Tolerance 1 range limit sets.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL2DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance Level 2 Description",
            "remarks": "Enter a description or comment about the Tolerance 2 range limit sets.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL3DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance Level 3 Description",
            "remarks": "Enter a description or comment about the Tolerance 3 range limit sets.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOL4DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Tolerance Level 4 Description",
            "remarks": "Enter a description or comment about the Tolerance 4 range limit sets.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTRCALRANGEFROM_NP",
            "required": false,
            "persistent": false,
            "title": "Input Range From",
            "remarks": "The lower range of the nominal input value of the asset. This value is required for analog asset functions. For example, a pressure transmitter that is calibrated to measure 100 – 300 psi. The Input Range From is 100.",
            "sameAsAttribute": "INSTRCALRANGEFROM",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "INSTRCALRANGETO_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the nominal input value of the asset. This field is a required field for analog asset functions.  For example, a pressure transmitter that is calibrated to measure 100 – 300 psi. The input range To is 300.",
            "sameAsAttribute": "INSTRCALRANGETO",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "RON1LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Range Limit From",
            "remarks": "The lower range limit of an asset. The input values of an asset added to a work order data sheet must be within a specified range. The value must be less than or equal to 0. For example, if a range limit is -3 to 3 EU, then the input of 100 psi from a pressure transmitter accepts values 97 – 103.",
            "sameAsAttribute": "RON1LOWERVALUE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "RON1UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range limit of an asset. The input values of an asset added to a work order data sheet must be within a specified range. The value must be greater than or equal to 0. For example, if a range limit is -3 to 3 EU, then the input of 100 psi from a pressure transmitter accepts values 97 – 103.",
            "sameAsAttribute": "RON1UPPERVALUE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "INSTROUTRANGEFROM_NP",
            "required": false,
            "persistent": false,
            "title": "Output Range From",
            "remarks": "The lower range of the output value of the asset. This value is required for analog asset functions.  For example, a pressure transmitter that is calibrated to generate an output of 4-20 milliamps (mA) for an input range of 100 – 300 psi. The Output Range From is 4.",
            "sameAsAttribute": "INSTROUTRANGEFROM",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "INSTROUTRANGETO_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the output value of the asset. This value is required for analog asset functions.  For example, a pressure transmitter that is calibrated to generate an output of 4-20 milliamps (mA) for an input range of  100 – 300 psi. The output range To is 20.",
            "sameAsAttribute": "INSTROUTRANGETO",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL1LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Single from",
            "remarks": "The lower range of the input value that determines the tolerance limit. The value must be less than or equal to 0.  If you specify a single tolerance limit, the Summed EU, %Span, %URV, and %Reading fields are read-only.",
            "sameAsAttribute": "TOL1LOWERVALUE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL1UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the tolerance limit. The value must be greater than or equal to 0. If you specify a single tolerance limit, the Summed EU, %Span, %URV, and %Reading fields are read-only.",
            "sameAsAttribute": "TOL1UPPERVALUE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL1SUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Summed EU +",
            "remarks": "An engineering unit is a specific calibration formula that calculates tolerance limits. Summed EU is a combination of  EU, %Span, %URV, and %Reading to determine the tolerance level.",
            "sameAsAttribute": "TOL1SUMEU",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL1SUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%Span +",
            "remarks": "The %Span is a specific calibration formula that calculates tolerance limits. ",
            "sameAsAttribute": "TOL1SUMSPAN",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL1SUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV +",
            "remarks": "The %URV is a specific calibration formula that calculates tolerance limits.",
            "sameAsAttribute": "TOL1SUMURV",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL1SUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "%Reading",
            "remarks": "The %Reading is a specific calibration formula that calculates tolerance limits.",
            "sameAsAttribute": "TOL1SUMREAD",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL2LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Single From",
            "remarks": "tol2lowervalue",
            "sameAsAttribute": "TOL2LOWERVALUE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL2UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "tol2uppervalue",
            "sameAsAttribute": "TOL2UPPERVALUE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL2SUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Summed EU +",
            "remarks": "tol2SumEU",
            "sameAsAttribute": "TOL2SUMEU",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL2SUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%Span +",
            "remarks": "tol2SumSpan",
            "sameAsAttribute": "TOL2SUMSPAN",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL2SUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV +",
            "remarks": "tol2SumURV",
            "sameAsAttribute": "TOL2SUMURV",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL2SUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "%Reading",
            "remarks": "tol2SumRead",
            "sameAsAttribute": "TOL2SUMREAD",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL3LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Single From",
            "remarks": "tol3lowervalue",
            "sameAsAttribute": "TOL3LOWERVALUE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL3UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "tol3uppervalueT",
            "sameAsAttribute": "TOL3UPPERVALUE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL3SUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Summed EU +",
            "remarks": "tol3SumEU",
            "sameAsAttribute": "TOL3SUMEU",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL3SUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%Span +",
            "remarks": "tol3SumSpan",
            "sameAsAttribute": "TOL3SUMSPAN",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL3SUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV +",
            "remarks": "tol3SumURV",
            "sameAsAttribute": "TOL3SUMURV",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL3SUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "%Reading",
            "remarks": "tol3SumRead",
            "sameAsAttribute": "TOL3SUMREAD",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL4LOWERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "Single From",
            "remarks": "tol4lowervalue",
            "sameAsAttribute": "TOL4LOWERVALUE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL4SUMEU_NP",
            "required": false,
            "persistent": false,
            "title": "Summed EU +",
            "remarks": "tol4SumEU",
            "sameAsAttribute": "TOL4SUMEU",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL4SUMSPAN_NP",
            "required": false,
            "persistent": false,
            "title": "%Span +",
            "remarks": "tol4SumSpan",
            "sameAsAttribute": "TOL4SUMSPAN",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL4SUMURV_NP",
            "required": false,
            "persistent": false,
            "title": "%URV +",
            "remarks": "tol4SumURV",
            "sameAsAttribute": "TOL4SUMURV",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "TOL4SUMREAD_NP",
            "required": false,
            "persistent": false,
            "title": "%Reading",
            "remarks": "tol4SumRead",
            "sameAsAttribute": "TOL4SUMREAD",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "TOL4UPPERVALUE_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "TOL4LOWERVALUE",
            "sameAsAttribute": "TOL4LOWERVALUE",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "NOADJMADECHOICE1",
            "required": true,
            "persistent": true,
            "title": "No Adjust Made",
            "remarks": "No Adjust Made",
            "sameAsAttribute": "NOADJMADECHOICE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "NOADJMADECHOICE2",
            "required": true,
            "persistent": true,
            "title": "No Adjust Made",
            "remarks": "No adj made tolerance 3",
            "sameAsAttribute": "NOADJMADECHOICE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "NOADJMADECHOICE3",
            "required": true,
            "persistent": true,
            "title": "No Adjust Made",
            "remarks": "No adj made tolerance 3",
            "sameAsAttribute": "NOADJMADECHOICE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "NOADJMADECHOICE4",
            "required": true,
            "persistent": true,
            "title": "No Adjust Made",
            "remarks": "No adj made tolerance 4",
            "sameAsAttribute": "NOADJMADECHOICE",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": true,
            "title": "Revision",
            "remarks": "Revisionnum",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "PLUSDSPLAN"
        },
        {
            "attributeName": "PROCESSEUFACTOR_NP",
            "required": false,
            "persistent": false,
            "title": "Scaling factor",
            "remarks": "The conversion factor from output engineering units to units you specify. For example, an I/P converter represents a temperature signal (current and pneumatic pressure). You want to show the error in temperature engineering units (Celsius or Fahrenheit).",
            "sameAsAttribute": "PROCESSEUFACTOR",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "CALPOINT",
            "required": true,
            "persistent": true,
            "title": "Calibration Point",
            "remarks": "When selected, indicates that this asset function has calibration points. The Function Check, Dynamic Check, and Calibration Points fields are mutually exclusive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALFUNCTION",
            "required": true,
            "persistent": true,
            "title": "Function Checks",
            "remarks": "An additional informational check point that is required to calibrate an instrument. The options are either pass or fail. When selected, the asset function is for a functional check. The Function Check, Dynamic Check, and Calibration Points fields are mutually exclusive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALDYNAMIC",
            "required": true,
            "persistent": true,
            "title": "Dynamic Checks",
            "remarks": "Additional informational data of the instrument being calibrated. A dynamic check point does not affect the calibration of an instrument. When selected, the asset function is for a dynamic check. The Function Check, Dynamic Check, and Calibration Points fields are mutually exclusive.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NONLINEAR",
            "required": true,
            "persistent": true,
            "title": "Non-Linear",
            "remarks": "When selected, indicates that the formula calculation used is for non-linear instruments.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPEATABLE",
            "required": true,
            "persistent": true,
            "title": "Repeatable",
            "remarks": "When selected, indicates that the calibration point is repeatable on the work order data sheet. The number of times the calibration point is repeated is set by the Repeat Value field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANUAL",
            "required": true,
            "persistent": true,
            "title": "Manual",
            "remarks": "When selected, indiates that this asset function has manual calibration points. You can then enter values in the Input and Output fields. Tolerance limits are already configured and are absolute.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SQUARED",
            "required": true,
            "persistent": true,
            "title": "Reverse Flow",
            "remarks": "When selected, the formula calculation used to determine the tolerance limits is squared.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLIPLIMITSIN",
            "required": true,
            "persistent": true,
            "title": "Input Limits Clipped",
            "remarks": "Indicates if the input range is limited to the defined (e.g. Input From/To) lower and upper input values of the asset function. The lower and upper input values are the values in the Input range From field and To field.For Example, the lower and upper input values are 100.000 to 300.000.If the nominal input value is less than 100.000 or greater than 300.000 then an error message is displayed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASFOUNDERROR",
            "required": true,
            "persistent": true,
            "title": "As Found Errors",
            "remarks": "When any As Found Calibration Points exceed their status, or a Function Check has failed, the points are summed and displayed in this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASLEFTERROR",
            "required": true,
            "persistent": true,
            "title": "As Left Errors",
            "remarks": "When any As Left Calibration Points exceed their status, or a Function Check has failed, the points are summed and displayed in this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "WODSNUM",
            "required": false,
            "persistent": true,
            "title": "Workorder data sheet number",
            "remarks": "Sequencial number that identifies a data sheet in a workorder, along with the WONUM, DSPLANNUM and REVISION.",
            "sameAsAttribute": "WODSNUM",
            "sameAsObject": "PLUSCWODS"
        },
        {
            "attributeName": "PLUSCWODSINSTRID",
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
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "ASLEFTCOMMENTS_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "As Left comments Long description",
            "remarks": "Long Description for As Left comments",
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
            "attributeName": "CALIBFUNCTION",
            "required": false,
            "persistent": true,
            "title": "Calibration Function",
            "remarks": "An equation used to define the true value based on the measured value.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALIBFUNCTIONTIME",
            "required": false,
            "persistent": true,
            "title": "Function Uncertainty",
            "remarks": "Time of Test related to the Calibration Function.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMSTDUNCERT",
            "required": false,
            "persistent": true,
            "title": "Combined Std Uncertainty",
            "remarks": "The estimated standard deviation of the result.",
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
            "attributeName": "GBFROM1",
            "required": false,
            "persistent": true,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBFROM1_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBFROM1",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "GBFROM2",
            "required": false,
            "persistent": true,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBFROM2_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBFROM2",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "GBFROM3",
            "required": false,
            "persistent": true,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBFROM3_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBFROM3",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "GBFROM4",
            "required": false,
            "persistent": true,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBFROM4_NP",
            "required": false,
            "persistent": false,
            "title": "Guardband Tolerance From",
            "remarks": "The lower range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBFROM4",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "GBMETHOD",
            "required": false,
            "persistent": true,
            "title": "Guardband Method",
            "remarks": "A method that calculates the reliability of the calibration. Enter a value or specify a value from the Select Value menu.",
            "sameAsAttribute": "GBMETHOD",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBSUMDIRECTION1",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "The polarity of the guardband tolerances.  The values are + and -.",
            "sameAsAttribute": "GBSUMDIRECTION1",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBSUMDIRECTION2",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "The polarity of the guardband tolerances.  The values are + and -.",
            "sameAsAttribute": "GBSUMDIRECTION2",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBSUMDIRECTION3",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "The polarity of the guardband tolerances.  The values are + and -.",
            "sameAsAttribute": "GBSUMDIRECTION3",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBSUMDIRECTION4",
            "required": false,
            "persistent": true,
            "title": "Applied As",
            "remarks": "The polarity of the guardband tolerances.  The values are + and -.",
            "sameAsAttribute": "GBSUMDIRECTION4",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "GBTO1",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBTO1_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBTO1",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "GBTO2",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBTO2_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBTO2",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "GBTO3",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBTO3_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBTO3",
            "sameAsObject": "PLUSCWODSINSTR"
        },
        {
            "attributeName": "GBTO4",
            "required": false,
            "persistent": true,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GBTO4_NP",
            "required": false,
            "persistent": false,
            "title": "To",
            "remarks": "The upper range of the input value that determines the guardband tolerance limit. The guardband tolerance values are added to or subtracted from the Single or Summed tolerance values and used to determine the tolerance levels.",
            "sameAsAttribute": "GBTO4",
            "sameAsObject": "PLUSCWODSINSTR"
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
            "sameAsObject": "PLUSCWODSINSTR"
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
            "attributeName": "TUR",
            "required": false,
            "persistent": true,
            "title": "TUR",
            "remarks": "Test Uncertainty Ratio is the comparison between the accuracy of the Unit Under Test (UUT) and the estimated calibration uncertainty. For example 1:1, 4:1, 10:1",
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
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "UNCERTUNITS",
            "required": false,
            "persistent": true,
            "title": "Units",
            "remarks": "The unit of time of the uncertainty interval. Specify the value from the Select Value menu.  For example, the Certification Interval is 1 and Units is MONTHS.",
            "sameAsAttribute": "UNCERTUNITS",
            "sameAsObject": "PLUSCDSINSTR"
        },
        {
            "attributeName": "CALIBFUNCTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Calibration Function Long description",
            "remarks": "Long Description for Calibration Function",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "PLUSCDSINSTRASSET",
            "target": "ASSET",
            "remarks": null,
            "whereClause": "assetnum = :assetnum",
            "cardinality": null
        },
        {
            "name": "PLUSCPLUSCWODS",
            "target": "PLUSCWODS",
            "remarks": "WODS for each WODSINSTR",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTRALLPOINT",
            "target": "PLUSCWODSPOINT",
            "remarks": "All points (either cal points, function checks or dynamic checks) related to an asset function. Used by the Mobile app for downloading.",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTRDYNAMIC",
            "target": "PLUSCWODSPOINT",
            "remarks": "Relationship for the presentation of dynamic checks",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and wodsnum=:wodsnum and :yes=:caldynamic",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTRFUNCTION",
            "target": "PLUSCWODSPOINT",
            "remarks": "Relationship for the presentation of function checks",
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and wodsnum=:wodsnum and :yes=:calfunction",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTRPOINTS",
            "target": "PLUSCWODSPOINT",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq and revisionnum = :revisionnum and wodsnum=:wodsnum and :yes=:calpoint",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "PLUSCWODSINSTR",
            "source": "PLUSCWODS",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSPOINTSINSTR",
            "source": "PLUSCWODSPOINT",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid and dsplannum=:dsplannum and instrseq=:instrseq  and revisionnum = :revisionnum and wodsnum=:wodsnum",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSINSTR",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "wonum = :wonum and siteid = :siteid",
            "cardinality": null
        }
    ]
}